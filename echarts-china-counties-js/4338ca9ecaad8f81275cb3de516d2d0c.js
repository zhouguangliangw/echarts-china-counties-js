(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('三都水族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"522732","properties":{"name":"三都水族自治县","cp":[107.869749,25.983202],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GFIAGGGUIKKCOEOAOFODKNENA@CHCHEFCDIFABODMFKHMNGPATBXBH@DBLCHAFIJKHWFELBJHHHFBF@FGLAF@LFFHJBJ@HAF@@ALDJ@F@@@@@@@B@B@@@@@B@@@BABADABAB@BABGJ@@A@@F@FBD@BBFF@H@PCJ@F@BF@FADABCB@B@D@D@BABABADAF@DABAB@@ABBD@@@BH@FCH@DBH@DADEDCDBF@HJ@H@FAPBLINA@KLAPGNODABODGDCBMDG@IECCMGQEK@MHADABABGJMJK@IBMBMBEBEDQFKLMP@BARDNLNNPNVBDDJ@FBXBJ@@DBDFHAFAHENALDBFBBBF@DAJEJABC@C@OL@BGPCFENIJAB[FIB@@CLAH@HADAN@BBLLJDBFFJNFFBB@BABDD@FBFDBDBBBDDDBH@J@HADABALH@@NJDBBB@@@@BB@@@@TLFFJH@@@BJHDPAX@H@H@HBN@@BZCNEBCBGFKDIBCBMHGJABB@@@@B@@B@@@@BB@@@BB@@@BB@@@@B@@@B@@@@EBCB@DBBBD@BABEBAB@B@@@@@@@B@@@B@B@@BB@@@@@B@B@@@B@@@B@@@BB@@@@@@@BAFBJDB@@D@FAD@BBB@@B@@@BABA@@BAD@D@B@@CBC@C@@@C@AB@BBDBBBB@BB@CAABA@CBA@AAAAAAC@@FGHEDABA@@LEJALG@@@@FODUDEBCJKBA@@@A@@HGFCFEJENED@FAFALBDBDDDHBB@BDL@R@@@NBH@@@BDLFB@@FDF@@@H@NMJI@@BABCHGFA@@LGRDFD@@@@FBJDHEHGBG@@B@@@@@@A@ACA@CBADCBCBABB@@@@B@@@BADCBEBC@@DA@A@C@@DCB@FAD@HC@@@@DAD@B@@@@AAACAA@ACBCDCD@D@JFB@@AB@@A@@@@@A@CAC@E@@@C@CBA@C@@DEB@B@@D@B@BBDDBBDABCD@DBBBBF@@@BABAFAB@@A@@BAB@B@BBBD@B@@BF@DBDD@D@FAHDF@DAFAF@@@JADDDDPNN@@@D@NEPKLEHA@@B@H@JA@@FAD@@@B@B@B@@@@@B@B@@@@@B@@@@@BB@@B@@@B@@@@BB@B@@@@@B@@@BB@@B@@@@@B@@@B@@@@@B@@BD@B@@@B@@A@@@@B@@@B@@@@@B@@@@@B@@A@BBA@@B@@@B@@@B@B@@@B@@@@AB@B@@@@@B@@@@@B@@@@@B@@@@@B@@@B@@@B@BA@@@@B@@@@@B@@A@@B@@@B@@@@@B@@@HCD@BBDDBDBD@BB@@B@@BBBB@@@@@BB@@@@@BB@@@@BB@@@@B@@@@@B@@@@@@BBA@@B@@@BA@@BA@@@@@@BA@@@A@@BA@@@@B@@AB@@BB@@@@@B@@@B@@@@@B@@BB@@@@@@BB@@B@@@@@B@@@@@B@@@@AB@BAB@B@@@B@B@@@B@@@@BB@@B@@@B@@@@@@@@@BB@@BA@@@@B@@@B@@@B@B@@@D@B@@@@@BB@@B@DB@@@@@@BA@@@@@@@A@@@A@@@A@@@@@A@@B@@A@@B@@@B@@A@@B@@A@@@ABA@@@A@AB@@@@@BA@@@@B@B@@A@@@@B@@@BA@@DA@@@@HAB@@@BA@EBCAA@ACAA@AAA@E@A@@@A@@A@@@@@A@@A@@A@A@@@CB@@@@AB@@A@@@@@A@@BA@@@A@@@A@A@@BC@C@C@A@@@ABA@A@A@A@E@A@@@AB@@ABAB@B@BA@@B@@@BA@@@@B@@@@@@A@@B@@@B@@@@AB@@@B@@@B@B@@@@@B@@@B@@@B@@@B@@@BBHDHFPNHFJLDJFJBD@@BBFDLAJ@DG@GGIGK@IDEBCF@HBLDFCBICKSIKOCCACAAAA@@AA@@AA@@BAB@D@DABABA@CAA@@A@A@ABAA@AC@@AAABABAB@BA@A@A@ACAAAAAB@@@@C@E@@@@AG@C@ABABC@ADEBAAAA@EAA@E@CAAAAEAG@@GACACAAA@A@A@AAAA@CBCDC@C@A@OGE@MDE@A@AAAA@E@IDE@E@AACKOEC@AKK@@IE@@C@@AA@AC@@C@CBC@@C@A@CB@BC@EDKFADAAA@CAABABAB@BBB@@@@AAA@A@ABADA@A@ACAGCCA@@CC@@@@ECEGAKCA@@EEOKCCEECE@@CAAAAAAAA@@C@A@A@AAA@@@A@@D@D@FADADCFEDCC@AA@@ICAACAIEACACICGCIGCA@A@A@AACAECKEKCOBIHMJGLANCBCDI@IIIGGCEBGFMDM@M@@A@EB@A@AAC@ABC@C@C@AAC@ABCBABCBABAACAECGAA@C@A@ABC@AD@F@D@D@DBB@BBBFFFBB@@F@NDHBFFFFHBHBB@DCF@DBFBDDDD@A@ABCB@BBDBB@BAACAC@A@C@CBA@IHOBC@AEKBCBA@CAEACAA@ABCBABAF@B@@@D@DCBED@DBDCBA@ADC@ACEDE@CCC@GCCACAA@AEAACEEGEIEC@EAEECE@@KCKAEAAC@AIGC@KAOHQAEUAKGKSISCIAYCQIIE@AAAAAE@@A@CAC@A@@@C@C@ECA@@DOBOAIEEEAQ@ED@BABADABADAB@DAD@BADCHADCD@B@D@BC@A@@@C@AAACAACAC@UQKCcHK@K@IGCMOAMFGNBZEPIJCB"],"encodeOffsets":[[110515,26169]]}}],"UTF8Encoding":true});}));