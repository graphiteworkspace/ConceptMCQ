// ConceptMCQ Application Logic
const fallbackQuestions = [
  {
    category: "JavaScript Core",
    question: "What is the output of `typeof NaN` in JavaScript?",
    options: ["number", "NaN", "undefined", "object"],
    correctIndex: 0,
    explanation: "Even though NaN stands for 'Not-a-Number', its type in JavaScript is still primitive numeric (`number`)."
  },
  {
    category: "Web Architecture",
    question: "What does the HTTP 403 status code specifically indicate?",
    options: ["Resource Not Found", "Forbidden / Access Denied", "Internal Server Error", "Unauthorized / Unauthenticated"],
    correctIndex: 1,
    explanation: "403 Forbidden means the server understands the request but refuses to authorize it, distinct from 401 Unauthorized."
  },
  {
    category: "Database Concepts",
    question: "In relational databases, what does the ACID property 'I' stand for?",
    options: ["Integrity", "Iteration", "Isolation", "Indexing"],
    correctIndex: 2,
    explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability. Isolation ensures concurrent transactions do not interfere with each other."
  }
];

let questions = [...fallbackQuestions];
let currentQuestionIndex = 0;
let hasAnswered = false;

// DOM Elements
const categoryEl = document.getElementById("question-category");
const counterEl = document.getElementById("question-counter");
const titleEl = document.getElementById("question-title");
const optionsContainer = document.getElementById("options-container");
const explanationBox = document.getElementById("explanation-box");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");
const dbStatusBadge = document.getElementById("db-status-badge");

// Initialize Supabase Client
let supabaseClient = null;
try {
  if (window.supabase && SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey) {
    supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    dbStatusBadge.textContent = "Supabase Connected";
    dbStatusBadge.className = "badge badge-online";
  }
} catch (e) {
  console.warn("Supabase initialization error:", e);
  dbStatusBadge.textContent = "Offline Mode";
}

function loadQuestion(index) {
  const q = questions[index];
  hasAnswered = false;
  nextBtn.disabled = true;
  explanationBox.classList.add("hidden");

  categoryEl.textContent = q.category || "General Concept";
  counterEl.textContent = `Question ${index + 1} of ${questions.length}`;
  titleEl.textContent = q.question;

  optionsContainer.innerHTML = "";
  const prefixes = ["A", "B", "C", "D"];

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-prefix">${prefixes[idx]}</span> <span>${opt}</span>`;
    btn.onclick = () => selectOption(idx, q.correctIndex, q.explanation);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selectedIdx, correctIdx, explanation) {
  if (hasAnswered) return;
  hasAnswered = true;

  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add("correct");
    } else if (idx === selectedIdx) {
      btn.classList.add("wrong");
    }
  });

  explanationText.textContent = explanation;
  explanationBox.classList.remove("hidden");
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  loadQuestion(currentQuestionIndex);
};

// Initial load
loadQuestion(currentQuestionIndex);
