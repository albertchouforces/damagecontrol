import { useState } from 'react';
import { Globe2, ImageOff, Shield, Play } from 'lucide-react';
import { QuizStats, QuizConfig } from '../types';
import { HighScoresList } from './HighScoresList';
import { GlobalLeaderboard } from './GlobalLeaderboard';
import { ENABLE_GLOBAL_LEADERBOARD } from '../config/features';

interface StartScreenProps {
  onQuizSelect: (quiz: 'quiz1' | 'quiz2') => void;
  quiz1Stats: QuizStats;
  quiz2Stats: QuizStats;
  onResetScores: (quizName: string) => void;
  quiz1Config: QuizConfig;
  quiz2Config: QuizConfig;
}

export function StartScreen({ 
  onQuizSelect,
  quiz1Stats,
  quiz2Stats,
  onResetScores,
  quiz1Config,
  quiz2Config
}: StartScreenProps) {
  const [showGlobalLeaderboard, setShowGlobalLeaderboard] = useState(false);
  const [quiz1ImageError, setQuiz1ImageError] = useState(false);
  const [quiz1ImageLoaded, setQuiz1ImageLoaded] = useState(false);
  const [quiz2ImageError, setQuiz2ImageError] = useState(false);
  const [quiz2ImageLoaded, setQuiz2ImageLoaded] = useState(false);

  const QuizCard = ({ 
    config, 
    stats, 
    quizType, 
    imageError, 
    imageLoaded, 
    setImageError, 
    setImageLoaded 
  }: {
    config: QuizConfig;
    stats: QuizStats;
    quizType: 'quiz1' | 'quiz2';
    imageError: boolean;
    imageLoaded: boolean;
    setImageError: (error: boolean) => void;
    setImageLoaded: (loaded: boolean) => void;
  }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-4">
        <h2 className={`text-2xl font-bold text-${config.themeColor}-600`}>
          {config.title}
        </h2>
      </div>

      {config.startScreenImage && (
        <div className="relative w-full h-48 mb-4 bg-transparent rounded-lg overflow-hidden flex items-center justify-center">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          )}
          {imageError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <ImageOff size={32} />
              <p className="text-sm mt-2">Image not available</p>
            </div>
          ) : (
            <img
              src={config.startScreenImage}
              alt={config.title}
              className={`
                ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                transition-opacity duration-200
                w-full h-full
                object-contain
                mix-blend-multiply
              `}
              style={{
                maxWidth: '100%',
                maxHeight: '100%'
              }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          )}
        </div>
      )}

      <p className="text-gray-600 mb-4 text-center">{config.description}</p>

      <HighScoresList 
        scores={stats.highScores}
        onReset={() => onResetScores(config.quiz_name)}
        quizConfig={config}
      />
      
      <button
        onClick={() => onQuizSelect(quizType)}
        className={`w-full mt-4 px-6 py-3 bg-${config.themeColor}-600 hover:bg-${config.themeColor}-700 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2`}
      >
        <Play size={20} />
        Start Quiz
      </button>
    </div>
  );

  return (
    <div className="max-w-4xl w-full flex flex-col items-center">
      <div className="text-center mb-8 w-full">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield size={32} className="text-orange-800" />
          <h1 className="text-4xl font-bold text-gray-800">Damage Control</h1>
        </div>
        <p className="text-xl text-gray-600">
          Test your knowledge of DC signs and panel symbols
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
        <QuizCard
          config={quiz1Config}
          stats={quiz1Stats}
          quizType="quiz1"
          imageError={quiz1ImageError}
          imageLoaded={quiz1ImageLoaded}
          setImageError={setQuiz1ImageError}
          setImageLoaded={setQuiz1ImageLoaded}
        />
        
        <QuizCard
          config={quiz2Config}
          stats={quiz2Stats}
          quizType="quiz2"
          imageError={quiz2ImageError}
          imageLoaded={quiz2ImageLoaded}
          setImageError={setQuiz2ImageError}
          setImageLoaded={setQuiz2ImageLoaded}
        />
      </div>

      {ENABLE_GLOBAL_LEADERBOARD && (
        <button
          onClick={() => setShowGlobalLeaderboard(true)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors font-semibold shadow-md"
        >
          <Globe2 size={20} />
          Global Leaderboard
        </button>
      )}

      {showGlobalLeaderboard && (
        <GlobalLeaderboard onClose={() => setShowGlobalLeaderboard(false)} />
      )}
    </div>
  );
}
