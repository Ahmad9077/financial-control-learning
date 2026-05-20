# Financial Control Learning

موقع عربي تفاعلي عام لدراسة الرقابة المالية، التدقيق الداخلي والخارجي، الرقابة الشرعية، والهيئات الشرعية الرقابية في الكويت.

An interactive Arabic mini-course website about financial control, internal and external auditing, Sharia supervision, and Kuwait's main Sharia supervisory bodies.

## المزايا الرئيسية

- تصميم عربي RTL كامل.
- واجهة داكنة حديثة مع بطاقات زجاجية وتدرجات احترافية.
- بحث سريع داخل الموضوعات.
- أقسام قابلة للفتح والإغلاق.
- شريط تقدم القراءة.
- وضع دراسة يبرز النقاط المهمة.
- خط زمني لتطور الإطار القانوني في الكويت.
- جداول مقارنة تعليمية.
- أسئلة متوقعة للمراجعة.
- اختبار تفاعلي من 15 سؤالاً مع التصحيح والشرح والنتيجة النهائية.
- تنسيق مناسب للطباعة أو الحفظ بصيغة PDF.
- يعمل كموقع ثابت بدون خادم أو قاعدة بيانات أو تسجيل دخول.

## فتح الموقع محلياً

يمكن فتح `index.html` مباشرة في المتصفح، أو تشغيل خادم ثابت بسيط:

```bash
python3 -m http.server 8000
```

ثم افتح:

```text
http://localhost:8000
```

## النشر عبر GitHub Pages

هذا المستودع يحتوي على Workflow جاهز داخل:

```text
.github/workflows/pages.yml
```

بعد الدفع إلى فرع `main`، يمكن تفعيل GitHub Pages من:

```text
Settings -> Pages -> Source -> GitHub Actions
```

أو استخدام إعداد النشر من الفرع:

```text
Settings -> Pages -> Source -> Deploy from branch -> main -> root -> Save
```

## رابط GitHub Pages المتوقع

استبدل `USERNAME` و `REPO_NAME` بالقيم الفعلية:

```text
https://USERNAME.github.io/REPO_NAME/
```

## تحديث المحتوى لاحقاً

- عدّل النصوص التعليمية في `index.html`.
- عدّل التصميم في `styles.css`.
- عدّل الاختبار أو التفاعل في `script.js`.
- بعد التعديل:

```bash
git add .
git commit -m "Update course content"
git push
```

## English Summary

This is a static, accessible, mobile-first Arabic educational website. It rebuilds the source material as a premium mini-course with search, study mode, interactive sections, comparison tables, a legal timeline, expected exam questions, and a scored final quiz.
