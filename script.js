const quizQuestions = [
  {
    question: "ما التعريف الأقرب للرقابة وفق المادة؟",
    choices: ["تسجيل العمليات المالية فقط", "مجموعة ضوابط لمطابقة تنفيذ العمل مع خطته المقررة", "إعداد القوائم المالية السنوية", "إبداء رأي خارجي في القوائم"],
    answer: 1,
    explanation: "الرقابة في جوهرها هي ضوابط تقارن التنفيذ بالخطة المقررة."
  },
  {
    question: "أي نوع من الرقابة يهتم بتنظيم صلاحيات كل جهة داخل المنشأة؟",
    choices: ["رقابة تنظيمية", "رقابة أداء", "رقابة أمن وحماية", "رقابة شرعية"],
    answer: 0,
    explanation: "الرقابة التنظيمية تعنى بتوزيع وتنظيم الصلاحيات داخل المنشأة."
  },
  {
    question: "ما أحد أهداف الرقابة المالية الرئيسية؟",
    choices: ["إلغاء التدقيق الخارجي", "ضمان سلامة التصرفات المالية", "تعيين أعضاء مجلس الإدارة", "إصدار الفتاوى الشرعية فقط"],
    answer: 1,
    explanation: "الرقابة المالية تستهدف سلامة التصرفات المالية وكشف الانحرافات ومطابقة القوانين."
  },
  {
    question: "الرقابة المالية الداخلية تقدم عادة:",
    choices: ["تأكيداً مطلقاً", "تأكيداً معقولاً", "حكماً قضائياً", "ترخيصاً مصرفياً"],
    answer: 1,
    explanation: "النص يقرر أنها تقدم تأكيداً معقولاً، وليس مطلقاً، حول تحقيق الأهداف."
  },
  {
    question: "أي مما يلي يعد من مكونات نظام الرقابة المالية الداخلية؟",
    choices: ["تقدير الخطر", "تحديد سعر السهم", "إصدار القوانين", "اختيار المساهمين"],
    answer: 0,
    explanation: "من مكوناتها تقدير الخطر، نظم المعلومات، التدقيق والفحص، بيئة الرقابة، السياسات والإجراءات، والمتابعة."
  },
  {
    question: "ما السمة الأساسية للرقابة المالية الخارجية؟",
    choices: ["تتبع الإدارة التنفيذية", "تتم بواسطة جهة مستقلة عن الإدارة التنفيذية", "تمنع التدقيق الداخلي", "تقتصر على تدريب الموظفين"],
    answer: 1,
    explanation: "الرقابة الخارجية تتولاها جهة مستقلة لا تخضع لإشراف الإدارة التنفيذية."
  },
  {
    question: "أي شكل من التدقيق يفحص كفاءة وفاعلية التشغيل؟",
    choices: ["تدقيق الالتزام", "التدقيق التشغيلي", "التدقيق على القوائم المالية", "التدقيق الشرعي الخارجي فقط"],
    answer: 1,
    explanation: "التدقيق التشغيلي يركز على كفاءة وفاعلية التشغيل والهيكل والتنظيم والأنظمة."
  },
  {
    question: "التدقيق الخارجي يهدف أساساً إلى:",
    choices: ["إبداء رأي محايد في القوائم المالية", "إدارة كل وحدات المنشأة", "تنفيذ العمليات اليومية", "استبدال الرقابة الشرعية"],
    answer: 0,
    explanation: "الدور الأساسي للمدقق الخارجي هو إبداء رأي محايد في صحة وعدالة القوائم المالية المنشورة."
  },
  {
    question: "متى يتم التدقيق الداخلي عادة؟",
    choices: ["فقط عند التصفية", "طوال السنة المالية", "مرة كل عشر سنوات", "بعد صدور حكم قضائي"],
    answer: 1,
    explanation: "التدقيق الداخلي مستمر طوال السنة المالية، بخلاف الخارجي الذي يرتبط غالباً بنهاية السنة."
  },
  {
    question: "وفق تعريف بنك الكويت المركزي، الرقابة الشرعية هي:",
    choices: ["فحص أعمال المؤسسة للتأكد من التزامها بأحكام الشريعة", "تسجيل المصروفات فقط", "اعتماد الميزانية العامة للدولة", "تقييم كفاءة التسويق فقط"],
    answer: 0,
    explanation: "تعريف بنك الكويت المركزي يركز على فحص الأعمال للتأكد من الالتزام بأحكام الشريعة الإسلامية."
  },
  {
    question: "أي سنة شهدت القانون رقم 30 بشأن إضافة قسم خاص بالبنوك الإسلامية؟",
    choices: ["2003", "2010", "2019", "2020"],
    answer: 0,
    explanation: "بدأت إحدى المحطات المهمة في 2003 بالقانون رقم 30 لسنة 2003."
  },
  {
    question: "أي جهة تقع في قمة هرم الرقابة الشرعية على القطاع المالي الإسلامي في الكويت؟",
    choices: ["لجنة التدقيق الداخلي", "الهيئة العليا للرقابة الشرعية في بنك الكويت المركزي", "إدارة الموارد البشرية", "الجمعية العمومية فقط"],
    answer: 1,
    explanation: "الهيئة العليا في بنك الكويت المركزي هي المرجعية العليا للرقابة الشرعية في القطاع المالي الإسلامي."
  },
  {
    question: "ما الحد الأدنى لعدد أعضاء الهيئة العليا للرقابة الشرعية في بنك الكويت المركزي؟",
    choices: ["عضو واحد", "عضوان", "ثلاثة أعضاء", "عشرة أعضاء"],
    answer: 2,
    explanation: "تتكون الهيئة العليا من ثلاثة أعضاء على الأقل."
  },
  {
    question: "كم مدة عضوية اللجنة الاستشارية للرقابة الشرعية للتأمين التكافلي؟",
    choices: ["سنة واحدة غير قابلة للتجديد", "سنتان قابلة للتجديد لمرة واحدة", "ثلاث سنوات قابلة للتجديد دائماً", "خمس سنوات ثابتة"],
    answer: 1,
    explanation: "النص يذكر أن أعضاء اللجنة يعينون لمدة سنتين قابلة للتجديد لمرة واحدة."
  },
  {
    question: "ما وضع قرارات اللجنة الاستشارية للرقابة الشرعية للتأمين التكافلي بالنسبة للوحدة؟",
    choices: ["غير ذات أثر إطلاقاً", "استرشادية فقط في كل الأحوال", "ملزمة للوحدة فيما يتعلق بالتزامها بالشريعة", "تصدر عن الجمعية العمومية"],
    answer: 2,
    explanation: "قرارات اللجنة ملزمة لوحدة تنظيم التأمين فيما يتعلق بالتزامها بالشريعة."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const els = {
  progressBar: document.getElementById("progressBar"),
  backToTop: document.getElementById("backToTop"),
  studyModeBtn: document.getElementById("studyModeBtn"),
  topicSearch: document.getElementById("topicSearch"),
  searchStatus: document.getElementById("searchStatus"),
  expandAll: document.getElementById("expandAll"),
  collapseAll: document.getElementById("collapseAll"),
  quizContainer: document.getElementById("quizContainer"),
  quizProgress: document.getElementById("quizProgress"),
  quizScoreLive: document.getElementById("quizScoreLive"),
  nextQuestion: document.getElementById("nextQuestion"),
  restartQuiz: document.getElementById("restartQuiz"),
  quizResult: document.getElementById("quizResult"),
  navToggle: document.getElementById("navToggle"),
  navLinks: document.getElementById("navLinks")
};

function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percent = height > 0 ? (scrollTop / height) * 100 : 0;
  els.progressBar.style.width = `${percent}%`;
  els.backToTop.classList.toggle("visible", scrollTop > 500);
}

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[ًٌٍَُِّْـ]/g, "");
}

