import React, { useState } from 'react';

/**
 * Standard Exam Question Schema (Extensible for weekly 5-7 day content imports and multiple subjects)
 * @typedef {Object} StandardQuestion
 * @property {string} id - Unique question ID (e.g., "q_vocab_u1_001")
 * @property {string} subjectId - e.g. "vocabulary", "bangla_1", "english_1", "math"
 * @property {string} chapterId - e.g. "unit_1", "unit_2", "ch_algebra"
 * @property {string} [conceptId] - Specific vocabulary word or concept ID
 * @property {string} category - Category label (e.g. "Vocabulary (Unit 1 - Synonyms)")
 * @property {string} question - Question prompt text
 * @property {string[]} options - 4 options [ক, খ, গ, ঘ]
 * @property {number} correctIndex - Index of the correct option (0..3)
 * @property {string} [explanation] - Conceptual or grammatical explanation
 * @property {string} [importedBatch] - e.g. "2026-W48-du-kha" (for 5-7 day content import cycles)
 */

/**
 * VocabularyUnitScreen Component
 * Responsive single-source component for mobile (<768px) and desktop (>=768px).
 * Pure in-memory React state (no localStorage or browser storage).
 *
 * @param {Object} props
 * @param {Object} props.unit - e.g. { lesson_unit: "Unit 1", sort_order: 1, words: [...] }
 * @param {StandardQuestion[]} [props.questions] - List of questions; falls back to unit.words generated questions
 * @param {() => void} [props.onBack] - Callback when back button is pressed
 * @param {(mode: string) => void} [props.onModeChange] - Callback when mode changes
 */
