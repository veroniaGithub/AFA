"
ionic cordova build android --prod --release

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore "D:\VERONIA\MTFT\app\release.keystore" "D:\VERONIA\MTFT\app\platforms\android\build\outputs\apk\android-release-unsigned.apk" androidreleasekey

zipalign -v 4 "D:\VERONIA\MTFT\app\platforms\android\build\outputs\apk\android-release-unsigned.apk" "D:\VERONIA\MTFT\app\mtft.apk"


keytool -genkey -v -keystore "D:\VERONIA\MTFT\app\debug.keystore" -storepass android -alias androiddebugkey -keypass veronia2017 -keyalg RSA -keysize 2048 -validity 10000
keytool -exportcert -list -v -alias androiddebugkey -keystore "D:\VERONIA\MTFT\app\debug.keystore"

Certificate fingerprints:
         MD5:  BB:AE:BD:03:4A:8B:CA:36:C3:59:7B:E2:8A:2E:0A:AB
         SHA1: 5E:A5:49:8B:B4:23:04:CA:C3:CA:63:E2:20:4C:AF:D8:51:C0:5B:64
         SHA256: 68:AE:CA:0A:AD:5A:29:E4:ED:1D:F1:22:E0:F2:98:F6:78:09:D8:67:76:81:5F:05:72:F8:A6:02:E5:68:9C:74
         Signature algorithm name: SHA256withRSA
         Version: 3

Extensions:

#1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: C0 CE C5 D2 8F A0 FE 2B   F9 43 3B 0D 57 83 DA DA  .......+.C;.W...
0010: 9B 5A 9D 7C                                        .Z..
]
]

keytool -genkey -v -keystore "D:\VERONIA\MTFT\app\release.keystore" -alias androidreleasekey -keyalg RSA -keysize 2048 -validity 10000
keytool -exportcert -list -v -alias androidreleasekey -keystore "D:\VERONIA\MTFT\app\release.keystore"

Certificate fingerprints:
         MD5:  B1:1C:C4:F5:B2:18:4D:2C:3A:4F:B8:25:D4:5A:7A:17
         SHA1: 25:ED:05:A8:B4:BD:90:47:2C:A0:7C:0B:0F:31:7D:29:B7:61:98:BC
         SHA256: DD:26:52:E0:9E:31:D8:42:AE:4A:6D:5D:FE:DC:1E:F0:17:AE:EA:21:4C:40:AC:31:7B:15:74:42:47:40:75:8F
         Signature algorithm name: SHA256withRSA
         Version: 3

Extensions:

#1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: 5D 01 C3 6F E1 8B B3 CE   CA 2F 5D 52 22 A5 A3 FB  ]..o...../]R"...
0010: 52 CF 6D 7A                                        R.mz
]
]
"