function filterTopics() {
  const query = normalize(els.topicSearch.value.trim());
  const cards = Array.from(document.querySelectorAll(".topic-card, .topic-section"));
  let matches = 0;

  if (!query) {
    cards.forEach(card => card.classList.remove("hidden-by-search"));
    els.searchStatus.textContent = "";
    return;
  }

  cards.forEach(card => {
    const isMatch = normalize(card.textContent).includes(query);
    card.classList.toggle("hidden-by-search", !isMatch);
    if (isMatch && card.classList.contains("topic-card")) matches += 1;
  });

  els.searchStatus.textContent = matches ? `تم العثور على ${matches} نتيجة مطابقة.` : "لا توجد نتائج مطابقة. جرّب كلمة مختلفة.";
}

function renderQuiz() {
  const item = quizQuestions[currentQuestion];
  answered = false;
  els.quizResult.textContent = "";
  els.quizProgress.textContent = `السؤال ${currentQuestion + 1} من ${quizQuestions.length}`;
  els.quizScoreLive.textContent = `الدرجة: ${score}`;
  els.nextQuestion.disabled = true;
  els.nextQuestion.textContent = currentQuestion === quizQuestions.length - 1 ? "عرض النتيجة" : "السؤال التالي";

  els.quizContainer.innerHTML = `
    <div class="quiz-question">${item.question}</div>
    <div class="answers">
      ${item.choices.map((choice, index) => `
        <button class="answer-option" type="button" data-index="${index}">
          <span>${String.fromCharCode(65 + index)}.</span>
          <span>${choice}</span>
        </button>
      `).join("")}
    </div>
    <div class="explanation" id="answerExplanation" hidden></div>
  `;

  els.quizContainer.querySelectorAll(".answer-option").forEach(button => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.index)));
  });
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;
  const item = quizQuestions[currentQuestion];
  const buttons = els.quizContainer.querySelectorAll(".answer-option");
  const explanation = document.getElementById("answerExplanation");

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === item.answer) button.classList.add("correct");
    if (buttonIndex === index && index !== item.answer) button.classList.add("wrong");
  });

  if (index === item.answer) score += 1;
  els.quizScoreLive.textContent = `الدرجة: ${score}`;
  explanation.hidden = false;
  explanation.innerHTML = `<strong>${index === item.answer ? "إجابة صحيحة." : "إجابة غير صحيحة."}</strong> ${item.explanation}`;
  els.nextQuestion.disabled = false;
}

