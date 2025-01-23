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

  const imageStyle = {
    mixBlendMode: 'multiply' as const,
    objectFit: 'contain' as const,
  };

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
        {/* First Quiz Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center mb-4">
            <h2 className={`text-2xl font-bold text-${quiz1Config.themeColor}-600`}>
              {quiz1Config.title}
            </h2>
          </div>

          {quiz1Config.startScreenImage && (
            <div className="w-full h-48 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
              {!quiz1ImageLoaded && !quiz1ImageError && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              )}
              {quiz1ImageError ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                  <ImageOff size={32} />
                  <p className="text-sm mt-2">Image not available</p>
                </div>
              ) : (
                <img
                  src={quiz1Config.startScreenImage}
                  alt={quiz1Config.title}
                  className={`${quiz1ImageLoaded ? 'block' : 'hidden'} bg-transparent`}
                  style={imageStyle}
                  onLoad={() => setQuiz1ImageLoaded(true)}
                  onError={() => setQuiz1ImageError(true)}
                />
              )}
            </div>
          )}

          <p className="text-gray-600 mb-4 text-center">{quiz1Config.description}</p>

          <HighScoresList 
            scores={quiz1Stats.highScores}
            onReset={() => onResetScores(quiz1Config.quiz_name)}
            quizConfig={quiz1Config}
          />
          
          <button
            onClick={() => onQuizSelect('quiz1')}
            className={`w-full mt-4 px-6 py-3 bg-${quiz1Config.themeColor}-600 hover:bg-${quiz1Config.themeColor}-700 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2`}
          >
            <Play size={20} />
            Start Quiz
          </button>
        </div>

        {/* Second Quiz Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center mb-4">
            <h2 className={`text-2xl font-bold text-${quiz2Config.themeColor}-600`}>
              {quiz2Config.title}
            </h2>
          </div>

          {quiz2Config.startScreenImage && (
            <div className="w-full h-48 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
              {!quiz2ImageLoaded && !quiz2ImageError && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              )}
              {quiz2ImageError ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                  <ImageOff size={32} />
                  <p className="text-sm mt-2">Image not available</p>
                </div>
              ) : (
                <img
                  src={quiz2Config.startScreenImage}
                  alt={quiz2Config.title}
                  className={`${quiz2ImageLoaded ? 'block' : 'hidden'} bg-transparent`}
                  style={imageStyle}
                  onLoad={() => setQuiz2ImageLoaded(true)}
                  onError={() => setQuiz2ImageError(true)}
                />
              )}
            </div>
          )}

          <p className="text-gray-600 mb-4 text-center">{quiz2Config.description}</p>

          <HighScoresList 
            scores={quiz2Stats.highScores}
            onReset={() => onResetScores(quiz2Config.quiz_name)}
            quizConfig={quiz2Config}
          />

          <button
            onClick={() => onQuizSelect('quiz2')}
            className={`w-full mt-4 px-6 py-3 bg-${quiz2Config.themeColor}-600 hover:bg-${quiz2Config.themeColor}-700 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2`}
          >
            <Play size={20} />
            Start Quiz
          </button>
        </div>
      </div>

      {/* Global Leaderboard Button */}
      {ENABLE_GLOBAL_LEADERBOARD && (
        <button
          onClick={() => setShowGlobalLeaderboard(true)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors font-semibold shadow-md"
        >
          <Globe2 size={20} />
          Global Leaderboard
        </button>
      )}

      {/* Global Leaderboard Modal */}
      {showGlobalLeaderboard && (
        <GlobalLeaderboard onClose={() => setShowGlobalLeaderboard(false)} />
      )}
    </div>
  );
}
