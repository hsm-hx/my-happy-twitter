var happyTweets = [
  "あくあくん「ベネ取ってあるんで大丈夫ですよ，安心してください(ホーリー連打)」",
  "多分あくあくんパーソナルスペースクソ広いタイプ　自分の部屋に他人を入れない人",
  "あくあくんは絶対「郵便でーす。……あの，…………郵便なんですけど」って言いながらレターモーグリのお手伝いしてるしレイドのコールは「H1で」だし「こことここ。そこそこ痛いんで軽減頼みます」って言うけど人を起こすときは舌打ちしながら「さっさと起きろ，手間掛けんじゃねえ」て言う",
  "あくあくんは多分砕けた敬語で喋るだろうなと思うんだけど，リアちゃんに関してはあまりに無表情すぎてどんな喋り方するのかあまり想像がつかない",
  "あくあくんは喫煙者だったか……",
  "眠れなくてフェンリルサブのあくあくんの妄想ばっかり捗る。アルテマサブのリテイナーの兄弟で貧民の生まれ，貧しさ故に粗暴な扱いを受けることも少なくなかった家族のために幻術を会得。リテイナーくんはエーテルに恵まれない体質な分あくあくんはエーテルの扱いに長けている，など",
  "アクアくん「……何してるんですかこんなところで。死にますよ」\n暗黒騎士さん「そうだね」\nアクアくん「……そうだね，ではなくて」\n暗黒騎士さん「違うの？」\nアクアくん「死にますよって言ってるんですけど」\n暗黒騎士さん「うん，そうだね」\nみたいなの受信した。これが求めていたものでは？",
  "むしろアクアくんはそういう傾向ありそうだな。普段から「迅速なんか残してないんで」「学ばねえやつだな」「飛び降りてくれますか」とか言ってるけど相方ヒラにだけは気を許しているとか　そういう傾向ありそうだな",
  "アクアくんめっちゃ美味しそうな色してるもん",
  "スーツ姿のアクアくんありえん性的でだめな気がするな",
  "アクアくんに言わせたい言葉ランキング第一位間違いなく「俺にも守りたいもののひとつやふたつぐらいありましたよ」だから　こういう話はヒールする気のないヒーラーからされるとドキッとしちゃうものです",
  "アクアくんの顔がいい",
  "え〜〜〜アクアくんかわいい",
  "アクアくんかわいいね……かわいいね……",
  "アクアくんとメルトくんあんまりなかよくなさそう\n「まーた無駄な被弾してんのかよ，学ばないやつですね」\n「うるせえなわざわざバリア張ってやってんだろーがよ！俺は動きたくねえんだよ」",
  "アクアくんに「黒起こします。……起こしてやったんだから働いてくれよ」って嫌な顔されたい人生だった",
  "アクアくん「あなた方の慰めなど届かぬほどの高さにいます」\nこれバカエモいな。すきで〜す",
  "アクアくんのことどちらかというと攻め属性だと思ってたけどアクアくんのイメソンがハンマーソングと痛みの塔だったらオタクありえん嬉しいかもしれない",
  "アクアくんの部屋に入ろうとして「誰がお前なんか上げるか。今すぐお引き取りください」って追い返されたい",
  "シシリーさんはナチュラル面倒見の良いバカ　「一発ぐらい当たっても戻したげるから，いいよ」って言う　アクアくんは「ま，一発ぐらいなら……その代わり死んでも知らないですけど」って言う",
  "えっ　わたしアクアくんに「……死なせるかよ」ってリビデ戻しされたい　いやわたしはされたくない",
  "挙動不審なD3にドーナツ範囲で焼かれたあとのアクアくん「ドーナツ範囲が来たら声掛けるんでD3は飛び降りてください」",
  "アクアくん絶対いっぱい人間起こしたあとありえんため息ついて「世話の焼けるやつだな本当に。俺じゃなければ見捨ててただろうよ」て言っとる　俺にはわかるぞ",
  "アクアくんは真面目系無愛想オスッテだってわたし知ってる　レターモーグリのお手伝いするので敬語しゃべるようになったぐらいだから焦るとちょっと素が出るし口は良くない",
  "PCのポジションコール考えてたけどシシリーさんは「(D4/H1)行きます」アクアくんは「H1で」リアちゃんは「……(D2/D4)」メルトくんは「D4」かな……愛想悪いやつ多いな……",
  "シシリーの字はわたしと同じようなへなちょこ気の抜けた文字だしメルトくんは男性の平均値。アクアくんはかなり上手です",
  "アクアくんは帽子を深く被るのが似合うな　多分顔を見られるのが嫌いだろうな",
  "わたしの中に学召が存在していて，学者のイメソンはDROP2だけど召喚士のイメソンは少年",
  "召喚士と同じPTになるとチラチラ「まずい，召喚士やっぱり強いな」とDPSを気にしている黒魔道士は存在するしそんなことばっかり考えてうっかりギミックミスって召喚士に起こされるまででワンセット",
  "ギャップは本当に強いので普段アホ火力出してイキってる黒魔道士は絶対に召喚士コンプレックスを抱えている",
  "死ぬ度に何故か召喚士に起こされる黒魔道士，「見られたくないところを見られてしまった」「人起こしてないで攻撃に集中してろよ，ヒーラーの仕事だろ」「悔しい」などいろいろな感情がこう　湧くだろうな",
  "黒魔道士くん普段は「黒魔道士様がいるってのにD2取りに来る召喚士マジで何？火力の出ない召喚士にやるD4はないよ」って言ってるのにスイッチが入ると「エギ加護もリザレクもない黒魔道士なんか誰も求めてないだろ」って言い始めるのかわいすぎるな　かわいいです",
  "ところで「どうせお前らも本当は黒魔道士なんかより召喚士の方が良いって思ってんだろ」と卑屈になる黒魔道士普通にバカ良くない？最高なんだけど",
  "戦闘中はドチャクソ真面目顔してるのにプライベートだとめちゃめちゃ遊び人で夜遊びに精を出しているところをレイドでしか会ったことないフレに目撃される学者さん",
  "ぽやぽやしながら集合場所に抱えて連れて行かれる黒魔道士戦闘が始まるとスイッチ入って超頼れるのに90分過ぎた途端に倒れ込んで寝ちゃうのでPTMからは「二重人格なのでは？」と噂されている　学者が担いで帰る",
  "いつも家から出てこないけど戦闘の腕だけはピカイチな黒魔道士をどうにか固定PTに入れるため活動日は毎日集合時間の2時間前に黒魔道士を起こして飯を作ってやり……と介護役を引き受けてしまった学者",
  "ずっと一緒に組んでBHやってくれてる占星がたまの気まぐれで野良の学者と組んで上手にPHやってるの目撃しちゃったときの白魔道士の気持ち考えたことあるかお前？",
  "さっきまで白と組んでBHやってた占星が直後に入った野良PTで学者と組んでPHやってたらわたしはド感情になって死んでしまうと思います",
  "黒魔道士が軽減以外の妨害スキル持ってるイメージが湧かない　でも敵の詠唱を止める黒魔道士はエモいから見たい",
  "普段悪態ばっかりついてるけど竜さんには全幅の信頼を置いていて窮地に立ったときは背中を預けられる唯一の仲間だと思っているぼっち黒魔道士の話してもいいですか？いつも隠しているその素顔を竜さんだけは知っていても良い？",
  "引きこもりぼっち黒魔道士といつも面倒見てあげてるコミュ強竜騎士さんのことだけ考えていていいですか？",
  "拗らせ黒魔道士，才悩人応援歌じゃん(オタク)",
  "ああああああああああ顔の良い卑屈な黒魔道士が見たああああああああああああああああああああああああああああああいいいいいいいいいいいいいいい",
  "黒魔道士が求められる局面まずないから「黒魔道士ほしいから呼びに来た」と言われたところで「お前ら本当は召喚士の方が好きなんだろ」って重い女みたいなこと言っちゃう",
  "アッでも赤魔導士×黒魔道士のホモはかなり読みたい　クソ塞ぎ込んだ無愛想な黒魔道士のことを前衛から気に掛けるD2D4が見たい　🔃ヴァルレイズ🔃🔃ください。🔃",
  "黒魔道士はMPを増やしたり減らしたりと体内エーテルの流れが激しいのできっと慣れない人が黒魔術をやろうとすると気分が悪くなったりするだろうとかを思っている　本職黒さんでも疲れてるときにがっつり戦うと酔って気分悪くなる　なって",
  "えっでも逆に超天真爛漫お調子者黒魔道士もありなのか？",
  "他人を信じていなそうなジョブランキング\n1. 黒魔道士\n2. 踊り子\n3. 戦士",
  "喧嘩っ早い黒魔道士のこと俺大好きなんだよ",
  "入眠がバカ早いモンクの対義語は入眠がクソ遅い黒魔道士",
  "野良零式でお互い「(白|黒)魔道士か……地.雷ちゃんじゃなきゃ良いけど」って最悪なファーストコンタクトから始まる黒魔道士と白魔道士の話って聞いた",
  "おだやかに黒魔術を研究しおだやかに敵を燃やす穏やかな黒魔道士　だって白もできるんだから思いやりがあって心穏やかに決まってるよ",
  "エーテルガバガバ飲んでるせいでちょっとずつ思考機能が危なくなっていく黒魔道士",
  "いやだ〜〜〜〜！！！！！！引き籠り生活崩壊黒魔道士も破壊衝動強めメンヘラ黒魔道士もエーテル薬中黒魔道士も見たいんですわたしは💢💢💢💢💢💢💢💢💢💢もう無理だ",
  "俺は破壊衝動の強い黒魔道士が見たいんだよ",
  "破壊拗らせて人の家焼く黒魔道士だっているんだから当然破壊拗らせて人殺す黒魔道士もいるわよ",
  "そういう黒魔道士は絶対前科がある。大切な人を傷付けたことがあるのでもう誰も傷付けないように家に籠ってるんだな",
  "破壊衝動強すぎてはっとしたときに自分が殴ってるのがフレだったことに気付く黒魔道士見たいな。どうしようにもできることがなくて謝るしかできない",
  "クソ生意気な問題児機工士を頭の切れる召喚士が弱み握って手懐ける話ばっかり考えてる。嘘です生まれつき体内のエーテル循環が強すぎて周囲の人間を中毒状態にさせてきた黒魔道士のことも考えてます",
  "深海少女　完全に零式にトラウマのある引き籠もり黒魔道士のイメソンじゃん………………………………",
  "黒魔道士，絶対に仲の良いフレンドに全面的に介護されてほしい",
  "黒魔道士という4文字　「わたしはプライドだけは無駄に高く戦闘以外の能がない人類の底辺です」という主張を感じます　明らかに社会不適合だ",
  "帰ったらいつも床で寝てる黒魔道士",
  "MPが自己回復できない黒魔道士",
  "厭世観MAX人生諦めかけの死にたがり黒魔道士がなんかの理由で青取って自爆して以来あんなに望んでいたはずの死が怖くて生きたいと願ってしまう話が読めるって聞いたよ",
  "どんな屈強な戦士にもどんな死にたがり黒魔道士にも意志薄弱は等しく付くからな",
  "黒魔術のことしか考えてなさすぎて生活が破滅しているが戦闘の腕は光るものがあるので失うのが惜しいと思われるあまり固定のメンバーに生活を介護される黒魔道士",
  "風呂にも入りたがらないので固定メンバーが担いで風呂場まで持っていくし初めの頃は渋々入ってたんだけど，あるとき風呂場から永遠に出てこなくなったと思いきや脱衣場で延々と魔道書を読んでいるのを発見されて以来服を脱ぐことすらも介護されるようになる",
  "舐めた顔した黒魔道士に「俺に任せときゃ間違いないと思うけどなぁ」って言ってほしいし自信の裏には物凄い特訓があってほしい",
  "プライドばっかり高くてPSが虚無な黒魔道士と世話焼きナイトさんのあれこれがみたーーーーーーーーーーーーーーーーーーーーーい",
  "エオルゼア実在性について考えている。普段は自分で作ったり知人に作ってもらった呪具を使っている黒魔道士がたまたま気が向いて店売りを使ったところあまりのエーテル伝導の悪さに思い切り杖を圧し折る回など",
  "高INT黒魔道士良いな。やたら自分の立ち回りに自信ありそう。敵の攻撃超ギリギリでかわしてニヤついてそう。そういうタイプは大体エンゲルス後先走って落ちて死ぬよ",
  "エーテル中毒で吐いたり禁断症状出したりする黒魔道士が見たいよママ……そしたらきっと寝付ける気がするんだ……",
  "夜中なので良いかなと思うのですけどエオルゼア(実在世界)には絶対にエーテル中毒概念があると信じている節があり，エーテルのリキャが長いのは絶対にエーテル中毒を起こさないためだし黒魔道士はエーテル中毒と隣り合わせで人生をやっていますね　はい",
  "「昨日人を殺したんだ」君はそう言っていた\n↑非実在ヒカセンの話しましたか？",
  "エオルゼアの非実在関係性に思いを馳せ………就寝………ナイトの羽に守られながら全力で敵を狙撃する機工が見える………",
  "非実在光の戦士の話なんですけど自分のエーテルを入れた料理を相方に持たせるやつ見たいじゃん",
  "仲の良かった冒険者仲間が高難度に行くようになって人が変わったように過激になり，それ以来高難度に強い嫌悪と拒否感を持っているひと",
  "高難度勢のことdisってた冒険者が惚れた相手が実は高難度勢だったときの顔して",
  "「なーにが零式だっつの。そんなことで気持ち良くなれるなんて大層幸せな脳味噌をお持ちだことで」\n「あんな覚えゲーがちょっと上手だからって戦地じゃ持て囃されんだもんなぁ」\nっていう小さい家の地下に籠って一生高難度勢をdisってる擦れた冒険者",
  "最近姿を現さない冒険者を心配した仲間からのTellに泣きそうな声で「……どうしよ、立てなくなっちゃった」と返す　一本橋から墜落する幻覚を見て以来足に力が入らず立つこともできなくなったらしい",
  "死にたがり冒険者に墜落幻覚デバフが付くとやっぱり怖くて動けなくなるのか漸く生を終えられる達成感で恍惚としちゃうのかどっちなんですか教えて",
  "なかよし冒険者コンビが派手に喧嘩して戦闘中に仲直りしてくれればそれで満足だわ",
  "零式で気に食わない人間と当たった後イライラしながら帰宅して木人に当たり散らかしてる冒険者を眺める職に就きたい　木人になるしかない",
  "寝ているところを親族に殺されかけたことをきっかけに武器を持つようになった冒険者が冒険の中で仲間を得て同棲するようになるも自分が寝ている空間に他の誰かがいると思うと寝付けなくて毎日寝が浅いのを薬で誤魔化すみたいなやつ。普段ミスらないところでミス連発するようになって　情緒も明らかに不安定になっていくのにPTメンバーが気付くけど肝心の同居人がバカ鈍感で最後まで気付かない。どうしようねと考えている間に黙って家出した本人が街中で眠気に抗えずうたた寝するけど判断能力が下がった結果人の気配が全部自分への悪意に思えてきて通行人に武器を向け始める",
  "悪い夢見てて目が覚め咄嗟に武器を構えたら目の前にいたのは自分を起こしに来たフレンドだったことに攻撃を撃ってから気付く冒険者の話して",
  "英雄を引退してエオルゼアの僻地に酒場を営み始めた冒険者が訪れるいろいろな冒険者の軌跡を幻視・追体験する短編連作が読みたい欲",
  "下半身不随の冒険者の話していい？",
  "自分が強いと思いこんでいて自分の仕事にプライドがある冒険者もいれば常に「ここにいるのは自分でなくても構わない」と諦観気味に構えている冒険者もいるな〜みたいなことを半分寝ながら考えていた　眠い",
  "蒼天入りたてぐらいの冒険者がいろんな人のところを親切心で駆け回っている新生はじめたばかりの冒険者を見て「そんなことしてるから良いように利用されんだよ」と自分を重ね感情的になる回",
  "今週も1週間がんばりましょう　今朝の議題はサブクエをやるヒカセンとやらないヒカセンの関係性　いろんな人に優しく声を掛けて悩みごとを解決してあげる冒険者に対してなんとなく引け目を感じたり意味もなく苛立ったりするヒカセンも存在してくれ",
  "調理師上げてるヒカセンめちゃくちゃかわいいと思うんだよな正直……………救世の英雄でありながら普段は得意の料理を他の冒険者たちに振舞う裏方に徹してるわけで……………本気出したら他のトップ層冒険者と遜色なく戦える調理師……………",
  "2chの拗らせたイキリオタクみたいなヒカセン絶対いてほしい。「絶アレキは今までで一番簡単だろ(エアプ)」みたいなやつ",
  "創作マンとしては順当にレイドやってる人たちの話を考えるのも楽しいけどコンプレックス拗らせて外野から眺めてはあーだこーだ文句ばっか言ってる擦れたヒカセンも好きなんですよう　一生ハウスで堕落した生活しててくれ〜",
  "自分の英雄になれない部分である影身をどうにも好きになれなくて真正面から悪意をぶつけてしまうヒカセンも存在してほしい",
  "最近めちゃくちゃに寝付きが悪くて布団に入ってはごろごろするを毎日やってる，大一番を前に緊張して寝れずに星を眺めにいくヒカセンは実在してほしい",
  "エオルゼアの実在感情のことばっかり考えてる。高難度はやらないヒカセン　ギャザクラメインのヒカセン　戦うのが好きで一日中ダンジョンに籠ってるヒカセン　戦闘職なんでもできるヒカセン　ストーリー半ばで引退したヒカセン　いろいろなヒカセンのいろいろな感情がある…",
  "今日は蒼天でこころが折れて英雄を引退したヒカセンに思いを馳せる日です　考えるのがつらい",
  "初めて行った占学のPTでギリギリまでリビデが戻らないことに不安になりながらも自分がドキドキしちゃってることに気付かぬふりをする暗黒騎士もあり",
  "リビデ受けするたびに「何かの間違いでうっかり死ねないだろうか」とかを考えている暗黒騎士とそういう気持ち全部わかってて知らないふりですぐベネを投げる白魔道士",
  "白魔道士と暗黒騎士，「私が生きている間は絶対にあなたを死なせない」という呪縛のような関係性",
  "だから死にたがり暗黒騎士とお節介白魔道士の話をみんなしてくれよ",
  "死にたがり暗黒騎士とお節介白魔道士の話はいつだって読みたいよ",
  "わたし暗黒騎士のこと好きだからさ〜〜〜戦士から暗黒騎士に転向した人を眺めたいんだよ〜〜〜でかい斧振り回して好き勝手暴れてたやんちゃ男が暗黒騎士になっていろんな気持ちを知ってちょっとおとなしくなるみたいなやつ………敬語だったり口悪かったりする人好きなんだも〜〜〜ん",
  "最近もうほんとに暗黒騎士と白魔道士の関係性についてしか考えてない",
  "死にたがり暗黒騎士とお節介な白魔道士のことばっかり考えてる。ねます",
  "死にたがり暗黒騎士とお節介白魔道士の共依存見たすぎて朝から大泣き",
  "個人的にしっくりくるのは自分の首絞めてるところを目撃されてパニック起こす暗黒騎士だけど，人を守るため戦う暗黒騎士が守るべき仲間の首を絞めるという絵面はなかなかに良い",
  "わたしも首絞められる暗黒騎士好き！",
  "暗黒騎士と白魔道士ならどっちが首絞める側ですか？暗黒騎士が絞首癖持ちで自分の首絞めてるところを白さんに見つかって，でも良いし逆に暗黒騎士が衝動的に白魔道士に掴み掛かって「暗黒さんがそれで安心するなら良いよ」となるのも良い",
  "メンヘラだから首絞めネタが大好き！今日も暗黒騎士と白魔道士の歪んだ関係性を考えながら寝ちゃいます",
  "片腕失って剣が持てなくなった暗黒騎士の気持ちになりたくなってきた",
  "ソウルイーターを自傷に使う暗黒騎士。ひたすら切っては塞がり切っては塞がりを繰り返しているのがSTにでもフレイくんにでもバレてほしい",
  "死にかけた友人のエーテルをソウルイーターで吸って安楽死させる暗黒騎士",
  "相方STが不安な気持ちになるたびにその感情を吸って力に変えていた暗黒騎士があるときふとふたり分の暗黒に耐えきれなくなって終わってほしくなってる",
  "みんなを護るナイトを守るために盾を捨てた暗黒騎士エモすぎる。暗黒騎士は「みんなの騎士様」を守っているとわかっているからナイトからは「大衆のうちの一人」と見られていると思っているし，でも暗黒の危機にはナイトがちゃんと駆け付ける\n「お前がいなくなったら誰が俺のこと守ってくれるんだ」",
  "いつまで経っても自分の暗黒面を受け入れられないタイプの暗黒騎士に思いを馳せていたけどことあるごとに意識の中に存在しているフレイくんに暴れられて困る図しか想像付かなかった",
  "「削りは……頼むぞ！」「言われなくても分かってるよ、お前こそくれぐれもタンク落とすんじゃねえぞ」みたいな関係性大好き",
  "ヒラ×タンクすきかもしれない。めちゃくちゃ上手いヒラ先輩に守ってもらってばっかりのタンク熱い",
  "「誰かを小馬鹿にした口で『君を守りたい』とか　寒気のする台本に酔っている」タンクほんと",
  "タンク×タンクに思い馳せてる",
  "最近タンク×タンクが熱い",
  "タンク×タンクほんとすき…",
  "痛覚を失ったタンクのことだけ考えてます",
  "声を失った吟遊詩人　片腕のモンク　痛覚のないタンク",
  "仕方ないなあ……ちょっとぐらいやる気出しますかぁ　って言いながらスタンス入れる四六時中眠そうなタンクくんください",
  "気性荒くて煽り性能高いタンク性癖です🔃ください。🔃",
  "けどそこらの野良タンクとは組まずに固定で一緒にやってるところに“関係性”感じちゃうな………………",
  "無敵受けで喧嘩するタンク絶対スイッチ超上手だしシャークで飛ばすヘイト量が半端ない",
  "無敵受けで喧嘩するタンク　寝起きの心にめちゃくちゃに刺さって情緒を乱していたところです",
  "敵を目前にして使い物にならなくなるのはタンクの役目　🆗",
  "うっかり一本橋から足を滑らせていやだ死にたくない，落ちるのは嫌だと虚ろな目で震えてしまうタンク見たすぎるのでわたしがやります",
  "誰に聞いたんだか忘れたんだけど(弟だったか？)「装備やら何やらがあまりに強すぎて野良で弱いタンク引くと挑発とシャークでヘイトが移り切らずスイッチできないので高難度は絶対相方と組んでやってるっていうタンクの知り合いがいる」って話，仮に実在するなら熱すぎるだろ……",
  "零式攻略でギスる固定に実在性見出してしまって「もう何回目だと思ってんだそろそろ方角ぐらい覚えろ馬鹿猫」「軽減もまともに炊けないタンクさんが何仰るんだか(笑)MT代わってあげましょうかぁ？」みたいな喧嘩超見たい自分は絶対その場に居合わせたくないけど　なんだかんだで仲良しタンクコンビ",
  "ST　ヤバくないですか？　普段はMTの被ダメを軽減するためにスキル回しをしつつ一人で受けきれない攻撃のときはさっと隣に並び立ち　MTが危険な状態になるとにやっとしながら敵を挑発して攻撃を肩代わりする　俺の出番だとばかりに",
  "STが挑発入れながら「ようやく俺の出番かよッ……、あとは任せとけ相棒！」って踏み出すの激エモいだろ嘘だろ",
  "指輪じゃらつかせながら「楽しませてやるぜ」ってスタンス入れて挑発するガンブレ超見たい。ロイヤルガードのモーションがね"
]