function finishQuiz() {
  const percent = Math.round((score / quizQuestions.length) * 100);
  const message = percent >= 85 ? "أداء ممتاز. أنت تسيطر على معظم المفاهيم." : percent >= 65 ? "أداء جيد. راجع جداول المقارنة والتسلسل الزمني." : "تحتاج إلى مراجعة مركزة، خصوصاً الفروق بين الأنواع والهيئات.";
  els.quizContainer.innerHTML = "";
  els.quizProgress.textContent = "انتهى الاختبار";
  els.quizResult.innerHTML = `<strong>النتيجة النهائية: ${score} من ${quizQuestions.length} (${percent}%).</strong><br>${message}`;
  els.nextQuestion.disabled = true;
}

function nextQuizStep() {
  if (!answered) return;
  if (currentQuestion >= quizQuestions.length - 1) {
    finishQuiz();
    return;
  }
  currentQuestion += 1;
  renderQuiz();
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  renderQuiz();
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init({ duration: 650, once: true, offset: 80 });
  }

  updateProgress();
  renderQuiz();

  window.addEventListener("scroll", updateProgress, { passive: true });
  els.backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  els.studyModeBtn.addEventListener("click", () => {
    const enabled = document.body.classList.toggle("study-mode");
    els.studyModeBtn.setAttribute("aria-pressed", String(enabled));
  });

  els.topicSearch.addEventListener("input", filterTopics);
  els.expandAll.addEventListener("click", () => document.querySelectorAll("details").forEach(item => item.open = true));
  els.collapseAll.addEventListener("click", () => document.querySelectorAll("details").forEach(item => item.open = false));
  els.nextQuestion.addEventListener("click", nextQuizStep);
  els.restartQuiz.addEventListener("click", restartQuiz);

  els.navToggle.addEventListener("click", () => {
    const open = els.navLinks.classList.toggle("open");
    els.navToggle.setAttribute("aria-expanded", String(open));
  });

  els.navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      els.navLinks.classList.remove("open");
      els.navToggle.setAttribute("aria-expanded", "false");
    });
  });
});
