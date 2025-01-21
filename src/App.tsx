import { useState, useEffect, useMemo } from 'react';
import { FlashCard } from './components/FlashCard';
import { ScoreDisplay } from './components/ScoreDisplay';
import { StartScreen } from './components/StartScreen';
import { UserNameInput } from './components/UserNameInput';
import { Footer } from './components/Footer';
import { templateQuestions, secondQuizQuestions, QUIZ_CONFIG, SECOND_QUIZ_CONFIG } from './data/templateQuiz';
import { shuffleArray, getRandomOptions } from './lib/utils';
import type { QuizStats, QuestionData, HighScoreEntry } from './types';
import { Book } from 'lucide-react';

type GameState = 'start' | 'playing' | 'entering-name';

const INITIAL_QUIZ_STATS: QuizStats = {
  highScore: 0,
  bestRun: null,
  highScores: []
};

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState<'quiz1' | 'quiz2' | null>(null);
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [randomizedQuestions, setRandomizedQuestions] = useState<QuestionData[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [lastPauseTime, setLastPauseTime] = useState<number | null>(null);
  const [accumulatedTime, setAccumulatedTime] = useState(0);

  const currentQuizConfig = selectedQuiz === 'quiz2' ? SECOND_QUIZ_CONFIG : QUIZ_CONFIG;
  const currentQuestions = selectedQuiz === 'quiz2' ? secondQuizQuestions : templateQuestions;
  const totalQuizQuestions = currentQuestions.length; // Store total questions count

  // Get all unique possible answers for the quiz
  const allPossibleAnswers = useMemo(() => 
    Array.from(new Set(currentQuestions.map(q => q.correctAnswer))),
    [currentQuestions]
  );

  // Load initial stats from localStorage
  useEffect(() => {
    if (selectedQuiz) {
      const statsKey = `quiz_stats_${currentQuizConfig.quiz_name}`;
      const storedStats = localStorage.getItem(statsKey);
      if (!storedStats) {
        localStorage.setItem(statsKey, JSON.stringify(INITIAL_QUIZ_STATS));
      }
    }
  }, [selectedQuiz, currentQuizConfig.quiz_name]);

  // Timer effect with pause functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (gameState === 'playing' && startTime && !isPaused) {
      intervalId = setInterval(() => {
        const elapsed = Date.now() - startTime - accumulatedTime;
        setCurrentTime(elapsed);
      }, 10);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [gameState, startTime, isPaused, accumulatedTime]);

  const getCurrentStats = (): QuizStats => {
    const statsKey = `quiz_stats_${currentQuizConfig.quiz_name}`;
    const storedStats = localStorage.getItem(statsKey);
    if (storedStats) {
      return JSON.parse(storedStats);
    }
    return INITIAL_QUIZ_STATS;
  };

  const pauseTimer = () => {
    if (!isPaused) {
      setIsPaused(true);
      setLastPauseTime(Date.now());
    }
  };

  const resumeTimer = () => {
    if (isPaused && lastPauseTime) {
      const pauseDuration = Date.now() - lastPauseTime;
      setAccumulatedTime(prev => prev + pauseDuration);
      setIsPaused(false);
      setLastPauseTime(null);
    }
  };

  const handleQuizSelect = (quiz: 'quiz1' | 'quiz2') => {
    setSelectedQuiz(quiz);
    handleStart();
  };

  const updateStats = (userName: string) => {
    const statsKey = `quiz_stats_${currentQuizConfig.quiz_name}`;
    const currentStats = getCurrentStats();
    const accuracy = Math.round((correctAnswers / totalAnswers) * 100);

    const newHighScore = Math.max(currentStats.highScore, correctAnswers);

    const shouldUpdateBestRun = !currentStats.bestRun || 
      (correctAnswers >= currentStats.bestRun.score && currentTime < currentStats.bestRun.time);

    const newBestRun = shouldUpdateBestRun ? {
      userName,
      time: currentTime,
      score: correctAnswers,
      accuracy
    } : currentStats.bestRun;

    const newScore: HighScoreEntry = {
      userName,
      score: correctAnswers,
      accuracy,
      time: currentTime,
      date: new Date().toISOString()
    };

    const newHighScores = [...currentStats.highScores, newScore]
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.time - b.time;
      })
      .slice(0, 5);

    const newStats = {
      highScore: newHighScore,
      bestRun: newBestRun,
      highScores: newHighScores
    };

    try {
      localStorage.setItem(statsKey, JSON.stringify(newStats));
      console.log('Successfully saved local stats:', newStats);
    } catch (error) {
      console.error('Error saving stats to localStorage:', error);
    }
  };

  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setTotalAnswers(0);
    setCurrentTime(0);
    setStartTime(Date.now());
    setIsPaused(false);
    setLastPauseTime(null);
    setAccumulatedTime(0);
    
    // Ensure we use all questions from the selected quiz
    const questionsForQuiz = selectedQuiz === 'quiz2' ? secondQuizQuestions : templateQuestions;
    const allShuffledQuestions = shuffleArray([...questionsForQuiz]);
    setRandomizedQuestions(allShuffledQuestions);
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) setCorrectAnswers(prev => prev + 1);
    setTotalAnswers(prev => prev + 1);
    pauseTimer();
  };

  const handleNext = () => {
    resumeTimer();
    if (currentQuestionIndex < randomizedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('entering-name');
    }
  };

  const handleRestart = () => {
    setGameState('start');
    setSelectedQuiz(null);
  };

  const handleUserNameSubmit = (userName: string) => {
    console.log('Handling username submit:', userName);
    try {
      updateStats(userName);
      setGameState('start');
      setSelectedQuiz(null);
    } catch (error) {
      console.error('Error in handleUserNameSubmit:', error);
    }
  };

  const getCurrentQuestion = () => {
    return randomizedQuestions[currentQuestionIndex];
  };

  const options = useMemo(() => {
    if (!randomizedQuestions.length) return [];
    
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) return [];
    
    return getRandomOptions(allPossibleAnswers, currentQuestion.correctAnswer, 4);
  }, [currentQuestionIndex, randomizedQuestions, allPossibleAnswers]);

  const handleResetScores = (quizName: string) => {
    // Reset scores for the specific quiz
    const statsKey = `quiz_stats_${quizName}`;
    localStorage.setItem(statsKey, JSON.stringify(INITIAL_QUIZ_STATS));
    
    // Refresh the page to ensure all states are reset
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 py-8 px-4">
        <div className="container mx-auto flex flex-col items-center gap-8">
          {gameState === 'start' ? (
            <StartScreen 
              onQuizSelect={handleQuizSelect}
              quiz1Stats={JSON.parse(localStorage.getItem(`quiz_stats_${QUIZ_CONFIG.quiz_name}`) || JSON.stringify(INITIAL_QUIZ_STATS))}
              quiz2Stats={JSON.parse(localStorage.getItem(`quiz_stats_${SECOND_QUIZ_CONFIG.quiz_name}`) || JSON.stringify(INITIAL_QUIZ_STATS))}
              onResetScores={handleResetScores}
              quiz1Config={QUIZ_CONFIG}
              quiz2Config={SECOND_QUIZ_CONFIG}
            />
          ) : (
            <>
              {/* Quiz Title Header */}
              <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-4 mb-2">
                <div className="flex items-center justify-center gap-3">
                  <Book className={`text-${currentQuizConfig.themeColor}-600`} size={24} />
                  <h1 className={`text-2xl font-bold text-${currentQuizConfig.themeColor}-600`}>
                    {currentQuizConfig.title}
                  </h1>
                </div>
              </div>

              {gameState === 'playing' ? (
                <div className="flex flex-col items-center gap-6">
                  <ScoreDisplay 
                    correct={correctAnswers} 
                    total={totalAnswers} 
                    highScore={getCurrentStats().highScore}
                    onRestart={handleRestart}
                    isFinished={false}
                    totalQuestions={totalQuizQuestions}
                    currentTime={currentTime}
                    bestRun={getCurrentStats().bestRun}
                    quizConfig={currentQuizConfig}
                  />
                  <FlashCard
                    question={getCurrentQuestion()}
                    options={options}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={totalQuizQuestions}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6">
                  <ScoreDisplay 
                    correct={correctAnswers} 
                    total={totalAnswers} 
                    highScore={getCurrentStats().highScore}
                    onRestart={handleRestart}
                    isFinished={true}
                    totalQuestions={totalQuizQuestions}
                    currentTime={currentTime}
                    bestRun={getCurrentStats().bestRun}
                    quizConfig={currentQuizConfig}
                  />
                  <UserNameInput 
                    onSubmit={handleUserNameSubmit}
                    currentScore={correctAnswers}
                    currentTime={currentTime}
                    highScores={getCurrentStats().highScores}
                    quizConfig={currentQuizConfig}
                    totalQuestions={totalQuizQuestions}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
