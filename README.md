# الشلّة ع أريحا! — GitHub Pages + Firebase

מדריך פרסום ללא Terminal, באמצעות אתר GitHub.

## 1. יצירת אתר ב־GitHub
1. היכנס ל־https://github.com והתחבר (או צור חשבון).
2. בחר **New repository** בשם `jericho-trip` והגדר **Public** (ב־GitHub Free).
3. אפשר להוסיף README בעת יצירת ה־repository. לאחר מכן בחר **Add file → Upload files**.
4. חלץ את קובץ ה־ZIP הזה, וגרור אל אזור ההעלאה את **התיקייה docs** ואת הקובץ **firestore.rules**; בצע Commit changes.
   חשוב לוודא שב־GitHub יש `docs/index.html` ו־`docs/firebase-config.js`, ולא תיקיית ביניים נוספת.
5. פתח **Settings → Pages → Build and deployment**.
6. בחר **Deploy from a branch**, ואז `main` ו־`/docs`, ולחץ **Save**.
7. לאחר הפרסום כתובת האתר צפויה להיות `https://USERNAME.github.io/jericho-trip/` (החלף USERNAME בשם משתמש GitHub שלך).

## 2. חיבור נתונים משותפים ב־Firebase (חיוני למשימות ותקציב)
בלי השלבים הבאים האתר יציג תצוגת דמו מקומית בלבד, והשינויים לא יופיעו אצל החברים.

1. היכנס ל־https://console.firebase.google.com/ וצור פרויקט Firebase חדש.
2. בחר הוספת אפליקציית Web (`</>`). העתֵק את הערכים `apiKey`, `authDomain`, `projectId`, `appId` מתוך `firebaseConfig`.
3. היכנס ל־GitHub repository → `docs/firebase-config.js` → סמל העיפרון **Edit this file**. הדבק את ארבעת הערכים במקומות הריקים ושמור ב־**Commit changes**. אל תשנה `tripDocId`.
4. ב־Firebase Console, פתח **Authentication → Sign-in method → Anonymous → Enable**.
5. ב־Firebase Console, פתח **Firestore Database → Create database** (בחר Standard ומיקום שרת).
6. ב־Firestore Database → **Rules**, מחק את תוכן העורך והדבק את **כל** תוכן הקובץ `firestore.rules` שמצורף ל־ZIP. לחץ **Publish**.
7. פתח את אתר GitHub Pages והמתן עד שיופיע **متصل ومشترك** במקום **وضع تجريبي**.
8. בדוק ממכשיר שני שסימון משימה/הוצאה אכן מסתנכרנים, ורק אז שתף ב־WhatsApp.

## מה יש באפליקציה
- שתי תמונות (הזמנה ו־Checklist)
- חלוקת משימות אחראים
- ציון בוצע / לא בוצע
- רישום הוצאות לכל קטגוריה
- תקציב וההתחשבנות בין חמש המשפחות

## הגבלת גישה / פרטיות
GitHub Pages הוא אתר ציבורי. גם אם הקישור מופץ רק בקבוצה, הוא **אינו חסום בסיסמה**.
כללי Firestore המצורפים מאפשרים למשתמשים עם התחברות אנונימית לעדכן את נתוני הטיול; זו לא מערכת הרשאות מאובטחת לפי אדם או משפחה.
לא מומלץ להזין מידע רגיש, ואם תרצו הרשאות אמיתיות נצטרך להוסיף הזדהות והרשאות.

## עדכון תמונות
החלף את הקבצים `docs/assets/invitation.webp` ו־`docs/assets/shopping-checklist.webp` תוך שמירה על אותם שמות.

## קישור רשמי
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
