# تعليمات النشر — GitHub + Cloudflare Pages + Hostinger

## لماذا هذه الطريقة؟

GitHub لإدارة كود الموقع وتحديثاته، Cloudflare Pages لنشر الموقع الثابت تلقائياً، وHostinger لإدارة سجلات الدومين فقط. لا حاجة إلى نقل استضافة موقع جيتك أو تغيير nameservers.

## 1) رفع ملفات الموقع إلى GitHub

1. فك ضغط المشروع، بحيث ترى `index.html` بجانب مجلد `assets` مباشرة.
2. افتح <https://github.com/new> وسجّل دخولك.
3. أنشئ **Repository جديداً مستقلاً** باسم `open-end-technology-website`، وليس داخل مستودع جيتك.
4. اختر Private أو Public كما ترغب؛ Cloudflare Pages يمكنه ربط كليهما حسب الأذونات.
5. في المستودع الجديد، اختر **Add file → Upload files**.
6. اسحب `index.html` و`assets/` وبقية الملفات (وليس ملف ZIP)، ثم **Commit changes**.
7. تأكد أن الصفحة الأولى للمستودع تعرض `index.html` على مستوى الجذر مباشرة.

إذا كنت تفضّل PowerShell بدلاً من رفع الملفات يدوياً، ادخل مجلد المشروع بعد إنشاء المستودع الفارغ وشغّل الأوامر التالية مع استبدال `YOUR_GITHUB_USER` بحسابك:

```powershell
git init
git branch -M main
git add .
git commit -m "Launch Open End Technology website"
git remote add origin https://github.com/YOUR_GITHUB_USER/open-end-technology-website.git
git push -u origin main
```

> لا تستخدم أي أوامر Git داخل مجلد مشروع JITAK. هذا مشروع ومجلد ومستودع مستقل تماماً.

## 2) النشر على Cloudflare Pages

1. افتح <https://dash.cloudflare.com>.
2. اختر **Workers & Pages → Create application → Pages → Import an existing Git repository** (قد تتغير تسمية الخيارات قليلاً).
3. اربط حساب GitHub واختر فقط مستودع `open-end-technology-website`.
4. Project name: `open-end-technology` إذا كان الاسم متاحاً.
5. Production branch: `main`.
6. Framework preset: **None** / **No framework**.
7. Build command: **فارغ** (أو `exit 0` إذا كانت الواجهة تتطلب أمراً).
8. Build output directory: `.` لأن `index.html` موجود في جذر المستودع.
9. اضغط **Save and Deploy**، واختبر رابط `*.pages.dev` الحقيقي الذي يعطيك Cloudflare.

بعد كل تعديل مستقبلي و`git push` إلى `main`، ينشر Cloudflare التحديث تلقائياً.

## 3) ربط النطاق الفرعي الجديد من Hostinger

الاسم المقترح هو `openend.jitakapp.com` فقط إذا لم يكن مستخدماً مسبقاً.

1. بعد نجاح النشر، افتح مشروعك في Cloudflare Pages → **Custom domains → Set up a domain**.
2. أدخل `openend.jitakapp.com`، وأكمل ربط النطاق في Cloudflare. **هذه الخطوة مهمة قبل عمل CNAME، وإلا قد يفشل التوجيه**.
3. من Hostinger افتح الدومين `jitakapp.com` ← **DNS / Nameservers** ← **DNS Zone Editor**.
4. تأكد أولاً أن اسم `openend` غير مستخدم مسبقاً. إذا كان مستخدماً، لا تمسح السجل؛ افحص سبب وجوده أولاً.
5. أضف **سجلاً جديداً واحداً فقط**:

| Type | Name / Host | Points to / Target | TTL |
|---|---|---|---|
| `CNAME` | `openend` | اسم مشروع Cloudflare الحقيقي، مثل `open-end-technology.pages.dev` **فقط إذا كان هذا هو الرابط الذي ظهر لك فعلياً** | Default |

**لا تضع رابطاً يبدأ بـ `https://` في Target**؛ ضع اسم المضيف فقط.

6. احفظ. انتظر انتشار DNS وإصدار شهادة HTTPS والتحقق من Custom domain في Cloudflare.
7. افتح `https://openend.jitakapp.com` وتأكد من الصفحة ومن أزرار WhatsApp وInstagram.

### ممنوع تغيير ما يلي

- لا تغيّر `NS` / nameservers الحالية إطلاقاً.
- لا تعدّل `A @` أو `CNAME www` أو `MX` أو `TXT` أو سجلات Resend/DKIM/DMARC.
- لا تعدّل أي دومين فرعي مستخدم لـJITAK أو الألعاب أو الأحداث أو البريد.
- لا تضف المشروع إلى Repo جيتك نفسه.

## 4) إذا أردت استضافة الموقع في Hostinger نفسها

يمكن رفع الملفات إلى مجلد فرعي للموقع الجديد من File Manager أو عبر موقع منفصل في hPanel، لكن عندها التحديثات لن تكون آلية من GitHub عادةً من دون إعداد إضافي. **الخيار الموصى به هنا: GitHub + Cloudflare Pages + سجل CNAME فرعي واحد من Hostinger**.

## 5) تشخيص سريع

- `404` على `*.pages.dev`: تأكد من وجود `index.html` في جذر مخرجات البناء `.`.
- Cloudflare `522`: تأكد أن الدومين أُضيف ضمن Custom domains وأن CNAME يشير إلى `*.pages.dev` الخاص بمشروعك.
- `openend` غير موجود بعد: افحص DNS Zone Editor وانتشار السجل.
- الصور/التنسيق لا تظهر: تحقق أن مجلد `assets` رُفع بالكامل وأن أسماء الملفات بحروف صغيرة كما هي.
- تغييرات لا تظهر: تأكد أن التحديثات وصلت إلى فرع `main` وأن آخر Deployment نجح.

## المصادر الرسمية

- Cloudflare Pages Static HTML: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Cloudflare Pages Git: https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare Pages Custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Hostinger CNAME: https://www.hostinger.com/support/4738777-how-to-manage-cname-records-at-hostinger/
