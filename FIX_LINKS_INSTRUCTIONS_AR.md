# إصلاح روابط المشاريع | Open End Technology v4

## المشكلة التي تم إصلاحها
- سهم **جيتك** كان يفتح `jitakapp.com`؛ صار يفتح صفحة التطبيق الحقيقية على Google Play.
- أزرار **Google Play** و **App Store** ظاهرة بوضوح وتعمل بصورة مستقلة.
- الضغط على أي مساحة غير زرّية داخل بطاقة **الكرنفال** صار يفتح `https://events.jitakapp.com/`.
- الضغط على أي مساحة غير زرّية داخل بطاقة **جيتك** صار يفتح صفحة تنزيل Google Play، مع إبقاء زر App Store منفصلاً.
- بطاقة الألعاب باقية على رابطها السابق كما هي.
- تحسين أولوية النقر (`z-index` و `pointer-events`) وتجاوب الأزرار مع شاشات الهاتف.

## طريقة التحديث (ملف واحد فقط)
1. افتح مستودع GitHub: https://github.com/Savyo9620/open-end-technology-website
2. افتح `index.html` ثم اضغط `Edit this file` (أيقونة القلم)، أو من `Add file` اختر `Upload files`.
3. **استبدل ملف `index.html` في جذر المستودع** بالنسخة المرفقة (الملف لا يغيّر قاعدة بيانات أو DNS).
4. اضغط `Commit changes` على الفرع `main`.
5. اذهب إلى Cloudflare Pages → مشروع `open-end-technology-website` → Deployments وتأكد من نجاح النشر الجديد.
6. افتح https://openend.jitakapp.com/ ثم حدّث الصفحة بقوة `Ctrl+F5` أو في نافذة خاصة لاختبار النسخة الجديدة.

إذا كان النشر على Cloudflare لا يحدث تلقائياً بعد Commit، افتح إعدادات البناء وربط GitHub في Cloudflare أولاً؛ لا حاجة لتغيير سجلات DNS.

## روابط مشاريع Open End
- التسجيل الإلكتروني للكرنفال: https://events.jitakapp.com/
- لعبة قلب المدينة: https://play.jitakapp.com/?r=qalb-almadina
- Google Play: https://play.google.com/store/apps/details?id=com.jitak.app
- App Store: https://apps.apple.com/iq/app/%D8%AC%D9%8A%D8%AA%D9%83-jitak/id6812668250

ملاحظة: إذا كان الموقع الهدف لا يستجيب بنفسه، فتح الرابط من واجهة Open End لن يعالج الخادم الهدف. تم التحقق من صفحتي المتجر، ولم تتوفر وسيلة هنا للتأكد من استجابة نطاق التسجيل.
