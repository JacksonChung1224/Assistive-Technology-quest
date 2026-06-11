import React, { useState } from 'react';
import { questions } from './config/questions';
import QuestionCard from './components/QuestionCard';
import { submitFormToGoogleSheets } from './lib/submitData';

function App() {
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const skippedQuestionIds = React.useMemo(() => {
    let idsToSkip = new Set();
    questions.forEach(q => {
      if (q.skipLogic) {
        const val = answers[q.id];
        if (Array.isArray(val) && val.includes(q.skipLogic.conditionOption)) {
          q.skipLogic.skipIds.forEach(id => idsToSkip.add(id));
        } else if (val === q.skipLogic.conditionOption) {
          q.skipLogic.skipIds.forEach(id => idsToSkip.add(id));
        }
      }
    });
    return idsToSkip;
  }, [answers]);

  const handleSubmit = async () => {
    // Basic validation
    const unanswered = questions.filter(q => {
      if (skippedQuestionIds.has(q.id)) return false;
      if (q.required === false) return false;
      
      const val = answers[q.id];
      if (q.type === 'text') return !val || val.trim() === '';
      if (q.type === 'checkbox') return !val || val.length === 0;
      return !val;
    });

    if (unanswered.length > 0) {
      alert(`您還有 ${unanswered.length} 個問題未作答，請填寫完畢後再送出！`);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitFormToGoogleSheets(answers);
      setIsSubmitted(true);
    } catch (err) {
      alert('送出失敗，請稍後再試！');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="glass-card success-message">
        <div className="success-icon">✓</div>
        <h2>感謝您的填寫！</h2>
        <p style={{ marginTop: '10px', color: 'var(--text-muted)' }}>
          您的寶貴意見將幫助我們打造更好的輔具補助服務。
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="glass-card title-card">
        <h1>照護需求調查</h1>
        <p>我們正在規劃一個協助民眾快速了解長照資源與申請流程的服務，希望透過您的經驗了解目前遇到的困難與需求。本問卷約需 3～5 分鐘，所有資料僅供服務設計研究使用。</p>
      </div>
      
      {questions.map((q) => {
        if (skippedQuestionIds.has(q.id)) return null;
        return (
          <QuestionCard
            key={q.id}
            question={q}
            value={answers[q.id]}
            onChange={handleAnswerChange}
          />
        );
      })}

      <button 
        className="submit-btn" 
        onClick={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? '送出中...' : '送出問卷'}
      </button>
    </>
  );
}

export default App;