export default function VocabularyUnitScreen({
  unit = { lesson_unit: "Unit 1", words: [] },
  questions = [],
  onBack,
  onModeChange
}) {
  // In-Memory React State only (NO localStorage / browser storage used)
  const [activeMode, setActiveMode] = useState("browse");
  const [showAnswers, setShowAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState({}); // { [questionId]: { selectedIndex: number, isCorrect: boolean } }

  const labels = ["ক", "খ", "গ", "ঘ"];
  const wordCount = unit.words ? unit.words.length : questions.length;

  const handleOptionClick = (questionId, optionIndex, correctIndex) => {
    if (userAnswers[questionId] !== undefined) return; // Prevent re-answering
    const isCorrect = optionIndex === correctIndex;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: { selectedIndex: optionIndex, isCorrect }
    }));
  };

  const handleModeSelect = (modeKey) => {
    setActiveMode(modeKey);
    if (onModeChange) onModeChange(modeKey);
  };

  return (
    <div className="vuc-wrapper">
      <style>{`
        .vuc-wrapper {
          --vuc-bg: #f3f6fb;
          --vuc-card: #ffffff;
          --vuc-text: #1d2433;
          --vuc-muted: #6b7385;
          --vuc-line: #e2e7f0;
          --vuc-accent: #ff5a3c;
          --vuc-ok: #16a34a;
          --vuc-ok-bg: #e7f8ee;
          --vuc-bad: #dc2626;
          --vuc-bad-bg: #fdeaea;
          background: var(--vuc-bg);
          color: var(--vuc-text);
          font-family: "Noto Sans Bengali", "Hind Siliguri", system-ui, sans-serif;
          font-size: 15px;
          line-height: 1.45;
          min-height: 100vh;
          padding: 10px 10px 40px;
          box-sizing: border-box;
        }
        .vuc-inner {
          width: 100%;
          margin: 0 auto;
        }
        .vuc-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--vuc-card);
          border: 1px solid var(--vuc-line);
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 14px;
          color: var(--vuc-text);
          cursor: pointer;
          font-family: inherit;
          user-select: none;
          transition: background 0.2s;
        }
        .vuc-back-btn:hover {
          background: #f8fafc;
        }
        .vuc-crumb-bar {
          margin: 10px 2px 6px;
          font-size: 13px;
          color: var(--vuc-muted);
        }
        .vuc-crumb-bar .red {
          color: var(--vuc-accent);
          font-weight: 600;
        }
        .vuc-title-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .vuc-title-bar h1 {
          font-size: 19px;
          font-weight: 700;
          margin: 0;
        }
        .vuc-word-badge {
          background: #fff3d6;
          color: #a86b00;
          font-size: 13px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 999px;
        }
        .vuc-mode-row {
          display: flex;
          gap: 6px;
          margin-bottom: 8px;
        }
        .vuc-mode-item {
          flex: 1;
          background: var(--vuc-card);
          border: 1px solid var(--vuc-line);
          border-radius: 10px;
          padding: 6px 2px;
          font-size: 12px;
          text-align: center;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          white-space: nowrap;
          color: var(--vuc-text);
          user-select: none;
          transition: all 0.2s;
        }
        .vuc-mode-item .ic {
          font-size: 16px;
          line-height: 1;
        }
        .vuc-mode-item.active {
          background: linear-gradient(90deg, #ff7a2f, #ff4d6d);
          color: #fff;
          border-color: transparent;
          font-weight: 600;
          box-shadow: 0 2px 8px rgba(255, 77, 109, 0.25);
        }
        .vuc-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid var(--vuc-line);
          background: var(--vuc-card);
          border-radius: 999px;
          padding: 5px 12px;
          font-size: 14px;
          color: var(--vuc-muted);
          margin: 4px 0 10px;
          cursor: pointer;
          user-select: none;
          transition: all 0.2s;
        }
        .vuc-toggle-btn .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #9aa3b5;
          transition: background 0.2s;
        }
        .vuc-toggle-btn.on {
          color: var(--vuc-ok);
          background: var(--vuc-ok-bg);
          border-color: rgba(22, 163, 74, 0.3);
        }
        .vuc-toggle-btn.on .dot {
          background: var(--vuc-ok);
        }
        .vuc-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .vuc-card {
          background: var(--vuc-card);
          border: 1px solid var(--vuc-line);
          border-radius: 10px;
          padding: 10px 10px 8px;
          margin-bottom: 0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        .vuc-card-num {
          font-size: 13px;
          color: var(--vuc-muted);
          margin-bottom: 2px;
          font-weight: 500;
        }
        .vuc-card-text {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 8px;
          line-height: 1.45;
        }
        .vuc-opts-stack {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .vuc-opt-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          border: 1px solid var(--vuc-line);
          border-radius: 8px;
          padding: 7px 9px;
          font-size: 14.5px;
          background: #fafbfd;
          cursor: pointer;
          text-align: left;
          color: var(--vuc-text);
          font-family: inherit;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          box-sizing: border-box;
        }
        .vuc-opt-btn:not(:disabled):active {
          transform: scale(0.98);
        }
        .vuc-opt-btn:disabled {
          cursor: default;
        }
        .vuc-opt-btn .k {
          flex: 0 0 auto;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #e8ecf3;
          font-size: 12px;
          font-weight: 600;
          display: grid;
          place-items: center;
          color: var(--vuc-muted);
          transition: all 0.2s;
        }
        .vuc-opt-btn .opt-title {
          flex: 1;
        }
        .vuc-opt-btn .mark {
          margin-left: auto;
          font-weight: 700;
          font-size: 15px;
          min-width: 16px;
          text-align: right;
        }
        .vuc-opt-btn.right {
          border-color: var(--vuc-ok) !important;
          background: var(--vuc-ok-bg) !important;
          color: #0f6b34 !important;
          font-weight: 600;
        }
        .vuc-opt-btn.right .k {
          background: var(--vuc-ok) !important;
          color: #fff !important;
        }
        .vuc-opt-btn.right .mark {
          color: var(--vuc-ok) !important;
        }
        .vuc-opt-btn.wrong {
          border-color: var(--vuc-bad) !important;
          background: var(--vuc-bad-bg) !important;
          color: #9b1c1c !important;
          font-weight: 600;
          animation: vucShake 0.35s ease;
        }
        .vuc-opt-btn.wrong .k {
          background: var(--vuc-bad) !important;
          color: #fff !important;
        }
        .vuc-opt-btn.wrong .mark {
          color: var(--vuc-bad) !important;
        }
        .vuc-opt-btn.right.pop {
          animation: vucPop 0.35s ease;
        }
        @keyframes vucShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        @keyframes vucPop {
          0% { transform: scale(0.97); }
          60% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        .vuc-card-note {
          font-size: 13px;
          color: var(--vuc-muted);
          margin-top: 6px;
          min-height: 18px;
          font-weight: 500;
        }
        .vuc-card-note.ok {
          color: var(--vuc-ok);
          font-weight: 600;
        }
        .vuc-card-note.bad {
          color: var(--vuc-bad);
          font-weight: 600;
        }

        /* Desktop Layout (>= 768px) */
        @media (min-width: 768px) {
          .vuc-wrapper {
            padding: 24px 20px 60px;
          }
          .vuc-inner {
            max-width: 900px;
          }
          .vuc-back-btn {
            padding: 8px 14px;
            font-size: 14px;
            border-radius: 10px;
          }
          .vuc-crumb-bar {
            font-size: 14px;
            margin: 12px 2px 8px;
          }
          .vuc-title-bar h1 {
            font-size: 24px;
          }
          .vuc-word-badge {
            font-size: 14px;
            padding: 4px 14px;
          }
          .vuc-mode-row {
            gap: 12px;
            margin-bottom: 14px;
          }
          .vuc-mode-item {
            flex-direction: row;
            justify-content: center;
            gap: 8px;
            padding: 10px 16px;
            font-size: 14px;
            border-radius: 12px;
          }
          .vuc-mode-item .ic {
            font-size: 18px;
          }
          .vuc-toggle-btn {
            padding: 7px 16px;
            font-size: 14.5px;
            margin-bottom: 16px;
          }
          .vuc-cards-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .vuc-card {
            padding: 16px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .vuc-card:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.04);
          }
          .vuc-card-num {
            font-size: 13.5px;
            margin-bottom: 4px;
          }
          .vuc-card-text {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 12px;
          }
          .vuc-opts-stack {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .vuc-opt-btn {
            font-size: 15.5px;
            padding: 9px 12px;
            border-radius: 9px;
          }
          .vuc-opt-btn .k {
            width: 24px;
            height: 24px;
            font-size: 13px;
          }
          .vuc-card-note {
            font-size: 13.5px;
            margin-top: 8px;
          }
        }
      `}</style>

      <div className="vuc-inner">
        {/* Top Header / Back Button */}
        <button type="button" className="vuc-back-btn" onClick={onBack}>
          ← ইউনিট তালিকায় ফিরুন
        </button>

        {/* Breadcrumb */}
        <div className="vuc-crumb-bar">
          <span className="red">Vocabulary</span> › <span className="red">লেসন ইউনিট</span> › {unit.lesson_unit}
        </div>

        {/* Title Row with Word Badge */}
        <div className="vuc-title-bar">
          <h1>{unit.lesson_unit}</h1>
          <span className="vuc-word-badge">{wordCount}টি শব্দ</span>
        </div>

        {/* 4 Mode Buttons with Gradient Active State */}
        <div className="vuc-mode-row">
          <div
            className={`vuc-mode-item ${activeMode === 'browse' ? 'active' : ''}`}
            onClick={() => handleModeSelect('browse')}
          >
            <span className="ic">📖</span>
            <span>শব্দ দেখা</span>
          </div>
          <div
            className={`vuc-mode-item ${activeMode === 'flashcards' ? 'active' : ''}`}
            onClick={() => handleModeSelect('flashcards')}
          >
            <span className="ic">📁</span>
            <span>ফ্ল্যাশকার্ড</span>
          </div>
          <div
            className={`vuc-mode-item ${activeMode === 'quiz' ? 'active' : ''}`}
            onClick={() => handleModeSelect('quiz')}
          >
            <span className="ic">⚡</span>
            <span>কুইজ</span>
          </div>
          <div
            className={`vuc-mode-item ${activeMode === 'mistakes' ? 'active' : ''}`}
            onClick={() => handleModeSelect('mistakes')}
          >
            <span className="ic">✖</span>
            <span>ভুল শব্দ</span>
          </div>
        </div>

        {activeMode === 'browse' && (
          <>
            {/* Show Answers Toggle */}
            <div
              className={`vuc-toggle-btn ${showAnswers ? 'on' : ''}`}
              onClick={() => setShowAnswers(!showAnswers)}
            >
              <span className="dot" />
              <span>{showAnswers ? "উত্তর অন" : "উত্তর অফ"}</span>
            </div>

            {/* Questions Grid (Single-col on Mobile, 2-Col on Desktop) */}
            <div className="vuc-cards-grid">
              {questions.map((q, qi) => {
                const answerState = userAnswers[q.id];
                const hasAnswered = answerState !== undefined;
                const correctIdx = q.correctIndex !== undefined ? q.correctIndex : q.answer;

                return (
                  <div className="vuc-card" key={q.id || qi}>
                    <div>
                      <div className="vuc-card-num">Question {qi + 1}</div>
                      <div className="vuc-card-text">{q.question || q.text}</div>
                    </div>

                    <div className="vuc-opts-stack">
                      {q.options.map((optText, oi) => {
                        let btnClass = "vuc-opt-btn";
                        let markText = "";

                        if (hasAnswered) {
                          if (oi === correctIdx) {
                            btnClass += " right";
                            if (answerState.isCorrect) btnClass += " pop";
                            markText = "✓";
                          } else if (oi === answerState.selectedIndex && !answerState.isCorrect) {
                            btnClass += " wrong";
                            markText = "✗";
                          }
                        } else if (showAnswers) {
                          if (oi === correctIdx) {
                            btnClass += " right";
                            markText = "✓";
                          }
                        }

                        return (
                          <button
                            key={oi}
                            type="button"
                            disabled={hasAnswered}
                            className={btnClass}
                            onClick={() => handleOptionClick(q.id, oi, correctIdx)}
                          >
                            <span className="k">{labels[oi] || String.fromCharCode(65 + oi)}</span>
                            <span className="opt-title">{optText}</span>
                            <span className="mark">{markText}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className={`vuc-card-note ${hasAnswered ? (answerState.isCorrect ? 'ok' : 'bad') : ''}`}>
                      {hasAnswered && (answerState.isCorrect ? "সঠিক উত্তর!" : "ভুল — সঠিক উত্তর সবুজ দেখানো হয়েছে")}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {activeMode === 'flashcards' && (
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, textAlign: 'center', marginTop: 14 }}>
            <h3>🗂️ ফ্ল্যাশকার্ড মোড সক্রিয় রয়েছে</h3>
            <p style={{ color: '#6b7385', marginTop: 6 }}>কার্ডের উপর ট্যাপ করে শব্দার্থ ও উদাহরণ দেখুন।</p>
          </div>
        )}

        {activeMode === 'quiz' && (
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, textAlign: 'center', marginTop: 14 }}>
            <h3>⚡ কুইজ মোড সক্রিয় রয়েছে</h3>
            <p style={{ color: '#6b7385', marginTop: 6 }}>সময়মতো উত্তর দিয়ে নিজের প্রস্তুতি যাচাই করুন।</p>
          </div>
        )}

        {activeMode === 'mistakes' && (
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, textAlign: 'center', marginTop: 14 }}>
            <h3>❌ ভুল শব্দ রিভিউ মোড</h3>
            <p style={{ color: '#6b7385', marginTop: 6 }}>যে শব্দগুলো আগে ভুল হয়েছিল সেগুলো পুনরায় রিভিশন দিন।</p>
          </div>
        )}
      </div>
    </div>
  );
}
