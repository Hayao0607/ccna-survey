// scripts/05_build_survey.py が生成。手で編集しない
window.SURVEY_QUESTIONS = [
 {
  "qid": "CCNA-0001",
  "theme": "network-basics",
  "type": "single",
  "question": "コラプスドコアネットワークトポロジの特徴は何ですか。",
  "choices": [
   "A. コア層とディストリビューション層を 1 つの結合層として実行できます。",
   "B. コア層とアクセス層を EtherChannel 経由で 1 つの論理ディストリビューション デバイスに接続できます。",
   "C. SOHO 環境内のすべてのワークステーションをインターネット アクセスのある単一のスイッチに接続できます。",
   "D. ワイヤレス デバイスをコア層に直接接続できるため、データ転送が高速化されます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0002",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "[クラウドコンポーネント]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "サービスはさまざまな種類のデバイスとネットワークから利用できる",
    "リソース プールは需要に応じて迅速に拡張できる",
    "プロバイダーは使用量に応じて消費者に請求できる",
    "消費者はサービスの使用を開始または停止するタイミングを選択できる",
    "プロバイダーは共有コンピューティング リソースから CPU、メモリ、ディスクを顧客に割り当てる"
   ],
   "targets": [
    {
     "label": "迅速な伸縮性",
     "slots": 1
    },
    {
     "label": "オンデマンド セルフサービス",
     "slots": 1
    },
    {
     "label": "リソースプーリング",
     "slots": 1
    },
    {
     "label": "測定可能なサービス",
     "slots": 1
    },
    {
     "label": "ブロードネットワーク アクセス",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0003",
  "theme": "network-basics",
  "type": "single",
  "question": "ポイントツーポイント専用回線の利点は何ですか。",
  "choices": [
   "A. フルメッシュ機能",
   "B. 設計の柔軟性",
   "C. 低コスト",
   "D. 構成のシンプルさ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0004",
  "theme": "network-basics",
  "type": "single",
  "question": "ピーク時に帯域幅の最大 90% を占めると予想されるサーバー バックアップを含む、いくつかの新しいアプリケーションをホストするために小規模なデータ センターをアップグレードします。データ センターは、プライマリ回線とセカンダリ回線を介して MPLS ネットワーク プロバイダーに接続します。バックアップに関連するトラフィックによってプライマリ回線が飽和状態になるのを回避するために、エンジニアはデータ センターを低コストで更新するにはどうすればよいでしょうか。",
  "choices": [
   "A. バックアップ サーバーを専用の VLAN に配置します。",
   "B. バックアップ トラフィック専用の回線を構成します。",
   "C. バックアップ サーバーからのトラフィックを専用スイッチに割り当てます。",
   "D. セカンダリ回線を介してバックアップ トラフィックのより具体的なルートをアドバタイズします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0005",
  "theme": "network-basics",
  "type": "multiple",
  "question": "小規模オフィス/ホームオフィスの接続環境の特徴を挙げてください。(2つ選択)",
  "choices": [
   "A. 1 ～ 50 人のユーザーをサポートします。",
   "B. コア、ディストリビューション、およびアクセス レイヤー アーキテクチャが必要です。",
   "C. 50 ～ 100 人のユーザーをサポートします。",
   "D. ルーター ポートはブロードバンド接続に接続します。",
   "E. すべてのアップリンクに 10Gb ポートが必要です。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0006",
  "theme": "network-basics",
  "type": "multiple",
  "question": "フルメッシュ トポロジの 2つの欠点は何ですか。(2つ選択)",
  "choices": [
   "A. サイト間で高い MTU が必要",
   "B. 実装コストが高くなる",
   "C. ポイントツーポイント通信が必要",
   "D. 複雑な構成が必要",
   "E. サイト間では BGP でのみ動作する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0007",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "[ネットワーク・トポロジー]ドラッグ&ドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "トップ・オブ・ラック",
    "エンドユーザー接続",
    "ルーティング,フィルタリング,WANアクセスを提供",
    "パケットを可能な限り高速にスイッチする"
   ],
   "targets": [
    {
     "label": "コア",
     "slots": 1
    },
    {
     "label": "ディストリビューション",
     "slots": 1
    },
    {
     "label": "アクセス",
     "slots": 1
    },
    {
     "label": "スパインリーフ",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0008",
  "theme": "network-basics",
  "type": "multiple",
  "question": "ポイントツーポイント WAN トポロジの動作は何ですか? (2つ選択)",
  "choices": [
   "A. 単一のルータを使用してサイト間のトラフィックをルーティングします。",
   "B. 専用接続を活用します。",
   "C. 単一の回線を介してリモートネットワークを接続します。",
   "D. 本社と支社間の冗長性を実現します。",
   "E. トポロジ内の各ルータ間の直接接続を提供します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0009",
  "theme": "network-basics",
  "type": "multiple",
  "question": "フルメッシュトポロジの 2 つの欠点は何ですか。(2つ選択)",
  "choices": [
   "A. 複雑な設定が必要である。",
   "B. サイト間で高い MTU が必要である。",
   "C. サイト間の BGP でのみ機能する。",
   "D. 導入コストが高い。",
   "E. ポイントツーポイント通信が必要である。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0010",
  "theme": "network-basics",
  "type": "single",
  "question": "ポイントツーポイント専用線の利点は何ですか。",
  "choices": [
   "A. 低コスト",
   "B. フルメッシュ機能",
   "C. 構成の単純さ",
   "D. 設計の柔軟性"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0011",
  "theme": "network-basics",
  "type": "multiple",
  "question": "ポイントツーポイント WAN トポロジに関する、2 つの適切な動作は何ですか。(2つ選択)",
  "choices": [
   "A. 専用の接続を利用する。",
   "B. トポロジー内の各ルーター間に直接接続を提供する。",
   "C. 中央オフィスとブランチ オフィス間に冗長性を提供する。",
   "D. 単一のルーターを使用してサイト間のトラフィックをルーティングする。",
   "E. リモート ネットワークを 1 本の回線で接続する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0012",
  "theme": "network-basics",
  "type": "single",
  "question": "2 層アーキテクチャにおける、コラプスコア層によって実行される機能はどれですか。",
  "choices": [
   "A. ルーティング ポリシーの適用",
   "B. データ ポリシーの対象トラフィックをマークする",
   "C. セキュリティポリシーの適用",
   "D. ユーザーをネットワークのエッジに接続する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0013",
  "theme": "network-basics",
  "type": "single",
  "question": "どのタイプの組織がコラプスコアアーキテクチャを使用する必要がありますか。",
  "choices": [
   "A. 小規模であり、ネットワークコストを削減する必要がある",
   "B. 大規模であり、ハードウェア障害時のダウンタイムを最小限に抑える必要がある",
   "C. 大規模であり、柔軟でスケーラブルなネットワーク設計が必要",
   "D. 現在は小規模だが、近い将来に劇的に成長すると予想される"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0014",
  "theme": "network-basics",
  "type": "single",
  "question": "T1 ポイントツーポイント接続の最大帯域幅はどれですか。",
  "choices": [
   "A. 1.544 Mbps",
   "B. 2.048 Mbps",
   "C. 34.368 Mbps",
   "D. 43.7 Mbps"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0015",
  "theme": "network-basics",
  "type": "multiple",
  "question": "ビジネスの拡張性とネットワークの信頼性に役立つ 2 つの WAN アーキテクチャ オプションはどれですか。(2つ選択)",
  "choices": [
   "A. 非同期ルーティング",
   "B. シングルホームブランチ",
   "C. デュアルホームブランチ",
   "D. 静的ルーティング",
   "E. 動的ルーティング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0016",
  "theme": "network-basics",
  "type": "single",
  "question": "どの WAN トポロジが最も高い信頼性を持っていますか。",
  "choices": [
   "A. ポイント・ツー・ポイント",
   "B. ルータ・オン・アスティック",
   "C. フルメッシュ",
   "D. ハブ・アンド・スポーク"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0017",
  "theme": "network-basics",
  "type": "single",
  "question": "簡易性、品質、可用性の組み合わせを提供する WAN トポロジはどれですか。",
  "choices": [
   "A. 部分メッシュ",
   "B. フルメッシュ",
   "C. ポイントツーポイント",
   "D. ハブアンドスポーク"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0018",
  "theme": "network-basics",
  "type": "single",
  "question": "1000 BASE-SX GBIC モジュールを使用するスイッチと 1000 BASE-SX SFP モジュールを使用する別のスイッチを相互接続するには、どのタイプのケーブルを使用しますか。",
  "choices": [
   "A. LC から LC",
   "B. LC から SC",
   "C. SC から SC",
   "D. SC から ST"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0019",
  "theme": "network-basics",
  "type": "single",
  "question": "どの信号周波数が 1 分間に 60 回表示されますか。",
  "choices": [
   "A. 1 Hz",
   "B. 1 GHz",
   "C. 60 Hz",
   "D. 60 GHz"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0020",
  "theme": "network-basics",
  "type": "single",
  "question": "show interface counters errors コマンドの出力には、サーバーに接続されているインターフェイスの FCS-Err カウントが高いことが示されています。スループットの問題の原因は何ですか。",
  "choices": [
   "A. 帯域幅の使用量が多い",
   "B. ケーブルの物理的障害",
   "C. 速度の不一致",
   "D. ケーブルが長すぎる"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0021",
  "theme": "network-basics",
  "type": "multiple",
  "question": "光ファイバーケーブルを銅線ケーブルと区別する特徴は何ですか。(2つ選択)",
  "choices": [
   "A. 長距離の信号伝送が可能である。",
   "B. より高いスループットのオプションを提供できる。",
   "C. PoE デバイスに電流をより遠くまで伝送できる。",
   "D. パッチケーブルを購入する際に安価である。",
   "E. 温度や湿度の変化に対する感度が高い。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0022",
  "theme": "network-basics",
  "type": "single",
  "question": "10GBase-SR と 10GBase-LR インターフェイスで共有されるプロパティはどれですか。",
  "choices": [
   "A. どちらもマルチモードファイバータイプを使用する。",
   "B. どちらも伝送にはUTPケーブルメディアが必要である。",
   "C. どちらもシングルモードファイバータイプを使用する。",
   "D. どちらも伝送には光ファイバーケーブルメディアが必要である。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0023",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "長くなるほど歪む",
    "光に単一の波長を使用します",
    "コアを通過する際の光の反射は最小限である",
    "最大100ギガビットのデータを送信しますが、距離が長くなると速度が低下します。"
   ],
   "targets": [
    {
     "label": "シングルモードファイバー",
     "slots": 2
    },
    {
     "label": "マルチモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0024",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "[ケーブル タイプ]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "単一の光波長を使用",
    "通常は小規模オフィスの用途で使用されます",
    "整合性の損失がほとんどなく、長距離に最適",
    "導体、ベッド、シースを含みます"
   ],
   "targets": [
    {
     "label": "銅",
     "slots": 2
    },
    {
     "label": "シングルモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0025",
  "theme": "network-basics",
  "type": "single",
  "question": "これらの基準を使用してルータとスイッチを接続する場合、どのタイプのケーブルを使用しますか。\n①ピン1と2は受信用、ピン3と6は送信用\n②自動検出MDI-Xは利用できない",
  "choices": [
   "A. クロス",
   "B. ロール",
   "C. コンソール",
   "D. ストレート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0026",
  "theme": "network-basics",
  "type": "single",
  "question": "これらの基準を使用して 2つの同様のデバイスを接続する場合、どのタイプのケーブルを使用しますか。\n①ピンの1は3へ、 2は6へ接続する、②自動検出 MDI-X は使用できない。",
  "choices": [
   "A. ストレートスルー",
   "B. コンソール",
   "C. クロスオーバー",
   "D. ロールオーバー"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0027",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "長距離にわたるDWDM光システムに使用される",
    "PoE実装用の導管を供給",
    "コア径は9ミクロン",
    "簡単にアクセスして安全な情報を入手できる"
   ],
   "targets": [
    {
     "label": "同軸",
     "slots": 2
    },
    {
     "label": "シングルモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0028",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "ケーブルタイプ[ドラッグ アンドドロップ]",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "取り扱い時に損傷を受けやすい",
    "シールド付きとシールドなしのツイストペアで構成されている",
    "長距離では減衰が増加",
    "盗聴しやすく、情報を入手しやすい"
   ],
   "targets": [
    {
     "label": "銅線",
     "slots": 2
    },
    {
     "label": "マルチモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0029",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "コア、クラッド、コーティングを含む",
    "電子信号の形でデータを送信する",
    "簡単にアクセスして安全な情報を入手することができます",
    "光のパルスを使って信号を送信する"
   ],
   "targets": [
    {
     "label": "同軸",
     "slots": 2
    },
    {
     "label": "マルチモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0030",
  "theme": "network-basics",
  "type": "single",
  "question": "ルータとスイッチを接続する場合、どのタイプのケーブルを使用する必要がありますか。",
  "choices": [
   "A. コンソール",
   "B. ロールオーバー",
   "C. ストレート",
   "D. クロスオーバー"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0031",
  "theme": "network-basics",
  "type": "multiple",
  "question": "光ファイバーケーブルが、銅線ケーブルと異なる2つの適切な事実は何か。(2つ選択)",
  "choices": [
   "A. パッチケーブルを購入すると安く済む。",
   "B. PoE デバイス向けにさらに遠くまで電流を伝送する。",
   "C. より優れたスループット オプションを提供する。",
   "D. 温度と湿度の変化に対してより敏感である。",
   "E. より長い距離まで信号を伝送する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0032",
  "theme": "network-basics",
  "type": "single",
  "question": "OM3 と OM4 の光ファイバー ケーブルの類似点は何ですか。",
  "choices": [
   "A. どちらもコア直径は 62.5 ミクロンである。",
   "B. どちらもコア直径は 100 ミクロンである。",
   "C. どちらもコア直径は 50 ミクロンである。",
   "D. どちらもコア直径は 9 ミクロンである。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0033",
  "theme": "network-basics",
  "type": "single",
  "question": "1000BASE-LX 規格と 1000BASE-T 規格の類似点は何ですか。",
  "choices": [
   "A. どちらも同じデータリンク ヘッダーとトレーラーの形式を使用する。",
   "B. どちらのケーブル タイプも RJ-45 コネクタをサポートしている。",
   "C. どちらもノード間で最大 550 メートルをサポートしている。",
   "D. どちらのケーブル タイプも LR コネクタをサポートしている。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0034",
  "theme": "network-basics",
  "type": "single",
  "question": "クライアントは、データセンターのコア スイッチに直接接続されているサーバーからのスループットが低下します。ネットワーク エンジニアは、サーバへの接続の遅延が最小限であることを確認しましたが、データ転送の信頼性が低く、show interfaces counters errors コマンドの出力には、サーバに接続されているインターフェイスでの高いFCSエラー数が示されています。スループットの問題の原因は何ですか。",
  "choices": [
   "A. 物理的なケーブルの障害",
   "B. 速度(speed)の不一致",
   "C. 高帯域幅の使用量",
   "D. ケーブルが長すぎる"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0035",
  "theme": "network-basics",
  "type": "single",
  "question": "SFP モジュールを使用する場合、銅線インターフェイスとファイバー インターフェイスの両方について同様であることは何ですか。",
  "choices": [
   "A. 信号強度を強化するためのインライン光減衰器をサポートしている。",
   "B. 単一モジュールでシングルモードとマルチモードに対応している。",
   "C. ホットスワップ可能であるため、サービスの中断を最小限に抑える。",
   "D. 半二重モードで最大 100 Mbps の信頼できる帯域幅を提供する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0036",
  "theme": "network-basics",
  "type": "multiple",
  "question": "TP Cat 5e ケーブルと Cat 6a ケーブルの 2 つの類似点は何ですか。(2つ選択)",
  "choices": [
   "A. どちらも最大 10 ギガビットの速度をサポートする。",
   "B. どちらも少なくとも 1 ギガビットの速度をサポートする。",
   "C. どちらも最大 55 メートルの距離をサポートする。",
   "D. どちらも最大 100 メートルの距離をサポートする。",
   "E. どちらも 500 MHz の周波数で動作する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0037",
  "theme": "network-basics",
  "type": "single",
  "question": "1 分間に 60 回現れる信号の頻度はどれですか。",
  "choices": [
   "A. 1Hz信号",
   "B. 1 GHz 信号",
   "C. 60 Hz 信号",
   "D. 60 GHz 信号"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0038",
  "theme": "network-basics",
  "type": "single",
  "question": "UTP ケーブルと STP ケーブルの違いとして適切なのは次のうちどれですか。",
  "choices": [
   "A. UTP ケーブルはより高速で信頼性の高いデータ転送速度を提供するが、STP ケーブルは低速で信頼性が低くなる。",
   "B. STP ケーブルはシールドされており、電磁干渉から保護されているが、UTP には電磁干渉に対する同様の保護がない。",
   "C. STP ケーブルは調達が安価で設置が簡単だが、UTP ケーブルはより高価で設置が困難である。",
   "D. UTP ケーブルはクロストークや干渉が起こりにくく、STP ケーブルはクロストークや干渉が起こりやすい。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0039",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "重なり合う光パルスの歪みを除去する",
    "単一の固体導体を含む",
    "長距離のDWDM光システムに通常使用される",
    "電気および磁気干渉の影響を受ける"
   ],
   "targets": [
    {
     "label": "同軸",
     "slots": 2
    },
    {
     "label": "シングルモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0040",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "単一波長の光を使用する",
    "単一の固体導体が含まれています",
    "電子信号の形でデータを送信する",
    "長距離にわたるDWDM光システムによく使用されます。"
   ],
   "targets": [
    {
     "label": "同軸",
     "slots": 2
    },
    {
     "label": "シングルモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0041",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "小規模オフィスアプリケーションでよく使用されます",
    "通常は内部データセンター接続に使用されます",
    "長距離では減衰が増加する",
    "シールド付きツイストペアとシールドなしツイストペアで構成されている"
   ],
   "targets": [
    {
     "label": "同軸",
     "slots": 2
    },
    {
     "label": "マルチモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0042",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "簡単に壊れない",
    "コアを通過する際の光の反射は最小限である",
    "単一の固体導体が含まれています",
    "整合性をほとんど損なわずに長距離に最適です"
   ],
   "targets": [
    {
     "label": "シングルモードファイバー",
     "slots": 2
    },
    {
     "label": "同軸",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0043",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "シールド付きツイストペアとシールドなしツイストペアで構成されている",
    "コア径は9ミクロン",
    "導体、ベッド、シースを含む",
    "単一波長の光を使用する"
   ],
   "targets": [
    {
     "label": "シングルモードファイバー",
     "slots": 2
    },
    {
     "label": "同軸",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0044",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "整合性をほとんど失わずに長距離でも最適です",
    "小規模オフィスアプリケーションでよく使用されます",
    "導体、ベッド、シースを含む",
    "単一波長の光を使用する"
   ],
   "targets": [
    {
     "label": "同軸",
     "slots": 2
    },
    {
     "label": "シングルモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0045",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "長距離で最大40Gbit/sのデータ伝送が可能",
    "電気的および磁気的干渉の影響を受ける",
    "簡単にアクセスして安全な情報を入手することができます",
    "コアを通過する際の光の反射は最小限である"
   ],
   "targets": [
    {
     "label": "同軸",
     "slots": 2
    },
    {
     "label": "シングルモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0046",
  "theme": "network-basics",
  "type": "single",
  "question": "これらの基準に従ってルーターとスイッチを接続する場合、どのケーブル タイプを使用する必要がありますか?\n・ピン 1 と 2 はレシーバー、ピン 3 と 6 はトランスミッターです。\n・自動検出 MDI-X は使用できません。",
  "choices": [
   "A. クロスオーバー",
   "B. ロールオーバー",
   "C. コンソール",
   "D. ストレートスルー"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0047",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "左側の特性を右側のケーブル タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "長距離では減衰が増加する",
    "簡単にアクセスして安全な情報を入手することができます",
    "シールド付きツイストペアとシールドなしツイストペアで構成されている",
    "取り扱うと損傷しやすい"
   ],
   "targets": [
    {
     "label": "同軸",
     "slots": 2
    },
    {
     "label": "マルチモードファイバー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0048",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "R19 のパフォーマンスが低下する原因は何ですか。",
  "choices": [
   "A. 過度の衝突",
   "B. 速度とデュプレックスの不一致",
   "C. ポートのオーバーサブスクリプション",
   "D. 過度の CRC エラー"
  ],
  "figure": "data/figures/CCNA-0048.png"
 },
 {
  "qid": "CCNA-0049",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "本社でホストされているアプリケーションのパフォーマンスが低いという件で支社から電話を受けました。ethernet1は、Router1と LAN スイッチの間に接続されています。何が原因ですか。",
  "choices": [
   "A. デュプレックスの不一致があります",
   "B. MTU がデフォルト値に設定されていません",
   "C. リンクが過剰に使用されています",
   "D. QoS ポリシーによってトラフィックがドロップされています"
  ],
  "figure": "data/figures/CCNA-0049.png"
 },
 {
  "qid": "CCNA-0050",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "正常にテストされた Cat5ケーブルを介して接続されています。インターフェイスが両方ともダウン状態である原因は何ですか。",
  "choices": [
   "A. スイッチは互換性のないデュプレックス設定で構成されています。",
   "B. スイッチの速度設定が一致していません。",
   "C. 2 つのスイッチ間の距離は Cat5 ではサポートされていません。",
   "D. 設定に portfast コマンドがありません。"
  ],
  "figure": "data/figures/CCNA-0050.png"
 },
 {
  "qid": "CCNA-0051",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "技術者がネットワーク速度の低下に関するレポートを受け取り、問題はインターフェイス FastEthernet0/13 に特定されました。この問題の根本的な原因は何ですか。",
  "choices": [
   "A. 物理エラー",
   "B. ローカル バッファの過負荷",
   "C. IP アドレスの重複",
   "D. 遠端のポートがエラー無効"
  ],
  "figure": "data/figures/CCNA-0051.png"
 },
 {
  "qid": "CCNA-0052",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "どのようなインターフェース状態ですか。",
  "choices": [
   "A. 不良 NIC",
   "B. デュプレックスの不一致",
   "C. 衝突",
   "D. 高スループット"
  ],
  "figure": "data/figures/CCNA-0052.png"
 },
 {
  "qid": "CCNA-0053",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "どのようなインターフェース状態ですか。",
  "choices": [
   "A. 不良 NIC",
   "B. デュプレックスの不一致",
   "C. 衝突",
   "D. 高スループット"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0054",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "どのようなインターフェース状態ですか。",
  "choices": [
   "A. キューイング",
   "B. デュプレックスの不一致",
   "C. 衝突",
   "D. 高スループット"
  ],
  "figure": "data/figures/CCNA-0054.png"
 },
 {
  "qid": "CCNA-0055",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "どのようなインターフェース状態ですか。",
  "choices": [
   "A. 高いスループット",
   "B. キューイング",
   "C. 不良 NIC",
   "D. ブロードキャスト ストーム"
  ],
  "figure": "data/figures/CCNA-0055.png"
 },
 {
  "qid": "CCNA-0056",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "どのようなインターフェース状態ですか。",
  "choices": [
   "A. 不良 NIC",
   "B. ブロードキャスト ストーム",
   "C. キューイング",
   "D. デュプレックスの不一致"
  ],
  "figure": "data/figures/CCNA-0056.png"
 },
 {
  "qid": "CCNA-0057",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "アプリケーションのパフォーマンスの問題、VoIP オーディオ品質の低下、ダウンロードの遅延が発生しています。問題の原因は何ですか。",
  "choices": [
   "A. QoS キューイング",
   "B. インターフェース構成",
   "C. ブロードキャスト ストーム",
   "D. 過剰使用"
  ],
  "figure": "data/figures/CCNA-0057.png"
 },
 {
  "qid": "CCNA-0058",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "インターフェイス GigabitEthernet0/0/1 の問題は何ですか。",
  "choices": [
   "A. ケーブルの切断",
   "B. デュプレックスの不一致",
   "C. ポートのセキュリティ",
   "D. 高スループット"
  ],
  "figure": "data/figures/CCNA-0058.png"
 },
 {
  "qid": "CCNA-0059",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "スイッチ cat9k-acc-1 は、ユーザーをキャンパス LAN に接続します。ネットワーク経由で印刷サービスにアクセスできません。接続の問題の原因となっているのはどのインターフェイスの問題ですか。",
  "choices": [
   "A. 不正なチェックサムにより、イーサネット フレームがドロップされています。",
   "B. 過度の衝突によりフレームがドロップされています。",
   "C. 多数のブロードキャスト パケットによりポートがリセットされています。",
   "D. インターフェイス出力キューがイーサネット フレームを処理できません。"
  ],
  "figure": "data/figures/CCNA-0059.png"
 },
 {
  "qid": "CCNA-0060",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "インターネットへの接続が不安定です。インターフェイスの問題の原因は何ですか。",
  "choices": [
   "A. ARPタイムアウトが有効になっているためブロードキャストパケットが拒否される",
   "B. ブロードキャストストームにより受信バッファがいっぱいになる",
   "C. 半二重ネゴシエーションによりフレームが破棄される",
   "D. 64バイト未満の小さなフレームはサイズが小さいため拒否される"
  ],
  "figure": "data/figures/CCNA-0060.png"
 },
 {
  "qid": "CCNA-0061",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "このスイッチでは何が起こっているのでしょうか?",
  "choices": [
   "A. 64バイト未満のフレームを大量に受信しています。",
   "B. 16回の送信試行に失敗するとフレームがドロップされます。",
   "C. 内部送信バッファが過負荷になっています。",
   "D. 1518バイトを超えるフレームを過剰に受信しています。"
  ],
  "figure": "data/figures/CCNA-0061.png"
 },
 {
  "qid": "CCNA-0062",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "上記出力を確認してください。インターフェイス TenGigabitEthemet0/0/0 を流れるトラフィックでは、転送速度が遅くなります。この問題の原因は何ですか。",
  "choices": [
   "A. 速度(speed)の競合",
   "B. キューイングのドロップ",
   "C. 全二重/半二重が不一致(duplex mismatch)",
   "D. トラフィックの混雑"
  ],
  "figure": "data/figures/CCNA-0062.png"
 },
 {
  "qid": "CCNA-0063",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "上記を参照してください。技術者はネットワークが遅いというレポートを受け取り、問題はインターフェイス FastEthemet0/13 に特定されています。問題の根本原因は何ですか。",
  "choices": [
   "A. ローカルバッファの過負荷",
   "B. 遠端の err-disabled ポート",
   "C. 物理的エラー",
   "D. 重複した IP アドレス指定"
  ],
  "figure": "data/figures/CCNA-0063.png"
 },
 {
  "qid": "CCNA-0064",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "上記を参照してください。サイト A は最近、新しいシングルモード ファイバー パスを介してサイト B に接続されました。サイト A のユーザーは、サイト B でホストされているアプリケーションとの断続的な接続の問題を報告しています。問題の理由は何ですか。このとき、サイトAとサイトBの距離は約7KM離れているとします。",
  "choices": [
   "A. 物理ネットワーク エラーが 2 つのサイト間で送信されている",
   "B. 使用量が多いと遅延が長くなる",
   "C. 接続に間違ったタイプのケーブルが使用された",
   "D. 間違ったタイプのトランシーバーがリンク上のデバイスに挿入されている"
  ],
  "figure": "data/figures/CCNA-0064.png"
 },
 {
  "qid": "CCNA-0065",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "上記を参照してください。ネットワーク インターフェイスのパフォーマンスが低下する理由は何ですか。",
  "choices": [
   "A. インターフェイスが過剰なブロードキャストトラフィックを受信している。",
   "B. インターフェイスの帯域幅設定が間違っている。",
   "C. 2 つのデバイス間のケーブル接続に欠陥がある。",
   "D. インターフェイスは、接続されたデバイスとは異なる速度で動作している。"
  ],
  "figure": "data/figures/CCNA-0065.png"
 },
 {
  "qid": "CCNA-0066",
  "theme": "network-basics",
  "type": "single",
  "question": "ポートが Err-disabled 状態になる原因は何ですか。",
  "choices": [
   "A. ポートに何も接続されていない",
   "B. リンクフラッピング",
   "C. 待ち時間",
   "D. ポート上で発行された shutdown コマンド"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0067",
  "theme": "network-basics",
  "type": "single",
  "question": "PoEポリシングが有効になっているスイッチ ポートによってどのアクションが実行されますか。",
  "choices": [
   "A. PoE スイッチ ポートの電力使用量がチェックされるため、接続されたデバイスへのデータ フローが一時的に停止される。",
   "B. 受電装置が PoE スイッチ ポートから電力の供給を開始すると、syslog メッセージが生成される。",
   "C. デバイスが使用している電力が最小構成電力未満であるとスイッチが判断した場合、デバイスに障害が発生したものとみなし、デバイスを切断する。",
   "D. 監視対象ポートが電力の最大管理値を超えると、ポートはシャットダウンされ、err-disabled になる。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0068",
  "theme": "network-basics",
  "type": "multiple",
  "question": "スイッチに入るフレームは、フレームチェックシーケンスに失敗します。どの2つのインターフェイスカウンタがインクリメントされますか。(2つ選択)",
  "choices": [
   "A. 入力誤り",
   "B. フレーム",
   "C. giants",
   "D. CRC",
   "E. runts"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0069",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "この出力ではどのインターフェイス状態が発生していますか。",
  "choices": [
   "A. ブロードキャストストーム",
   "B. コリジョン",
   "C. 高スループット",
   "D. duplex不一致"
  ],
  "figure": "data/figures/CCNA-0069.png"
 },
 {
  "qid": "CCNA-0070",
  "theme": "network-basics",
  "type": "single",
  "question": "半二重通信と全二重通信の違いとして正しいものはどれか。",
  "choices": [
   "A. 半二重通信はスイッチ環境でのみ使用される",
   "B. 全二重通信ではコリジョンが発生するが、半二重では発生しない",
   "C. 全二重通信では送信と受信を同時に行えるが、半二重通信では同時に行えない",
   "D. 半二重通信の方が全二重通信より帯域幅が広い"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0071",
  "theme": "network-basics",
  "type": "single",
  "question": "半二重通信と全二重通信の違いとして誤っているものはどれか。",
  "choices": [
   "A. 全二重通信では送信と受信を同時に行えるが、半二重通信では同時に行えない",
   "B. 半二重通信の方が全二重通信より帯域幅が広い",
   "C. 全二重通信ではコリジョンが発生するが、半二重では発生しない",
   "D. 半二重通信はスイッチ環境でのみ使用される"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0072",
  "theme": "network-basics",
  "type": "single",
  "question": "半二重通信と全二重通信の違いとして誤っているものはどれか。",
  "choices": [
   "A. 全二重通信では送信と受信を同時に行えるが、半二重通信では同時に行えない",
   "B. 半二重通信はスイッチ環境でのみ使用される",
   "C. 全二重通信ではコリジョンが発生するが、半二重では発生しない",
   "D. 半二重通信の方が全二重通信より帯域幅が広い"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0073",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。インターフェイス TenGigabitEthemet0/0/0 を流れるトラフィックでは、転送速度が遅くなります。この問題の原因は何ですか?",
  "choices": [
   "A. 速度の競合",
   "B. キューイングドロップ",
   "C. デュプレックスの非互換性",
   "D. 大渋滞"
  ],
  "figure": "data/figures/CCNA-0073.png"
 },
 {
  "qid": "CCNA-0074",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "この出力ではどのインターフェイス状態が発生していますか?",
  "choices": [
   "A. NIC が不良です",
   "B. 高スループット",
   "C. 順番待ち",
   "D. ブロードキャストストーム"
  ],
  "figure": "data/figures/CCNA-0074.png"
 },
 {
  "qid": "CCNA-0075",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "この出力ではどのインターフェイス状態が発生していますか?",
  "choices": [
   "A. 衝突",
   "B. ブロードキャストストーム",
   "C. デュプレックスの不一致",
   "D. 順番待ち"
  ],
  "figure": "data/figures/CCNA-0075.png"
 },
 {
  "qid": "CCNA-0076",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "この出力ではどのインターフェイス状態が発生していますか?",
  "choices": [
   "A. 衝突",
   "B. 不良 NIC",
   "C. デュプレックスの不一致",
   "D. ブロードキャストストーム"
  ],
  "figure": "data/figures/CCNA-0076.png"
 },
 {
  "qid": "CCNA-0077",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。インターフェイス GigabitEthernet0/0/1 の問題は何ですか?",
  "choices": [
   "A. ポートセキュリティ",
   "B. ケーブルの切断",
   "C. 高スループット",
   "D. デュプレックスの不一致"
  ],
  "figure": "data/figures/CCNA-0077.png"
 },
 {
  "qid": "CCNA-0078",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。スイッチ cat9k-acc-1 は、ユーザーをキャンパス LAN に接続します。ネットワーク経由で印刷サービスにアクセスできません。接続の問題を引き起こしているインターフェイスの問題はどれですか?",
  "choices": [
   "A. 不正なチェックサムにより、イーサネット フレームがドロップされます。",
   "B. 過度の衝突によりフレームがドロップされる。",
   "C. 大量のブロードキャスト パケットによりポートがリセットされる。",
   "D. インターフェイス出力キューはイーサネット フレームを処理できません。"
  ],
  "figure": "data/figures/CCNA-0078.png"
 },
 {
  "qid": "CCNA-0079",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "この出力ではどのインターフェイス状態が発生していますか?",
  "choices": [
   "A. ブロードキャストストーム",
   "B. 順番待ち",
   "C. 不良 NIC",
   "D. デュプレックスの不一致"
  ],
  "figure": "data/figures/CCNA-0079.png"
 },
 {
  "qid": "CCNA-0080",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。問題の原因は何ですか?",
  "choices": [
   "A. シャットダウンコマンド",
   "B. 間違ったケーブルの種類",
   "C. STP",
   "D. ポートセキュリティ"
  ],
  "figure": "data/figures/CCNA-0080.png"
 },
 {
  "qid": "CCNA-0081",
  "theme": "network-basics",
  "type": "single",
  "question": "ポートが err-disabled 状態になる原因は何ですか?",
  "choices": [
   "A. ポート上で発行された shutdown コマンド",
   "B. ポートセキュリティ違反",
   "C. ポートに何も接続されていない",
   "D. レイテンシ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0082",
  "theme": "network-basics",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルーター R19 のパフォーマンス低下の原因は何ですか?",
  "choices": [
   "A. 過剰な衝突",
   "B. 過剰な CRC エラー",
   "C. ポートのオーバーサブスクリプション",
   "D. 速度とデュプレックスの不一致"
  ],
  "figure": "data/figures/CCNA-0082.png"
 },
 {
  "qid": "CCNA-0083",
  "theme": "network-basics",
  "type": "single",
  "question": "HTTPS などの広範なエラーチェックを必要とするアプリケーションでは、UDP よりも TCP が望ましいのはなぜですか。",
  "choices": [
   "A. UDPは確認応答なしで動作し、TCPは受信したパケットごとに確認応答を送信する。",
   "B. UDPはすべてのパケットの配信を確実に保証し、TCPは負荷が高い場合にパケットをドロップする。",
   "C. UDPはパケットの配信にフロー制御を使用し、TCPは効率的なパケット配信のために輻輳制御を使用する。",
   "D. UDPはパケットが順番に到着するようにシーケンス データを使用するが、TCPはパケットをランダムな順序で受信する機能を提供する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0084",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "[TCP/UDP]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ベストエフォート型サービスを提供",
    "信頼性の高いデータ転送をサポート",
    "最小限の遅延でストリーミング操作に適しています",
    "デバイス間でファイルを確実に共有するために使用"
   ],
   "targets": [
    {
     "label": "TCP",
     "slots": 2
    },
    {
     "label": "UDP",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0085",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "[TCP/UDP]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "データチャネルを必要とせずにパケットに含まれるデータに基づいて送信される",
    "パケットを送信する前にクライアントとサーバーが接続を確立する必要がある",
    "信頼性の高いデータ転送をサポートする",
    "ベストエフォート型サービスを提供"
   ],
   "targets": [
    {
     "label": "TCP",
     "slots": 2
    },
    {
     "label": "UDP",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0086",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "[トランスポート層のプロトコル]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "必要なコンピュータリソースが少ない",
    "パケットの配信を保証",
    "失われたパケットの再送信をサポート",
    "32 ビットのシーケンス番号を使用",
    "パケット内のオーバーヘッドが最小限",
    "音声トラフィックに最適"
   ],
   "targets": [
    {
     "label": "TCP",
     "slots": 3
    },
    {
     "label": "UDP",
     "slots": 3
    }
   ]
  }
 },
 {
  "qid": "CCNA-0087",
  "theme": "network-basics",
  "type": "single",
  "question": "VoIP などの低遅延を必要とするアプリケーションでは、なぜ UDP が TCP よりも適しているか。",
  "choices": [
   "A. UDPはすべてのパケットの配信を確実に保証し、TCPは高負荷時にパケットをドロップする。",
   "B. TCPは効率的なパケット配信のために輻輳制御を使用し、UDPはパケット配信のためにフロー制御メカニズムを使用する。",
   "C. UDPはパケットが順番に到着するようにシーケンスデータを使用し、TCPはパケットをランダムな順番で受信する機能を提供する。",
   "D. TCPは受信したパケットごとに確認応答を送信し、UDPは確認応答なしで動作する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0088",
  "theme": "network-basics",
  "type": "single",
  "question": "どのような条件下で TCP が UDP より優先されますか。",
  "choices": [
   "A. データの信頼性が重要な場合は TCP が使用され、パケットの欠落が許容される場合は UDP が使用される",
   "B. 低遅延が最適な場合は UDP が使用され、遅延が許容される場合は TCP が使用される",
   "C. データの対話性が高い場合はUDPが使用され、データが時間に敏感な場合はTCPが使用される",
   "D. データの欠落がより許容される場合はTCP が使用され、データが順序どおりに受け入れられない場合は UDP が使用される"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0089",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "[TCP/UDP]ドラッグ＆ドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "トランスポート層でのコネクションレス",
    "データの完全性を保証する",
    "最小限のエラーチェック",
    "確認応答パケットに依存する",
    "シーケンス番号を使用する",
    "リアルタイム・アプリケーションをサポート"
   ],
   "targets": [
    {
     "label": "TCP",
     "slots": 3
    },
    {
     "label": "UDP",
     "slots": 3
    }
   ]
  }
 },
 {
  "qid": "CCNA-0090",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "[TCP/UDP]ドラッグ&ドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "パケット損失に耐性があります",
    "ウェブブラウジングをサポートします",
    "ライブストリーミングに適しています",
    "確立された接続が必要です",
    "再送信はサポートされていません",
    "データを特定の順序で送信します"
   ],
   "targets": [
    {
     "label": "TCP",
     "slots": 3
    },
    {
     "label": "UDP",
     "slots": 3
    }
   ]
  }
 },
 {
  "qid": "CCNA-0091",
  "theme": "network-basics",
  "type": "single",
  "question": "TCP プロトコルと UDP プロトコルの違いは何ですか?",
  "choices": [
   "A. TCPはセグメント番号を割り当てることで送受信中のセグメントを追跡し、UDPはネットワーク状況に応じてデータフローを調整します。",
   "B. TCPは転送前に相手側デバイスとの接続を確立しますが、UDPは接続を確立せずに転送します。",
   "C. TCPは上位プロトコル層でエラーチェックを行いながら一定速度でデータを送信しますが、UDPはエラーチェックとシーケンス処理を行います。",
   "D. TCPはハンドシェイクを待たずにデータを直ちに送信しますが、UDPは受信側からの応答を待ってから追加データを送信します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0092",
  "theme": "network-basics",
  "type": "drag_drop",
  "question": "[ドラッグアンドドロップ]トランスポート層",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ストリーミングやVoIPに使用",
    "信頼性の高い接続を提供",
    "3ウェイハンドシェイクを使用",
    "Webブラウジングに最適",
    "コネクションレス型プロトコル",
    "より高速なデータ転送"
   ],
   "targets": [
    {
     "label": "TCP",
     "slots": 3
    },
    {
     "label": "UDP",
     "slots": 3
    }
   ]
  }
 },
 {
  "qid": "CCNA-0093",
  "theme": "network-basics",
  "type": "single",
  "question": "TCPと UDP の違いは何か。",
  "choices": [
   "A. TCPは順序付けられた信頼性の高いデータ配信を保証し、UDPは低遅延と高スループットを実現します。",
   "B. TCPはマルチキャストおよびブロードキャストデータ転送を管理し、UDPはユニキャスト通信のみを処理します。",
   "C. TCPはローカルネットワークセグメント上の隣接デバイスを検出し、UDPはレイヤー2スイッチンググループを防止します。",
   "D. TCPはMACアドレスでデバイスを識別し、UDPはIPアドレスでデバイスを識別します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0094",
  "theme": "network-basics",
  "type": "single",
  "question": "TCP と UDP はクエリ責任モデルにどのように適合しますか。",
  "choices": [
   "A. TCP はシーケンスの使用を回避し、UDP は確認応答の使用を回避する。",
   "B. TCP はデータを送信する前に接続を確立し、UDP は即座に送信する。",
   "C. TCP は順序どおりでないパケット配信を促進し、UDP は再順序付けを防止する。",
   "D. TCP はパケットのエラー検出を使用し、UDP はエラー回復を使用する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0095",
  "theme": "network-basics",
  "type": "single",
  "question": "HTTPS など、広範なエラー チェックが必要なアプリケーションでは、UDP よりも TCP が望ましいのはなぜですか。",
  "choices": [
   "A. UDP はパケットが順番に到着するようにシーケンス データを使用し、TCP はパケットをランダムな順序で受信する機能を提供する。",
   "B. UDP はパケットの配信にフロー制御メカニズムを使用し、TCP は効率的なパケット配信のために輻輳制御を使用する。",
   "C. UDP はすべてのパケットの配信を確実に保証し、TCP は高負荷時にパケットをドロップする。",
   "D. UDP は確認応答なしで動作し、TCP は受信したすべてのパケットに対して確認応答を送信する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0096",
  "theme": "network-basics",
  "type": "single",
  "question": "TCPとUDPは、2つのエンドポイント間の接続を確立する方法において、どのような違いがあるのでしょうか。",
  "choices": [
   "A. TCPは3ウェイハンドシェイクを使用し、UDPはメッセージの配信を保証しない。",
   "B. TCPは同期パケットを、UDPは確認応答パケットを使用する。",
   "C. UDPは信頼性の高いメッセージ転送を提供し、TCPはコネクションレス型のプロトコルである。",
   "D. UDPはフレームヘッダのSYN、SYN ACK、FINビットを使用し、TCPはSYN、SYN ACK、ACKビットを使用する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0097",
  "theme": "network-basics",
  "type": "single",
  "question": "TCP/IPモデルにおいて、HTTPプロトコルが動作する層はどれか。",
  "choices": [
   "A. トランスポート層",
   "B. アプリケーション層",
   "C. インターネット層",
   "D. ネットワークアクセス層"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0098",
  "theme": "network-basics",
  "type": "single",
  "question": "OSI参照モデルのレイヤ3で動作するデバイスはどれか。",
  "choices": [
   "A. リピーター",
   "B. ルーター",
   "C. ハブ",
   "D. スイッチ（レイヤ2）"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0099",
  "theme": "network-basics",
  "type": "single",
  "question": "TCP/IPモデルのトランスポート層で使用される信頼性のあるプロトコルはどれか。",
  "choices": [
   "A. TCP",
   "B. ARP",
   "C. ICMP",
   "D. UDP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0100",
  "theme": "network-basics",
  "type": "single",
  "question": "OSI参照モデルにおいて、データリンク層（レイヤ2）で使用されるアドレスはどれか。",
  "choices": [
   "A. ポート番号",
   "B. ホスト名",
   "C. MACアドレス",
   "D. IPアドレス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0101",
  "theme": "network-basics",
  "type": "single",
  "question": "OSI参照モデルにおいてセッション層（レイヤ5）の機能はどれか。",
  "choices": [
   "A. データの暗号化と復号を行う",
   "B. 物理的な信号の伝送を行う",
   "C. 通信セッションの確立、管理、終了を制御する",
   "D. エンドツーエンドの信頼性を提供する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0102",
  "theme": "network-basics",
  "type": "single",
  "question": "ARPプロトコルの役割として適切な説明を1つ選びなさい。",
  "choices": [
   "A. ホスト名からIPアドレスを解決する",
   "B. MACアドレスから対応するIPアドレスを解決する",
   "C. ポート番号からプロトコルを特定する",
   "D. IPアドレスから対応するMACアドレスを解決する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0103",
  "theme": "network-basics",
  "type": "single",
  "question": "ARPプロトコルの役割として誤っているものはどれか。",
  "choices": [
   "A. MACアドレスから対応するIPアドレスを解決する",
   "B. ホスト名からIPアドレスを解決する",
   "C. ポート番号からプロトコルを特定する",
   "D. IPアドレスから対応するMACアドレスを解決する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0104",
  "theme": "network-basics",
  "type": "single",
  "question": "ARPプロトコルの役割として誤っているものはどれか。",
  "choices": [
   "A. MACアドレスから対応するIPアドレスを解決する",
   "B. IPアドレスから対応するMACアドレスを解決する",
   "C. ホスト名からIPアドレスを解決する",
   "D. ポート番号からプロトコルを特定する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0105",
  "theme": "network-basics",
  "type": "single",
  "question": "VoIP など、低遅延が必要なアプリケーションには、TCP よりも UDP が適しているのはなぜですか?",
  "choices": [
   "A. UDP はパケットが順番に到着するようにシーケンス データを使用し、TCP はパケットをランダムな順序で受信する機能を提供します。",
   "B. TCP は効率的なパケット配信のために輻輳制御を使用し、UDP はパケット配信のためにフロー制御メカニズムを使用します。",
   "C. UDP はすべてのパケットの配信を確実に保証し、TCP は高負荷時にパケットをドロップします。",
   "D. TCP は受信したすべてのパケットに対して確認応答を送信しますが、UDP は確認応答なしで動作します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0106",
  "theme": "addressing",
  "type": "single",
  "question": "192.168.32.0/24を、より小さなネットワークにサブネット化します。次の要件を満たすとき、インターフェースにはどの構成を適用しますか。\n・8つの新しいサブネットを作成する\n・各サブネットは 30 台のホストを収容する\n・最初の新しいサブネットで最後に使用可能な IP を使用する\n・レイヤー3 インターフェイスを使用する",
  "choices": [
   "A. no switchport mode access\nip address 192.168.32.62 255.255.255.240",
   "B. switchport\nip address 192.168.32.65 255.255.255.240",
   "C. no switchport mode trunk\nip address 192.168.32.97 255.255.255.224",
   "D. no switchport\nip address 192.168.32.30 255.255.255.224"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0107",
  "theme": "addressing",
  "type": "single",
  "question": "10.10.10.145 とサブネット マスク 1111111.111111111.1111111.11111000 に相当するインターフェイスを構成する必要があります。どのサブネット マスクを使用しますか。",
  "choices": [
   "A. /27",
   "B. /28",
   "C. /29",
   "D. /30"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0108",
  "theme": "addressing",
  "type": "single",
  "question": "ルータのループバック インターフェイスを IPv6 アドレス空間に移行する必要があります。インターフェイスの現在の IPv4 アドレスが 10.54.73.1/32 で、エンジニアが IPv6 アドレス 0 : 0 : 0 : 0 : 0 : ffff : a36 : 4901 を設定する場合、どのプレフィックス長を使用しますか。",
  "choices": [
   "A. /64",
   "B. /96",
   "C. /124",
   "D. /128"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0109",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "各ルータは、サブネット内の最後の使用可能な IP アドレスを使用して構成する必要があります。どの構成がこの要件を満たしていますか。",
  "choices": [
   "C. R7# interface FastEthernet1/0\nip address 10.88.31.127 255.255.255.240\nR8# interface FastEthernet0/0\nip address 10.19.63.95 255.255.255.192\nR9# interface FastEthernet1/1\nip address 10.23.98.159 255.255.255.248",
   "D. R7# interface FastEthernet1/0\nip address 10.88.31.126 255.255.255.192\nR8# interface FastEthernet0/0\nip address 10.19.63.94 255.255.255.240\nR9# interface FastEthernet1/1\nip address 10.23.98.158 255.255.255.224"
  ],
  "figure": "data/figures/CCNA-0109.png"
 },
 {
  "qid": "CCNA-0110",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "R1 はルータ A、B、C、D から静的ルーティング更新を受信します。ネットワーク エンジニアは、R1 が OSPF エリア 1 で静的ルートをアドバタイズすることを望んでいます。OSPF でアドバタイズする必要があるサマリーアドレスはどれですか。",
  "choices": [
   "A. 10.1.40.0/25",
   "B. 10.1.40.0/24",
   "C. 10.1.41.0/25",
   "D. 10.1.40.0/23"
  ],
  "figure": "data/figures/CCNA-0110.png"
 },
 {
  "qid": "CCNA-0111",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "エンジニアは、3 台の PC を持つ現在の VLAN に IP アドレスを割り当てます。構成では、サブネット化とホスト数に同じクラス C サブネットを使用して、30 個の追加 VLAN の拡張も考慮する必要があります。予想される成長のためにアドレス空間を予約しながら、要求を満たすコマンド セットはどれですか。",
  "choices": [
   "A. Switch(config)#interface vlan 10\nSwitch(config-if)#ip address 192.168.0.1 255.255.255.252",
   "B. Switch(config)#interface vlan 10\nSwitch(config-if)#ip address 192.168.0.1 255.255.255.248",
   "C. Switch(config)#interface vlan 10\nSwitch(config-if)#ip address 192.168.0.1 255.255.255.0",
   "D. Switch(config)#interface vlan 10\nSwitch(config-if)#ip address 192.168.0.1 255.255.255.128"
  ],
  "figure": "data/figures/CCNA-0111.png"
 },
 {
  "qid": "CCNA-0112",
  "theme": "addressing",
  "type": "single",
  "question": "エンジニアは、互いにローカル通信するために、2つの異なるサブネットにある 2 台の PC の構成を更新する必要があります。1 台の PC は IP アドレス 192.168.25.128/25 で構成され、もう 1 台の PC は 192.168.25.100/25 で構成されています。通信を有効にするには、エンジニアは両方の PC でどのネットワーク マスクを構成しますか。",
  "choices": [
   "A. 255.255.255.248",
   "B. 255.255.255.0",
   "C. 255.255.255.252",
   "D. 255.255.255.224"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0113",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "PC1が 172.16.2.0/24 に接続できません。どの設定変更が問題を解決しますか。",
  "choices": [
   "A. IPアドレスを172.16.1.9に変更し、DNSサーバーを172.16.1.12のみに変更する。",
   "B. IPアドレスを172.16.1.6に変更し、DNSサーバーを172.16.1.12と172.16.1.13に変更する。",
   "C. IPアドレスを172.16.1.9に変更し、デフォルトゲートウェイを172.16.1.7に変更する。",
   "D. IPアドレスを172.16.1.6に変更し、サブネットマスクを255.255.255.248に変更する。"
  ],
  "figure": "data/figures/CCNA-0113.png"
 },
 {
  "qid": "CCNA-0114",
  "theme": "addressing",
  "type": "single",
  "question": "ネットワーク内のアプリケーションが300台のサーバーから600台にスケールアップされています。各サーバーは、本番環境、バックアップ環境、管理環境のトラフィックをサポートするために3つのネットワーク接続を必要とします。各接続は異なるサブネット上に存在します。本番環境ネットワークのルータ設定は、まず10.0.0.0/8 内のサブネットを使用して設定する必要があります。要件を満たし、無駄なIPアドレス空間を制限するために、ルータのインターフェースに設定する必要があるコマンドはどれですか？",
  "choices": [
   "A. ip address 10.10.10.1 255.255.255.240",
   "B. ip address 10.10.10.1 255.255.240.0",
   "C. ip address 10.10.10.1 255.255.254.0",
   "D. ip address 10.10.10.1 255.255.252.0"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0115",
  "theme": "addressing",
  "type": "single",
  "question": "どの IPv4 ヘッダー フィールドがパケットの断片化プロセスで役割を果たしますか。",
  "choices": [
   "A. フラグ、フラグメントオフセット",
   "B. TTL、フラグ、フラグメントオフセット",
   "C. 識別番号、フラグ、フラグメントオフセット",
   "D. 識別番号、ECN、フラグメントオフセット"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0116",
  "theme": "addressing",
  "type": "single",
  "question": "次のうち、IPv6ユニキャストアドレスの種類でないものはどれか。",
  "choices": [
   "A. ユニークローカルアドレス",
   "B. グローバルユニキャストアドレス",
   "C. リンクローカルアドレス",
   "D. ブロードキャストアドレス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0117",
  "theme": "addressing",
  "type": "single",
  "question": "次の中から、iPv4アドレス192.168.1.0/24のサブネットマスクはどれか。",
  "choices": [
   "A. 255.255.255.0",
   "B. 255.0.0.0",
   "C. 255.255.0.0",
   "D. 255.255.255.128"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0118",
  "theme": "addressing",
  "type": "single",
  "question": "IPv4サブネット192.168.10.0/26のホスト数は最大いくつか。",
  "choices": [
   "A. 62台",
   "B. 30台",
   "C. 64台",
   "D. 126台"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0119",
  "theme": "addressing",
  "type": "single",
  "question": "次の中から、iPv4でサブネット172.16.0.0/20に含まれるホストアドレスの範囲として正しいものはどれか。",
  "choices": [
   "A. 172.16.0.1 〜 172.16.0.254",
   "B. 172.16.0.1 〜 172.16.31.254",
   "C. 172.16.0.1 〜 172.16.15.254",
   "D. 172.16.0.1 〜 172.16.255.254"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0120",
  "theme": "addressing",
  "type": "single",
  "question": "IPv4でサブネット172.16.0.0/20に含まれるホストアドレスの範囲として誤っているものはどれか。",
  "choices": [
   "A. 172.16.0.1 〜 172.16.15.254",
   "B. 172.16.0.1 〜 172.16.255.254",
   "C. 172.16.0.1 〜 172.16.31.254",
   "D. 172.16.0.1 〜 172.16.0.254"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0121",
  "theme": "addressing",
  "type": "single",
  "question": "プライベート アドレス空間の主な目的は何ですか。",
  "choices": [
   "A. グローバルに一意なアドレス空間を節約する",
   "B. ネットワーク内のアドレス指定を簡素化する",
   "C. インターネット経由で到達可能なノードの数を制限する",
   "D. ネットワークの複雑さを軽減する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0122",
  "theme": "addressing",
  "type": "single",
  "question": "IPv4 プライベート アドレスを実装する理由は何ですか。",
  "choices": [
   "A. ネットワークセキュリティ侵害のリスクを軽減する",
   "B. PCI規制に準拠する",
   "C. 現地の法律に準拠する",
   "D. ネットワークルーターの転送テーブルのサイズを縮小する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0123",
  "theme": "addressing",
  "type": "single",
  "question": "どの種類のIPv4アドレスが、グローバルに一意なアドレスクラスを節約するのに役立ちますか。",
  "choices": [
   "A. マルチキャスト",
   "B. プライベート",
   "C. ループバック",
   "D. パブリック"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0124",
  "theme": "addressing",
  "type": "single",
  "question": "プライベート IPv4 アドレスを使用する利点は何ですか。",
  "choices": [
   "A. 同様のデバイス間で信頼性の高い接続を提供する",
   "B. インターネット経由で安全な接続を可能にする",
   "C. 内部ネットワークデバイスを外部アクセスから保護する",
   "D. 外部ネットワーク経由でルーティングできるようにする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0125",
  "theme": "addressing",
  "type": "multiple",
  "question": "プライベート IPv4 アドレスの利点は何ですか。(2つ選択)",
  "choices": [
   "A. 複数のサイトでアドレスを再利用します",
   "B. 外部インターネット ネットワーク接続を提供します",
   "C. グローバルに一意のアドレス空間を節約します。",
   "D. ルーティング情報を WAN リンクに伝播します",
   "E. 無制限のアドレス範囲を提供します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0126",
  "theme": "addressing",
  "type": "single",
  "question": "プライベート IPv4 アドレスを使用する利点は何ですか。",
  "choices": [
   "A. 複数の企業が競合することなく同じアドレスを使用できる。",
   "B. 企業ネットワークの外部から内部ホストに直接接続できる。",
   "C. NATを使用せずにインターネットへの通信が可能。",
   "D. すべての外部ホストにインターネットへの安全な通信が提供される。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0127",
  "theme": "addressing",
  "type": "single",
  "question": "プライベート IPv4 アドレスの特徴は何ですか。",
  "choices": [
   "A. PCI 規制に準拠",
   "B. 外部リソースにのみデータをストリーミングする内部ホストで使用される",
   "C. インターネットの脅威に対する保護レベルが強化される",
   "D. インターネット経由での安全な接続が可能"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0128",
  "theme": "addressing",
  "type": "single",
  "question": "RFC1918 IPアドレスはネットワークでどのように使用されますか。",
  "choices": [
   "A. セキュリティ強化のため、パブリックアドレスの代わりに使用される。",
   "B. インターネットサービスプロバイダがインターネット上でルーティングするために使用されます。",
   "C. 変換せずに内部ネットワークからインターネットにアクセスするために使用される。",
   "D. パブリックIPv4アドレスを保持するためにNATと一緒に使われる。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0129",
  "theme": "addressing",
  "type": "multiple",
  "question": "プライベート IPv4 アドレスを使用する 2 つの利点は何ですか。(2つ選択)",
  "choices": [
   "A. 障害発生時に冗長性を提供する",
   "B. パブリック IPv4 アドレスの不足を緩和する",
   "C. インターネットの脅威に対するセキュリティ レイヤーを提供する",
   "D. プライベート ネットワーク上のエンドポイントへのインターネット接続を提供する",
   "E. IoT デバイスからのインターネット アクセスを可能にする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0130",
  "theme": "addressing",
  "type": "multiple",
  "question": "企業NW内でプライベート使用のために予約されているホストアドレスはどれか。(2つ選択)",
  "choices": [
   "A. 10.172.76.200",
   "B. 12.17.1.20",
   "C. 172.15.2.250",
   "D. 192.169.32.10",
   "E. 172.31.255.100"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0131",
  "theme": "addressing",
  "type": "single",
  "question": "ネットワーク管理者がRFC 1918アドレス空間を実装する理由はなにか。",
  "choices": [
   "A. インターネット上のトラフィックをルーティングするため",
   "B. ネットワーク上のホストの数を制限するため",
   "C. 別のネットワークとアドレス空間を重複させるため",
   "D. IPネットワーク設計の柔軟性を確保するため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0132",
  "theme": "addressing",
  "type": "single",
  "question": "プライベートIPv4アドレスの特徴は何ですか？",
  "choices": [
   "A. ネットワークルータの転送テーブルを削減する",
   "B. アウトバウンドACLが適用されるとインターネットを通過する",
   "C. インターネットから分離されたアドレス空間を持つ",
   "D. デバイス間のルーティングが不要になる"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0133",
  "theme": "addressing",
  "type": "single",
  "question": "グローバルに一意なアドレス クラスの保存に役立つ IPv4 アドレス タイプはどれですか。",
  "choices": [
   "A. ループバック",
   "B. マルチキャスト",
   "C. プライベート",
   "D. 一般"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0134",
  "theme": "addressing",
  "type": "single",
  "question": "プライベート IPv4 アドレッシングの特徴は何ですか。",
  "choices": [
   "A. 最大 65,536 個の使用可能なアドレスで構成される",
   "B. AS番号と組み合わせて IANA によって発行される",
   "C. 追跡または登録なしで使用される",
   "D. アウトバウンド ACL が適用されている場合にインターネットを通過する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0135",
  "theme": "addressing",
  "type": "single",
  "question": "プライベート IPv4 アドレッシングの特徴は何ですか。",
  "choices": [
   "A. ネットワーク内のアドレス指定を簡素化する。",
   "B. PCI 規制に準拠する。",
   "C. ネットワークルーター上の転送テーブルを減らす",
   "D. 他の内部ホストとのみ通信するホストで使用される。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0136",
  "theme": "addressing",
  "type": "single",
  "question": "プライベートIPアドレスの範囲として適切な説明を1つ選びなさい。",
  "choices": [
   "A. 100.0.0.0 〜 100.255.255.255",
   "B. 200.0.0.0 〜 200.255.255.255",
   "C. 10.0.0.0 〜 10.255.255.255",
   "D. 11.0.0.0 〜 11.255.255.255"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0137",
  "theme": "addressing",
  "type": "single",
  "question": "プライベートIPアドレスの範囲として誤っているものはどれか。",
  "choices": [
   "A. 100.0.0.0 〜 100.255.255.255",
   "B. 10.0.0.0 〜 10.255.255.255",
   "C. 200.0.0.0 〜 200.255.255.255",
   "D. 11.0.0.0 〜 11.255.255.255"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0138",
  "theme": "addressing",
  "type": "single",
  "question": "プライベートIPアドレスの範囲として誤っているものはどれか。",
  "choices": [
   "A. 11.0.0.0 〜 11.255.255.255",
   "B. 10.0.0.0 〜 10.255.255.255",
   "C. 200.0.0.0 〜 200.255.255.255",
   "D. 100.0.0.0 〜 100.255.255.255"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0139",
  "theme": "addressing",
  "type": "single",
  "question": "プライベート IPv4 アドレッシングの特徴は何ですか?",
  "choices": [
   "A. 地域のインターネット当局からの割り当てなしに使用されている",
   "B. サブネット上のトラフィックがサイト間 VPN を経由して外部の組織に到達する必要がある場合に使用されます。",
   "C. ネットワークルーター上の転送テーブルを減らす",
   "D. 無制限のアドレス範囲を提供します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0140",
  "theme": "addressing",
  "type": "single",
  "question": "プライベート IPv4 アドレッシングの特徴は何ですか?",
  "choices": [
   "A. ISP が Web サービスのために新しいサブネットをインターネットにアドバタイズすることを要求する場合に使用されます。",
   "B. 無制限のアドレス範囲を提供します",
   "C. ネットワークに複数のエンドポイント リスナーがある場合に使用されます。",
   "D. IPv4 アドレスの不足を軽減する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0141",
  "theme": "addressing",
  "type": "single",
  "question": "プライベート IPv4 アドレッシングの特徴は何ですか?",
  "choices": [
   "A. ネットワークルーター上の転送テーブルを減らす",
   "B. 外部のインターネット境界を越えた通信を許可する",
   "C. 企業組織によって内部ホストに割り当てられる",
   "D. ペイメントカード業界の規制に準拠する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0142",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "R2をEUI-64形式を使用してIPv6 アドレスを設定したとき、どのアドレスになりますか。",
  "choices": [
   "A. 2001:DB8:D8D2:1009:10A0:ABFF:FECC:2",
   "B. 2001:DB8:D8D2:1009:12A0:AB34:FFCC:2",
   "C. 2001:DB8:D8D2:1009:1230:ABFF:FECC:2",
   "D. 2001:DB8:D8D2:1009:4345:80FF:FF16:7"
  ],
  "figure": "data/figures/CCNA-0142.png"
 },
 {
  "qid": "CCNA-0143",
  "theme": "addressing",
  "type": "single",
  "question": "IPv6 アドレスを自動的に取得するコマンドは？",
  "choices": [
   "A. IPv6 address 2001 : db8 : d8d2 : 1008 : 4358 : 23 : 1390 : : /64",
   "B. IPv6 address fe80 : : /10",
   "C. IPv6 address DHCP",
   "D. IPv6 address autoconfig"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0144",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "上記を参照してください。ネットワーク 2001:db8::/64 Modified EUI-64形式の IPv6 インターフェイス アドレスに一致する形式はどれですか。",
  "choices": [
   "A. 2001:db8::5000:00ff:fe04:0000/64",
   "B. 2001:db8::4332:5800:41ff:fe06:/64",
   "C. 2001:db8::5000:0004:5678:0090/64",
   "D. 2001:db8::5200:00ff:fe04:0000/64"
  ],
  "figure": "data/figures/CCNA-0144.png"
 },
 {
  "qid": "CCNA-0145",
  "theme": "addressing",
  "type": "single",
  "question": "コラプスドコア アーキテクチャにおけるコア層とディストリビューション層の機能は何ですか。",
  "choices": [
   "A. ルーターはレイヤー3でIPv4とIPv6アドレスを使用する必要があります。",
   "B. コアレイヤーとディストリビューションレイヤーは、フェイルオーバーを可能にするために、2つの異なるデバイス上に配置されます。",
   "C. ルーターは、IPv6ネットワークのレイヤー2冗長化のためにHSRPをサポートすることができます。",
   "D. ルーターは、単一デバイスまたは冗長ペア上で動作します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0146",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "R1の LAN セグメントの IPv6 アドレスをEUI-64 形式を使用して設定すると、どの IPv6 アドレスが生成されますか。",
  "choices": [
   "A. 2001:db8:1006:1968:4564:877F:FE99:1",
   "B. 2001:db8:1006:1968:1119:BEFF:FE67:1",
   "C. 2001:db8:1006:1968:1130:ABFF:FECC: 1",
   "D. 2001:db8:1006:1968:12D8:BAFE:FF01:1"
  ],
  "figure": "data/figures/CCNA-0146.png"
 },
 {
  "qid": "CCNA-0147",
  "theme": "addressing",
  "type": "single",
  "question": "グローバル IPv6 アドレスと一意のローカル IPv6 アドレスの類似点は何ですか。",
  "choices": [
   "A. マルチキャスト IPv6 グループ タイプの一部である",
   "B. グローバル インターネット上でルーティング可能である",
   "C. 同じ組織によって割り当てられている",
   "D. サブネット化に同じプロセスを使用する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0148",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "ルータ R2 の LAN セグメントの IPv6 アドレスは、EUI-64 形式を使用して設定する必要があります。設定すると、ルータによってどの IPv6 アドレスが生成されますか。",
  "choices": [
   "A. 2001:db8:9bb6:6bb9:C801:B6FF:FEB4:1",
   "B. 2001:db8:9bb6:6bb9:C001:6BFE:FF01:1",
   "C. 2001:db8:9bb6:6bb9:C081:B6FF:FF4B:1",
   "D. 2001:db8:9bb6:6bb9:4626:109F:FE56:1"
  ],
  "figure": "data/figures/CCNA-0148.png"
 },
 {
  "qid": "CCNA-0149",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "R2のLANセグメントでIPv6アドレスをEUI-64 形式を使用して設定するとき、どのIPv6アドレスが生成されますか。",
  "choices": [
   "A. 2001:db8:d955:1008:1030:ABFF:FECC:1",
   "B. 2001:db8:d955:1008:12D8:BAFE:FF01:1",
   "C. 2001:db8:d955:1008:10D8:BAFF:FEC2: 1",
   "D. 2001:db8:d955:1008:4635:278F:FE95:1"
  ],
  "figure": "data/figures/CCNA-0149.png"
 },
 {
  "qid": "CCNA-0150",
  "theme": "addressing",
  "type": "multiple",
  "question": "R1とISP 間のアップリンクは手動でアドレスを割り当てる必要があります。R1のLAN インターフェイスはセルフプロビジョニングする必要があります。R1 に設定すべき項目はどれですか。(2つ選択)",
  "choices": [
   "A. interface Gi0/0\nipv6 address 2001:db8:0F1B:FCCB:ACCE:FCED:ABCD:FA03:/127",
   "B. interface Gi0/0\nipv6 address 2001:db8:0:AFFF::/64 eui-64",
   "C. interface Gi0/0\nipv6 address 2001:db8:1:AFFF::/64 eui-64",
   "D. interface Gi0/1\nipv6 address 2001:db8:0F1B:FCCB:ACCE:FCED:ABCD:FA02:/127",
   "E. interface Gi0/1\nipv6 address 2001:db8:0F1B:FCCB:ACCE:FCED:ABCD:FA00:/127"
  ],
  "figure": "data/figures/CCNA-0150.png"
 },
 {
  "qid": "CCNA-0151",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "R1-LAB と R2-LAB はリンクローカルアドレスで設定されています。R1-LAB の Gi0/0 に、IPv6 ネットワークでの自動アドレス割り当てを有効にするために、どのコマンドを適用しますか。",
  "choices": [
   "A. ipv6 address 2001:db8:0:0FFA::/64 eui-64",
   "B. ipv6 address 2001:db8:0:0FFA::1/64",
   "C. ipv6 address 2001:db8:1:0FFA:0::/64",
   "D. ipv6 address 2001:db8:0:0FFA::/64 anycast"
  ],
  "figure": "data/figures/CCNA-0151.png"
 },
 {
  "qid": "CCNA-0152",
  "theme": "addressing",
  "type": "single",
  "question": "DHCP や DNS などの分散サービスのエニーキャスト アドレスにはどの IPv6 アドレス範囲が適していますか。",
  "choices": [
   "A. FF00 :1/12",
   "B. 2001:bb6:0234:ca3e::1/128",
   "C. FE80 ::1/10",
   "D. 2002:db84:3f30:ca84:be76:2/64"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0153",
  "theme": "addressing",
  "type": "single",
  "question": "エンジニアが、HQルーターのserial0/0インターフェイスでIPv6アドレス 2001:0db8:0000:0000:0700:0003:400F:572Bを設定しなければならず、設定を簡単にするために圧縮したいと考えています。\nルーターのインターフェイスで発行しなければならないコマンドはどれですか。",
  "choices": [
   "A. ipv6 address 2001:db8::700:3:400F:572B",
   "B. ipv6 address 2001:db8:0::700:3:4F:572B",
   "C. ipv6 address 2001::db8:0000::700:3:400F:572B",
   "D. ipv6 address 2001:0db8::7:3:4F:572B"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0154",
  "theme": "addressing",
  "type": "single",
  "question": "RFC 1918 アドレス空間はなぜ定義されたのですか。",
  "choices": [
   "A. パブリック IPv4 アドレス指定を省略する",
   "B. NAT プロトコルをサポートする",
   "C. パブリック IPv6 アドレス空間を保持する",
   "D. 重複する IP アドレスのインスタンスを減らす"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0155",
  "theme": "addressing",
  "type": "single",
  "question": "指定したIPv6プレフィックスとインターフェースのMACアドレスからIPv6アドレスを自動生成するコマンドはどれですか。",
  "choices": [
   "A. ipv6 address dhcp",
   "B. ipv6 address 2001:DB8:5:112::/64 eui-64",
   "C. ipv6 address autoconfig",
   "D. ipv6 address 2001:DB8:5:112::2/64 link-local"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0156",
  "theme": "addressing",
  "type": "single",
  "question": "次の中から、iPv6アドレスの長さは何ビットか。",
  "choices": [
   "A. 32ビット",
   "B. 128ビット",
   "C. 64ビット",
   "D. 48ビット"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0157",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルーター R2 上の LAN セグメントの IPv6 アドレスは、EUI-64 形式を使用して設定する必要があります。設定時にルーターによってどの IPv6 アドレスが生成されますか?",
  "choices": [
   "A. 2001:db8:9aa6:6aa9:C801:A6FF:FEA4:1",
   "B. 2001:db8:9aa6:6aa9:C081:A6FF:FF4A:1",
   "C. 2001:db8:9aa6:6aa9:C001:6AFE:FF00:1",
   "D. 2001:db8:9aa6:6aa9:4642:823F:FE47:1"
  ],
  "figure": "data/figures/CCNA-0157.png"
 },
 {
  "qid": "CCNA-0158",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルーター R2 上の LAN セグメントの iPv6 アドレスは、EUI-64 形式を使用して設定する必要があります。どのアドレスを使用する必要がありますか?",
  "choices": [
   "A. ipv6 address 2001:DB8:D8D2:1009:10A0:ABFF:FECC:1 eui-64",
   "B. ipv6 address 2001:DB8:D8D2:1009:1230:ABFF:FECC:1 eui-64",
   "C. ipv6 address 2001:DB8:D8D2:1009:4347:31FF:FF47:0 eui-64",
   "D. ipv6 address 2001:DB8:D8D2:1009:12A0:AB34:FFCC:1 eui-64"
  ],
  "figure": "data/figures/CCNA-0158.png"
 },
 {
  "qid": "CCNA-0159",
  "theme": "addressing",
  "type": "single",
  "question": "文書記述用アドレスプレフィックスはどれか。",
  "choices": [
   "A. FF00::1/12",
   "B. 2001:db8::/32",
   "C. 2002:db84:3f37:ca98:be05:8/64",
   "D. FE80::1/10"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0160",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "[IPv6]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "2001:DB8::bced:1234:456d:aacc",
    "FD00:0000:0000:1a2d:a153:3992:a19d:ccca",
    "FE80::abcf:ffff:12de:3992",
    "FF05::23:becf:22:1111"
   ],
   "targets": [
    {
     "label": "サイト内でローカルにのみ使用されるマルチキャストアドレス",
     "slots": 1
    },
    {
     "label": "IPv6 が有効になっている場合にリンク上に自動的に作成されるアドレス",
     "slots": 1
    },
    {
     "label": "インターネットへのルーティングが禁止されているアドレス",
     "slots": 1
    },
    {
     "label": "ドキュメント作成用に予約されている一意のアドレス",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0161",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "[IPv6]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "インターネットルーティングなしで内部専用に使用するアドレス",
    "インターネット経由でルーティングおよび到達可能",
    "パブリック IPv4 アドレスと同等",
    "プレフィックス FC00::/7 を持つアドレス"
   ],
   "targets": [
    {
     "label": "グローバル ユニキャスト アドレス",
     "slots": 2
    },
    {
     "label": "ユニーク ローカルアドレス",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0162",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "[IPv6]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "宛先アドレスとしては機能しない",
    "複数の組織で同時に使用できる",
    "ネクストホップアドレスとして機能",
    "プライベートIPv6アドレス",
    "FDで始まるIPv6アドレス"
   ],
   "targets": [
    {
     "label": "ユニークローカルアドレス",
     "slots": 3
    },
    {
     "label": "リンクローカルアドレス",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0163",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "[IPv6]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "非ホストデバイスによって排他的に使用される",
    "単一のアドレスではなくグループアドレスにパケットを送信",
    "アドレスを持つ最も近いインターフェースにルーティングされる",
    "ユニキャストソースがグループに送信される"
   ],
   "targets": [
    {
     "label": "マルチキャスト",
     "slots": 2
    },
    {
     "label": "エニーキャスト",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0164",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "[IPv6]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "1対多の通信を提供",
    "ルーティングプレフィックスの集約が可能",
    "ユニキャストソースをグループに送信",
    "インターネット経由でルーティングおよび到達可能"
   ],
   "targets": [
    {
     "label": "グローバルユニキャストアドレス",
     "slots": 2
    },
    {
     "label": "マルチキャスト",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0165",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "左側の特性を右側の IPv6 アドレス タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "一対一のコミュニケーションを可能にする",
    "プライベート IPv4 アドレスの対応",
    "IPv4アドレスと同様にパブリックにルーティング可能",
    "複数の組織で同時に使用される可能性がある"
   ],
   "targets": [
    {
     "label": "ユニークローカル",
     "slots": 2
    },
    {
     "label": "グローバルユニキャストアドレス",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0166",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "[IPv6]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ネクストホップアドレスとして機能する",
    "IPv4アドレスと同じようにパブリックにルーティング可能。",
    "1対1の通信が可能",
    "すべてのIPv6デバイスに必要"
   ],
   "targets": [
    {
     "label": "グローバルユニキャストアドレス",
     "slots": 2
    },
    {
     "label": "リンクローカルアドレス",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0167",
  "theme": "addressing",
  "type": "single",
  "question": "リンクローカル 全ノード IPv6 マルチキャスト アドレスとは何ですか。",
  "choices": [
   "A. ff02:0:0:0:0:0:0:1",
   "B. 2004:31c:73d9:683e:255::",
   "C. fffe:034:0dd:45d6:789e::",
   "D. fe80:4433:034 :0dd::2"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0168",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "[IPv6]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "fd6d:c83b:5cef:b6b2::1",
    "ff05::1:3",
    "fe80::a00:23ff:feeb:89aa",
    "3ffe:e54d:620:a87a::f00d"
   ],
   "targets": [
    {
     "label": "グローバル ユニキャスト",
     "slots": 1
    },
    {
     "label": "リンク ローカル ユニキャスト",
     "slots": 1
    },
    {
     "label": "マルチキャスト",
     "slots": 1
    },
    {
     "label": "ユニーク ローカル",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0169",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "[IPv6]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "1対多の通信を提供する",
    "同じネットワーク上の複数のデバイスに同時に割り当てられる",
    "アドレスを持つ最も近いインターフェースにルーティングされる",
    "送信元アドレスとして使用できない"
   ],
   "targets": [
    {
     "label": "エニーキャスト",
     "slots": 2
    },
    {
     "label": "マルチキャスト",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0170",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "[IPv6]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ff00:ec6c:dbb1:3e8b:6d46:bd27:a236:12",
    "fc00:9860:653f:5146:8cb2:a27c:cb6f:3",
    "fe80:cc72:4b9e:445c:8179:0420:5988:7",
    "2000:1092 :a1e8:827d:527c:3ce7:9816:1"
   ],
   "targets": [
    {
     "label": "グローバル ユニキャスト",
     "slots": 1
    },
    {
     "label": "リンク ローカル ユニキャスト",
     "slots": 1
    },
    {
     "label": "マルチキャスト",
     "slots": 1
    },
    {
     "label": "ユニーク ローカル",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0171",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "左側の特性を右側の IPv6 アドレス タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "パケットを単一のアドレスではなくグループアドレスに送信する",
    "複数の組織で同時に使用される可能性がある",
    "1対多の通信を提供する",
    "アドレスの競合なしにサイトを結合できる"
   ],
   "targets": [
    {
     "label": "ユニークローカル",
     "slots": 2
    },
    {
     "label": "マルチキャスト",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0172",
  "theme": "addressing",
  "type": "single",
  "question": "どのような状況で、固有のローカル ユニキャスト サブネットではなく、グローバル ユニキャスト サブネットを実装しますか。",
  "choices": [
   "A. サブネットが組織内でのみ利用可能である必要がある場合",
   "B. サブネットがルーティング可能である必要がない場合",
   "C. サブネット上のアドレスがプライベート IPv4 アドレスと同等である必要がある場合",
   "D. サブネットがインターネット経由でルーティング可能である必要がある場合"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0173",
  "theme": "addressing",
  "type": "single",
  "question": "外部からのアクセスからサーバーを保護し、インターネット アクセスを制限しながら内部ユーザーのみのアクセスを許可するには、どのタイプの IPv4 アドレスをサーバーに割り当てる必要がありますか。",
  "choices": [
   "A. グローバルユニキャスト",
   "B. パブリック",
   "C. プライベート",
   "D. マルチキャスト"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0174",
  "theme": "addressing",
  "type": "single",
  "question": "IPv6 リンクローカル アドレスとユニーク ローカル アドレスの違いは何ですか。",
  "choices": [
   "A. IPv6 リンクローカル アドレスのスコープは直接接続されたインターフェイスに制限されますが、IPv6 ユニーク ローカル アドレスは会社のサイトまたはネットワーク全体で使用されます。",
   "B. IPv6リンクローカル アドレスのスコープはループバック アドレスに制限され、IPv6 ユニーク ローカル アドレスは直接接続されたインターフェイスに制限されます。",
   "C. IPv6 リンクローカル アドレスのスコープはグローバルですが、IPv6 ユニーク ローカル アドレスのスコープはループバック アドレスに制限されます。",
   "D. IPv6 リンクローカル アドレスのスコープは会社のサイトまたはネットワーク全体で使用できますが、IPv6 ユニーク ローカル アドレスはループバック アドレスに制限されます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0175",
  "theme": "addressing",
  "type": "single",
  "question": "IPv6 マルチキャスト アドレスと IPv6 エニーキャスト アドレスの違いは何ですか。",
  "choices": [
   "A. IPv6 マルチキャスト アドレスはプレフィックス 2002:/15 を使用し、1 つの宛先に転送し、IPv6 エニーキャスト アドレスはプレフィックス ff00::/8 を使用し、グループ内の任意の宛先に転送します。",
   "B. IPv6 マルチキャスト アドレスは IPv4 から IPv6 への移行に使用され、IPv6 エニーキャスト アドレスは IPv6 のみの環境でのアドレス集約に使用されます。",
   "C. IPv6 マルチキャスト アドレスはサブネット内の多数のインターフェイスに割り当てられますが、IPv6 エニーキャスト アドレスは、すべて IPv6 ルーターのグループ内の定義済みのノード グループに使用されます。",
   "D. IPv6 マルチキャスト アドレスに送信されたパケットは、一度に 1 つ以上の宛先に配信されますが、IPv6 エニーキャスト アドレスに送信されたパケットは、そのアドレスに最も近いインターフェイスにルーティングされます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0176",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "IPv6 アドレス タイプの特性を左から右にドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "インターフェースごとに1回のみ設定",
    "インターネット経由でルーティングおよび到達可能",
    "パブリック IPv4 アドレスと同等",
    "単一のサブネットに接続"
   ],
   "targets": [
    {
     "label": "グローバルユニキャストアドレス",
     "slots": 2
    },
    {
     "label": "リンクローカルアドレス",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0177",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "[ドラッグアンドドロップ]IPv6",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "fe80:8ce3:4cd2:27ff:5cdb:77f8:72fb:7",
    "fc00:c7cb:1f00:1c32:39bf:a19b:48cc:3",
    "2000:93f3:caf1:ec6e:d653:68b7:0fd1:1",
    "ff00:04cd:fa3e:a298:a1a3:0047:aad2:12"
   ],
   "targets": [
    {
     "label": "グローバルユニキャスト",
     "slots": 1
    },
    {
     "label": "リンクローカルユニキャスト",
     "slots": 1
    },
    {
     "label": "マルチキャスト",
     "slots": 1
    },
    {
     "label": "ユニークローカル",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0178",
  "theme": "addressing",
  "type": "single",
  "question": "ユニキャスト アドレスに似ていますが、同じネットワーク上の複数のデバイスに同時に割り当てられる IPv6 アドレスのタイプはどれですか。",
  "choices": [
   "A. グローバルユニキャストアドレス",
   "B. リンクローカルアドレス",
   "C. エニーキャストアドレス",
   "D. マルチキャストアドレス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0179",
  "theme": "addressing",
  "type": "single",
  "question": "ネットワーク エンジニアは、vlan 2000 インターフェイスに IPv6 構成を実装して、インターネットへのアドバタイズがブロックされる、ルーティング可能なローカルで一意のユニキャスト アドレスを作成する必要があります。エンジニアはどの構成を適用する必要がありますか。",
  "choices": [
   "A. interface vlan 2000 ipv6 address ff00:0000:aaaa::1234:2343/64",
   "B. interface vlan 2000 ipv6 address fd00::1234:2343/64",
   "C. interface vlan 2000 ipv6 address fe80:0000:aaaa::1234:2343/64",
   "D. interface vlan 2000 ipv6 address fc00:0000:aaaa::a15d:1234:2343:8aca/64"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0180",
  "theme": "addressing",
  "type": "single",
  "question": "次の中から、iPv6のリンクローカルアドレスの範囲はどれか。",
  "choices": [
   "A. FC00::/7",
   "B. 2000::/3",
   "C. FF00::/8",
   "D. FE80::/10"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0181",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "IPv6 アドレスを左側から右側のタイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ff00:af60:767d:9258:e688:c478:ec75:12",
    "fe80:b680:8af8:7cc1:6df1:71e1:b8f3:7",
    "fc00:a4d3:af37:cbc6:cdbd:b73d:5561:3",
    "2000:6794:5699:e122:42e0:4236:085d:1"
   ],
   "targets": [
    {
     "label": "Global Unicast",
     "slots": 1
    },
    {
     "label": "Unique Local",
     "slots": 1
    },
    {
     "label": "Link-Local Unicast",
     "slots": 1
    },
    {
     "label": "Multicast",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0182",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "左側の特性を右側の IPv6 アドレス タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "すべての IPv6 デバイスで必須",
    "プライベートIPv4アドレスに相当する",
    "複数の組織で同時に使用される可能性がある",
    "単一のサブネットに接続されている"
   ],
   "targets": [
    {
     "label": "ユニークローカル",
     "slots": 2
    },
    {
     "label": "リンクローカルアドレス",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0183",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "左側の特性を右側の IPv6 アドレス タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "送信元アドレスとして使用することはできません",
    "アドレスを持つ最も近いインターフェースにルーティングされます",
    "同じネットワーク上の複数のデバイスに同時に割り当てられます",
    "1対多の通信を提供する"
   ],
   "targets": [
    {
     "label": "エニーキャスト",
     "slots": 2
    },
    {
     "label": "マルチキャスト",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0184",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "資料を参照してください。ルーター R2 上の LAN セグメントの IPv6 アドレスは、EUI-64 形式を使用して設定する必要があります。設定時にルーターによってどの IPv6 アドレスが生成されますか?",
  "choices": [
   "A. 2001:db8:bd69:1469:12D8:BAFE:FF01:1",
   "B. 2001:db8:bd69:1469:1130:ABFF:FECC:1",
   "C. 2001:db8:bd69:1469:4628:255F:FE32:1",
   "D. 2001:db8:bd69:1469:11BE:BFFF:FEB9:1"
  ],
  "figure": "data/figures/CCNA-0184.png"
 },
 {
  "qid": "CCNA-0185",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "左側の特性を右側の IPv6 アドレス タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "送信元アドレスとして使用されることはありません",
    "インターネット経由でルーティングおよびアクセス可能",
    "IPv4アドレスと同様にパブリックにルーティング可能",
    "パケットを単一のアドレスではなくグループアドレスに送信する"
   ],
   "targets": [
    {
     "label": "グローバルユニキャストアドレス",
     "slots": 2
    },
    {
     "label": "マルチキャスト",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0186",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルーター R1 上の LAN セグメントの IPv6 アドレスは、EUI-64 形式を使用して設定する必要があります。設定時にルーターによってどの IPv6 アドレスが生成されますか?",
  "choices": [
   "A. 2001:db8:3bb8:3bb1:C810:B3FF:FF8B:1",
   "B. 2001:db8:3bb8:3bb1:C001:3BFE:FF81:1",
   "C. 2001:db8:3bb8:3bb4:6363:93FF:EF66:1",
   "D. 2001:db8:3bb8:3bb1:C801:B3FF:FEB8:1"
  ],
  "figure": "data/figures/CCNA-0186.png"
 },
 {
  "qid": "CCNA-0187",
  "theme": "addressing",
  "type": "drag_drop",
  "question": "左側の特性を右側の IPv6 アドレス タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "送信元アドレスとして使用されることはありません",
    "IGPのネクストホップアドレスとして機能する",
    "グループにユニキャストソースが送信されている",
    "単一のリンクに限定"
   ],
   "targets": [
    {
     "label": "リンクローカルアドレス",
     "slots": 2
    },
    {
     "label": "マルチキャスト",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0188",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルーター R2 上の LAN セグメントの IPv6 アドレスは、EUI-64 形式を使用して設定する必要があります。設定時にルーターによってどの IPv6 アドレスが生成されますか?",
  "choices": [
   "A. 2001:db8:d945:91:12A0:AB34:FFCC:1",
   "B. 2001:db8:d945:91:11B0:ABFF:FECC:1",
   "C. 2001:db8:d945:91:4661:59FF:FF53:5",
   "D. 2001:db8:d945:91:1130:ABFF:FECC:1"
  ],
  "figure": "data/figures/CCNA-0188.png"
 },
 {
  "qid": "CCNA-0189",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルーター R2 上の LAN セグメントの IPv6 アドレスは、EUI-64 形式を使用して設定する必要があります。設定時にルーターによってどの IPv6 アドレスが生成されますか?",
  "choices": [
   "A. 2001:db8:d955:1697:1130:ABFF:FECC:1",
   "B. 2001:db8:d955:1697:4657:149F:FE65:1",
   "C. 2001:db8:d955:1697:11D8:BFFF:FE69:1",
   "D. 2001:db8:d955:1697:12D8:BAFE:FF01:1"
  ],
  "figure": "data/figures/CCNA-0189.png"
 },
 {
  "qid": "CCNA-0190",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルーター R1 上の LAN セグメントの IPv6 アドレスは、EUI-64 形式を使用して設定する必要があります。設定時にルーターによってどの IPv6 アドレスが生成されますか?",
  "choices": [
   "A. 2001:db8:1a44:41a4:C081:BFFF:FE4A:1",
   "B. 2001:db8:1a44:41a4:C801:BEFF:FE4A:1",
   "C. 2001:db8:1a44:41a4:4660:592F:FE65:1",
   "D. 2001:db8:1a44:41a4:C800:BAFE:FF00:1"
  ],
  "figure": "data/figures/CCNA-0190.png"
 },
 {
  "qid": "CCNA-0191",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルーター R2 上の LAN セグメントの IPv6 アドレスは、EUI-64 形式を使用して設定する必要があります。設定時にルーターによってどの IPv6 アドレスが生成されますか?",
  "choices": [
   "A. 2001:db8:8bb8:8bb1:C081:B8FF:FF4B:1",
   "B. 2001:db8:8bb8:8bb1:C001:8BFE:FF01:1",
   "C. 2001:db8:8bb8:8bb4:6792:43FF:EF87:1",
   "D. 2001:db8:8bb8:8bb1:C801:B8FF:FEB8:1"
  ],
  "figure": "data/figures/CCNA-0191.png"
 },
 {
  "qid": "CCNA-0192",
  "theme": "addressing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルーター R1 上の LAN セグメントの IPv6 アドレスは、EUI-64 形式を使用して設定する必要があります。設定時にルーターによってどの IPv6 アドレスが生成されますか?",
  "choices": [
   "A. 2001:db8:8bb3:8bb1:C001:8BFE:FF31:1",
   "B. 2001:db8:8bb3:8bb1:C081:B8FF:FF3B:1",
   "C. 2001:db8:8bb3:8bb1:C801:B8FF:FEB3:1",
   "D. 2001:db8:8bb3:8bb4:7397:79FF:EF41:1"
  ],
  "figure": "data/figures/CCNA-0192.png"
 },
 {
  "qid": "CCNA-0193",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "暗号化によってワイヤレス ネットワークはどのように保護されますか。",
  "choices": [
   "A. フレーム内の改ざんを検出するための整合性チェック",
   "B. ゼロデイネットワーク攻撃を検出して防止するための特殊な暗号方式",
   "C. アクセスポイントとクライアントのみが理解できるようにデータを暗号化するアルゴリズム",
   "D. 権限のないユーザーがネットワークにアクセスすることを防ぐポリシー"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0194",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "独自のセキュリティポリシーを持つ個別のゾーンにネットワークを分離するデバイスはどれか。",
  "choices": [
   "A. IPS",
   "B. ファイアウォール",
   "C. アクセスポイント",
   "D. スイッチ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0195",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "セキュリティドメインによってネットワークを分離するデバイスはどれですか。",
  "choices": [
   "A. アクセスポイント",
   "B. ファイアウォール",
   "C. 侵入防止システム",
   "D. ワイヤレスコントローラ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0196",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "ワイヤレス ネットワークの SSID の特徴は何ですか。",
  "choices": [
   "A. 権限のないユーザーを防ぐためにポリシーを使用する",
   "B. WLAN 上のアクセス ポイントを識別する",
   "C. ユーザーにログイン ID を要求する",
   "D. WLAN に名前を関連付ける"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0197",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "すべてのクライアント トラフィックをワイヤレス コントローラ経由で転送するようにアクセスポイントを構成する必要があります。このタスクを実行するには、どのモードを有効にしますか。",
  "choices": [
   "A. ローカル",
   "B. モニター",
   "C. 自律",
   "D. 不正検出"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0198",
  "theme": "devices-virtualization",
  "type": "drag_drop",
  "question": "左側の特性を右側のデバイス タイプにドラッグ アンド ドロップします。すべての特性が使用されるわけではありません。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "一元的な管理とセキュリティを提供します",
    "イーサネットフレームをフォーマットし、宛先に転送する",
    "LWAPモード時に転送を決定する",
    "オンプレミスまたはクラウドベースで使用",
    "IEEE 802.11とイーサネット規格の両方をサポート"
   ],
   "targets": [
    {
     "label": "アクセスポイント",
     "slots": 2
    },
    {
     "label": "無線LANコントローラー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0199",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "内部ネットワークをインターネットから保護するデバイスはどれですか。",
  "choices": [
   "A. ファイアウォール",
   "B. レイヤー 2 スイッチ",
   "C. ルーター",
   "D. アクセス ポイント"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0200",
  "theme": "devices-virtualization",
  "type": "drag_drop",
  "question": "ワイヤレス[ドラッグ アンド ドロップ]",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "デバイス グループ内のユーザー接続データを提供",
    "Wi-Fi 信号を増幅する機能",
    "ワークグループ ブリッジとして構成可能",
    "テンプレートを使用して QOS 構成を実装"
   ],
   "targets": [
    {
     "label": "アクセス ポイント",
     "slots": 2
    },
    {
     "label": "ワイヤレス LAN コントローラ",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0201",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "ハブはスイッチとは異なり、既知の宛先MACアドレスに転送するフレームをどう処理しますか。",
  "choices": [
   "A. ハブは FIB テーブル内のすべてのポートにフレームを転送し、スイッチは宛先 MAC が既知のフレームを転送します。",
   "B. ハブはすべてのポートにフレームを転送し、スイッチは既知の宛先にフレームを転送します。",
   "C. ハブは MAC テーブルの情報を使用してフレームを転送し、スイッチはルーティング テーブルのデータを使用します。",
   "D. ハブは既知の MAC アドレスに接続されたポートにのみフレームを転送し、スイッチはすべてのポートにフレームを転送します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0202",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "ESSID の目的は何ですか。",
  "choices": [
   "A. 標準的なSSIDよりも高いセキュリティを提供します。",
   "B. 802.11 r、802.11k、802.11v などの高速ローミング機能をサポートしています。",
   "C. アクセスポイントのワイヤレスMACアドレスとして機能します。",
   "D. 複数のアクセスポイントがクライアント接続のために共通のネットワークを提供することを可能にします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0203",
  "theme": "devices-virtualization",
  "type": "multiple",
  "question": "DHCP サーバーの 2 つの機能は何ですか。(2つ選択)",
  "choices": [
   "A. 集中 IP 管理をサポートする",
   "B. ネットワークに追加されたときに DHCP DISCOVER メッセージを発行する",
   "C. IP アドレスを発行してクライアントの DHCP OFFER 要求に応答する",
   "D. ユーザーが独自の IP アドレスをホストに割り当てることを防ぐ",
   "E. ネットワーク内のホストに動的 IP 構成を割り当てる"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0204",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "無線ネットワークにおけるSSIDの特徴は何ですか？",
  "choices": [
   "A. スパイウェア対策",
   "B. 無線LANコントローラの識別に使用される",
   "C. 無線クライアントが特定のネットワークに接続できるようにする",
   "D. アクセスポイントへの接続に使用するパスワード"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0205",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "クライアントが同じSSID上のアクセスポイント間をローミングする場合、どの802.11管理フレームタイプが送信されますか。",
  "choices": [
   "A. 再関連付け要求",
   "B. 認証要求",
   "C. アソシエーション要求",
   "D. プローブ要求"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0206",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "アクセス ポイントが PoE スイッチ ポートに接続されている場合、電力割り当てにautoモードと staticモードを使用する利点は何ですか。",
  "choices": [
   "A. 電力ポリシングは同時に有効になる。",
   "B. アクセス ポイントにはデフォルト レベルが使用される。",
   "C. ケーブルの 4 ペアすべてが使用されている。",
   "D. デバイスが受電装置であることを検出する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0207",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "エンジニアは、2.4GHz チャネルの使用率が高く、5GHz チャネルの使用率が低いことを観察しました。クライアントが 5GHz アクセス ポイントを優先的に使用できるようにするには、何を構成する必要がありますか。",
  "choices": [
   "A. クライアントの帯域選択",
   "B. ローミングされたクライアントのリアンカー",
   "C. OEAP スプリットトンネル",
   "D. 11ac MU-MIMO"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0208",
  "theme": "devices-virtualization",
  "type": "multiple",
  "question": "ネットワーク上のサーバーの 2 つの機能は何ですか。(2つ選択)",
  "choices": [
   "A. 複数のワークステーションからのリクエストを同時に処理する",
   "B. 仮想サーバークラスタリングのみを利用して冗長化を実現する",
   "C. 単一クライアント専用のデータセンターにのみ収容されており、仮想サーバークラスタリングのみを使用して冗長性を実現する",
   "D. 他のサーバーと通信するために同じオペレーティング システムを実行する",
   "E. リクエストを行うワークステーションのデータを送信および取得するアプリケーションを実行する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0209",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "企業ネットワークにおけるアクセス ポイントの役割は何ですか。",
  "choices": [
   "A. DDoS 攻撃を防ぐために SNMP と統合する",
   "B. 企業ネットワークの防御の第一線として機能する",
   "C. 無線デバイスを有線ネットワークに接続する",
   "D. ネットワーク上のデバイスへの安全なユーザー ログインのサポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0210",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "どの PoE モードが受電デバイスの検出を有効にし、デバイスが検出されたときに電力を保証しますか。",
  "choices": [
   "A. auto",
   "B. static",
   "C. dynamic",
   "D. active"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0211",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "レイヤ 3 デバイスの主な機能は何ですか。",
  "choices": [
   "A. ホスト間で無線トラフィックを送信する",
   "B. トラフィックを分析し、インターネットからの不正なトラフィックをドロップする",
   "C. 同じブロードキャスト ドメイン内でトラフィックを転送する",
   "D. 異なるネットワーク間でトラフィックを渡す"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0212",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "SSID の目的は何ですか?",
  "choices": [
   "A. WLAN 上の個々のアクセス ポイントを識別します。",
   "B. アクセス ポイントに入るトラフィックを区別します。",
   "C. ネットワーク セキュリティを提供します。",
   "D. WLAN を識別します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0213",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "ワイヤレス ネットワークにおける SSID の特徴は何ですか?",
  "choices": [
   "A. WLAN 上のアクセス ポイントを識別します",
   "B. パスワードを使用してアクセス ポイントに接続する",
   "C. ポリシーを使用して無許可のユーザーを防止する",
   "D. 大文字と小文字を区別するテキスト文字列を使用する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0214",
  "theme": "devices-virtualization",
  "type": "multiple",
  "question": "DHCP サーバーの 2 つの機能は何ですか? (2 つお選びください。)",
  "choices": [
   "A. ネットワークに追加されたときに DHCPDISCOVER メッセージを発行する",
   "B. IP アドレスを発行してクライアントの DHCPOFFER 要求に応答する",
   "C. 一元的な IP 管理をサポートする",
   "D. ネットワーク内のホストに動的 IP 構成を割り当てる",
   "E. ユーザーが自分の IP アドレスをホストに割り当てることを防止する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0215",
  "theme": "devices-virtualization",
  "type": "exhibit_choice",
  "question": "新しく設定された PC が、TCP ポート 80 を使用して www.cisco.com にインターネット接続できません。接続を機能させるには、どの設定を変更しますか。",
  "choices": [
   "A. サブネットマスク",
   "B. DNSサーバー",
   "C. デフォルトゲートウェイ",
   "D. DHCPサーバー"
  ],
  "figure": "data/figures/CCNA-0215.png"
 },
 {
  "qid": "CCNA-0216",
  "theme": "devices-virtualization",
  "type": "exhibit_choice",
  "question": "新しく設定された PC が、TCP ポート 80 を使用して www.cisco.com にインターネット接続できません。接続を機能させるには、どの設定を変更しますか。",
  "choices": [
   "A. サブネットマスク",
   "B. DNSサーバー",
   "C. デフォルトゲートウェイ",
   "D. DHCPサーバー"
  ],
  "figure": "data/figures/CCNA-0216.png"
 },
 {
  "qid": "CCNA-0217",
  "theme": "devices-virtualization",
  "type": "exhibit_choice",
  "question": "IPv4 優先機能を使用する場合、ホストはどのような処理を行いますか。",
  "choices": [
   "A. 静的に割り当てられた IPv4 アドレスを引き続き使用します",
   "B. DNS サーバーに、更新のたびに同じ IPv4 アドレスを提供するよう強制します",
   "C. DHCP サーバーとのリースを更新するときに、同じ IPv4 アドレスを要求します",
   "D. IPv4 ホスト IP アドレスを更新するときに、アドレス プールを優先します"
  ],
  "figure": "data/figures/CCNA-0217.png"
 },
 {
  "qid": "CCNA-0218",
  "theme": "devices-virtualization",
  "type": "exhibit_choice",
  "question": "ホスト A がインターネットにアクセスできないのはなぜですか。",
  "choices": [
   "A. LANとWANのネットワークセグメントは異なる。",
   "B. IPアドレスの割り当てが間違っている。",
   "C. デフォルトゲートウェイは、最初に使用可能なIPアドレスであるべきです。",
   "D. ドメインネームサーバーに到達できない。"
  ],
  "figure": "data/figures/CCNA-0218.png"
 },
 {
  "qid": "CCNA-0219",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "ユーザーの Windows コンピューター上の IP アドレスと DNS サーバー情報を確認する必要があります。コンピューターのコマンド プロンプトにどのコマンドを入力しますか。",
  "choices": [
   "A. ipconfig /all",
   "B. show interface",
   "C. netstat -r",
   "D. ifconfig -a"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0220",
  "theme": "devices-virtualization",
  "type": "exhibit_choice",
  "question": "現在のリースの有効期限が切れた場合、クライアントはどのアドレスに連絡して IPアドレスを更新しますか。",
  "choices": [
   "A. 192.168.25.103",
   "B. 192.168.25.100",
   "C. 192.168.25.1",
   "D. 192.168.25.254"
  ],
  "figure": "data/figures/CCNA-0220.png"
 },
 {
  "qid": "CCNA-0221",
  "theme": "devices-virtualization",
  "type": "exhibit_choice",
  "question": "ホストC がインターネットに接続できない原因となっている構成パラメータはどれか。",
  "choices": [
   "A. IPアドレスの割り当て",
   "B. デフォルトゲートウェイ",
   "C. IPネットワークマスク",
   "D. 自動DNS"
  ],
  "figure": "data/figures/CCNA-0221.png"
 },
 {
  "qid": "CCNA-0222",
  "theme": "devices-virtualization",
  "type": "exhibit_choice",
  "question": "SW1にVLAN間ルーティングが設定されている。クライアントAはVLAN 10のOSとしてLinuxを実行しており、デフォルトゲートウェイIPは10.0.0.1ですが、Windowsを実行しているVLAN 20のクライアントBにpingを送信できません。クライアントAが正しいIP設定を持っていることを確認するために、どのようなアクションを取らなければなりませんか。",
  "choices": [
   "A. ifconfigコマンドを実行し、IPとサブネットマスクが255.254.0.0の範囲内にあることを確認する",
   "B. ipconfigコマンドを実行し、IPアドレスが10.0.0.1～10.0.255.254の範囲内にあることを確認する",
   "C. ipconfigコマンドを実行し、デフォルトゲートウェイが10.0.0.1に使用されていることを確認する",
   "D. ifconfigコマンドを実行し、サブネットマスクが255.255.128.0に設定されていることを確認する"
  ],
  "figure": "data/figures/CCNA-0222.png"
 },
 {
  "qid": "CCNA-0223",
  "theme": "devices-virtualization",
  "type": "exhibit_choice",
  "question": "ユーザーは192.168.3.0/24上のデバイスには接続できますが、10.10.1.0/24上のユーザーには接続できません。接続性を確認する最初のステップは何ですか。",
  "choices": [
   "A. インターネットに接続できるか",
   "B. デフォルトゲートウェイに到達可能か",
   "C. DNSサーバーに到達可能か"
  ],
  "figure": "data/figures/CCNA-0223.png"
 },
 {
  "qid": "CCNA-0224",
  "theme": "devices-virtualization",
  "type": "exhibit_choice",
  "question": "デフォルト ゲートウェイがサブネット内の最初の使用可能な IP アドレスである場合、デフォルト ゲートウェイは何ですか?",
  "choices": [
   "A. 10.8.128.1",
   "B. 10.8.132.1",
   "C. 10.8.138.1",
   "D. 10.8.144.1"
  ],
  "figure": "data/figures/CCNA-0224.png"
 },
 {
  "qid": "CCNA-0225",
  "theme": "devices-virtualization",
  "type": "exhibit_choice",
  "question": "上記を参照してください。ネットワーク エンジニアは、ファイアウォール ルールの問題を調査するために、構成された IP アドレスの詳細を提供する必要があります。en0 インターフェイスでの設定を識別するサブネットとマスクはどれですか。",
  "choices": [
   "A. 10.8.0.0/16",
   "B. 10.8.64.0/18",
   "C. 10.8.128.0 /19",
   "D. 10.8.138.0 /24"
  ],
  "figure": "data/figures/CCNA-0225.png"
 },
 {
  "qid": "CCNA-0226",
  "theme": "devices-virtualization",
  "type": "multiple",
  "question": "仮想マシン (VM) を代表する特性はどれですか。(2つ選択)",
  "choices": [
   "A. ハイパーバイザー上のVMは、他のVMと自動的に相互接続されます。",
   "B. 個々のハイパーバイザー上のVMは、リソースを均等に共有します。",
   "C. 各VMのオペレーティングシステムは、そのハイパーバイザーに依存します。",
   "D. 各VMは、同じハイパーバイザー内の他のVMとは独立して実行されます。",
   "E. 複数のVMが同じ基盤ハードウェア上で動作します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0227",
  "theme": "devices-virtualization",
  "type": "drag_drop",
  "question": "[仮想化]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "各コアは複数のプロセスを同時に実行できます",
    "サーバーハードウェアから分離されたオペレーティングシステムインスタンス",
    "物理ハードウェアの基本機能を管理するソフトウェア",
    "仮想マシンの基本機能を管理するソフトウェア",
    "物理サーバー上で実行され、物理リソースを管理および割り当てます"
   ],
   "targets": [
    {
     "label": "仮想マシン",
     "slots": 1
    },
    {
     "label": "マルチスレッド",
     "slots": 1
    },
    {
     "label": "ハイパーバイザー",
     "slots": 1
    },
    {
     "label": "ホストオペレーティングシステム",
     "slots": 1
    },
    {
     "label": "ゲストオペレーティングシステム",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0228",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "各仮想マシンの物理リソースを制御および配布するコンポーネントはどれですか。",
  "choices": [
   "A. 物理エンクロージャ",
   "B. OS",
   "C. ハイパーバイザ",
   "D. CPU"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0229",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "仮想マシンを展開する前に考慮すべきことは何ですか。",
  "choices": [
   "A. データセンター環境内の仮想マシンの場所",
   "B. VSM を利用して複数の仮想プロセッサを 2 台以上の仮想マシンにマッピングするかどうか",
   "C. CPU コアの数やメモリの量などのリソース制限",
   "D. モニター、キーボード、マウスなどの物理周辺機器のサポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0230",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "仮想マシンにはどのようなコンポーネントが含まれていますか。",
  "choices": [
   "A. NIC、RAM、ディスク、CPU などの物理リソース",
   "B. ハイパーバイザの物理リソースによってサポートされる構成ファイル",
   "C. ハイパーバイザで実行されるアプリケーション",
   "D. ハイパーバイザとゲスト OS で実行されるプロセス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0231",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "仮想マシンをホストするために基盤となる OS なしで動作するハイパーバイザーのタイプはどれですか。",
  "choices": [
   "A. タイプ 1",
   "B. タイプ 2",
   "C. タイプ 3",
   "D. タイプ 12"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0232",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "同じハイパーバイザー上で実行されている複数の仮想マシン間で分散される物理コンポーネントはどれですか。",
  "choices": [
   "A. ハードウェアリソース",
   "B. ネットワークインターフェース",
   "C. バックプレーンネットワーク",
   "D. 外部ストレージ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0233",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "次のうち、コンテナにおける仮想化を説明するものはどれですか？",
  "choices": [
   "A. ホストOSが異なるCPUメモリプロセスを制御するタイプのOS仮想化です。",
   "B. 物理的なコンピュータをエミュレートし、物理マシン上で複数のマシンと多くのOSを実行可能にします。",
   "C. 仮想マシンを互いに分離し、メモリ、プロセッサ、ストレージを計算用に割り当てます。",
   "D. ゲストOSとハードウェアの仮想パーティションをOS用に含み、アプリケーションライブラリが必要です。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0234",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "複数のOSで単一の物理サーバーを実行できるようにするテクノロジはどれか?",
  "choices": [
   "A. クラウドコンピューティング",
   "B. 仮想化",
   "C. アプリケーションホスティング",
   "D. コンテナ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0235",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "物理ネットワーク機器上で論理的なレイヤー3の分離を可能にするテクノロジはどれですか?",
  "choices": [
   "A. 仮想スイッチシステム",
   "B. 仮想ルート転送 (VRF)",
   "C. IPsecトランスポートモード",
   "D. 時分割多重化装置"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0236",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "仮想マシンについて説明している文はどれですか?",
  "choices": [
   "A. ゲストOSとサービスが含まれます",
   "B. インフラストラクチャデバイスのローカル管理を容易にします",
   "C. スーパーバイザーを使用してサービスを管理します",
   "D. ネットワークを俊敏かつハードウェア中心にすることができます"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0237",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "仮想化ソリューションのどの要素が仮想化サービスを管理し、仮想化サービスと外部インターフェイス間の接続を可能にしますか。",
  "choices": [
   "A. ソフトウェア",
   "B. ネットワーク機能",
   "C. 仮想マシン",
   "D. ハードウェア"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0238",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "ある組織は、クラウドが提供するサービスの使用を開始することを決定しました。組織が独自のオペレーティング システムを仮想マシンにインストールできるクラウド サービスはどれですか。",
  "choices": [
   "A. サービスとしてのプラットフォーム",
   "B. サービスとしてのネットワーク",
   "C. サービスとしてのソフトウェア",
   "D. サービスとしてのインフラストラクチャ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0239",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "管理者はネットワーク エンジニアに、従業員がたまにしか使用しないソフトウェアのインストール、管理、更新に時間を無駄にしないように、どのクラウド サービス モデルを使用するかをアドバイスしてもらいます。エンジニアが推奨するクラウド サービス モデルはどれですか。",
  "choices": [
   "A. サービスとしてのインフラストラクチャ",
   "B. サービスとしてのプラットフォーム",
   "C. さまざまな種類のサービスをサポートする、サービスとしてのビジネス プロセス",
   "D. サービスとしてのソフトウェア"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0240",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "クラウドコンピューティング環境における「rapid elasticity(迅速な弾力性)」とは次のうちどの説明が適切か。",
  "choices": [
   "A. テナントによるリソース消費の制御と監視",
   "B. 必要性に応じて容量を自動調整すること",
   "C. ニーズに基づいてマルチテナント モデルでリソースをプールする",
   "D. テナントによるコンピューティング リソースのセルフサービス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0241",
  "theme": "devices-virtualization",
  "type": "multiple",
  "question": "パブリック クラウド実装の 2 つの特徴は何ですか。(2つ選択)",
  "choices": [
   "A. 特定の当事者によって所有および維持されるが、複数の組織間で共有される。",
   "B. 組織がネットワーク リソースを展開する方法を完全にカスタマイズできるようにする。",
   "C. インターネット経由でアクセスされるサービスを提供する",
   "D. 1社のみのクラウドサービスを保守する公衆インターネット上のデータセンターである。",
   "E. 一元化されたサードパーティプロバイダーからのネットワークリソースと私有の仮想リソースをサポートする。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0242",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "単一のホスト コンピュータ上で複数のオペレーティング システムを実行できるようにするテクノロジはどれですか。",
  "choices": [
   "A. 仮想ルーティングと転送",
   "B. 仮想デバイスコンテキスト",
   "C. ネットワークポートIDの仮想化",
   "D. サーバー仮想化"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0243",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "パブリック クラウド リソースを消費する外部ユーザーにとってのメリットは何ですか。",
  "choices": [
   "A. 専用 WAN 経由で実装する。",
   "B. すべて物理サーバーでホストされる",
   "C. インターネット経由でアクセスする",
   "D. ユーザーと同じデータセンターに位置する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0244",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "仮想マシンの機能として適切なのは次のうちどれですか。",
  "choices": [
   "A. ハイパーバイザーは、追加のリソースを必要とせず、レイヤー3で通信を行う。",
   "B. 各ハイパーバイザーは、1台の仮想マシンと1台のソフトウェアスイッチをサポートする。",
   "C. ハイパーバイザーは、CPU、メモリ、ストレージなどの物理コンポーネントを仮想化する。",
   "D. 仮想化されたサーバーは、ハイパーバイザーとは別のスイッチに物理的に接続することで効率的に動作する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0245",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "AWS のようなパブリック クラウド サービスの利点は次のうちどれですか。",
  "choices": [
   "A. 全体的なコストの削減",
   "B. CapEXの削減",
   "C. ITインフラを完全に制御",
   "D. ITの専門知識が不必要"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0246",
  "theme": "devices-virtualization",
  "type": "single",
  "question": "クラウド コンピューティング環境における急速な弾力性とは何ですか?",
  "choices": [
   "A. テナントによる制御と監視またはリソース消費",
   "B. ニーズに基づいた容量の自動調整",
   "C. ニーズに基づいてマルチテナント モデルでリソースをプールする",
   "D. テナントによるコンピューティング リソースのセルフサービス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0247",
  "theme": "switching",
  "type": "single",
  "question": "宛先 MAC アドレスが MAC アドレス テーブルに存在しないフレームを受信した場合、スイッチはどのような処理を行いますか。",
  "choices": [
   "A. 受信VLAN 内の残りのすべてのポートにフレームを変更せずにフラッディングします。",
   "B. MAC の静的エントリをテーブルに追加し、ポートをシャットダウンします。",
   "C. フレームの宛先 MAC アドレスで CAM テーブルを更新します。",
   "D. フレームのチェックサムを無効なフレームを示す値に変更します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0248",
  "theme": "switching",
  "type": "multiple",
  "question": "スイッチでフレームフラッディングが発生する理由は何ですか。(2つ選択)",
  "choices": [
   "A. スイッチポートに不良パッチケーブルが接続されている",
   "B. スパニングツリー内でトポロジの変更が発生している",
   "C. 古い MAC テーブルエントリによって過剰な更新が発生している",
   "D. ポートセキュリティがグローバルに設定されている",
   "E. 転送テーブルがオーバーフローしている"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0249",
  "theme": "switching",
  "type": "single",
  "question": "スイッチが宛先が不明な MAC アドレスであるフレームを受信すると何が起こりますか。",
  "choices": [
   "A. フレームは、そのフレームが属するVLAN内のすべてのインターフェースにフラッディングされます。",
   "B. フレームはスイッチ内のすべてのインターフェースにフラッディングされます。",
   "C. フレームは破棄されます",
   "D. スイッチのMACアドレステーブルはフラッシュされます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0250",
  "theme": "switching",
  "type": "single",
  "question": "どのスイッチング機能が、未使用の MAC アドレスを MAC アドレス テーブルから削除し、新しい MAC アドレスを追加できるようにしますか。",
  "choices": [
   "A. MAC 移動",
   "B. MAC アドレスのエージング",
   "C. 動的 MAC アドレス学習",
   "D. MAC アドレスの自動消去"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0251",
  "theme": "switching",
  "type": "single",
  "question": "スイッチは、フレームを受信したインターフェースを除くすべてのインターフェースからフレームを転送しています。このプロセスの専門用語は何ですか。",
  "choices": [
   "A. CDP",
   "B. マルチキャスト",
   "C. フラッディング",
   "D. ARP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0252",
  "theme": "switching",
  "type": "single",
  "question": "スイッチが不明な送信元MAC アドレスからフレームを受信すると、スイッチはそのフレームに対してどのようなアクションを実行しますか。",
  "choices": [
   "A. フレームを、受信したインターフェイスを含むすべてのインターフェイスにフラッディングします。",
   "B. 送信元MACアドレスがまだ送信に使用できることを確認するために、フレームを送信元に送り返そうとします。",
   "C. 不明な送信元 MAC アドレスで識別された CAM テーブル内のポートにフレームを送信します。",
   "D. 送信元 MAC アドレスを、受信した LAN ポートに関連付け、MAC アドレス テーブルに保存します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0253",
  "theme": "switching",
  "type": "exhibit_choice",
  "question": "ホストAのスイッチインターフェースは VLAN2に設定されています。ホストDはホストAのIPアドレス宛てのユニキャストパケットを送信します。スイッチはホストDからフレームを受信すると何を行いますか。",
  "choices": [
   "A. 送信元ポートを除くすべてのポートからフレームをフラッディングします。",
   "B. 送信元ポートをシャットダウンし、err-disable モードにします。",
   "C. スイッチの MAC テーブルからフレームをドロップします。",
   "D. ブロードキャスト ストームを作成します。"
  ],
  "figure": "data/figures/CCNA-0253.png"
 },
 {
  "qid": "CCNA-0254",
  "theme": "switching",
  "type": "single",
  "question": "イーサネット フレームがスイッチ インターフェイス G0/1 に到着しましたが、宛先 MAC アドレスが MAC アドレス テーブルにありません。スイッチはフレームをどのように処理しますか。",
  "choices": [
   "A. ARPリクエストを送信し、宛先の特定を試みる。",
   "B. 宛先をFFFF.FFFF.FFFFに更新する。",
   "C. フレームをドロップし、送信ホストに通知する。",
   "D. 残りのスイッチインタフェースからフレームをフラッディングします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0255",
  "theme": "switching",
  "type": "single",
  "question": "フレームスイッチングの特徴は何ですか。",
  "choices": [
   "A. ARPテーブルにイグレスポートを入力します。",
   "B. アドレステーブルにリストされていない受信MACアドレスをドロップする。",
   "C. バッファにフレームを保存して転送し、エラーチェックを使用する。",
   "D. 送信元と宛先のMACアドレスを書き換える"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0256",
  "theme": "switching",
  "type": "single",
  "question": "スイッチが期限切れになった宛先MACアドレスを持つフレームを受信するとどうなりますか。",
  "choices": [
   "A. フレームを受信したポートの履歴アドレスのMACアドレスエージングテーブルを参照します。",
   "B. フレームを受信したポート以外のすべてのVLANのポートにフレームをフラッディングします。",
   "C. フレームをドロップし、フレームを受信したポートから宛先MACアドレスを再度学習します。",
   "D. フレームを受信したポートを除くVLANのすべてのポートにフレームをフラッディングします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0257",
  "theme": "switching",
  "type": "single",
  "question": "スイッチはフレームを転送するときに CAM テーブルで何を検索しますか。",
  "choices": [
   "A. 送信元 MAC アドレスとエージング時間",
   "B. 宛先 MAC アドレスとフラッシュ時間",
   "C. 送信元 MAC アドレスと送信元ポート",
   "D. 宛先 MAC アドレスと宛先ポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0258",
  "theme": "switching",
  "type": "single",
  "question": "MAC 学習はどのように機能しますか。",
  "choices": [
   "A. ポートを最大 10 個の動的に学習されたアドレスに制限します",
   "B. 管理 VLAN のセキュリティを強化します",
   "C. MAC アドレスを、それを受信したポートに関連付けます",
   "D. アドレス テーブルにリストされていない受信 MAC アドレスをドロップします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0259",
  "theme": "switching",
  "type": "single",
  "question": "レイヤー2スイッチの特徴は何ですか。",
  "choices": [
   "A. 接続されているすべてのデバイスに単一のブロードキャストドメインを提供します",
   "B. アクティブな TCP 接続の数を追跡します",
   "C. 接続されているすべてのデバイスに1つの衝突ドメインを提供します",
   "D. MAC アドレスに基づいて転送を決定します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0260",
  "theme": "switching",
  "type": "single",
  "question": "フレームスイッチングの特徴は何ですか。",
  "choices": [
   "A. 不明な宛先からのフレームを検査してドロップする",
   "B. 受信ポートを除くすべてのポートに不明な宛先をフラッディングする",
   "C. CDP を使用してフレームを隣接ポートに転送する",
   "D. サービス拒否攻撃から保護する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0261",
  "theme": "switching",
  "type": "single",
  "question": "デフォルトでは、ワークステーションがトラフィックの送信を停止した後、スイッチはどのくらいの期間ワークステーションの MAC アドレスを認識し続けますか。",
  "choices": [
   "A. 200秒",
   "B. 300秒",
   "C. 600秒",
   "D. 900秒"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0262",
  "theme": "switching",
  "type": "single",
  "question": "PC1 は新しくインストールされた PC2 にトラフィックを送信します。PC2 の MAC アドレスはスイッチの MAC アドレス テーブルにリストされていないため、スイッチは同じ VLAN 内のすべてのポートにパケットを送信します。これはどのスイッチング概念を表していますか。",
  "choices": [
   "A. MAC アドレスのエージング",
   "B. MAC アドレス テーブル",
   "C. スパニング ツリー プロトコル",
   "D. フレーム フラッディング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0263",
  "theme": "switching",
  "type": "single",
  "question": "レイヤ2スイッチの特徴は何ですか？",
  "choices": [
   "A. 受信したすべてのフレームを接続されているすべてのデバイスに転送する",
   "B. ステートフルなトランザクション情報を維持する",
   "C. サーバーにリンクバンドルを提供する",
   "D. 半二重でのみ送信する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0264",
  "theme": "switching",
  "type": "exhibit_choice",
  "question": "スイッチは宛先MACアドレスが 3C:5D:7E:9F:1A:2B であるフレームを受信します。スイッチはフレームをどのように処理しますか?",
  "choices": [
   "A. 受信ポートを除くすべてのポートにフレームをフラッディングします。",
   "B. 設定に基づいて、フレームを事前に決定されたポートに切り替えます。",
   "C. MACアドレスが判明するまでフレームをエージングアウトします。",
   "D. 不要なネットワーク輻輳を回避するためにフレームをドロップします。"
  ],
  "figure": "data/figures/CCNA-0264.png"
 },
 {
  "qid": "CCNA-0265",
  "theme": "switching",
  "type": "single",
  "question": "レイヤー2スイッチの特徴は何ですか。",
  "choices": [
   "A. ステートフルなトランザクション情報を維持する",
   "B. ディープパケットインスペクションを使用してトラフィックを優先順位付けする",
   "C. 通信にデータリンク層を使用する",
   "D. 接続されているすべてのデバイスに単一のブロードキャストドメインを提供する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0266",
  "theme": "switching",
  "type": "single",
  "question": "ストアアンドフォワードスイッチングの機能とは何ですか。",
  "choices": [
   "A. フレーム内のエラーチェックを排除することでレイテンシを短縮する。",
   "B. CRC を使用して、効果的なレベルのエラーのないネットワーク トラフィックを生成する。",
   "C. フレームをバッファリングし、フレーム内のエラーに関係なく転送する。",
   "D. 宛先MACアドレスのみをチェックしてフレームを転送する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0267",
  "theme": "switching",
  "type": "single",
  "question": "一致する宛先 MAC アドレスを持つポートにフレームを転送する機能はどれですか。",
  "choices": [
   "A. フレームフラッディング",
   "B. フレームフィルタリング",
   "C. フレームプッシング",
   "D. フレームスイッチング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0268",
  "theme": "switching",
  "type": "single",
  "question": "イーサネットフレームの最小サイズはどれか。",
  "choices": [
   "A. 46バイト",
   "B. 1518バイト",
   "C. 64バイト",
   "D. 128バイト"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0269",
  "theme": "switching",
  "type": "single",
  "question": "MAC 学習はどのように機能しますか?",
  "choices": [
   "A. すべての VLAN とインターフェイスでデフォルトで有効になっています",
   "B. 管理 VLAN のセキュリティを強化する",
   "C. 宛先不明のフレームをマルチキャスト グループに送信する",
   "D. 未知の宛先からのフレームを検査してドロップする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0270",
  "theme": "switching",
  "type": "single",
  "question": "レイヤ 2 スイッチの特徴は何ですか?",
  "choices": [
   "A. 受信したすべてのフレームを接続されているすべてのデバイスに転送します",
   "B. 接続されているすべてのデバイスに対して 1 つのコリジョン ドメインを提供する",
   "C. 半二重のみで送信する",
   "D. タグ付けプロトコルを使用したセグメンテーションをサポートする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0271",
  "theme": "switching",
  "type": "single",
  "question": "フレームスイッチングの特徴は何ですか?",
  "choices": [
   "A. 送信元と宛先の MAC アドレスを書き換えます。",
   "B. ルックアップを実行して宛先インターフェイスを学習します",
   "C. 新しいフレームを受信したときに再送要求を送信します 。",
   "D. 未知の宛先からのフレームを検査してドロップする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0272",
  "theme": "switching",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。 PC1 は初めて PC3 に ping を試み、ARP を S1 に送信します。 S1 はどのアクションを実行しますか?",
  "choices": [
   "A. G0/0 を除くすべてのポートにフラッディングアウトされます。",
   "B. フレームが落ちます。",
   "C. G0/3 のみに転送します。",
   "D. インターフェイス G0/2 のみに転送します。"
  ],
  "figure": "data/figures/CCNA-0272.png"
 },
 {
  "qid": "CCNA-0273",
  "theme": "switching",
  "type": "exhibit_choice",
  "question": "上記を参照してください。ネットワーク エンジニアは、LLDP パケットを 1 分ごとに送信し、LLDP 経由で送信される情報が 3 分ごとに更新されるように、Switch2 の構成を更新する必要があります。エンジニアはどの構成を適用する必要がありますか。",
  "choices": [
   "A. Switch2(config)#lldp timer 60\nSwitch2(config)#lldp tlv-select 180",
   "B. Switch2(config)#lldp timer 60\nSwitch2(config)#lldpholdtime 180",
   "C. Switch2(config)#lldp timer 1\nSwitch2(config)#lldpholdtime 3",
   "D. Switch2(config)#lldp timer 1\nSwitch2(config)#lldp tlv-select 3"
  ],
  "figure": "data/figures/CCNA-0273.png"
 },
 {
  "qid": "CCNA-0274",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "WLCのディストリビューションポートに接続するスイッチのポートをトランクモードに設定する理由は何ですか。",
  "choices": [
   "A. データパスのリンク障害による冗長性を排除するため",
   "B. データパスで複数の VLAN を使用できるようにするため",
   "C. アウトオブバンド管理のリンク障害が発生した場合に冗長性を提供するため",
   "D. 複数の VLAN がアウトオブバンド管理を提供できるようにするため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0275",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "SSID の仕様はどれですか。",
  "choices": [
   "A. Cisco 独自のセキュリティ機能です",
   "B. 1つの数字と1つの文字を含める必要があります",
   "C. スイッチ上の VLAN を定義します",
   "D. 大文字と小文字が区別されます"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0276",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "SW2を新しいCiscoスイッチ NewSWに置き換えます。NewSWにどの構成を適用しますか。\n* SW1 および SW2 は、トランク ポートをサポートしていないサードパーティ製デバイスです\n* PC1、PC2、および PC3 間の既存の接続を維持します\n* スイッチが将来の VLAN 10 からのトラフィックを通過できるようにします",
  "choices": [
   "A. NewSW(config)#interface f0/0\nNewSW(config-if)#switchport mode trunk\nNewSW(config-if)#switchport trunk allowed vlan 2,10\nNewSW(config-if)#switchport trunk native vlan 2",
   "B. NewSW(config)#interface f0/0\nNewSW(config-if)#switchport mode trunk\nNewSW(config-if)#switchport trunk allowed vlan 10\nNewSW(config-if)#switchport trunk native vlan 10",
   "C. NewSW(config)#interface f0/0\nNewSW(config-if)#switchport mode access\nNewSW(config-if)#switchport trunk allowed vlan 2,10\nNewSW(config-if)#switchport trunk native vlan 10",
   "D. NewSW(config)#interface f0/0\nNewSW(config-if)#switchport mode access\nNewSW(config-if)#switchport trunk allowed vlan 2,10\nNewSW(config-if)#switchport trunk native vlan 2"
  ],
  "figure": "data/figures/CCNA-0276.png"
 },
 {
  "qid": "CCNA-0277",
  "theme": "vlan-trunk",
  "type": "drag_drop",
  "question": "[VLAN ポートモード]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ポートがサービスプロバイダーネットワーク全体で単一のVLAN をサポートできるようにします",
    "ポートが 1 つ以上の VLAN に属することを可能にします",
    "ポートが同じコミュニティVLAN 内の他のポートと通信することを可能にします",
    "ポートが 1 つの VLAN に自動的に割り当てられることを可能にします",
    "手動で設定した場合、ポートが 1 つの VLAN に属することを可能にします"
   ],
   "targets": [
    {
     "label": "静的アクセス",
     "slots": 1
    },
    {
     "label": "動的アクセス",
     "slots": 1
    },
    {
     "label": "トランク",
     "slots": 1
    },
    {
     "label": "トンネル",
     "slots": 1
    },
    {
     "label": "プライベート",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0278",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "スイッチ上でフレームスイッチングはどのように機能しますか。",
  "choices": [
   "A. CDP を使用してフレームを隣接ポートに転送する",
   "B. 既知の送信元 VLAN を含むフレームを変更する",
   "C. 不明な宛先からのフレームを検査してドロップする",
   "D. 既知の宛先を宛先ポートに転送する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0279",
  "theme": "vlan-trunk",
  "type": "multiple",
  "question": "ワイヤレスネットワーク用に新しい WLAN を設定します。これらの要件を満たすアクションはどれですか。(2つ選択)\n・デュアルバンドクライアントは、5GHzに誘導される\n・ワイヤレスクライアントは、返された RADIUS属性でVLAN 設定を適用できる",
  "choices": [
   "A. Client Band Select オプションを有効にする",
   "B. Coverage Hole Detection オプションを有効にする",
   "C. Alloe AAA Override オプションを有効にする",
   "D. MFP Client Protection オプションを必須に設定する",
   "E. Aironet IE オプションを有効にする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0280",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "VoIP は、VLAN ID 73 を使用し、「VoIP」という名前が付けられています。各ユーザは、自分のデスクに Cisco IP 電話が必要です。e0/0 は、データ VLAN のアクセスポートとして設定されています。Cisco Discovery Protocol はグローバルに有効になっています。どのシーケンスで設定が完了しましたか。",
  "choices": [
   "C. vlan 73\nname VoIP\ne0/0\nswitchport voice vlan 73",
   "D. vlan 73\nname VoIP\ne0/0\nswitchport voice vlan dot1p"
  ],
  "figure": "data/figures/CCNA-0280.png"
 },
 {
  "qid": "CCNA-0281",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。エンジニアは新しい AccSw2 スイッチに VLAN を構成しました。 Router-on-a-stick は両方のスイッチに接続されています。 2 つのスイッチ間および Server1 への完全な接続を確立するには、AccSw2 でポートをどのように構成する必要がありますか?",
  "choices": [
   "A. interface GigabitEthernet1/1\nswitchport access vlan 11\n!\ninterface GigabitEthernet1/24\nswitchport mode trunk\nswitchport trunk allowed vlan 10,11",
   "B. interface GigabitEthernet1/3\nswitchport mode access\nswitchport access vlan 10\n!\ninterface GigabitEthernet1/24\nswitchport mode trunk\nswitchport trunk allowed vlan 2,10",
   "C. interface GigabitEthernet1/3\nswitchport mode access\nswitchport access vlan 10\n!\ninterface GigabitEthernet1/24\nswitchport mode trunk",
   "D. interface GigabitEthernet1/1\nswitchport mode access\nswitchport access vlan 11\n!\ninterface GigabitEthernet1/24\nswitchport mode trunk"
  ],
  "figure": "data/figures/CCNA-0281.png"
 },
 {
  "qid": "CCNA-0282",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ネットワーク サービスはインターフェイス Gi1/0/34 で有効にする必要があります。この実装のニーズを満たす構成はどれですか?",
  "choices": [
   "A. interface Gi1/0/34\nswitchport mode trunk\nswitchport\ntrunk allowed native vlan 400\nswitchport\nvoice vlan 4041",
   "B. interface Gi1/0/34\nswitchport mode trunk\nswitchport\ntrunk allowed vlan 400, 4041\nswitchport voice vlan 4041",
   "C. interface Gi1/0/34\nswitchport mode access\nswitchport\naccess vlan 400\nswitchport voice vlan 4041",
   "D. interface Gi1/0/34\nswitchport mode access\nswitchport\naccess vlan 4041\nswitchport voice vlan 400"
  ],
  "figure": "data/figures/CCNA-0282.png"
 },
 {
  "qid": "CCNA-0283",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "スイッチとPCの設定は完了しています。VLAN 2とVLAN 3が相互に通信できるようにするには、どの設定を適用しますか。",
  "choices": [
   "A. interface GigabitEthernet0/0\nip address 10.10.2.10 255.255.252.0",
   "B. interface GigabitEthernet0/0.3\nencapsulation dot1Q 10\nip address 10.10.2.10 255.255.255.252",
   "C. interface GigabitEthernet0/0.10\nencapsulation dot1Q 3\nip address 10.10.2.10 255.255.254.0",
   "D. interface GigabitEthernet0/0.3\nencapsulation dot1Q 3 native\nip address 10.10.2.10 255.255.252.0"
  ],
  "figure": "data/figures/CCNA-0283.png"
 },
 {
  "qid": "CCNA-0284",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "R1のEthernet0/0にサブインターフェースを追加して、10.20.20.1/24のVLAN 20を許可するには、どのようなコマンドが必要ですか？",
  "choices": [
   "A. R1 (config)#interface ethernet0/0\nR1 (config)#encapsulation dot1q 20\nR1(config)#ip address 10.20.20.1 255.255.255.0",
   "B. R1 (config)#interface ethernet0/0.20\nR1 (config)#encapsulation dot1q 20\nR1(config)#ip address 10.20.20.1 255.255.255.0",
   "C. R1 (config)#interface ethernet0/0.20\nR1(config)#ip address 10.20.20.1 255.255.255.0",
   "D. R1 (config)#interface ethernet0/0\nR1(config)#ip address 10.20.20.1 255.255.255.0"
  ],
  "figure": "data/figures/CCNA-0284.png"
 },
 {
  "qid": "CCNA-0285",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "FlexConnectモードで動作しているAPに接続し、WLANがフレックスローカルスイッチングを使用している場合、どのスイッチポート構成を設定しますか？",
  "choices": [
   "A. 1つのVLANを持つアクセスポート",
   "B. プルーニングされたVLANを持つトランクポート",
   "C. IPアドレスを持つレイヤ3ポート",
   "D. MACフィルタリングが有効になっているタグ付きポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0286",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "異なるファブリック内の 2 つのエッジ ノード間にトンネルを提供するためにソフトウェア デファインド アクセス (SDA) で使用されるプロトコルはどれですか。",
  "choices": [
   "A. GRE",
   "B. VLAN",
   "C. VXLAN",
   "D. PPP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0287",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "MACアドレス学習機能について適切なのは次のうちどれですか。",
  "choices": [
   "A. トランクに接続されているすべてのインターフェイスではデフォルトで無効になっている。",
   "B. 管理 VLAN のセキュリティを強化する。",
   "C. すべての VLAN およびインターフェイスでデフォルトで有効になっている。",
   "D. MAC アドレス フラッディングの可能性が高まる。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0288",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "スイッチのMAC学習機能について正しいのは次のうちどれですか。",
  "choices": [
   "A. MAC アドレス学習は、デフォルトではすべての VLAN で無効になっている。",
   "B. アドレス テーブルにリストされていない宛先 MAC アドレスに対して受信したフレームはドロップされる。",
   "C. MAC アドレス テーブルは、ARP テーブルを設定するために使用される。",
   "D. 静的 MAC アドレスが手動で MAC テーブルに追加される。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0289",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "AP とクライアント アクセスで使用される VLAN が異なる場合、ローカルでスイッチされる FlexConnect AP について何を考慮する必要がありますか。",
  "choices": [
   "A. AP は、LAG モードで複数のリンクを使用してスイッチに接続する必要がある。",
   "B. ネイティブ VLAN は AP の管理 VLAN と一致する必要がある。",
   "C. スイッチ ポート モードはトランクに設定する必要がある。",
   "D. IEEE 802.1Q トランキングはスイッチ ポートで無効にする必要がある。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0290",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "上記を参照してください。SW2 はこの VTP ドメイン内の他のスイッチとどのように対話しますか。",
  "choices": [
   "A. ネットワーク上の VTP クライアントからの VTP アップデートをトランク ポートで送信し、処理する。",
   "B. ネットワーク上の VTP クライアントからの VTP アップデートをアクセス ポートで処理する。",
   "C. すべての VTP サーバからアップデートを受信し、ローカルに設定されたすべての VLAN をすべてのトランク ポートに転送する。",
   "D. トランク ポートで受信した VTP アドバタイズメントのみを転送する。"
  ],
  "figure": "data/figures/CCNA-0290.png"
 },
 {
  "qid": "CCNA-0291",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "アクセスポートの追加が必要な場合、Spine-and-Leafアーキテクチャは、ネットワークのスケーラビリティをどのように実現するのでしょうか。",
  "choices": [
   "A. スパインスイッチ とリーフスイッチを追加し、両者間を冗長化する",
   "B. スパインスイッチは、40GB以上のアップリンクで追加可能である",
   "C. リーフスイッチは、すべてのスパインスイッチに接続可能な状態で追加することができる。",
   "D. リーフスイッチは、コアのスパインスイッチに1回接続するだけで追加できます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0292",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "パケットが同じポートを通過し、VLAN 間のトラフィック分離を維持できるように、異なる VLAN のパケットをカプセル化するレイヤ 2 スイッチ機能はどれですか。",
  "choices": [
   "A. VLAN マーキング",
   "B. VLAN 番号付け",
   "C. VLAN DSCP",
   "D. VLAN タグ付け"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0293",
  "theme": "vlan-trunk",
  "type": "multiple",
  "question": "レイヤ 2 スイッチの 2 つの機能は何ですか。(2つ選択)",
  "choices": [
   "A. アソシエーション サーバーと認証サーバーの中心点として機能する。",
   "B. WAN 上のネットワーク間の最適なルートを選択する",
   "C. VLAN内でパケットを移動する",
   "D. 異なる VLAN 間でパケットを移動する",
   "E. パケットの MAC アドレスに基づいて転送を決定する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0294",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "個別のブロードキャスト ドメインを作成するためにどのスイッチの概念が使用されますか。",
  "choices": [
   "A. STP",
   "B. VTP",
   "C. VLAN",
   "D. CSMA/CD"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0295",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "アクセス ポイントがワイヤレス ネットワーク デバイスへのワイヤレス接続を確立および維持するために使用する一意の識別子はどれですか。",
  "choices": [
   "A. VLAN ID",
   "B. SSID",
   "C. RFID",
   "D. WLAN ID"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0296",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "エンドポイントの機能について適切なのは次のうちどれですか。",
  "choices": [
   "A. ネットワーク内のホスト間でユニキャスト通信を渡す。",
   "B. 同じ VLAN 内のデバイス間でブロードキャスト トラフィックを送信する。",
   "C. ネットワークの信頼できるセクションと信頼できないセクションの間にセキュリティを提供する。",
   "D. 個々のユーザーがネットワーク サービスにアクセスするために直接使用する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0297",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "ネイティブVLANの説明として正しいものはどれか。",
  "choices": [
   "A. 管理用に予約されたVLAN",
   "B. トランクポートでタグなしフレームが属するVLAN",
   "C. すべてのポートがデフォルトで属するVLAN",
   "D. 音声トラフィック専用のVLAN"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0298",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "VLANの主な目的として誤っているものはどれか。",
  "choices": [
   "A. ルーティングテーブルのサイズを削減すること",
   "B. WANリンクの帯域幅を増加させること",
   "C. DHCPサーバーの数を減らすこと",
   "D. 物理的な配置に依存せずに論理的なブロードキャストドメインを分割すること"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0299",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "VLANの主な目的として正しい説明を選びなさい。",
  "choices": [
   "A. WANリンクの帯域幅を増加させること",
   "B. ルーティングテーブルのサイズを削減すること",
   "C. 物理的な配置に依存せずに論理的なブロードキャストドメインを分割すること",
   "D. DHCPサーバーの数を減らすこと"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0300",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "スイッチポートがアクセスモードに設定されている場合の動作として適切な説明を1つ選びなさい。",
  "choices": [
   "A. DTPネゴシエーションを常に行う",
   "B. すべてのVLANのトラフィックを受信する",
   "C. 複数のVLANのタグ付きフレームを送受信する",
   "D. 1つのVLANにのみ属し、タグなしフレームを送受信する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0301",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "802.1Qトランクポートの役割として正しいものはどれか。",
  "choices": [
   "A. 複数のVLANのトラフィックをタグ付けして1つのリンクで伝送する",
   "B. アクセスポートと同じ機能を提供する",
   "C. ルーティングプロトコルのアップデートを伝送する",
   "D. 特定のVLANのトラフィックのみを伝送する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0302",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "スイッチポートがアクセスモードに設定されている場合の動作として誤っているものはどれか。",
  "choices": [
   "A. すべてのVLANのトラフィックを受信する",
   "B. 複数のVLANのタグ付きフレームを送受信する",
   "C. DTPネゴシエーションを常に行う",
   "D. 1つのVLANにのみ属し、タグなしフレームを送受信する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0303",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "802.1Qトランクポートの役割として誤っているものはどれか。",
  "choices": [
   "A. 特定のVLANのトラフィックのみを伝送する",
   "B. 複数のVLANのトラフィックをタグ付けして1つのリンクで伝送する",
   "C. ルーティングプロトコルのアップデートを伝送する",
   "D. アクセスポートと同じ機能を提供する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0304",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "スイッチポートがアクセスモードに設定されている場合の動作として誤っているものはどれか。",
  "choices": [
   "A. DTPネゴシエーションを常に行う",
   "B. 1つのVLANにのみ属し、タグなしフレームを送受信する",
   "C. 複数のVLANのタグ付きフレームを送受信する",
   "D. すべてのVLANのトラフィックを受信する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0305",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "ネイティブVLANの説明として誤っているものはどれか。",
  "choices": [
   "A. 管理用に予約されたVLAN",
   "B. すべてのポートがデフォルトで属するVLAN",
   "C. 音声トラフィック専用のVLAN",
   "D. トランクポートでタグなしフレームが属するVLAN"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0306",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "802.1Qトランクポートの役割として誤っているものはどれか。",
  "choices": [
   "A. アクセスポートと同じ機能を提供する",
   "B. 特定のVLANのトラフィックのみを伝送する",
   "C. 複数のVLANのトラフィックをタグ付けして1つのリンクで伝送する",
   "D. ルーティングプロトコルのアップデートを伝送する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0307",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "ネイティブVLANの説明として誤っているものはどれか。",
  "choices": [
   "A. すべてのポートがデフォルトで属するVLAN",
   "B. トランクポートでタグなしフレームが属するVLAN",
   "C. 管理用に予約されたVLAN",
   "D. 音声トラフィック専用のVLAN"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0308",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "802.1Qトランクポートの役割として誤っているものはどれか。",
  "choices": [
   "A. ルーティングプロトコルのアップデートを伝送する",
   "B. アクセスポートと同じ機能を提供する",
   "C. 複数のVLANのトラフィックをタグ付けして1つのリンクで伝送する",
   "D. 特定のVLANのトラフィックのみを伝送する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0309",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "VLANの主な目的として誤っているものはどれか。",
  "choices": [
   "A. 物理的な配置に依存せずに論理的なブロードキャストドメインを分割すること",
   "B. ルーティングテーブルのサイズを削減すること",
   "C. DHCPサーバーの数を減らすこと",
   "D. WANリンクの帯域幅を増加させること"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0310",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "フレーム切り替えはスイッチ上でどのように機能しますか?",
  "choices": [
   "A. 不明な宛先を受信ポートを除くすべてのポートにフラッディングします。",
   "B. 既知の送信元 VLAN を含むフレームを変更する",
   "C. 送信元と宛先の MAC アドレスを書き換える",
   "D. CRC が 5 未満のフレームをバッファリングして転送する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0311",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。 VoIP は、VLAN ID 73 を使用してネットワークに実装されており、「VoIP」という名前が付けられています。各ユーザは自分のデスクに Cisco IP Phone を必要とします。スイッチポート e0/0 はデータ VLAN のアクセス ポートとして設定されています。 Cisco Discovery Protocol はグローバルに有効になっています。どのコマンド シーケンスが構成を完了しましたか?",
  "choices": [
   "A. vlan73\nname VoIP\ne0/0\nswitchport voice vlan dot1p",
   "B. vlan 73\nname VoIP\ne0/0\nswitchport trunk allowed vlan 72,73\nswitchport voice vlan 73",
   "C. vlan 73\nname VoIP\ne0/0\nswitchport mode trunk\nchannel-group 73 mode active",
   "D. vlan 73\nname VoIP\ne0/0\nswitchport voice vlan 73"
  ],
  "figure": "data/figures/CCNA-0311.png"
 },
 {
  "qid": "CCNA-0312",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "2つのスイッチが実装されており、すべてのインターフェイスはデフォルトの構成レベルにあります。2つのスイッチ間にトランク リンクを実装するには、次の要件を満たす必要があります。相互接続ポートはどのように構成しますか。\n・業界標準のトランキング プロトコルを使用する\n・VLAN 1 ～ 10 を許可し、他の VLAN を拒否する",
  "choices": [
   "A. switchport mode trunk\nswitchport trunk allowed vlans 1-10\nswitchport trunk native vlan 11",
   "B. switchport mode trunk\nswitchport trunk encapsulation dot1q\nswitchport trunk allowed vlans 1-10",
   "C. switchport mode dynamic desirable\nchannel-group 1 mode desirable\nswitchport trunk encapsulation isl\nswitchport trunk allowed vlan except 11-4094",
   "D. switchport mode dynamic\nchannel-protocol lacp\nswitchport trunk allowed vlans 1-10"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0313",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "ローカル モードの軽量 AP は有線ネットワークに接続するためにどのポートタイプを使用しますか。",
  "choices": [
   "A. アクセス",
   "B. トランク",
   "C. イーサチャネル",
   "D. LAG"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0314",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "新しいスイッチのインターフェイスを、Cat9300-1 の Gi1/0/1 に接続するように設定します。どの設定を適用しますか。",
  "choices": [
   "A. switchport trunk encapsulation dot1q\nswitchport trunk native vlan 321\nswitchport trunk allowed vlan 100-300",
   "B. switchport mode dynamic desirable\nswitchport trunk native vlan 321\nswitchport trunk allowed vlan 100,200,300",
   "C. switchport nonegotiate\nswitchport access vlan 321\nswitchport trunk allowed vlan except 2-1001",
   "D. switchport mode trunk\nswitchport trunk native vlan 321\nswitchport trunk allowed vlan 100,200,300"
  ],
  "figure": "data/figures/CCNA-0314.png"
 },
 {
  "qid": "CCNA-0315",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "SW_1 と SW_12 は、合併する 2 つの会社を表しています。これらの会社は、別々のネットワーク ベンダーを使用しています。両側の VLAN は、IP サブネットを共有するように移行されています。2つの会社を結合し、会社間ですべての VLAN を渡すには、両側でどのコマンド シーケンスを発行しますか。",
  "choices": [
   "A. switchport mode trunk\nswitchport trunk encapsulation dot1q",
   "B. switchport mode trunk\nswitchport trunk allowed vlan all\nswitchport dot1q ethertype 0800",
   "C. switchport mode dynamic desirable\nswitchport trunk allowed vlan all\nswitchport trunk native vlan 7",
   "D. switchport dynamic auto\nswitchport nonegotiate"
  ],
  "figure": "data/figures/CCNA-0315.png"
 },
 {
  "qid": "CCNA-0316",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "新しい VLAN とスイッチがネットワークに追加されます。リモート エンジニアは OldSwitch を構成し、構成が次の要件を満たしていることを確認する必要があります。リンクの NewSwitch 側のどの構成がこれらの要件を満たしていますか。\n・現在構成されている VLAN に対応する\n・範囲を拡張して VLAN 20 を含める\n・仮想 LAN の IEEE 標準サポートを可能にする",
  "choices": [
   "A. no switchport trunk encapsulation isl\nswitchport trunk encapsulation dot1q\nswitchport trunk allowed vlan add 20",
   "B. switchport nonnegotiate\nno switchport trunk allowed vlan 5,10\nswitchport trunk allowed vlan 5,10,15,20",
   "C. no switchport mode trunk\nswitchport trunk encapsulation isl\nswitchport mode access vlan 20",
   "D. switchport mode dynamic\nchannel-group 1 mode active\nswitchport trunk allowed vlan 5,10,15,20"
  ],
  "figure": "data/figures/CCNA-0316.png"
 },
 {
  "qid": "CCNA-0317",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "LAG の使用時に WLC 上のどのインターフェースが 1 つに制限されますか。",
  "choices": [
   "A. APマネージャ",
   "B. 仮想",
   "C. トランク",
   "D. サービス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0318",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "2つの異なる VLAN からのトラフィックを通過させるように、SW1 と SW2 のインターフェイス fa0/1 を設定します。セキュリティ上の理由から、会社のポリシーではネイティブ VLAN をデフォルト以外の値に設定する必要があります。この要件を満たす設定はどれですか。",
  "choices": [
   "A. Switch(config-if)#switchport mode dynamic\nSwitch(config-if)#switchport access vlan 100,105\nSwitch(config-if)#switchport trunk native vlan 1",
   "B. Switch(config-if)#switchport mode access\nSwitch(config-if)#switchport trunk encapsulation dot1q\nSwitch(config-if)#switchport access vlan 100.105\nSwitch(config-if)#switchport trunk native vlan 3",
   "C. Switch(config-if)#switchport mode trunk\nSwitch(config-if)# switch port trunk encapsulation isl\nSwitch(config-if)#switchport trunk allowed vlan 100,105\nSwitch(config-if)#s witch port trunk native vlan 1",
   "D. Switch(config-if)#switchport mode trunk\nSwitch(config-if)#switchport trunk encapsulation dot1q\nSwitch(config-if)#switchport trunk allowed vlan 100,105\nSwitch(config if)#switchport trunk native vlan 3"
  ],
  "figure": "data/figures/CCNA-0318.png"
 },
 {
  "qid": "CCNA-0319",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "Cisco WLC に複数のディストリビューション システム ポートと 1 つの IP アドレスのみが設定されている場合に必要な標準はどれですか。",
  "choices": [
   "A. 802.3ad",
   "B. 802.1q",
   "C. 802.1d",
   "D. 802.1af"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0320",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "APが1つの固有の SSID を提供し、クライアントデータと管理トラフィックを渡し、自律モードになっている場合、どのタイプの有線ポートが必要ですか。",
  "choices": [
   "A. デフォルト",
   "B. トランク",
   "C. アクセス",
   "D. LAG"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0321",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "SW1とSW2の間に新しくVLAN23を実装します。SW1で show interface ethernet0/0 switchport コマンドが実行されました。SW1の e0/0 は SW2へのアップリンクです。どのコマンドを入力すると、PC11とPC12間の通信に影響を与えずにPC1とPC2が通信できるようになりますか？",
  "choices": [
   "A. switchport trunk allowed vlan 2-1001",
   "B. switchport trunk allowed vlan add 23",
   "C. switchport trunk allowed vlan 23",
   "D. switchport trunk allowed vlan 22-23"
  ],
  "figure": "data/figures/CCNA-0321.png"
 },
 {
  "qid": "CCNA-0322",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "ネットワーク エンジニアは、新しい実装のために VLAN 2、3、および 4 を構成するように求められます。一部のポートは、未使用のポートを残したまま新しい VLAN に割り当てる必要があります。未使用のポートに対してどのようなアクションを実行する必要がありますか。",
  "choices": [
   "A. デフォルト以外のネイティブ VLAN で設定する",
   "B. ネイティブ VLAN でポートを構成する",
   "C. ブラックホール VLAN でポートを構成する",
   "D. ポートをアクセス ポートとして設定する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0323",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "DTP（Dynamic Trunking Protocol）を無効にするコマンドはどれか。",
  "choices": [
   "A. no switchport trunk",
   "B. switchport nonegotiate",
   "C. switchport mode access only",
   "D. switchport dtp disable"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0324",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ハードウェア障害のため、SW2 が交換されました。ネットワーク エンジニアは、SW1 から fa0/1 インターフェイス構成をコピーして、SW2 の構成を開始します。 PC1 が PC2 に接続できるようにするには、SW2 の fa0/1 インターフェイスでどのコマンドを設定する必要がありますか?",
  "choices": [
   "A. switchport mode trunk",
   "B. switchport trunk native vlan 10",
   "C. switchport mode access",
   "D. switchport trunk allowed remove 10"
  ],
  "figure": "data/figures/CCNA-0324.png"
 },
 {
  "qid": "CCNA-0325",
  "theme": "vlan-trunk",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。管理者は SW_1 とプリンターをネットワークに接続する必要があります。SW_2 では、SW_1 への接続に DTP を使用する必要があります。プリンタは VLAN 5 のアクセス ポートとして設定されています。接続を完了するコマンド セットはどれですか?",
  "choices": [
   "A. switchport mode dynamic auto\nswitchport private-vlan association host 5",
   "B. switchport mode trunk\nswitchport trunk pruning vlan add 5",
   "C. switchport mode dynamic desirable\nswitchport trunk allowed vlan add 5",
   "D. switchport mode dynamic auto\nswitchport trunk encapsulation negotiate"
  ],
  "figure": "data/figures/CCNA-0325.png"
 },
 {
  "qid": "CCNA-0326",
  "theme": "vlan-trunk",
  "type": "single",
  "question": "AP が 1 つの一意の SSID を提供し、クライアント データと管理トラフィックを渡し、自律モードである場合、どのタイプの有線ポートが必要ですか?",
  "choices": [
   "A. トランク",
   "B. デフォルト",
   "C. アクセス",
   "D. ラグ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0327",
  "theme": "stp",
  "type": "single",
  "question": "Rapid PVST+ の共有 LAN セグメント上のバックアップポートの動作モードと役割は何ですか。",
  "choices": [
   "A. ブロッキングモードは指定ブリッジへの代替パスを提供します",
   "B. リスニングモードはルートブリッジへの代替パスを提供します",
   "C. 転送モードは各VLANのルートブリッジへの最低コストパスを提供します",
   "D. 学習モードはLANから離れたトラフィックを処理するルートブリッジへの最短パスを提供します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0328",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "どのスイッチがルート ブリッジになりますか。",
  "choices": [
   "A. MDF-DC-3 : 08 : 0E : 18 : 1A : 3C : 9D",
   "B. MDF-DC-4 : 08 : E0 : 19 : A1 : B3 : 19",
   "C. MDF-DC-2 : 08 : 0E : 18 : 22 : 05 : 97",
   "D. MDF-DC-1 : 08 : E0 : 43 : 78 : 24 : 50"
  ],
  "figure": "data/figures/CCNA-0328.png"
 },
 {
  "qid": "CCNA-0329",
  "theme": "stp",
  "type": "single",
  "question": "PortFast により、Rapid PVST+ はどの状態をスキップしてすぐに転送状態になりますか。",
  "choices": [
   "A. discarding",
   "B. learning",
   "C. blocking",
   "D. forwarding"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0330",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "どのスイッチがルートブリッジになりますか。",
  "choices": [
   "A. SW 1\nBridge Priority - 32768\nmac-address 0fd7:9e:13:ab:82",
   "B. SW 4\nBridge Priority - 40960\nmac-address 05:d8:33:09:8f:89",
   "C. SW3\nBridge Priority - 32768\nmac-address 01:1c:6c:66:b7:70",
   "D. SW2\nBridge Priority - 40960\nmac-address 04:44:97:51:63:17"
  ],
  "figure": "data/figures/CCNA-0330.png"
 },
 {
  "qid": "CCNA-0331",
  "theme": "stp",
  "type": "single",
  "question": "企業が社内でネットワーク自動化を選択する理由は何ですか。",
  "choices": [
   "A. データサービスをより速く提供する",
   "B. ネットワークのセグメンテーションを可能にする",
   "C. スパニングツリーのループ回避を緩和する",
   "D. きめ細かいQoSを実装する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0332",
  "theme": "stp",
  "type": "single",
  "question": "STP のルートポートとは何ですか。",
  "choices": [
   "A. ルートブリッジに対する優先順位が最も高いポート",
   "B. ルートブリッジが1つのLANセグメント上に正確に1つのポートを持つ場合にのみ選択されるポート",
   "C. ルートブリッジに到達するためのコストが最も低いスイッチ上のポート",
   "D. 別のスイッチ上の指定ポートにつながるルートスイッチ上のポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0333",
  "theme": "stp",
  "type": "single",
  "question": "接続されたサーバがアクティブになるとすぐにトラフィックをそのサーバに送信するには、スイッチ ポートでどの Rapid PVST・機能を設定しますか。",
  "choices": [
   "A. ループガード",
   "B. BPDUガード",
   "C. アップリンクファースト",
   "D. ポートファースト"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0334",
  "theme": "stp",
  "type": "single",
  "question": "どのスイッチがルートブリッジになりますか。",
  "choices": [
   "A. SW 1\nBridge Priority - 28672\nmac-address 00:10:a1:51:57:51",
   "B. SW 2\nBridge Priority - 28672\nmac-address 00:10:a1:82:03:94",
   "C. SW3\nBridge Priority - 12288\nmac-address 00:10:a1:95:2b:77",
   "D. SW4\nBridge Priority - 12288\nmac-address 00:10:a1:03:42:e8"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0335",
  "theme": "stp",
  "type": "single",
  "question": "スイッチドネットワークにおけるルートポートの役割は何ですか。",
  "choices": [
   "A. 指定ポートに障害が発生したときに指定ポートを置き換えます",
   "B. 非ルートスイッチからルートへの最適なパスです。",
   "C. ルート ポートに障害が発生したときに指定ポートを置き換えます",
   "D. フェイルオーバーが発生するまで管理上無効になっています。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0336",
  "theme": "stp",
  "type": "single",
  "question": "Rapid PVST＋を使用する場合、スイッチ ポートがブートプロセスの直後に常に入る一時的な状態は何ですか。",
  "choices": [
   "A. ディスカーディング",
   "B. リスニング",
   "C. フォワーディング",
   "D. ラーニング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0337",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "Rapid PVST＋モードは、各スイッチの同じ VLAN 上にあります。どのスイッチがルート ブリッジになりますか。また、その理由は何ですか。",
  "choices": [
   "A. SW3、優先度が最も高いため",
   "B. SW2、MACアドレスが最も高いため",
   "C. SW4、優先度が最も高く、MACアドレスが低いため",
   "D. SW1、優先度が最も低く、MACアドレスが高いため"
  ],
  "figure": "data/figures/CCNA-0337.png"
 },
 {
  "qid": "CCNA-0338",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "どのスイッチがルートブリッジとして選択されますか。",
  "choices": [
   "A. SW1: 0C:4A:82.:65:62:72",
   "B. SW2: 0C:0A:A8:1A:3C:9D",
   "C. SW3: 0C:0A:18:81:B3:19",
   "D. SW4: 0C:0A:05:22:05:97"
  ],
  "figure": "data/figures/CCNA-0338.png"
 },
 {
  "qid": "CCNA-0339",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "どのスイッチがルートブリッジとして選択されますか。",
  "choices": [
   "A. SW1 0C:0A:05:22:05:97",
   "B. SW2 0C:4A:82:07:57:58",
   "C. SW3 0C:0A:A8:1A:3C:9D",
   "D. SW4 0C:0A:18:A1:B3:19"
  ],
  "figure": "data/figures/CCNA-0339.png"
 },
 {
  "qid": "CCNA-0340",
  "theme": "stp",
  "type": "single",
  "question": "ポートが近隣からのBPDUを受信せず、アドレスデータベースを更新せずに動作するRapid PVST+のポート状態はどれですか。",
  "choices": [
   "A. Listening",
   "B. Forwarding",
   "C. Disabled",
   "D. Blocking"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0341",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "どのスイッチがルートブリッジに選ばれますか。",
  "choices": [
   "A. SW1",
   "B. SW2",
   "C. SW3",
   "D. SW4"
  ],
  "figure": "data/figures/CCNA-0341.png"
 },
 {
  "qid": "CCNA-0342",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "どのスイッチがルートブリッジに選ばれますか。",
  "choices": [
   "A. SW1",
   "B. SW2",
   "C. SW3",
   "D. SW4"
  ],
  "figure": "data/figures/CCNA-0342.png"
 },
 {
  "qid": "CCNA-0343",
  "theme": "stp",
  "type": "multiple",
  "question": "エンドホストに接続されたスイッチポートにPortFastを設定する理由は何ですか。(2つ選択)",
  "choices": [
   "A. ポートで学習する MAC アドレス数を 1 にする",
   "B. トポロジ変更プロセスからポートの動作を保護する",
   "C. ホストが起動すると、ポートが直ちにフォワーディング状態になるようにする",
   "D. スパニングツリープロトコルの動作にポートが参加しないようにする",
   "E. 別のスイッチまたはホストがポートを介して通信するのをブロックする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0344",
  "theme": "stp",
  "type": "single",
  "question": "ネイバーから BPDU を受信したり、アドレス データベースを更新したりせずに、ポートが動作する Rapid PVST+ ポート ステートはどれですか。",
  "choices": [
   "A. フォワーディング",
   "B. リスニング",
   "C. ブロッキング",
   "D. ディセーブル"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0345",
  "theme": "stp",
  "type": "single",
  "question": "別のスイッチに接続されているインターフェイスで PortFast が有効になっている場合はどうなりますか。",
  "choices": [
   "A. スイッチ リンクがダウンすると、ルート ポートの選択とスパニング ツリーの再計算が高速化される。",
   "B. スパニングツリーが収束した後、PortFast は BPDU を受信するすべてのポートをシャットダウンされる。",
   "C. VTP は、VLAN 設定情報をスイッチからスイッチに自動的に伝播することが可能となる。",
   "D. スパニングツリーがスイッチング ループを検出できないため、ブロードキャスト ストームが発生する可能性が高くなる。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0346",
  "theme": "stp",
  "type": "single",
  "question": "Rapid PVST+ はどのようにして高速ループフリーのネットワーク トポロジを作成しますか。",
  "choices": [
   "A. エンド ステーション間で複数のアクティブ パスを使用する。",
   "B. コア スイッチ間に複数のリンクが必要である。",
   "C. 複数の VLAN を同じスパニングツリー インスタンスにマッピングする。",
   "D. VLAN ごとに 1 つのスパニングツリー インスタンスを生成する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0347",
  "theme": "stp",
  "type": "multiple",
  "question": "PortFast の 2 つの機能は何ですか。(2つ選択)",
  "choices": [
   "A. リンク障害後のコンバージェンスが高速である。",
   "B. 他のスイッチへのアップリンクでSTPループが軽減される。",
   "C. ポートはブロッキング状態からフォワーディング状態に直接移行する。",
   "D. ポートはBPDUを受信することなく、正常に動作する。",
   "E. バックボーンに接続するポートは、間接リンク障害を自動的に検出する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0348",
  "theme": "stp",
  "type": "single",
  "question": "PC がポートに接続されるとすぐにフォワーディング ステートに入るポート上のコマンドはどれですか。",
  "choices": [
   "A. switch(config)#spanning-tree portfast default",
   "B. switch(config)#spanning-tree portfast bpduguard default",
   "C. switch(config-if)#spanning-tree portfast trunk",
   "D. switch(config-if)#no spanning-tree portfast"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0349",
  "theme": "stp",
  "type": "single",
  "question": "グローバル コンフィギュレーション モードでspanning-tree portfast defaultを設定する場合、PortFast はどのポートでアクティブ化されますか。",
  "choices": [
   "A. すべてのアクセスポートとトランクポート",
   "B. すべてのルートポート",
   "C. すべてのトランク ポート",
   "D. すべてのアクセスポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0350",
  "theme": "stp",
  "type": "single",
  "question": "追加設定なしでスパニングツリーのPortFastコマンドをサポートするポートタイプは次のうちどれですか。",
  "choices": [
   "A. レイヤ 3 メイン インターフェイス",
   "B. レイヤ 3 サブインターフェイス",
   "C. トランクポート",
   "D. アクセスポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0351",
  "theme": "stp",
  "type": "single",
  "question": "Rapid PVST+において、BPDUを処理するが、パケットの転送やアドレスデータベースの更新は行わないポート状態はどれですか。",
  "choices": [
   "A. ブロッキング",
   "B. ラーニング",
   "C. リスニング",
   "D. ディセーブル"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0352",
  "theme": "stp",
  "type": "single",
  "question": "スイッチが常に VLAN 750 のルートになるようにする設定はどれですか。",
  "choices": [
   "A. Switch(config)#spanning-tree vlan 750 priority 38418607",
   "B. Switch(config)#spanning-tree vlan 750 priority 0",
   "C. Switch(config)#spanning-tree vlan 750 root primary",
   "D. Switch(config)#spanning-tree vlan 750 priority 614440"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0353",
  "theme": "stp",
  "type": "single",
  "question": "受信を停止した場合にスイッチ ポートを無効にする STP オプション機能はどれですか。",
  "choices": [
   "A. BPDU ガード",
   "B. BPDUフィルター",
   "C. ルートガード",
   "D. ループガード"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0354",
  "theme": "stp",
  "type": "single",
  "question": "STP（スパニングツリープロトコル）の主な目的はどれか。",
  "choices": [
   "A. レイヤ2ネットワークにおけるループを防止する",
   "B. VLANを動的に作成する",
   "C. IPルーティングテーブルを構築する",
   "D. 帯域幅を集約する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0355",
  "theme": "stp",
  "type": "single",
  "question": "Cisco WLC（Wireless LAN Controller）の役割として誤っているものはどれか。",
  "choices": [
   "A. 複数のアクセスポイントを集中管理し、無線LAN設定の一元化を行う",
   "B. DHCPアドレスの割り当てを行う",
   "C. 有線ネットワークのスパニングツリーを管理する",
   "D. DNSの名前解決を行う"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0356",
  "theme": "stp",
  "type": "single",
  "question": "Cisco WLC（Wireless LAN Controller）の役割として誤っているものはどれか。",
  "choices": [
   "A. 複数のアクセスポイントを集中管理し、無線LAN設定の一元化を行う",
   "B. 有線ネットワークのスパニングツリーを管理する",
   "C. DHCPアドレスの割り当てを行う",
   "D. DNSの名前解決を行う"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0357",
  "theme": "stp",
  "type": "single",
  "question": "Cisco WLC（Wireless LAN Controller）の役割として誤っているものはどれか。",
  "choices": [
   "A. DHCPアドレスの割り当てを行う",
   "B. 有線ネットワークのスパニングツリーを管理する",
   "C. DNSの名前解決を行う",
   "D. 複数のアクセスポイントを集中管理し、無線LAN設定の一元化を行う"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0358",
  "theme": "stp",
  "type": "single",
  "question": "RSTP（Rapid Spanning Tree Protocol）のポートステートとして存在しないものはどれか。",
  "choices": [
   "A. Forwarding",
   "B. Listening",
   "C. Discarding",
   "D. Learning"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0359",
  "theme": "stp",
  "type": "single",
  "question": "次の中から、cisco WLC（Wireless LAN Controller）の役割として最も適切なものはどれか。",
  "choices": [
   "A. DNSの名前解決を行う",
   "B. 有線ネットワークのスパニングツリーを管理する",
   "C. 複数のアクセスポイントを集中管理し、無線LAN設定の一元化を行う",
   "D. DHCPアドレスの割り当てを行う"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0360",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。すべてのスイッチはデフォルトの STP 優先順位で設定されます。 STP の選択中、すべてのインターフェイスが同じ VLAN 内にある場合、どのスイッチがルート ブリッジになりますか?",
  "choices": [
   "A. MDF-DC-1: 0d:E0:43:96:02:30",
   "B. MDF-DC-2: 0d:0E:18:1B:05:97",
   "C. MDF-DC-4: 0d:E0:19:A1:B3:19",
   "D. MDF-DC-3: 0d:0E:18:2A:3C:9D"
  ],
  "figure": "data/figures/CCNA-0360.png"
 },
 {
  "qid": "CCNA-0361",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。どのスイッチがルートブリッジになりますか?",
  "choices": [
   "A. SW3 -\nブリッジ優先度 - 57344 -\nmac-address 0b:bb:e0:96:a3:86",
   "B. SW2 -\nブリッジ優先度 - 57344 -\nmac-address 00:b6:c5:17:8e:89",
   "C. SW1 -\nブリッジ優先度 - 28672 -\nMAC アドレス 0c:d4:e9:1d:3c:24",
   "D. SW4 -\nブリッジ優先度 - 28672 -\nmac-address 0b:09:23:33:b8:91"
  ],
  "figure": "data/figures/CCNA-0361.png"
 },
 {
  "qid": "CCNA-0362",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。どのスイッチがルートブリッジになりますか?",
  "choices": [
   "A. SW 1 -\nブリッジ優先度 - 32768 -\nmac-address 0f:d7:9e:13:ab:82",
   "B. SW 2 -\nブリッジ優先度 - 40960 -\nmac-address 05:d8:33:09:8f:89",
   "C. SW 3 -\nブリッジ優先度 - 32768 -\nmac-address 01:1c:6c:66:b7:70",
   "D. SW 4 -\nブリッジ優先度 - 40960 -\nmac-address 04:44:97:51:63:17"
  ],
  "figure": "data/figures/CCNA-0362.png"
 },
 {
  "qid": "CCNA-0363",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。どのスイッチがルートブリッジになりますか?",
  "choices": [
   "A. SW4 -\nブリッジ優先度 - 8192 -\nmac-address 05:0f:e8:ed:b2:98",
   "B. SW2 -\nブリッジ優先度 - 8192 -\nmac-address 00:ac:f0:9b:dc:72",
   "C. SW3 -\nブリッジ優先度 - 16384 -\nMAC アドレス 0e:6c:e4:b1:8a:57",
   "D. SW4 -\nブリッジ優先度 - 16384 -\nmac-address 0a:45:22:26:29:77"
  ],
  "figure": "data/figures/CCNA-0363.png"
 },
 {
  "qid": "CCNA-0364",
  "theme": "stp",
  "type": "single",
  "question": "Rapid PVST+ が使用されている場合、ブート プロセスの直後にスイッチ ポートが常に入る一時的な状態は何ですか?",
  "choices": [
   "A. forwarding",
   "B. listening",
   "C. learning",
   "D. discarding"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0365",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。どのスイッチがルートブリッジになりますか?",
  "choices": [
   "A. SW 1 -\nブリッジ優先度 - 8192 -\nmac-address 00:10:a1:30:eb:38",
   "B. SW 2 -\nブリッジ優先度 - 8192 -\nmac-address 00:10:a1:80:fb:29",
   "C. SW 3 -\nブリッジ優先度 - 24576 -\nmac-address 00:10:a1:50:55:8f",
   "D. SW 4 -\nブリッジ優先度 - 24576 -\nmac-address 00:10:a1:90:7e:66"
  ],
  "figure": "data/figures/CCNA-0365.png"
 },
 {
  "qid": "CCNA-0366",
  "theme": "stp",
  "type": "single",
  "question": "アクティブになるとすぐに接続されたサーバにトラフィックを送信するには、スイッチ ポート上でどの Rapid PVST+ 機能を設定する必要がありますか?",
  "choices": [
   "A. ポートファスト",
   "B. アップリンクファースト",
   "C. BPDU ガード",
   "D. ループガード"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0367",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。この構成内のどのスイッチがルート ブリッジとして選択されますか?\nSW1: 0C:E4:82:33:62:23 -\nSW2: 0C:0E:16:11:05:97 -\nSW3: 0C:E0:16:1A:3C:9D -\nSW4: 0C:00:18: A1:B3:19",
  "choices": [
   "A. SW1",
   "B. SW2",
   "C. SW3",
   "D. SW4"
  ],
  "figure": "data/figures/CCNA-0367.png"
 },
 {
  "qid": "CCNA-0368",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。この構成内のどのスイッチがルート ブリッジとして選択されますか?\nSW1 0C:0A:05:22:05:97\nSW2 0C:4A:82:07:57:58\nSW3 0C:0A:A8:1A:3C:9D\nSW4 0C:0A:18:A1:B3: 19",
  "choices": [
   "A. SW1",
   "B. SW2",
   "C. SW3",
   "D. SW4"
  ],
  "figure": "data/figures/CCNA-0368.png"
 },
 {
  "qid": "CCNA-0369",
  "theme": "stp",
  "type": "single",
  "question": "ネイバーから BPDU を受信したり、アドレス データベースを更新したりせずに、ポートが動作する Rapid PVST+ ポート状態はどれですか?",
  "choices": [
   "A. listening",
   "B. forwarding",
   "C. disabled",
   "D. blocking"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0370",
  "theme": "stp",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。この構成内のどのスイッチがルート ブリッジとして選択されますか?\nSW1: 0C:0A:05:22:05:97 -\nSW2: 0C:0A:A8:1A:3C:9D -\nSW3: 0C:0A:18:81:B3:19 -\nSW4: 0C:4A:82: 56:35:78",
  "choices": [
   "A. SW1",
   "B. SW2",
   "C. SW3",
   "D. SW4"
  ],
  "figure": "data/figures/CCNA-0370.png"
 },
 {
  "qid": "CCNA-0371",
  "theme": "etherchannel",
  "type": "single",
  "question": "自律 AP が 2つのVLAN を WLAN にマッピングする場合、有線ネットワークへの接続に使用されるポートのタイプはどれですか。",
  "choices": [
   "A. LAG",
   "B. EtherChannel",
   "C. trunk",
   "D. access"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0372",
  "theme": "etherchannel",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。 PC1 は定期的に 1800 Mbps のトラフィックをサーバーに送信します。ネットワーク エンジニアは、SW2 の Ge0/0 ポートと Ge0/1 ポートがダウンしたときに SW1 と SW2 の間のポート チャネル 1 を無効にするように EtherChannel を設定する必要があります。エンジニアはどの構成をスイッチに適用する必要がありますか?",
  "choices": [
   "A. SW2# configure terminal -\nSW2(config)# interface port-channel 4\nSW2(config-if)# port-channel min-links 2",
   "B. SW2# configure terminal -\nSW2(config)# interface port-channel 4\nSW2(config-if)# lacp port-priority 32000",
   "C. SW2# configure terminal -\nSW2(config)# interface port-channel 4\nSW2(config-if)# lacp max-bundle 2",
   "D. SW2# configure terminal -\nSW2(config)# lacp system-priority 32000"
  ],
  "figure": "data/figures/CCNA-0372.png"
 },
 {
  "qid": "CCNA-0373",
  "theme": "etherchannel",
  "type": "exhibit_choice",
  "question": "EtherChannel は、両端で速度 1000、デュプレックスがフルに設定されています。スイッチAのチャネルをLACP通信に応答するが開始しないように設定するときの設定はどれか。",
  "choices": [
   "A. interface range gigabitethernet0/0/0 -15\nchannel-group 1 mode desirable",
   "B. interface range gigabitethernet0/0/0 -15\nchannel-group 1 mode on",
   "C. interface port-channel 1\nchannel-group 1 mode auto",
   "D. interface port-channel 1\nchannel-group 1 mode passive"
  ],
  "figure": "data/figures/CCNA-0373.png"
 },
 {
  "qid": "CCNA-0374",
  "theme": "etherchannel",
  "type": "exhibit_choice",
  "question": "SW1の Fa1/1の設定を更新します。別のベンダーのスイッチと同じグループ指定を使用して EtherChannel を確立するとき、どの設定をしますか。",
  "choices": [
   "A. interface port-channel 2\nchannel-group 2 mode desirable",
   "B. interface fastethernet 1/1\nchannel-group 2 mode on",
   "C. interface port-channel 2\nchannel-group 2 mode auto",
   "D. interface fastethernet 1/1\nchannel-group 2 mode active"
  ],
  "figure": "data/figures/CCNA-0374.png"
 },
 {
  "qid": "CCNA-0375",
  "theme": "etherchannel",
  "type": "single",
  "question": "Cisco WLC に LAG を実装する理由は何ですか。",
  "choices": [
   "A. 接続されたスイッチ ポートが異なるレイヤ 2 構成を使用できるようにします。",
   "B. リンク上で利用可能なスループットを増加します。",
   "C. WLC 間のステートフル フェールオーバーを可能にします。",
   "D. 管理フレームを暗号化してセキュリティを強化します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0376",
  "theme": "etherchannel",
  "type": "single",
  "question": "リンク アグリゲーションは Cisco ワイヤレス LAN コントローラでどのように実装されますか。",
  "choices": [
   "A. クライアント トラフィックを通過させるには、2 つ以上のポートを設定する必要があります",
   "B. EtherChannel は「アクティブモード 」に設定する必要があります。",
   "C. 有効にすると、WLC の帯域幅は 500 Mbps に低下します",
   "D. クライアント トラフィックを通過させるには、機能している物理ポートが 1つ必要です。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0377",
  "theme": "etherchannel",
  "type": "exhibit_choice",
  "question": "SW1 と SW2 の間に LACP EtherChannel を構築します。show コマンドを実行しました。スイッチが LACP ポートチャネルの 2番目のメンバーを正常にバンドルするには、どのタスクを実行しますか。",
  "choices": [
   "A. SW1のポートチャネル1に「switchport trunk allowed vlan 300」コマンドを設定します",
   "B. SW1 のFa0/2 で「switchport trunk allowed vlan add 300」コマンドを設定します",
   "C. SW2 のFa0/2 で「switchport trunk add vlan add 300」コマンドを設定します",
   "D. SW1 のポートチャネル 1に「switchport trunk allowed vlan add 300」コマンドを設定します"
  ],
  "figure": "data/figures/CCNA-0377.png"
 },
 {
  "qid": "CCNA-0378",
  "theme": "etherchannel",
  "type": "single",
  "question": "ワイヤレス LAN コントローラとレイヤー 2 スイッチ間の接続冗長性、帯域幅の増加、負荷分散を実現するものは何ですか。",
  "choices": [
   "A. VLAN トランキング",
   "B. トンネリング",
   "C. ファーストホップ冗長性",
   "D. リンクアグリゲーション"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0379",
  "theme": "etherchannel",
  "type": "single",
  "question": "Cisco WLC で LAG 設定が更新された場合、変更が完了したらどの追加タスクを実行しますか。",
  "choices": [
   "A. WLCからすべてのMACアドレスをフラッシュする",
   "B. WLC とアクセスポイントを再度関連付けます",
   "C. WLC インターフェイスを再度有効にします",
   "D. WLC を再起動します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0380",
  "theme": "etherchannel",
  "type": "exhibit_choice",
  "question": "LACP レイヤー 2 EtherChannel を設定するには、2つのスイッチにどのコマンド セットを適用しますか。",
  "choices": [
   "A. SW1(config)#interface range f0/13 -14\nSW1(config-if-range)#channel-group 1 mode desirable\nSW2(config)#interface range f0/13 -14\nSW2(config-if-range)#channel-group 1 mode passive",
   "B. SW1(config)#interface range f0/13 -14\nSW1(config-if-range)#channel-group 1 mode on\nSW2(config)#interface range f0/13 -14\nSW2(config-if-range)#channel-group 1 mode passive",
   "C. SW1(config)#interface range f0/13 -14\nSW1(config-if-range)#channel-group 1 mode active\nSW2(config)#interface range f0/13 -14\nSW2(config-if-range)#channel-group 1 mode passive",
   "D. SW1(config)#interface range f0/13 -14\nSW1(config-if-range)#channel-group 1 mode auto\nSW2(config)#interface range f0/13 -14\nSW2(config-if-range)#channel-group 1 mode passive"
  ],
  "figure": "data/figures/CCNA-0380.png"
 },
 {
  "qid": "CCNA-0381",
  "theme": "etherchannel",
  "type": "exhibit_choice",
  "question": "直接接続された 2 つのスイッチ間の LACP EtherChannel が設定中です。SW1 へのチャネルを確立するには、スイッチ SW2 の Gi0/1-2 インターフェイスでどのコマンドを設定しますか。",
  "choices": [
   "A. channel-group 1 mode desirable",
   "B. channel-group 1 mode on",
   "C. channel-group 1 mode active",
   "D. channel-group 1 mode auto"
  ],
  "figure": "data/figures/CCNA-0381.png"
 },
 {
  "qid": "CCNA-0382",
  "theme": "etherchannel",
  "type": "exhibit_choice",
  "question": "LACP EtherChannel が設定され、受信したパケットに応答するように SwitchA のインターフェイスを変更することですが、ネゴシエーションを開始しないようにします。何を設定しますか。",
  "choices": [
   "A. SwitchA(config-if-range)#channel-group 1 mode desirable",
   "B. SwitchA(config-if-range)#channel-group 1 mode passive",
   "C. SwitchA(config-if-range)#channel-group 1 mode auto",
   "D. SwitchA(config-if-range)#channel-group 1 mode active"
  ],
  "figure": "data/figures/CCNA-0382.png"
 },
 {
  "qid": "CCNA-0383",
  "theme": "etherchannel",
  "type": "single",
  "question": "WLC で LAG を使用する場合、どの EtherChannel モードを設定しますか。",
  "choices": [
   "A. On",
   "B. active",
   "C. auto",
   "D. passive"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0384",
  "theme": "etherchannel",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。 SW2 が LACP EtherChannel を確立できるようにする設定はどれですか?",
  "choices": [
   "A. SW2(config)#interface gigabitEthernet0/1\nSW2(config-if)#channel-group 1 mode active\nSW2(config-if)#interface gigabitEthernet0/2\nSW2(config-if)#channel-group 1 mode active",
   "B. SW2(config)#interface gigabitEthernet0/1\nSW2(config-if)#channel-group 2 mode desirable\nSW2(config-if)#interface gigabitEthernet0/2\nSW2(config-if)#channel-group 2 mode desirable",
   "C. SW2(config)#interface gigabitEthernet0/1\nSW2(config-if)#channel-group 1 mode on\nSW2(config-if)#interface gigabitEthernet0/2\nSW2(config-if)#channel-group 1 mode on",
   "D. SW2(config)#interface gigabitEthernet0/1\nSW2(config-if)#channel-group 2 mode auto\nSW2(config-if)#interface gigabitEthernet0/2\nSW2(config-if)#channel-group 2 mode auto"
  ],
  "figure": "data/figures/CCNA-0384.png"
 },
 {
  "qid": "CCNA-0385",
  "theme": "etherchannel",
  "type": "single",
  "question": "WLCで利用される機能のうち、その配布システムポートを1つの802.3adグループに束ねることを可能にするものはどれですか？",
  "choices": [
   "A. QinQ",
   "B. ISL",
   "C. PAgP",
   "D. LAG"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0386",
  "theme": "etherchannel",
  "type": "exhibit_choice",
  "question": "既存のPort-Channel1バンドルに新しいメンバーとして別の物理インターフェースを追加します。新しいインターフェースに設定する必要があるコマンドセットはどれですか？",
  "choices": [
   "A. switchport mode trunk\nchannel-group 1 mode active",
   "B. no switchport\nchannel-group 1 mode active",
   "C. no switchport\nchannel-group 1 mode on",
   "D. switchport\nswitchport mode trunk"
  ],
  "figure": "data/figures/CCNA-0386.png"
 },
 {
  "qid": "CCNA-0387",
  "theme": "etherchannel",
  "type": "single",
  "question": "複数のVLANのトラフィックを伝送するために使用されるポート構成のタイプはどれですか？",
  "choices": [
   "A. LAG",
   "B. EtherChannel",
   "C. トランク",
   "D. アクセス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0388",
  "theme": "etherchannel",
  "type": "single",
  "question": "イーサネット スイッチのポート構成のどのオプションを使用すると、複数の VLAN からのトラフィックが同じ物理リンクを介して移動できるようになりますか?",
  "choices": [
   "A. LAG",
   "B. EtherChannel",
   "C. trunk",
   "D. access"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0389",
  "theme": "etherchannel",
  "type": "single",
  "question": "AP が FlexConnect モードの場合、スイッチ インターフェイスはどのように設定する必要がありますか。",
  "choices": [
   "A. アクセスポート",
   "B. EtherChannel",
   "C. PoE ポート",
   "D. トランクポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0390",
  "theme": "etherchannel",
  "type": "single",
  "question": "ネゴシエーション プロトコルを使用せずに 2 つのスイッチ間で EtherChannel を設定するには、どのモードを使用する必要がありますか。",
  "choices": [
   "A. active",
   "B. on",
   "C. auto",
   "D. desirable"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0391",
  "theme": "etherchannel",
  "type": "single",
  "question": "Cisco WLC で LAG 設定が更新される場合、変更が完了したときに実行する必要がある追加タスクはどれですか。",
  "choices": [
   "A. WLC を再起動する。",
   "B. WLC からすべての MAC アドレスをフラッシュする。",
   "C. WLC インターフェイスを再度有効にする。",
   "D. WLC をアクセス ポイントに再度関連付ける。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0392",
  "theme": "etherchannel",
  "type": "single",
  "question": "LACPの動作モードの組み合わせで、EtherChannelが形成されるのはどれか。",
  "choices": [
   "A. 両方がpassive",
   "B. 一方がon、もう一方がactive",
   "C. 一方がdesirable、もう一方がauto",
   "D. 一方がactive、もう一方がpassive"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0393",
  "theme": "etherchannel",
  "type": "single",
  "question": "EtherChannelの利点として誤っているものはどれか。",
  "choices": [
   "A. 複数の物理リンクを1つの論理リンクに束ね、帯域幅と冗長性を向上させる",
   "B. ワイヤレスアクセスポイントの管理を簡素化する",
   "C. 異なるVLAN間のルーティングを行う",
   "D. STPのコンバージェンス時間を短縮する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0394",
  "theme": "etherchannel",
  "type": "single",
  "question": "次の中から、etherChannelの利点として正しいものはどれか。",
  "choices": [
   "A. STPのコンバージェンス時間を短縮する",
   "B. 複数の物理リンクを1つの論理リンクに束ね、帯域幅と冗長性を向上させる",
   "C. 異なるVLAN間のルーティングを行う",
   "D. ワイヤレスアクセスポイントの管理を簡素化する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0395",
  "theme": "etherchannel",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。シスコのエンジニアは、リンクの 1 つに障害が発生した場合でも EtherChannel が稼働状態を維持できるように、スイッチ 1 の設定を更新するように求められています。この要件を満たす構成はどれですか?",
  "choices": [
   "A. Switch1(config) # interface Fa0/0\nSwitch1(config-if) # lacp port-priority 100\nSwitch1(config) # interface Fa0/1\nSwitch1(config-if) # lacp port-priority 200",
   "B. Switch1(config) # interface port-channel 1\nSwitch1(config-if) # port-channel min-links 1",
   "C. Switch1(config) # interface Fa0/0\nSwitch1(config-if) # lacp port-priority 200\nSwitch1(config) # interface Fa0/1\nSwitch1(config-if) # lacp port-priority 100",
   "D. Switch1(config) # interface port-channel 1\nSwitch1(config-if) # lacp max-bundle 1"
  ],
  "figure": "data/figures/CCNA-0395.png"
 },
 {
  "qid": "CCNA-0396",
  "theme": "wireless",
  "type": "drag_drop",
  "question": "[ワイヤレス規格]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "802.11n (5GHz)",
    "802.11n (2.4GHz)",
    "802.11g",
    "802.11a",
    "802.11b"
   ],
   "targets": [
    {
     "label": "3つの重複しないチャネル",
     "slots": 3
    },
    {
     "label": "23の重複しないチャネル",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0397",
  "theme": "wireless",
  "type": "single",
  "question": "複数のSSIDを使う環境で、SSID変更時の顧客エクスペリエンスを向上させるためには、どの機能を有効にするか。",
  "choices": [
   "A. アシストローミング予測最適化",
   "B. Fast BSS Transition",
   "C. ネイバーリストデュアルバンド",
   "D. Fast SSID Switching"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0398",
  "theme": "wireless",
  "type": "multiple",
  "question": "lantest という新しい WLAN を作成します。2.4 GHz クライアントのみが接続できるようにするには、どのアクションを実行しますか。(2つ選択)",
  "choices": [
   "A. Statusオプションを有効にします",
   "B. Interface/Interface Groupをゲスト以外に設定します",
   "C. Radio Policyを 802.11g のみに設定します",
   "D. Radio Policyを 802.11a のみに設定します",
   "E. ブロードキャスト SSID オプションを有効にします"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0399",
  "theme": "wireless",
  "type": "single",
  "question": "ワイヤレス ネットワークの SSID の特徴は何ですか。",
  "choices": [
   "A. デフォルトでビーコン信号をブロードキャストして存在を知らせる",
   "B. 権限のないユーザーを防ぐためのポリシーを使用する",
   "C. 電流を電波に変換する",
   "D. ユーザーにログイン ID の入力を求める"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0400",
  "theme": "wireless",
  "type": "single",
  "question": "Wi-Fi ではノイズはどのように定義されますか。",
  "choices": [
   "A. ローカル信号に干渉する他の Wi-Fi ネットワークからの信号",
   "B. 目的の Wi-Fi 信号と干渉する Wi-Fi 信号との測定された差",
   "C. ワイヤレス デバイスによって提供される信号対雑音比",
   "D. 目的の信号を劣化させる Wi-Fi トラフィック以外の干渉"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0401",
  "theme": "wireless",
  "type": "single",
  "question": "SSIDの目的は何ですか。",
  "choices": [
   "A. モバイルデバイスが接続するワイヤレスネットワークを特定します。",
   "B. ネットワーク・デバイスが接続されている有線ネットワークを識別します。",
   "C. アプリケーションが接続する必要があるワイヤレスネットワークを識別します。",
   "D. ユーザー・デバイスが接続されている有線ネットワークを識別します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0402",
  "theme": "wireless",
  "type": "single",
  "question": "SSID セキュリティを強化したワイヤレス ネットワークを作成します。ネットワークは2.4GHz、54 Mbps のスループットで動作する必要があります。管理者はどのタスクを実行しますか。",
  "choices": [
   "A. Broadcast SSIDチェックボックスをオンにし、Radio Policyを802.11aに設定します。",
   "B. Broadcast SSIDチェックボックスをオフにし、Radio Policyを802.11a/gに設定します。",
   "C. Broadcast SSIDチェックボックスをオンにし、無線ポリシーを802.11gに設定します。",
   "D. Broadcast SSIDチェックボックスをオフにし、無線ポリシーを 802.11g に設定します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0403",
  "theme": "wireless",
  "type": "single",
  "question": "ワイヤレスコントローラーで提供されるサービスとは何ですか。",
  "choices": [
   "A. 有線デバイスに IP アドレスを発行します。",
   "B. 高密度ネットワークでの干渉を管理します。",
   "C. 有線デバイスと無線デバイス間のレイヤー3ルーティングを提供します。",
   "D. インターネットからの脅威を軽減します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0404",
  "theme": "wireless",
  "type": "single",
  "question": "802.11b/g/n/ax 2.4 GHz 周波数帯域のチャネルグループのうち、重複しないチャネルはどれか。",
  "choices": [
   "A. チャネル 1、6、10",
   "B. チャネル 1、5、11",
   "C. チャネル 1、6、11",
   "D. チャネル 1、5、10"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0405",
  "theme": "wireless",
  "type": "single",
  "question": "SSIDで使用される文字の最大長はどれですか？",
  "choices": [
   "A. 16",
   "B. 32",
   "C. 48",
   "D. 64"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0406",
  "theme": "wireless",
  "type": "single",
  "question": "無線環境における非重複チャネルの役割は何ですか。",
  "choices": [
   "A. 干渉を減らすため",
   "B. チャネルボンディングを可能にするため",
   "C. より高速なローミングを可能にするため",
   "D. 帯域幅を増やすため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0407",
  "theme": "wireless",
  "type": "single",
  "question": "802.11a を使用する場合は何を考慮する必要がありますか。",
  "choices": [
   "A. 低コストのソリューションが必要な場合は、802.11b よりも選択される。",
   "B. 電子レンジなどの 2.4 GHz 機器からの干渉を受けやすい",
   "C. 802.11b および 802.11g 準拠のワイヤレス デバイスと互換性がある。",
   "D. 多くの非重複チャネルが必要な場合に、802.11b/g の代わりに使用される。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0408",
  "theme": "wireless",
  "type": "single",
  "question": "Association Response(アソシエーション応答)とは、どの802.11フレームタイプですか。",
  "choices": [
   "A. management",
   "B. protected",
   "C. action",
   "D. control"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0409",
  "theme": "wireless",
  "type": "single",
  "question": "重複した Wi-Fi チャネルが実装されると何が起こりますか。",
  "choices": [
   "A. ワイヤレス ネットワークのパフォーマンスが低下する。",
   "B. ワイヤレス デバイスは、異なる SSID を区別できない。",
   "C. ワイヤレス ネットワークが不正アクセスに対して脆弱になる。",
   "D. ネットワーク通信は盗聴の危険にさらされる。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0410",
  "theme": "wireless",
  "type": "single",
  "question": "クライアントがプローブ要求を送信した後、プローブ応答によって示される 802.11 フレーム タイプはどれですか。",
  "choices": [
   "A. データ",
   "B. 管理",
   "C. 制御",
   "D. アクション"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0411",
  "theme": "wireless",
  "type": "single",
  "question": "802.11acで使用される周波数帯はどれか。",
  "choices": [
   "A. 5GHz帯のみ",
   "B. 2.4GHz帯のみ",
   "C. 2.4GHz帯と5GHz帯の両方",
   "D. 6GHz帯のみ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0412",
  "theme": "wireless",
  "type": "single",
  "question": "ワイヤレス ネットワークにおける SSID の特徴は何ですか?",
  "choices": [
   "A. エンドポイント間でファイルを簡単に共有できる",
   "B. スパイウェアに対する保護を提供する",
   "C. 名前をワイヤレスネットワークに関連付けます",
   "D. ネットワークの便乗を排除する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0413",
  "theme": "wireless",
  "type": "drag_drop",
  "question": "[ワイヤレス]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "デバイスごとの構成と管理をサポート",
    "アクセスポイントはビーコンフレームを送信します",
    "中小企業環境に最適",
    "CAPWAPトンネリングプロトコルを使用します",
    "作業はアクセスポイントとコントローラの間で分割されます"
   ],
   "targets": [
    {
     "label": "スプリットMAC",
     "slots": 3
    },
    {
     "label": "自律型",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0414",
  "theme": "wireless",
  "type": "drag_drop",
  "question": "[ワイヤレス]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "さまざまな運用モードをサポート",
    "ウェブベースのダッシュボードから管理可能",
    "WLCによる設定と管理",
    "自動デプロイに対応"
   ],
   "targets": [
    {
     "label": "クラウドベースのアクセスポイント",
     "slots": 2
    },
    {
     "label": "軽量アクセスポイント",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0415",
  "theme": "wireless",
  "type": "drag_drop",
  "question": "[アクセスポイントモード]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "有効なすべてのチャネルにわたって空気品質データと干渉検出を提供",
    "ワイヤレスパフォーマンステストの分析をサポートします。",
    "ネットワークエンジニアがオフサイトにいても、リアルタイムの Wi-Fi クライアントのトラブルシューティングをサポート",
    "リモートデバイス上の無線フレームを分析するソフトウェアをサポートします",
    "強化されたRFIDタグの位置追跡を可能にします。",
    "特定の無線チャネル上のパケットをキャプチャして転送します"
   ],
   "targets": [
    {
     "label": "モニター",
     "slots": 2
    },
    {
     "label": "センサー",
     "slots": 2
    },
    {
     "label": "スニファー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0416",
  "theme": "wireless",
  "type": "single",
  "question": "Cisco OfficeExtend AP モードと FlexConnect AP モードの違いは何ですか。",
  "choices": [
   "A. FlexConnect では、AP に個人用 SSID を設定できますが、OfficeExtend では個人用 SSID はサポートされていません。",
   "B. OfficeExtend は、WLC へのトラフィックの DTLS トンネリングをサポートしていません。FlexConnect は、DTLS を使用して WLC へのトラフィックをトンネリングします。",
   "C. OfficeExtend は、すべてのトラフィックを WLC 経由でトンネリングし、FlexConnect は AP スイッチ ポートでクライアント トラフィックを終了します。",
   "D. FlexConnect は、クライアント トラフィックを NAT するルータの背後に展開する必要があり、OfficeExtend はパブリック IP ソースを使用します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0417",
  "theme": "wireless",
  "type": "single",
  "question": "軽量モードのワイヤレス AP の構成変更はどのように行われますか。",
  "choices": [
   "A. AP の管理 IP への SSH 接続",
   "B. APの帯域外アドレスへの直接HTTPS接続",
   "C. 親 WLC 経由の CAPWAP/LWAPP 接続",
   "D. 親 WLC 経由の EoIP 接続"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0418",
  "theme": "wireless",
  "type": "single",
  "question": "無線アクセスポイントが必要で、以下の要件を満たす必要がある。どのアクセスポイントタイプを使用しなければなりませんか。\n①WLCによって「ゼロタッチ」がデプロイされ、管理される。\n②リアルタイムのMAC機能のみを処理する。\n③スプリットMACアーキテクチャで使用する。",
  "choices": [
   "A. 自律型",
   "B. 軽量",
   "C. メッシュ",
   "D. クラウドベース"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0419",
  "theme": "wireless",
  "type": "single",
  "question": "WLC から AP への CAPWAP パケットのトンネル ソースとして機能するインターフェイス IP アドレスはどれですか。",
  "choices": [
   "A. サービス",
   "B. トランク",
   "C. APマネージャ",
   "D. 仮想 AP 接続"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0420",
  "theme": "wireless",
  "type": "single",
  "question": "ワイヤレス トラフィックをキャプチャし、そのトラフィックをパケットアナライザーを実行している PC に転送するために使用されるAPモードはどれですか。",
  "choices": [
   "A. モニター",
   "B. スニファー",
   "C. ブリッジ",
   "D. 不正検出機能"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0421",
  "theme": "wireless",
  "type": "single",
  "question": "設計者はCisco 自律アクセス ポイントと軽量アクセス ポイントのどちらを実装するかを決定します。ファームウェア更新に関してどのような事実を考慮しますか。",
  "choices": [
   "A. 自律型アクセスポイントとは異なり、軽量アクセスポイントはリモートファームウェア更新を実装するためにWLCを必要とします。",
   "B. 自律型アクセスポイントは、軽量アクセスポイントと異なり、破損したファームウェアの更新から自動的に回復することができます。",
   "C. ファームウェアのアップグレードをサポートするために冗長化されたWLCを必要とする軽量アクセスポイントとは異なり、自律型アクセスポイントは1つのWLCのみを必要とします。",
   "D. 自律型アクセスポイントと異なり、軽量アクセスポイントはバックアップのために現在のファームウェアの完全なコピーを保存します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0422",
  "theme": "wireless",
  "type": "single",
  "question": "スプリットMACアーキテクチャでは、リアルタイム制御機能はどこで処理されるか。",
  "choices": [
   "A. 中央WLC",
   "B. 個々のAP",
   "C. 集中型クラウド管理プラットフォーム",
   "D. クライアントデバイス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0423",
  "theme": "wireless",
  "type": "single",
  "question": "ワイヤレス アーキテクチャにおける「スプリット MAC」という用語は何を指しますか。",
  "choices": [
   "A. データリンク層機能を AP と WLC の間で分割する",
   "B. データ転送機能から管理機能と制御機能を統合する",
   "C. 同じ AP で 2.4 GHz 帯と 5 GHz 帯に異なる MAC アドレスを使用する",
   "D. 2 つの AP を活用して制御トラフィックとデータ トラフィックを処理する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0424",
  "theme": "wireless",
  "type": "multiple",
  "question": "自律型、クラウドベース、スプリットMACアーキテクチャのいずれかを決定しなければならない。アーキテクトが考慮すべきことはどれか。(2つ選択)",
  "choices": [
   "A. 軽量アクセスポイントは、スプリットMACアーキテクチャによってのみ使用される。",
   "B. クラウドベースのアーキテクチャは、アクセスポイントとクライアント間の通信にCAPWAPプロトコルを独自に使用する。",
   "C. 3つのアーキテクチャのそれぞれは、アクセスポイントを管理するためにWLCを使用する必要があります。",
   "D. 3つのアーキテクチャはすべて、有線インフラストラクチャに接続されたワイヤレスデバイスを管理するためにアクセスポイントを使用します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0425",
  "theme": "wireless",
  "type": "single",
  "question": "ポイント・ツー・マルチポイントのネットワーク・トポロジーにおいて、プライマリ・ハブとして機能するAPモードはどれか。",
  "choices": [
   "A. ブリッジ",
   "B. SE-Connect",
   "C. FlexConnect",
   "D. ローカル"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0426",
  "theme": "wireless",
  "type": "single",
  "question": "小規模オフィスで無線の必要性が最小限で中央管理が不要な場合、どのアーキテクチャが最適ですか。",
  "choices": [
   "A. クラウドベースのアクセスポイント",
   "B. スプリットMAC",
   "C. 自律型アクセスポイント",
   "D. メッシュネットワーク"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0427",
  "theme": "wireless",
  "type": "single",
  "question": "異なるキャンパスビル内にそれぞれ設置された 2 つの別々のネットワーク セグメントをワイヤレスで接続する AP モードはどれですか。",
  "choices": [
   "A. メッシュ",
   "B. ローカル",
   "C. ブリッジ",
   "D. ポイントツーポイント"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0428",
  "theme": "wireless",
  "type": "single",
  "question": "軽量APとの Webベースの管理セッションを開く必要がある場合に使用される IP アドレスはどれか。",
  "choices": [
   "A. WLC IP",
   "B. ゲートウェイ IP",
   "C. 自律AP IP",
   "D. ACS IP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0429",
  "theme": "wireless",
  "type": "single",
  "question": "2つのネットワーク セグメント間のワイヤレス接続を提供する APモードはどれか。",
  "choices": [
   "A. ルート",
   "B. ローカル",
   "C. FlexConnect",
   "D. ブリッジ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0430",
  "theme": "wireless",
  "type": "single",
  "question": "新しい支社の Cisco エンジニアは、本社にあるコントローラに接続するアクセス ポイントを使用してワイヤレス ネットワークを構成しています。\nワイヤレス クライアント トラフィックはブランチ オフィスで終了する必要があり、WAN が停止した場合でもアクセス ポイントが存続できる必要があります。\nどのアクセス ポイント モードを選択する必要がありますか。",
  "choices": [
   "A. ローカルスイッチングを無効にしたLightweight",
   "B. ローカル スイッチングが有効になっている FlexConnect",
   "C. 高可用性を無効にした OfficeExtend",
   "D. AP フォールバックが有効になっているLocal"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0431",
  "theme": "wireless",
  "type": "multiple",
  "question": "自律型アーキテクチャでAPが独立して行う機能を、Lightweightアクセスポイントアーキテクチャで WLCが行う2つの機能はどれですか。(2つ選択)",
  "choices": [
   "A. 送信電力を含む RF チャネルの管理",
   "B. ワイヤレス クライアントの関連付け、認証、ローミングの処理",
   "C. ビーコンフレームの送信と処理",
   "D. WAP プロトコル ファミリを使用するトラフィックの暗号化と復号化",
   "E. 同じ RF チャネル上のワイヤレス クライアント間の衝突の防止"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0432",
  "theme": "wireless",
  "type": "single",
  "question": "ワイヤレス アクセス ポイントが必要で、次の要件を満たす必要があります。\n・WLC によって展開および管理される「ゼロタッチ」\n・リアルタイム MAC 機能のみを処理する\n・スプリットMACアーキテクチャで使用する\nどのアクセス ポイント タイプを使用する必要がありますか。",
  "choices": [
   "A. メッシュ型",
   "B. 自律型",
   "C. Lightweight",
   "D. クラウドベース"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0433",
  "theme": "wireless",
  "type": "single",
  "question": "WLC は不正 AP に関するアラームを送信し、ネットワーク管理者はアラームが正規の自律型APによって引き起こされたものであることを確認しました。AP の MAC アドレスのアラームはどのように停止する必要がありますか。",
  "choices": [
   "A. WLC 管理から AP を削除する。",
   "B. AP を手動封じ込めに配置する。",
   "C. AP を保留状態から手動で削除する。",
   "D. AP クラス タイプをフレンドリーに設定する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0434",
  "theme": "wireless",
  "type": "single",
  "question": "ネットワーク アーキテクトは、Cisco Autonomous アクセス ポイントと Lightweight アクセス ポイントのどちらを実装するかを決定しています。アーキテクトはファームウェアのアップデートについてどの事実を考慮する必要がありますか?",
  "choices": [
   "A. ファームウェアのアップグレードをサポートするために冗長 WLC が必要な Lightweight アクセス ポイントとは異なり、Autonomous アクセス ポイントには WLC が 1 つだけ必要です。",
   "B. Autonomous アクセス ポイントとは異なり、Lightweight アクセス ポイントではリモート ファームウェア アップデートを実装するために WLC が必要です。",
   "C. Lightweight アクセス ポイントとは異なり、Autonomous アクセス ポイントは破損したファームウェアのアップデートから自動的に回復できます。",
   "D. Autonomous アクセス ポイントとは異なり、Lightweight アクセス ポイントはバックアップのために現在のファームウェアの完全なコピーを保存します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0435",
  "theme": "wireless",
  "type": "single",
  "question": "Cisco OfficeExtend AP モードと Cisco FlexConnect AP モードの違いは何ですか?",
  "choices": [
   "A. FlexConnect を使用すると、AP 上で個人 SSID を設定できますが、個人 SSID は OfficeExtend ではサポートされません。",
   "B. OfficeExtend は、WLC へのトラフィックの DTLS トンネリングをサポートしていません。FlexConnect は、DTLS を使用してトラフィックを WLC にトンネリングします。",
   "C. FlexConnect は、クライアント トラフィックを NAT 変換するルータの背後に展開する必要があり、OfficeExtend はパブリック IP ソースを使用します。",
   "D. OfficeExtend モードには内部アンテナを備えた屋内 AP が必要で、屋内および屋外の AP は FlexConnect モードを使用します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0436",
  "theme": "wireless",
  "type": "single",
  "question": "ローカル スイッチングと VLAN タグ付けを備えた FlexConnect モードで設定されている場合、Lightweight AP は有線ネットワークに接続するためにどのポート タイプを使用しますか?",
  "choices": [
   "A. トランク",
   "B. ラグ",
   "C. イーサチャネル",
   "D. アクセス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0437",
  "theme": "wireless",
  "type": "drag_drop",
  "question": "コマンドを左側から右側の宛先インターフェイスにドラッグ アンド ドロップします。すべてのコマンドが使用されるわけではありません。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "テンプレートを使用してQOS設定を実装する",
    "Wi-Fi信号を強化する機能",
    "PoE用の特別なアダプタが必要",
    "デバイスグループ内のユーザー接続データを提供する",
    "ワークグループブリッジとして構成可能"
   ],
   "targets": [
    {
     "label": "アクセスポイント",
     "slots": 2
    },
    {
     "label": "無線LANコントローラー",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0438",
  "theme": "wireless",
  "type": "single",
  "question": "APがWLCに参加しようとしている場合、APマネージャーインターフェイスに送信されるメッセージはどれですか。",
  "choices": [
   "A. DHCP 要求",
   "B. DHCP 検出",
   "C. Discovery Response（検出応答）",
   "D. Discovery Request（検出要求）"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0439",
  "theme": "wireless",
  "type": "multiple",
  "question": "SIPベースのコールアドミッション制御 (CAC) をWLC GUI で設定します。SIPコールスヌーピングポートが設定されています。次に完了する必要があるアクションはどれですか。(2つ選択)",
  "choices": [
   "A. 音声トラフィックの QoS レベルをシルバー以上に設定する",
   "B. WLAN でメディア セッション スヌーピングを有効にする",
   "C. データ トラフィックと音声トラフィックに 2 つの異なる QoS ロールを設定する",
   "D. 音声トラフィックの QoS レベルをプラチナに設定する",
   "E. WLC の LAN インターフェイスのトラフィック シェーピングを有効にする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0440",
  "theme": "wireless",
  "type": "single",
  "question": "WLC に接続された複数のディストリビューション スイッチがバンドルされている場合、どのチャネル グループ モードを設定しますか。",
  "choices": [
   "A. active",
   "B. on",
   "C. desirable",
   "D. passive"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0441",
  "theme": "wireless",
  "type": "single",
  "question": "Cisco Unified Wireless Network アーキテクチャでアウトオブバンド管理を提供する WLC インターフェイスはどれですか。",
  "choices": [
   "A. ダイナミック",
   "B. AP マネージャー",
   "C. 仮想",
   "D. サービスポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0442",
  "theme": "wireless",
  "type": "multiple",
  "question": "Cisco ワイヤレス LAN コントローラ GUI で新しい WLAN を設定するときに入力する必要がある2つの値または設定はどれですか。(2つ選択)",
  "choices": [
   "A. 管理インターフェース設定",
   "B. QoS 設定",
   "C. 1 つ以上のアクセス ポイントの IP アドレス",
   "D. SSID",
   "E. プロファイル名"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0443",
  "theme": "wireless",
  "type": "single",
  "question": "ワイヤレス LAN コントローラに複数の AP マネージャ インターフェイスがプロビジョニングされている場合、AP によって要求はどのように処理されますか。",
  "choices": [
   "A. AP から AP マネージャ インターフェイスへの検出応答により、WLAN ポートが無効になります。",
   "B. AP 参加要求は失敗し、AP マネージャ インターフェイスで静的に設定する必要があります。",
   "C. 応答する最初の AP マネージャ インターフェイスが AP によって選択されます",
   "D. AP の数が最も少ない AP マネージャが APによって参加に使用されます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0444",
  "theme": "wireless",
  "type": "single",
  "question": "Cisco WLC に推奨されるスイッチのロードバランシング モードは何か。",
  "choices": [
   "A. 送信元MAC アドレス – 宛先 MAC アドレス",
   "B. 宛先 IP アドレス",
   "C. 宛先 MAC アドレス",
   "D. 送信元IP アドレス – 宛先IPアドレス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0445",
  "theme": "wireless",
  "type": "single",
  "question": "FlexConnectは、他のアーキテクチャに比べ、どのような条件で推奨されますか。",
  "choices": [
   "A. 複数のリモートオフィスへの接続待ち時間が300ミリ秒を超えると予想される場合",
   "B. さまざまなリモートオフィスで高精度の位置情報サービスが必要な場合",
   "C. 個々のWLCがない複数のリモートオフィスで集中管理が必要な場合",
   "D. 各リモートオフィスがネットワーク管理のために独自のローカルWLCを必要とする場合"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0446",
  "theme": "wireless",
  "type": "single",
  "question": "2つの Cisco WLC 間で暗号化されたモビリティトンネルを使用する場合、どのデフォルト条件を考慮しますか。",
  "choices": [
   "A. トンネルはEoIPプロトコルを使用してデータトラフィックを送信します。",
   "B. TCPポート443とUDP 21が使用されます。",
   "C. トンネルはカプセル化にIPsecプロトコルを使用します。",
   "D. 制御トラフィックとデータトラフィックの暗号化が有効になっています。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0447",
  "theme": "wireless",
  "type": "single",
  "question": "WLC 上のどのインターフェイスが DHCP リレーとしてのみ使用されますか?",
  "choices": [
   "A. 配布",
   "B. サービス",
   "C. APマネージャ",
   "D. 仮想"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0448",
  "theme": "wireless",
  "type": "single",
  "question": "管理者がWLC GUIにアクセスして設定を更新するために使用するインターフェースはどれですか？",
  "choices": [
   "A. 管理",
   "B. サービス",
   "C. ダイナミック",
   "D. 仮想"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0449",
  "theme": "wireless",
  "type": "single",
  "question": "CAPWAP (Control and Provisioning of Wireless Access Points) プロトコルを使用してワイヤレス LAN コントローラと通信するには、AP がどのモードに設定する必要がありますか。",
  "choices": [
   "A. ルート",
   "B. ブリッジ",
   "C. Lightweight",
   "D. 自律型"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0450",
  "theme": "wireless",
  "type": "single",
  "question": "アクセス ポイントがワイヤレス LAN コントローラに参加しようとしているとき、どのメッセージが AP マネージャ インターフェイスに送信されますか。",
  "choices": [
   "A. ディスカバリーレスポンス",
   "B. DHCP リクエスト",
   "C. DHCP 検出",
   "D. ディスカバリーリクエスト"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0451",
  "theme": "wireless",
  "type": "single",
  "question": "Cisco WLC(ワイヤレス ラン コントローラ)の推奨されるスイッチの負荷分散モードは、次のうちどれですか。",
  "choices": [
   "A. 送信元と宛先IPアドレス",
   "B. 宛先IPアドレス",
   "C. 宛先MACアドレス",
   "D. 送信元と宛先MACアドレス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0452",
  "theme": "wireless",
  "type": "single",
  "question": "WLC での帯域外管理にはどのインターフェイスが使用されますか。",
  "choices": [
   "A. 管理",
   "B. 仮想",
   "C. ダイナミック",
   "D. サービスポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0453",
  "theme": "wireless",
  "type": "single",
  "question": "WLC CLI とのシリアル セッションが自動的にログアウトされないように Cisco WLC を設定するコマンドはどれですか。",
  "choices": [
   "A. config sessions maxsessions 0",
   "B. config serial timeout 9600",
   "C. config serial timeout 0",
   "D. config sessions timeout 0"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0454",
  "theme": "wireless",
  "type": "multiple",
  "question": "SIP ベースのコール アドミッション制御は、Cisco WLC GUI で設定する必要があります。\nSIP コール スヌーピング ポートが設定されています。\n次に完了する必要がある 2 つのアクションはどれですか。(2つ選択)",
  "choices": [
   "A. 音声トラフィックの QoS レベルをSilver以上に設定する。",
   "B. データトラフィックと音声トラフィックに対して 2 つの異なる QoS ロールを設定する。",
   "C. WLAN でメディア セッション スヌーピングを有効にする。",
   "D. 音声トラフィックの QoS レベルをPlatinumに設定する。",
   "E. WLC の LAN インターフェイスのトラフィック シェーピングを有効にする。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0455",
  "theme": "wireless",
  "type": "single",
  "question": "複数の AP マネージャー インターフェイスがワイヤレス LAN コントローラーにプロビジョニングされている場合、要求は AP によってどのように処理されますか?",
  "choices": [
   "A. AP から AP マネージャー インターフェイスへの検出応答により、WLAN ポートが無効になります。",
   "B. AP 参加要求は失敗するため、AP マネージャー インターフェイスで静的に設定する必要があります。",
   "C. AP の参加には、AP の数が最も少ない AP マネージャーが使用されます。",
   "D. 応答する最初の AP マネージャー インターフェイスが AP によって選択されます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0456",
  "theme": "wireless",
  "type": "exhibit_choice",
  "question": "SSID「USERWL」に接続するデバイスの数を 125 に制限するとき、WLCでどの設定をしますか。",
  "choices": [
   "A. WLAN 構成で、Maximam Allowed Clients の値を 125 に設定します",
   "B. 詳細構成で、DTIM 値を 125 に設定します",
   "C. コントローラ IPv6 構成で、スロットル値を 125 に設定します",
   "D. 管理ソフトウェアのアクティベーション構成で、クライアント値を 125 に設定します。"
  ],
  "figure": "data/figures/CCNA-0456.png"
 },
 {
  "qid": "CCNA-0457",
  "theme": "wireless",
  "type": "multiple",
  "question": "クライアントが 1 時間ごとに再認証する必要があり、WLAN への同時接続数を 10 に制限するように WLAN を構成します。この構成を完了するには、どのアクションを実行しますか。(2つ選択)",
  "choices": [
   "A. Maximum Allowed Clients の値を 10 に設定します",
   "B. Client Exclusion を有効にし、値を 3600 に設定します",
   "C. Maximum Allowed Clients Per AP Radio の値を 10 に設定します",
   "D. Wi-Fi Direct Clients Policy を有効にします",
   "E. Enable Session Timeout を有効にし、値を 3600 に設定します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0458",
  "theme": "wireless",
  "type": "single",
  "question": "インターネットにアクセスする前にユーザーに認証、登録、または利用規約への同意を強制するキャプティブポータルを提供するAP機能はどれですか。",
  "choices": [
   "A. ワンクリック",
   "B. ホットスポット",
   "C. 強化された Bluetooth",
   "D. ホールホーム"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0459",
  "theme": "wireless",
  "type": "exhibit_choice",
  "question": "「My_WLAN」というWLANに接続するユーザーを、「Data」という別サブネットに接続させたいとき、管理者はどんな追加設定をしますか。",
  "choices": [
   "A. Broadcast SSIDを有効にし、Interface/Interface Group(G)のドロップダウンリストから「Data」を選択します。",
   "B. ステータスを有効にし、Interface/Interface Group(G)のドロップダウンリストから「Data」を選択します。",
   "C. ステータスを有効にし、NAS-IDを「Data」に設定します。",
   "D. ステータスを有効にし、ブロードキャストSSIDを有効にします。"
  ],
  "figure": "data/figures/CCNA-0459.png"
 },
 {
  "qid": "CCNA-0460",
  "theme": "wireless",
  "type": "single",
  "question": "AireOS GUIを使用する際、管理ページに同時にアクセスできるのは何人か。",
  "choices": [
   "A. 2",
   "B. 5",
   "C. 8",
   "D. 9"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0461",
  "theme": "wireless",
  "type": "exhibit_choice",
  "question": "最近の内部セキュリティ監査の結果、ネットワーク管理者は選択したSSIDからすべてのP2P対応デバイスの通信をブロックすることを決定しました。管理者はどの設定を適用しますか？",
  "choices": [
   "A. P2P Blocking Action を「Drop」に設定する",
   "B. Layer2 ACL を正しい設定にする",
   "C. Wi-Fi Direct Clients Policy を「許可しない」に設定する",
   "D. MFP Client Protection を「必須」に設定する"
  ],
  "figure": "data/figures/CCNA-0461.png"
 },
 {
  "qid": "CCNA-0462",
  "theme": "wireless",
  "type": "exhibit_choice",
  "question": "無線LANコントローラの設定内容です。どのようなことが分かりますか。",
  "choices": [
   "A. ワイヤレスクライアントとアクセスポイント間で交換されるデータフレームを、すべてのワイヤレスデバイスで保護するための追加の保護レベルがあります。",
   "B. AppleおよびAndroidデバイスのローミングアクティビティ後にクライアントデバイスの接続を維持するのにかかる時間を最小限に抑えるために、遅延時間を延長する機能があります。",
   "C. ワイヤレス配信ネットワークの品質保証レベルをさらに高めるために、高度なセキュリティアルゴリズムがサービスに組み込まれています。",
   "D. 互換性のあるデバイスをローミング前に認証することで、ローミングを迅速化するシームレスな移行メカニズムがあります。"
  ],
  "figure": "data/figures/CCNA-0462.png"
 },
 {
  "qid": "CCNA-0463",
  "theme": "wireless",
  "type": "single",
  "question": "Voice over WLAN 導入を構成するときに、GUI でどの QoS プロファイルが選択されますか。",
  "choices": [
   "A. platinum",
   "B. bronze",
   "C. gold",
   "D. silver"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0464",
  "theme": "wireless",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ネットワーク エンジニアは、VLAN 20 上の 172.16.10.0/24 ネットワークに接続するように WLAN を設定しています。エンジニアは、USERWL SSID で WLAN に接続するデバイスの数を 125 に制限したいと考えています。エンジニアは、どの設定を実行する必要がありますか?\nWLC?",
  "choices": [
   "A. コントローラの IPv6 設定で、スロットル値を 125 に設定します。",
   "B. WLAN 設定で、最大許可クライアント数の値を 125 に設定します。",
   "C. 管理ソフトウェアのアクティベーション構成で、クライアントの値を 125 に設定します。",
   "D. 詳細設定で、DTIM 値を 125 に設定します。"
  ],
  "figure": "data/figures/CCNA-0464.png"
 },
 {
  "qid": "CCNA-0465",
  "theme": "wireless",
  "type": "multiple",
  "question": "展示品をご参照ください。管理者は、次の要件を持つワイヤレス ネットワーク用に新しい WLAN を設定しています。\n・WLAN に接続するデュアルバンド クライアントは 5 GHz スペクトルに誘導される必要があります。\n・この WLAN 上のワイヤレス クライアントは、返された RADIUS 属性に VLAN 設定を適用できる必要があります。\nこれらの要件を満たす 2 つのアクションはどれですか? (2 つお選びください。)",
  "choices": [
   "A. [ クライアント バンド選択] オプションを有効にします。",
   "B. カバレッジ ホール検出オプションを有効にします。",
   "C. [AAA オーバーライドを許可する] オプションを有効にします。",
   "D. [MFP クライアント保護] オプションを [必須] に設定します。",
   "E. Aironet IE オプションを有効にする"
  ],
  "figure": "data/figures/CCNA-0465.png"
 },
 {
  "qid": "CCNA-0466",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA2標準でワイヤレス暗号化に使用されるのはどれか。",
  "choices": [
   "A. AES256",
   "B. AES",
   "C. RC4",
   "D. SHA"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0467",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA3 ではどのような機能強化が実装されていますか。",
  "choices": [
   "A. 802.1x 認証を適用する",
   "B. TKIP を使用する",
   "C. アクセス ポイントを識別するために PKI を使用する",
   "D. ブルートフォース攻撃から保護する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0468",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA3-Personal の企業 SSID を実装するとき、どの暗号化方式を設定しますか。",
  "choices": [
   "A. GCMP128",
   "B. GCMP256",
   "C. CCMP256",
   "D. CCMP128"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0469",
  "theme": "wireless-security",
  "type": "multiple",
  "question": "WPA2 と WPA3 のワイヤレス セキュリティの違いは何ですか (2つ選択)。",
  "choices": [
   "A. WPA3 は、AES を使用する WPA2 よりも強力な保護のために SAE を使用します。",
   "B. WPA2 は 128 ビットのキー暗号化を使用し、WPA3 は 128 ビットと 192 ビットのキー暗号化をサポートします",
   "C. WPA3 は、SAE を使用する WPA2 よりも強力な保護のために AES を使用します。",
   "D. WPA3 は、TKIP を使用する WPA2 よりも強力な保護のために AES を使用します。",
   "E. WPA2 は 192 ビットのキー暗号化を使用し、WPA3 は 256 ビットのキー暗号化を必要とします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0470",
  "theme": "wireless-security",
  "type": "single",
  "question": "どの WPA モードが PSK 認証を使用しますか。",
  "choices": [
   "A. ローカル",
   "B. クライアント",
   "C. エンタープライズ",
   "D. パーソナル"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0471",
  "theme": "wireless-security",
  "type": "single",
  "question": "無線ネットワークにおける暗号化の特徴は何ですか。",
  "choices": [
   "A. 権限のないユーザーを防ぐためのポリシーを使用する",
   "B. ネットワークを通過するデータの傍受を防止する",
   "C. スパイウェアに対する保護を強化する",
   "D. 電流を電波に変換する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0472",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA3 の一部としてどのような機能強化が実装されましたか。",
  "choices": [
   "A. WEP とパケットごとのキーイングを改善する TKIP 暗号化",
   "B. パーソナルモードにおける前方秘匿性とSAEの導入",
   "C. 802.1x 認証と AES-128 暗号化",
   "D. パーソナル モードでの AES-64、エンタープライズ モードでの AES-128"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0473",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA1 はデータ保護にどのタイプの暗号化を使用しますか。",
  "choices": [
   "A. AES",
   "B. TKIP",
   "C. PEAP",
   "D. EAP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0474",
  "theme": "wireless-security",
  "type": "single",
  "question": "ワイヤレス認証用に RADIUS サーバーを実装する場合、WLCではどれを使用しますか。",
  "choices": [
   "A. クライアント除外と SSH",
   "B. ネットワーク アクセス制御状態と SSH",
   "C. 802.1x とサーバーの MAC アドレス",
   "D. AAA オーバーライドとサーバーの IP アドレス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0475",
  "theme": "wireless-security",
  "type": "exhibit_choice",
  "question": "User1 と User2 に対して DHCP パケットと DNS パケットのみを許可するように WLC を設定する必要があります。どの設定を使用しますか。",
  "choices": [
   "A. レイヤ 2 セキュリティ設定で 802.1X 標準の Web 認証を有効にする",
   "B. レイヤ 3 セキュリティ設定で MAC フィルタリングによるフォールバック ポリシーを有効にする",
   "C. レイヤ 3 セキュリティ設定で Web ポリシーと認証を有効にする",
   "D. WLAN の AAA サーバ設定で Web 認証を有効にする"
  ],
  "figure": "data/figures/CCNA-0475.png"
 },
 {
  "qid": "CCNA-0476",
  "theme": "wireless-security",
  "type": "multiple",
  "question": "2.4GHzおよび5GHzで稼働するワイヤレスネットワークで、WPA2を使用したセキュアな事前共有キーベースのSSIDを作成しています。このプロセスを完了するために、エンジニアが実行しなければならない作業はなにか。(2つ選択)",
  "choices": [
   "A. 認証キー管理に802.1xオプションを選択する",
   "B. WPA2 WPA3暗号化 に AES (CCMP128)オプションを選択する",
   "C. 認証キー管理にAESオプションを選択する",
   "D. 認証キー管理にPSKオプションを選択する",
   "E. WPAポリシーオプションを選択する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0477",
  "theme": "wireless-security",
  "type": "multiple",
  "question": "AES および事前共有キー Cisco123456 を使用した WPA2 暗号化用に WLAN を設定します。「Layer 2 Security」から[WPA+WPA2]を選択した後、どのタスクを実行しますか。(2つ選択)",
  "choices": [
   "A. 「Auth Key Mgmt」から[PSK]を選択し、「PSK Format」を[ASCII]に設定し、キーを入力する。",
   "B. 「Auth Key Mgmt」から[CCKM]を選択し、[PSK Format]を[Hex]に設定し、キーを入力する。",
   "C. 「PSK Format」から[ASCII]を選択し、キーを入力し、「Auth Key Mgmt」を空白のままにする。",
   "D. WPA2 Policy、AES、TKIPチェックボックスを選択する。",
   "E. WPA2 Policy、 AES チェックボックスを選択する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0478",
  "theme": "wireless-security",
  "type": "exhibit_choice",
  "question": "Wi-Fi SSID「Office_WLan」にはレイヤー2セキュリティが設定されています。この構成によって何が決定されますか。",
  "choices": [
   "A. 強力な暗号化と認証を提供するガロアキャッシュアルゴリズムが設定されています。",
   "B. x.509標準を使用して、NACとネットワーク・デバイス間で強力な相互認証が使用されています。",
   "C. 既知のMACアドレスを持つ許可されたデバイスのみが、ネットワークに接続することを保証するセキュリティの追加レイヤーがある。",
   "D. さまざまなレイヤー 2 およびレイヤー 3 攻撃から保護するために設定された堅牢なセキュリティ メカニズムがあります。"
  ],
  "figure": "data/figures/CCNA-0478.png"
 },
 {
  "qid": "CCNA-0479",
  "theme": "wireless-security",
  "type": "single",
  "question": "ネットワークエンジニアがWebパススルー レイヤー3 Webポリシーを使用して無線LANを設定しようとしています。設定を完了するには、エンジニアはどのような操作を行う必要がありますか？",
  "choices": [
   "A. WPAポリシーを有効にします",
   "B. レイヤー2セキュリティを802.1Xに設定します",
   "C. TKIPとCCMP256 WPA2暗号化を有効にします",
   "D. レイヤー2セキュリティを「none」に設定します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0480",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA3パーソナルモードを実行しているワイヤレスネットワークに新しいSSIDを設定する際に必須の機能はどれですか？",
  "choices": [
   "A. 便宜的ワイヤレス暗号化",
   "B. 保護管理フレーム",
   "C. 拡張オープン",
   "D. 高速移行"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0481",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA3 実装に適したセキュリティ プロトコルはどれですか?",
  "choices": [
   "A. TKIP",
   "B. GCMP",
   "C. MD5",
   "D. CCMP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0482",
  "theme": "wireless-security",
  "type": "single",
  "question": "エンジニアは、WPA2-PSK の最も強力な暗号化タイプを使用して WLAN を設定する必要があります。どの暗号が構成要件を満たしますか。",
  "choices": [
   "A. WEP",
   "B. AES",
   "C. RC4",
   "D. TKIP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0483",
  "theme": "wireless-security",
  "type": "single",
  "question": "ワイヤレス環境に最も強力な暗号化の組み合わせを提供する実装はどれですか。",
  "choices": [
   "A. WEP",
   "B. WPA + TKIP",
   "C. WPA + AES",
   "D. WPA2 + AES"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0484",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA2 PSK を使用した WLAN がワイヤレス LAN コントローラ GUI で設定されている場合、どの形式がサポートされますか。",
  "choices": [
   "A. 10 進数",
   "B. ASCII",
   "C. unicode",
   "D. base64"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0485",
  "theme": "wireless-security",
  "type": "single",
  "question": "PFSに依存するワイヤレス セキュリティ プロトコルはどれですか。",
  "choices": [
   "A. WEP",
   "B. WPA2",
   "C. WPA",
   "D. WPA3"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0486",
  "theme": "wireless-security",
  "type": "single",
  "question": "PSK 認証を使用する WPA モードはどれですか。",
  "choices": [
   "A. Local",
   "B. Personal",
   "C. Enterprise",
   "D. Client"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0487",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA2-PSK WLAN がワイヤレス LAN コントローラーで設定されている場合、ASCII 形式で必要な最小文字数は何ですか。",
  "choices": [
   "A. 6",
   "B. 8",
   "C. 12",
   "D. 18"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0488",
  "theme": "wireless-security",
  "type": "single",
  "question": "環境における Opportunistic Wireless Encryption の機能は何ですか。",
  "choices": [
   "A. 認証を提供する",
   "B. オープンネットワーク上のトラフィックを保護する",
   "C. 圧縮を提供する",
   "D. WEP 接続を使用してセキュリティを強化する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0489",
  "theme": "wireless-security",
  "type": "single",
  "question": "ネットワーク エンジニアは、PSK を使用して WPA3-Personal セキュリティ用の企業 SSID を実装しています。どの暗号化暗号を設定する必要がありますか。",
  "choices": [
   "A. CCMP128",
   "B. GCMP256",
   "C. CCMP256",
   "D. GCMP128"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0490",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA2-Enterpriseで使用される認証方式はどれか。",
  "choices": [
   "A. SAE",
   "B. WEP",
   "C. PSK",
   "D. 802.1X/EAP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0491",
  "theme": "wireless-security",
  "type": "single",
  "question": "WPA3 はワイヤレス ネットワークに何を提供しますか?",
  "choices": [
   "A. WPA および WPA2 との下位互換性",
   "B. SAE によるブルート フォース攻撃に対する保護策",
   "C. セキュリティの強化と複雑な構成の要件",
   "D. オプションの保護された管理フレームのネゴシエーション"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0492",
  "theme": "wireless-security",
  "type": "single",
  "question": "ワイヤレスネットワークにおける暗号化の特徴は何ですか?",
  "choices": [
   "A. WLAN 上のアクセス ポイントを識別します",
   "B. パスワードを使用してアクセス ポイントに接続する",
   "C. 整合性チェックを使用してフレーム内の偽造攻撃を特定する",
   "D. 認証プロトコルを使用してネットワークを保護する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0493",
  "theme": "wireless-security",
  "type": "single",
  "question": "ワイヤレスネットワークにおける暗号化の特徴は何ですか?",
  "choices": [
   "A. データ脅威がネットワークを攻撃する前に阻止します。",
   "B. ポリシーを使用して無許可のユーザーを防止する",
   "C. 文字と数字の組み合わせを含める必要があります",
   "D. 許可されたユーザーのデータをエンコードおよびデコードする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0494",
  "theme": "wireless-security",
  "type": "single",
  "question": "ワイヤレスネットワークにおける暗号化の特徴は何ですか?",
  "choices": [
   "A. データの整合性を確保するために使用されます",
   "B. 標準エンコード方式として 802.1x を使用する",
   "C. TKIP や CCMP などのプロトコルを使用してデータを保護する",
   "D. 5Ghz 周波数でのみ動作します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0495",
  "theme": "wireless-security",
  "type": "single",
  "question": "ワイヤレスネットワークにおける暗号化の特徴は何ですか?",
  "choices": [
   "A. 傍受されたデータが簡単に読み取られるのを防ぎます",
   "B. 認証に単方向ハンドシェイクを使用する",
   "C. データ脅威がネットワークを攻撃する前に阻止する",
   "D. 整合性チェックを使用して偽造攻撃を特定する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0496",
  "theme": "wireless-security",
  "type": "exhibit_choice",
  "question": "新しいWLANを構成しており、認証には RADIUS サーバーの代わりにセットアップ パスワードを使用します。どの追加タスクセットを実行しますか。",
  "choices": [
   "A. PMF－Disabled\nPSK－Enable\n802.1x－Enable",
   "B. WPA Policy\nWPA2 Policy\nFT PSK－Enable",
   "C. WPA2 Policy\nPMF－Disabled\nPSK－Enable",
   "D. WPA Policy\nCCKM－Enable\nPSK－Enable"
  ],
  "figure": "data/figures/CCNA-0496.png"
 },
 {
  "qid": "CCNA-0497",
  "theme": "wireless-security",
  "type": "exhibit_choice",
  "question": "WPA2 PSK を使用して特定のクライアントのみが参加できるように WLAN を構成しています。プロセスを完了するには、どのアクションを実行しますか。(2つ選択)",
  "choices": [
   "A. 認証キー管理の CCKMを有効にする",
   "B. 認証キー管理の 802.1Xを有効にする",
   "C. WPA2 ポリシーを有効にする",
   "D. OSEN ポリシーを有効にする",
   "E. MAC フィルタリングを有効にする"
  ],
  "figure": "data/figures/CCNA-0497.png"
 },
 {
  "qid": "CCNA-0498",
  "theme": "wireless-security",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。エンジニアは、2.4 GHz および 5 GHz で動作するワイヤレス ネットワーク用に WPA2 を使用して、安全な事前共有キー ベースの SSID を作成しています。プロセスを完了するためにエンジニアが実行する必要がある 2 つのタスクはどれですか? (2 つお選びください。)",
  "choices": [
   "A. 認証キー管理の 802.1x オプションを選択します。",
   "B. WPA2 WPA3 暗号化の AES (CCMP128) オプションを選択します。",
   "C. 認証キー管理の AES オプションを選択します。",
   "D. 認証キー管理の PSK オプションを選択します 。",
   "E. [WPA ポリシー] オプションを選択します。"
  ],
  "figure": "data/figures/CCNA-0498.png"
 },
 {
  "qid": "CCNA-0499",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "172.16.4.0 のサブネットマスクはどれですか。",
  "choices": [
   "A. 255.255.255.192",
   "B. 255.255.248.0",
   "C. 255.255.254.0",
   "D. 255.255.240.0"
  ],
  "figure": "data/figures/CCNA-0499.png"
 },
 {
  "qid": "CCNA-0500",
  "theme": "routing",
  "type": "single",
  "question": "172.31.0.1 宛てにパケットを送信します。ルーティング テーブルに、172.31.0.0/16、172.31.0.0/24、172.31.0.0/25 の3つがあるとき、ルーターはどのように処理しますか。",
  "choices": [
   "A. デフォルト ゲートウェイ 0.0.0.0/0 経由で送信されます",
   "B. 172.31.0.0/16 経由で送信されます",
   "C. 172.31.0.0/25 経由で送信されます",
   "D. 172.31.0.0/24 経由で送信されます"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0501",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R7のルーティングテーブルから確認できることは何か。",
  "choices": [
   "A. R7はデフォルトゲートウェイが欠如しています。R7はBGPから再配布されたルートを受信しています。R7は10.90.8.0/24宛のトラフィックを転送します。",
   "B. R7はデフォルトゲートウェイが欠如しています。R7はEIGRPで再配布されたルートを受信しています。R7は10.90.8.0/24宛のトラフィックを転送します。",
   "C. R7はデフォルトゲートウェイが利用可能です。R7はBGPから再配布されたルートを受信しています。R7は10.90.8.0/24宛のトラフィックをドロップします。",
   "D. R7はデフォルトゲートウェイが利用可能です。R7はEIGRPで再配布されたルートを受信しています。R7は10.90.8.0/24宛のトラフィックをドロップします。"
  ],
  "figure": "data/figures/CCNA-0501.png"
 },
 {
  "qid": "CCNA-0502",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "パケットの宛先は 172.16.3.254 です。宛先ルートのサブネットマスクはどれですか。",
  "choices": [
   "A. 0.0.0.0",
   "B. 255.255.254.0",
   "C. 255.255.255.0",
   "D. 255.255.255.255"
  ],
  "figure": "data/figures/CCNA-0502.png"
 },
 {
  "qid": "CCNA-0503",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "サイトBのトラフィックが、サイトAにある192.168.0.10でホストされているアプリケーションに到達できません。ルーティング テーブルによって何が判別しますか。",
  "choices": [
   "A. 192.168.0.10 へのトラフィックには、ルータ 1 でスタティック ルートを設定する必要があります。",
   "B. デフォルト ルートがないため、トラフィックは配信されません。",
   "C. サイト B のデフォルト ゲートウェイが正しく設定されていません。",
   "D. トラフィックは、ルータ 2 の ACL の暗黙的な拒否によってブロックされます。"
  ],
  "figure": "data/figures/CCNA-0503.png"
 },
 {
  "qid": "CCNA-0504",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "PC2 が EIGRP 経由でアプリケーション サーバーに到達するための R2 のネクスト ホップ IP アドレスは何ですか。",
  "choices": [
   "A. 10.10.10.5",
   "B. 192.168.20.1",
   "C. 10.10.10.6",
   "D. 192.168.30.1"
  ],
  "figure": "data/figures/CCNA-0504.png"
 },
 {
  "qid": "CCNA-0505",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "10.10.10.32 から送信されたパケットはインターネット宛てです。宛先ルートの管理距離はどれくらいですか。",
  "choices": [
   "A. 0",
   "B. 1",
   "C. 2",
   "D. 32"
  ],
  "figure": "data/figures/CCNA-0505.png"
 },
 {
  "qid": "CCNA-0506",
  "theme": "routing",
  "type": "single",
  "question": "ルータは 3 つの宛先プレフィックス (10.0.0.0/8、10.0.0.0/16、10.0.0.0/24) を受信しました。show ip routeコマンドを実行すると、どの出力が返されますか。",
  "choices": [
   "A. Gateway of last resort is 172.16.1.1 to network 0.0.0.0\nO E2 10.0.0.0/24[110/5] via 192.168.3.1, 0 : 01 : 00, Ethernet2",
   "B. Gateway of last resort is 172.16.1.1 to network 0.0.0.0\nO E2 10.0.0.0/16[110/5] via 192.168.2.1, 0 : 01 : 00, Ethernet1\nO E2 10.0.0.0/24[110/5] via 192.168.3.1, 0 : 01 : 00, Ethernet2",
   "C. Gateway of last resort is 172.16.1.1 to network 0.0.0.0\nO E2 10.0.0.0/8 [110/5] via 192.168.1.1, 0 : 01 : 00, Ethernet0",
   "D. Gateway of last resort is 172.16.1.1 to network 0.0.0.0\nO E2 10.0.0.0/8 [110/5] via 192.168.1.1, 0 : 01 : 00, Ethernet0\nO E2 10.0.0.0/16[110/5] via 192.168.2.1, 0 : 01 : 00, Ethernet1\nO E2 10.0.0.0/24[110/5] via 192.168.3.1, 0 : 01 : 00, Ethernet2"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0507",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "ルーティング テーブル内のルート 10.0.1.3/32 は何を表していますか。",
  "choices": [
   "A. 10.0.1.0/24 に属するすべてのホスト",
   "B. 10.0.1.100 のこと",
   "C. 1つの宛先アドレス",
   "D. 10.0.0.0/8 ネットワーク"
  ],
  "figure": "data/figures/CCNA-0507.png"
 },
 {
  "qid": "CCNA-0508",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R1から送信された場合、どのネクストホップIPアドレスのメトリックが最も望ましくないですか。",
  "choices": [
   "A. 10.10.10.4",
   "B. 10.10.10.2",
   "C. 10.10.10.5",
   "D. 10.10.10.3"
  ],
  "figure": "data/figures/CCNA-0508.png"
 },
 {
  "qid": "CCNA-0509",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R1 は 172.16.1.4 /30 へのトラフィックをどのように処理しますか。",
  "choices": [
   "A. 172.16.4.4経由ですべてのトラフィックを送信します。",
   "B. 10.0.1経由ですべてのトラフィックを送信 100",
   "C. 172.16.4.4をバックアップとして使用し、172.16.9.5経由のパスですべてのトラフィックを送信します。",
   "D. 172.16.9.5と172.16.4.4経由のトラフィックを負荷分散します。"
  ],
  "figure": "data/figures/CCNA-0509.png"
 },
 {
  "qid": "CCNA-0510",
  "theme": "routing",
  "type": "single",
  "question": "IP ルーティング テーブルの内容を表示するために、route print コマンドの代わりに使用される Windows コマンドはどれですか。",
  "choices": [
   "A. netstat-n",
   "B. ipconfig",
   "C. ifconfig",
   "D. netstat-r"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0511",
  "theme": "routing",
  "type": "drag_drop",
  "question": "[ルーティング方法]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "172.16.2.0/24",
    "207.165.200.244/30",
    "192.168.2.0/24",
    "192.168.1.0/24"
   ],
   "targets": [
    {
     "label": "スタティック",
     "slots": 1
    },
    {
     "label": "EIGRP",
     "slots": 1
    },
    {
     "label": "OSPF",
     "slots": 1
    },
    {
     "label": "RIP",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0512",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "192.168.10.33 ホストへのルートのメトリックは何ですか。",
  "choices": [
   "A. 84",
   "B. 110",
   "C. 192",
   "D. 193"
  ],
  "figure": "data/figures/CCNA-0512.png"
 },
 {
  "qid": "CCNA-0513",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R2がネイバーから学習するルートはどれか。",
  "choices": [
   "C. 10.129.9.0/23\n10.40.1.0/30\n10.12.191.0/30\n10.129.9.0/25",
   "D. 10.129.9.0/23\n10.139.2.0/30\n10.12.191.0/30\n10.129.9.0/25"
  ],
  "figure": "data/figures/CCNA-0513.png"
 },
 {
  "qid": "CCNA-0514",
  "theme": "routing",
  "type": "drag_drop",
  "question": "パケットの宛先は192.168.20.108です。宛先ルートのパラメータを左側から右側のルーティングテーブルコンポーネントにドラッグ＆ドロップしてください。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "管理距離（AD値）",
    "メトリック／コスト",
    "サブネットプレフィックス"
   ],
   "targets": [
    {
     "label": "/29",
     "slots": 1
    },
    {
     "label": "90",
     "slots": 1
    },
    {
     "label": "40",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0515",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "動的ルーティング プロトコルで学習されたルートのうち、最も優先度の低いメトリックを持つのはどれですか。",
  "choices": [
   "A. ローカル",
   "B. EIGRP",
   "C. OSPF",
   "D. RIP"
  ],
  "figure": "data/figures/CCNA-0515.png"
 },
 {
  "qid": "CCNA-0516",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "ホスト 192.168.20.1 を含むアドバタイズされたプレフィックスの管理距離はどれくらいですか?",
  "choices": [
   "A. 0",
   "B. 192.168.10.2",
   "C. 24",
   "D. 1"
  ],
  "figure": "data/figures/CCNA-0516.png"
 },
 {
  "qid": "CCNA-0517",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "デフォルトの管理距離が設定されているルートはどれですか?",
  "choices": [
   "A. EIGRP",
   "B. OSPF",
   "C. RIP",
   "D. Local"
  ],
  "figure": "data/figures/CCNA-0517.png"
 },
 {
  "qid": "CCNA-0518",
  "theme": "routing",
  "type": "single",
  "question": "2 つの異なるルーティング プロトコルから同じ宛先への 2 つ以上の異なるルートが存在する場合、ルーターはどの属性を使用して最適なパスを選択しますか。",
  "choices": [
   "A. デュアルアルゴリズム",
   "B. メトリック",
   "C. アドミニストレーティブ ディスタンス",
   "D. ホップ数"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0519",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "上記を参照してください。出力によると、R7 のルーティング テーブルを使用してどのパラメータ セットが検証されますか。",
  "choices": [
   "A. R7 には最後の手段のゲートウェイがない。\nR7 は、EIGRP で再配布されたルートを受信している。\nR7 は、10.90.8.0/24 宛てのトラフィックを転送する。",
   "B. R7 には、利用可能な最後の手段のゲートウェイがある。\nR7 は、BGP から再配布されたルートを受信している。\nR7 は、10.90.8.0/24 宛てのトラフィックをドロップする。",
   "C. R7 には最後の手段のゲートウェイがない。\nR7 は、BGP から再配布されたルートを受信している。\nR7 は、10.90.8.0/24 宛てのトラフィックを転送する。",
   "D. R7 には、利用可能な最後の手段のゲートウェイがある。\nR7 は、EIGRP で再配布されたルートを受信している。\nR7 は、10.90.8.0/24 宛てのトラフィックをドロップする。"
  ],
  "figure": "data/figures/CCNA-0519.png"
 },
 {
  "qid": "CCNA-0520",
  "theme": "routing",
  "type": "multiple",
  "question": "コマンド ip route 172.16.3.0 255.255.255.0 192.168.2.4 について正しい 2 つの記述はどれですか。(2つ選択)",
  "choices": [
   "A. 172.16.3.0 ネットワークへのスタティック ルートを確立する。",
   "B. 172.16.2.4 ネットワークへのスタティック ルートを確立する。",
   "C. 不明な宛先へのトラフィックを 172.16.3.0 ネットワークに送信するようにルーターを設定する。",
   "D. 不明な宛先へのトラフィックをアドレス 192.168.2.4 のインターフェイスから送信するようにルーターを設定する。",
   "E. デフォルトのアドミニストレーティブ ディスタンスを使用する。",
   "F. 同じ宛先への他の経路が存在する場合に最後に使用される経路である。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0521",
  "theme": "routing",
  "type": "single",
  "question": "R1 は OSPF を使用しており、2 つの異なるネイバーから 10.0.1.0/24 ネットワークへの 2 つのルートを受信しています。R1 はルーティング テーブルにどのルートを挿入するかを決定するためにどのパラメータを使用しますか。",
  "choices": [
   "A. AD",
   "B. メトリック",
   "C. プレフィックスの最長一致",
   "D. プレフィックス長"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0522",
  "theme": "routing",
  "type": "single",
  "question": "フローティング スタティック ルートが設定されている場合、プライマリ ルートに障害が発生した場合にバックアップ ルートが確実に使用されるようにするアクションはどれですか。",
  "choices": [
   "A. バックアップ ルートがセカンダリになるように、プライマリ ルートのアドミニストレーティブ ディスタンスを大きくする必要がある。",
   "B. ルートがルーティング テーブルにインストールされるように、default-information Originate コマンドを設定する必要がある。",
   "C. フローティング スタティック ルートは、バックアップとして使用されるように、プライマリ ルートよりも低いアドミニストレーティブ ディスタンスを持つ必要がある。",
   "D. フローティング スタティック ルートは、バックアップとして使用されるように、プライマリ ルートよりも高いアドミニストレーティブ ディスタンスを持つ必要がある。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0523",
  "theme": "routing",
  "type": "single",
  "question": "R1 は、多数のルーティング プロトコルを介してルート 10.10.10.0/24 を学習しました。どのルートが設置されていますか。",
  "choices": [
   "A. 最も高い IP を持つネクストホップを持つルート",
   "B. コストが最も低いルート",
   "C. アドミニストレーティブ ディスタンスが最も短いルート",
   "D. プレフィックス長が最も短いルート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0524",
  "theme": "routing",
  "type": "single",
  "question": "R1 は、IS-IS、OSPF、RIP、および内部 EIGRP 経由でルート 192.168.12.0/24 を学習しました。通常の動作条件では、どのルーティング プロトコルがルーティング テーブルにインストールされますか。",
  "choices": [
   "A. IS-IS",
   "B. 内部 EIGRP",
   "C. RIP",
   "D. OSPF"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0525",
  "theme": "routing",
  "type": "single",
  "question": "次の中から、アドミニストレーティブディスタンス（AD）が最も低いルーティングソースはどれか。",
  "choices": [
   "A. 直接接続（AD=0）",
   "B. RIP（AD=120）",
   "C. OSPF（AD=110）",
   "D. スタティックルート（AD=1）"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0526",
  "theme": "routing",
  "type": "single",
  "question": "次の中から、ルーターのshow ip routeコマンドで「C」のプレフィックスが示すルートの意味はどれか。",
  "choices": [
   "A. OSPFで学習したルート",
   "B. RIPで学習したルート",
   "C. スタティックルート",
   "D. 直接接続されたネットワーク"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0527",
  "theme": "routing",
  "type": "single",
  "question": "フローティングスタティックルートの目的として適切な説明を1つ選びなさい。",
  "choices": [
   "A. デフォルトルートを動的に学習する",
   "B. アドミニストレーティブディスタンスを高く設定し、バックアップルートとして機能させる",
   "C. 複数の等コストパスでロードバランシングを行う",
   "D. ルーティングプロトコルよりも優先的にルートを使用する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0528",
  "theme": "routing",
  "type": "single",
  "question": "フローティングスタティックルートの目的として誤っているものはどれか。",
  "choices": [
   "A. アドミニストレーティブディスタンスを高く設定し、バックアップルートとして機能させる",
   "B. デフォルトルートを動的に学習する",
   "C. ルーティングプロトコルよりも優先的にルートを使用する",
   "D. 複数の等コストパスでロードバランシングを行う"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0529",
  "theme": "routing",
  "type": "drag_drop",
  "question": "出品物をご参照ください。学習されたプレフィックスを左側から、右側の学習元となった優先ルート方式にドラッグ アンド ドロップします。すべてのプレフィックスが使用されるわけではありません。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "172.16.2.0/24",
    "192.168.1.0/24",
    "192.168.2.0/24",
    "207.165.200.244/30",
    "207.165.200.248/30"
   ],
   "targets": [
    {
     "label": "static",
     "slots": 1
    },
    {
     "label": "EIGRP",
     "slots": 1
    },
    {
     "label": "OSPF",
     "slots": 1
    },
    {
     "label": "RIP",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0530",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ネットワーク内のすべてのルーターは正しく構成されており、期待されるルートがルーター間で交換されています。どのルートのセットが近隣から学習され、ルーター 2 にインストールされますか?",
  "choices": [
   "A. 10.129.9.0/23\n10.139.2.0/30\n10.2.191.0/30\n10.129.9.0/25",
   "B. 10.129.9.0/23\n10.40.1.0/30\n10.2.191.0/30\n10.129.9.0/25",
   "C. 10.40.1.0/30\n10.139.2.0/30\n10.2.191.0/30\n10.129.9.0/25",
   "D. 10.129.9.0/23\n10.139.2.0/30\n10.129.9.0/25\n10.22.1.0/24"
  ],
  "figure": "data/figures/CCNA-0530.png"
 },
 {
  "qid": "CCNA-0531",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "ホストIPアドレス 192.168.10.5 に最も長くプレフィックスが一致するのはどれですか。",
  "choices": [
   "A. 1",
   "B. 2",
   "C. 3",
   "D. 4"
  ],
  "figure": "data/figures/CCNA-0531.png"
 },
 {
  "qid": "CCNA-0532",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "172.18.32.38が宛先であるとき、ルータはパケットをどこに転送しますか。",
  "choices": [
   "A. GigabitEthernet0/0",
   "B. Loopback0",
   "C. 10.1.1.1",
   "D. 10.1.1.3"
  ],
  "figure": "data/figures/CCNA-0532.png"
 },
 {
  "qid": "CCNA-0533",
  "theme": "routing",
  "type": "drag_drop",
  "question": "次の事象が起きたとき、どのプロトコルが使用されますか。\n1 スタティックルートとEIGRPがダウンする\n2 スタティックルートとOSPFがダウンする\n3 スタティックルートとeBGPがダウンする\n4 すべてのプロトコルが稼働中\n5 OSPFとeBGPがダウンする",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "EIGRP",
    "スタティックルート",
    "eBGP"
   ],
   "targets": [
    {
     "label": "1,2",
     "slots": 1
    },
    {
     "label": "3",
     "slots": 1
    },
    {
     "label": "4,5",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0534",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "192.168.12.16 へのトラフィックをどのように管理しますか。",
  "choices": [
   "A. 宛先アドレスを含むプレフィックスが最も長い RIP ルートを選択します",
   "B. 3つのルート間でトラフィックの負荷を分散します",
   "C. 宛先アドレスを含むプレフィックスが最も長い OSPF ルートを選択します",
   "D. 管理距離が最も短い EIGRP ルートを選択します"
  ],
  "figure": "data/figures/CCNA-0534.png"
 },
 {
  "qid": "CCNA-0535",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "PC A は IP アドレス 10.227.225.255 の別のデバイスと通信しています。ルータ Y はどのルータを経由してトラフィックをルーティングしますか。",
  "choices": [
   "A. ルータA",
   "B. ルータB",
   "C. ルータC",
   "D. ルータD"
  ],
  "figure": "data/figures/CCNA-0535.png"
 },
 {
  "qid": "CCNA-0536",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R1 が R3 のループバック アドレス 1.1.1.3/32 への有効なルートを識別するために使用する値はどれですか。(2つ選択)",
  "choices": [
   "A. 次のホップに到達するためのコストが最も低い",
   "B. 管理距離が最も低い",
   "C. メトリックが最も低い",
   "D. メトリックが最も高い",
   "E. 管理距離が最も高い"
  ],
  "figure": "data/figures/CCNA-0536.png"
 },
 {
  "qid": "CCNA-0537",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "192.168.0.55 にトラフィックを転送するために選択されるインターフェースはどれか。",
  "choices": [
   "A. GigabitEthernet0/1",
   "B. Null0",
   "C. GigabitEthernet0/3",
   "D. GigabitEthernet0/2"
  ],
  "figure": "data/figures/CCNA-0537.png"
 },
 {
  "qid": "CCNA-0538",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "負荷分散されたトラフィックが WAN から 172.16.1.190 のホスト宛てに送信されています。ルータはどのネクストホップを使用して要求を転送しますか。",
  "choices": [
   "A. 192.168.7.4",
   "B. 192.168.7.7",
   "C. 192.168.7.35",
   "D. 192.168.7.40"
  ],
  "figure": "data/figures/CCNA-0538.png"
 },
 {
  "qid": "CCNA-0539",
  "theme": "routing",
  "type": "drag_drop",
  "question": "[OSPF]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "10.10.13.1",
    "10.10.100.128",
    "10.10.13.150",
    "10.10.13.129",
    "10.10.10.16"
   ],
   "targets": [
    {
     "label": "インターネット宛て",
     "slots": 3
    },
    {
     "label": "ルータ1宛て",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0540",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R1は1.0.0.0/8 内で最適なパスを決定するために、どの値を使用しますか。(2つ選択)",
  "choices": [
   "A. 最長プレフィックス一致",
   "B. 次ホップに到達するためのコストが最も低い",
   "C. 管理距離が最も高い",
   "D. メトリックが最も高い",
   "E. メトリックが最も低い"
  ],
  "figure": "data/figures/CCNA-0540.png"
 },
 {
  "qid": "CCNA-0541",
  "theme": "routing",
  "type": "single",
  "question": "ルータには、同じ OSPF プロセスで同じ宛先ネットワークへの 2 つの静的ルートがあります。ネクストホップ デバイスが異なる場合、ルータはどのようにしてパケットを宛先に転送しますか。",
  "choices": [
   "A. ルータは IP アドレスが最も低いネクストホップを選択します",
   "B. ルータは宛先へのすべてのルートでトラフィックの負荷を分散します",
   "C. ルータは MAC アドレスが最も低いネクストホップを選択します",
   "D. ルータは最も古い経過時間を持つルートを選択します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0542",
  "theme": "routing",
  "type": "drag_drop",
  "question": "[宛先IP]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "209.165.200.30",
    "10.10.13.209",
    "1.1.1.1",
    "10.10.13.126",
    "10.10.13.150",
    "10.10.13.129"
   ],
   "targets": [
    {
     "label": "Router2",
     "slots": 1
    },
    {
     "label": "Router3",
     "slots": 1
    },
    {
     "label": "Router4",
     "slots": 1
    },
    {
     "label": "Router5",
     "slots": 1
    },
    {
     "label": "Internet",
     "slots": 1
    },
    {
     "label": "MPLS",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0543",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "宛先ネットワークにトラフィックを送信するために使用されるインターフェースはどれですか。",
  "choices": [
   "A. G0/1",
   "B. G0/8",
   "C. G0/24",
   "D. G0/17"
  ],
  "figure": "data/figures/CCNA-0543.png"
 },
 {
  "qid": "CCNA-0544",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "宛先ネットワークにトラフィックを送信するために使用されるインターフェースはどれですか。",
  "choices": [
   "A. G0/12",
   "B. G0/1",
   "C. G0/9",
   "D. G0/19"
  ],
  "figure": "data/figures/CCNA-0544.png"
 },
 {
  "qid": "CCNA-0545",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "宛先ネットワークにトラフィックを送信するために使用されるインターフェースはどれですか。",
  "choices": [
   "A. G0/11",
   "B. G0/20",
   "C. G0/9",
   "D. G0/16"
  ],
  "figure": "data/figures/CCNA-0545.png"
 },
 {
  "qid": "CCNA-0546",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "パケットの宛先は 172.16.32.8 です。優先するルートのサブネットマスクはどれですか。",
  "choices": [
   "A. 255.255.224.0",
   "B. 255.255.255.0",
   "C. 255.255.255.192",
   "D. 255.255.255.252"
  ],
  "figure": "data/figures/CCNA-0546.png"
 },
 {
  "qid": "CCNA-0547",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "PC A は 10.225.34.225 の別のデバイスと通信しています。ルータ Y はどのルータを経由してトラフィックをルーティングしますか。",
  "choices": [
   "A. ルータA",
   "B. ルータB",
   "C. ルータC",
   "D. ルータD"
  ],
  "figure": "data/figures/CCNA-0547.png"
 },
 {
  "qid": "CCNA-0548",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "パケットは 192.168.10.1 から 192.168.20.75 の宛先に流れています。ルータはどのネクストホップを選択しますか。",
  "choices": [
   "A. 10.10.10.1",
   "B. 10.10.10.11",
   "C. 10.10.10.12",
   "D. 10.10.10.14"
  ],
  "figure": "data/figures/CCNA-0548.png"
 },
 {
  "qid": "CCNA-0549",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "ルータD でshow ip routeコマンドを実行したとき、192.168.1.0/24 へのネクストホップはどれですか。また、その理由は何ですか。",
  "choices": [
   "A. 次のホップは 10.0.2.1 です。リンクステートルーティング プロトコルだからです。",
   "B. 次のホップは 10.0.0.1 です。管理距離が優れているからです。",
   "C. 次のホップは 10.0.2.1 です。距離ベクトル ルーティングを使用しているからです。",
   "D. 次のホップは 10.0.0.1 です。メトリックが高いからです。"
  ],
  "figure": "data/figures/CCNA-0549.png"
 },
 {
  "qid": "CCNA-0550",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "宛先ネットワークにトラフィックを送信するために使用されるインターフェースはどれですか。",
  "choices": [
   "A. G0/6",
   "B. G0/3",
   "C. G0/16",
   "D. G0/23"
  ],
  "figure": "data/figures/CCNA-0550.png"
 },
 {
  "qid": "CCNA-0551",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "宛先ネットワークにトラフィックを送信するために使用されるインターフェースはどれですか。",
  "choices": [
   "A. F0/2",
   "B. F0/20",
   "C. F0/12",
   "D. F0/10"
  ],
  "figure": "data/figures/CCNA-0551.png"
 },
 {
  "qid": "CCNA-0552",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R1 が宛先 IP アドレス 10.56.0.62 のパケットを受信すると、どのインターフェイスを介してパケットをルーティングしますか。",
  "choices": [
   "A. Vlan59",
   "B. Vlan60",
   "C. Null0",
   "D. Vlan58"
  ],
  "figure": "data/figures/CCNA-0552.png"
 },
 {
  "qid": "CCNA-0553",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "デバイスは、100.100.100.100 宛てのパケットをどのように処理しますか。",
  "choices": [
   "A. 動的ルートよりも静的ルートを常に優先します\nS 100.100.0.0/16 [1/0]",
   "B. 最も低いメトリックのルートを選択します\nR 100.0.0.0/8 [120/2] via 192.168.3.1, 00:00:13, Ethernet0/3",
   "C. 最も高いメトリックのルートを選択します\nD 100.100.100.0/24 [90/435200] via 192.168.2.1, 00:00:13, Ethernet0/2",
   "D. 最も長い一致を持つルートを選択します\nO 100.100.100.100/32 [110/21] via 192.168.1.1, 00:05:57, Ethernet0/1"
  ],
  "figure": "data/figures/CCNA-0553.png"
 },
 {
  "qid": "CCNA-0554",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "10.220.100.96/27の現在のルートが利用できなくなった場合、ルーターYは10.220.100.96/27へのトラフィックのルーティングにどのルーターを使用しますか。",
  "choices": [
   "A. ルーターA",
   "B. ルーターB",
   "C. ルーターC",
   "D. ルーターD"
  ],
  "figure": "data/figures/CCNA-0554.png"
 },
 {
  "qid": "CCNA-0555",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "ルーター1がホストAに到達するために使用するルートのプレフィックス長は？",
  "choices": [
   "A. /25",
   "B. /27",
   "C. /28",
   "D. /29"
  ],
  "figure": "data/figures/CCNA-0555.png"
 },
 {
  "qid": "CCNA-0556",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "パケットが宛先アドレス 10.10.10.14 に到達するにはどのインターフェースを経由しますか?",
  "choices": [
   "A. Serial 0/0",
   "B. FastEthernet 0/1",
   "C. FastEthernet 0/0",
   "D. FastEthernet 0/2"
  ],
  "figure": "data/figures/CCNA-0556.png"
 },
 {
  "qid": "CCNA-0557",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "デフォルトのルーティングプロトコル設定が使用されている場合、10.255.2.2/32 のルート学習に使用されるルーティングプロトコルはどれですか？",
  "choices": [
   "A. EIGRP",
   "B. BGP",
   "C. RIP",
   "D. OSPF"
  ],
  "figure": "data/figures/CCNA-0557.png"
 },
 {
  "qid": "CCNA-0558",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "192.168.18.16 に到達するにはどのインターフェースを経由しますか?",
  "choices": [
   "A. GigabitEthernet1/0",
   "B. GigabitEthernet0/0",
   "C. GigabitEthernet2/0",
   "D. Null0"
  ],
  "figure": "data/figures/CCNA-0558.png"
 },
 {
  "qid": "CCNA-0559",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "152.168.32.85 にパケットをルーティングするために使用されるネクストホップはどれですか。",
  "choices": [
   "A. 10.10.1.2",
   "B. 10.10.2.2",
   "C. 10.10.3.2",
   "D. 10.10.4.2"
  ],
  "figure": "data/figures/CCNA-0559.png"
 },
 {
  "qid": "CCNA-0560",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R1が192.168.2.86と10.20.1.50に到達するための正しいネクストホップはどれですか？",
  "choices": [
   "A. 172.16.1.4",
   "B. 172.16.1.1",
   "C. 172.16.1.2",
   "D. 172.16.1.3"
  ],
  "figure": "data/figures/CCNA-0560.png"
 },
 {
  "qid": "CCNA-0561",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R1 は 192.168.64.22 宛てのパケットをどのように処理するか?",
  "choices": [
   "A. 10.1.1.1 へのスタティックルートを使用します。",
   "B. 最も高い AD と最も高い宛先 IP を持つルートを使用します。",
   "C. パケットを 10.1.1.2 にルーティングします。",
   "D. パケットをドロップします。"
  ],
  "figure": "data/figures/CCNA-0561.png"
 },
 {
  "qid": "CCNA-0562",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "ホスト172.16.0.14に送信するとき、ルータはどの宛先にパケットを送信しますか。",
  "choices": [
   "A. 209.165.200.246 via Serial0/1/0",
   "B. 209.165.200.254 via Serial0/0/0",
   "C. 209.165.200.254 via Serial0/0/1",
   "D. 209.165.200.250 via Serial0/0/0"
  ],
  "figure": "data/figures/CCNA-0562.png"
 },
 {
  "qid": "CCNA-0563",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "上記を参照してください。パケットの送信元が 10.10.10.2 で、宛先が 10.10.10.16 である場合、ルーターはどのようなアクションを実行しますか。",
  "choices": [
   "A. 学習されたすべてのネクストホップにパケットをフラッディングする",
   "B. 宛先アドレスに近い経路を使用する。",
   "C. ルートが学習されるのを待つパケットをキューに入れる。",
   "D. パケットを破棄する。"
  ],
  "figure": "data/figures/CCNA-0563.png"
 },
 {
  "qid": "CCNA-0564",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "トラフィックを宛先ネットワークに送信するためにどのインターフェイスが使用されますか。",
  "choices": [
   "A. F0/5",
   "B. F0/6",
   "C. F0/12",
   "D. F0/9"
  ],
  "figure": "data/figures/CCNA-0564.png"
 },
 {
  "qid": "CCNA-0565",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "上記を参照してください。ルーター R1 は 3 つの異なるルーティング プロトコルを実行しています。ルーターが宛先 IP 172.16.32.1 で受信したパケットを転送するために使用するルート特性はどれですか。",
  "choices": [
   "A. 最長のプレフィックス",
   "B. アドミニストレーティブ ディスタンス",
   "C. コスト",
   "D. メトリック"
  ],
  "figure": "data/figures/CCNA-0565.png"
 },
 {
  "qid": "CCNA-0566",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "上記を参照してください。ルーター R1 は 192.168.10.16 へのトラフィックをどのように処理しますか。",
  "choices": [
   "A. 宛先アドレスを含む最短のプレフィックスを持つ IS-IS ルートが選択される。",
   "B. 宛先アドレスを含む最長のプレフィックスを持つ RIP ルートが選択される。",
   "C. コストが最も低い OSPF ルートが選択される。",
   "D. アドミニストレーティブ ディスタンスが最も低いため、EIGRP ルートが選択される。"
  ],
  "figure": "data/figures/CCNA-0566.png"
 },
 {
  "qid": "CCNA-0567",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "トラフィックを宛先ネットワークに送信するためにどのインターフェイスが使用されますか?",
  "choices": [
   "A.G0 /10",
   "B.G0 /24",
   "C.G0 /5",
   "D.G0 /1"
  ],
  "figure": "data/figures/CCNA-0567.png"
 },
 {
  "qid": "CCNA-0568",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "トラフィックを宛先ネットワークに送信するためにどのインターフェイスが使用されますか?",
  "choices": [
   "A.F0 /9",
   "B.F0 /16",
   "C.F0 /7",
   "D.F0 /24"
  ],
  "figure": "data/figures/CCNA-0568.png"
 },
 {
  "qid": "CCNA-0569",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "トラフィックを宛先ネットワークに送信するためにどのインターフェイスが使用されますか?",
  "choices": [
   "A. G0/21",
   "B.G0 /4",
   "C.G0 /5",
   "D.G0 /16"
  ],
  "figure": "data/figures/CCNA-0569.png"
 },
 {
  "qid": "CCNA-0570",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。 PC A は、IP アドレス 10.227.151.255 の別のデバイスと通信しています。ルーター Y はどのルーターを経由してトラフィックをルーティングしますか?",
  "choices": [
   "A. ルーターA",
   "B. ルーターB",
   "C. ルーターC",
   "D. ルーターD"
  ],
  "figure": "data/figures/CCNA-0570.png"
 },
 {
  "qid": "CCNA-0571",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。 10.10.10.3 宛てのパケットに最適なパスを作成した IP ルート コマンドはどれですか?",
  "choices": [
   "A. ip route 10.10.0.0 255.255.252.0 g0/0",
   "B. ip route 10.10.10.0 255.255.255.240 g0/0",
   "C. ip route 10.0.0.0 255.0.0.0 g0/0",
   "D. ip route 10.10.10.1 255.255.255.255 g0/0"
  ],
  "figure": "data/figures/CCNA-0571.png"
 },
 {
  "qid": "CCNA-0572",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。 PC A は、IP アドレス 10.225.34.225 の別のデバイスと通信しています。ルーター Y はどのルーターを経由してトラフィックをルーティングしますか?",
  "choices": [
   "A. ルーターA",
   "B. ルーターB",
   "C. ルーターC",
   "D. ルーターD"
  ],
  "figure": "data/figures/CCNA-0572.png"
 },
 {
  "qid": "CCNA-0573",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "トラフィックを宛先ネットワークに送信するためにどのインターフェイスが使用されますか?",
  "choices": [
   "A. F0/7",
   "B. F0/6",
   "C. F0/4",
   "D. F0/5"
  ],
  "figure": "data/figures/CCNA-0573.png"
 },
 {
  "qid": "CCNA-0574",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R1から10.10.2.1へのトラフィックはR3経由、それ以外の10.10.2.0/24へのトラフィックはR2経由でルーティングするには、R1でどのコマンドを使いますか。",
  "choices": [
   "A. ip route 10.10.2.1 255.255.255.255 192.168.1.4 115",
   "B. ip route 10.10.2.0 255.255.255.0 192.168.1.4 100",
   "C. ip route 10.10.2.0 255.255.255.0 192.168.1.4 115",
   "D. ip route 10.10.2.1 255.255.255.255 192.168.1.4 100"
  ],
  "figure": "data/figures/CCNA-0574.png"
 },
 {
  "qid": "CCNA-0575",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "現在のデフォルトルートが失敗したときだけ有効になるフローティングスタティックルートを設定する必要があります。そのルートは 2001:db8:1234:2::1 を指すように設定します。CPEでどのコマンドを設定しますか。",
  "choices": [
   "A. ipv6 route ::/0 2001:db8:1234:2::1 2",
   "B. ipv6 route ::/0 2001:db8:1234:2::1 3",
   "C. ipv6 route ::/128 2001:db8:1234:2::1 3",
   "D. ipv6 route ::/0 2001:db8:1234:2::1 1"
  ],
  "figure": "data/figures/CCNA-0575.png"
 },
 {
  "qid": "CCNA-0576",
  "theme": "routing",
  "type": "multiple",
  "question": "本社に冗長性を確保してインターネットアクセスを提供するために、CPEルーターにどの設定をしますか。(2つ選択)",
  "choices": [
   "A. ip route 0.0.0.0 0.0.0.0 198.51.100.1\nip route 0.0.0.0 0.0.0.0 203.0.113.1 2",
   "B. ip route 0.0.0.0 128.0.0.0 198.51.100.1\nip route 128.0.0.0 128.0.0.0 203.0.113.1\nip route 0.0.0.0 0.0.0.0 198.51.100.1\nip route 0.0.0.0 0.0.0.0 203.0.113.1",
   "C. ip route 0.0.0.0 128.0.0.0 198.51.100.1\nip route 128.0.0.0 128.0.0.0 203.0.113.1",
   "D. ip route 0.0.0.0 0.0.0.0 198.51.100.1 255\nip route 0.0.0.0 0.0.0.0 203.0.113.1 255\nip route 128.0.0.0 128.0.0.0 203.0.113.1",
   "E. ip route 0.0.0.0 0.0.0.0 198.51.100.1\nip route 0.0.0.0 0.0.0.0 203.0.113.1"
  ],
  "figure": "data/figures/CCNA-0576.png"
 },
 {
  "qid": "CCNA-0577",
  "theme": "routing",
  "type": "drag_drop",
  "question": "ホストA がホスト B と通信できるように、各ルーターに静的ネットワーク ルートを設定する必要があります。すべてのコマンドが使用されるわけではありません。\nR1 [ ] , R2 [ ] [ ] , R3 [ ]",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "b. ip route 10.10.13.0 255.255.255.128 10.10.10.5",
    "c. ip route 10.10.13.10 255.255.255.255 10.10.10.1",
    "d. ip route 10.10.14.0 255.255.255.0 10.10.10.2",
    "f. ip route 10.10.14.10 255.255.255.255 10.10.10.6",
    "e. ip route 10.10.14.0 255.255.255.0 10.10.10.6",
    "a. ip route 10.10.13.0 255.255.255.128 10.10.10.1"
   ],
   "targets": [
    {
     "label": "R1",
     "slots": 1
    },
    {
     "label": "R2",
     "slots": 2
    },
    {
     "label": "R3",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0578",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "外部 EIGRP ネットワーク上にフローティングスタティックルートを設定する必要があります。宛先サブネットは、R86 の LANインターフェイス上の /29 です。R14で実行するコマンドはどれですか。",
  "choices": [
   "A. ip route 10.80.65.0 255.255.248.0 10.73.65.66 1",
   "B. ip route 10.80.65.0 255.255.255.240 fa0/1 89",
   "C. ip route 10.80.65.0 255.255.255.248 10.73.65.66 171",
   "D. ip route 10.73.65.66 0.0.0.224 10.80.65.0 255"
  ],
  "figure": "data/figures/CCNA-0578.png"
 },
 {
  "qid": "CCNA-0579",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R14は、PC 10 へのホスト ルートを確立するには、どの設定を使用しますか。",
  "choices": [
   "A. ip route 10.80.65.10 255.255.255.254 10.80.65.1",
   "B. ip route 10.73.65.66 0.0.0.255 10.80.65.10",
   "C. ip route 10.80.65.10 255.255.255.255 10.73.65.66",
   "D. ip route 10.73.65.65 255.0.0.0 10.80.65.10"
  ],
  "figure": "data/figures/CCNA-0579.png"
 },
 {
  "qid": "CCNA-0580",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R14 にある 172.16.34.0/29 にトラフィックを転送するには、R86 にスタティック ルートを設定する必要があります。どのコマンドを使用しますか。",
  "choices": [
   "A. ip route 172.16.34.0 255.255.255.248 10.73.65.65",
   "B. ip route 172.16.34.0 255.255.255.224 10.73.65.66",
   "C. ip route 10.73.65.65 255.255.255.248 172.16.34.0",
   "D. ip route 172.16.34.0 0.0.0.7 10.73.65.64"
  ],
  "figure": "data/figures/CCNA-0580.png"
 },
 {
  "qid": "CCNA-0581",
  "theme": "routing",
  "type": "multiple",
  "question": "R2 と R3 は正しく設定されています。PC1 が 10.10.10.0/24 ネットワーク上のすべての PC と通信するには、R1 でどのコマンドを設定しますか。(2つ選択)",
  "choices": [
   "A. ip route 10.10.10.8 255.255.255.248 g0/1",
   "B. ip route 10.10.10.10 255.255.255.255 g0/1",
   "C. ip route 10.10.10.0 255.255.255.248 192.168.2.2",
   "D. ip route 10.10.10.0 255.255.255.0 192.168.2.3",
   "E. ip route 10.10.10.10 255.255.255.255 192.168.2.2"
  ],
  "figure": "data/figures/CCNA-0581.png"
 },
 {
  "qid": "CCNA-0582",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "新しいブランチオフィスを会社のネットワークに接続するために、R1 の設定を更新しています。R2 は正しく設定されています。エンジニアはどのコマンドを設定しますか。",
  "choices": [
   "A. ip route 172.25.25.1 255.255.255.255 g0/2",
   "B. ip route 172.25.25.0 255.255.255.0 192.168.2.1",
   "C. ip route 172.25.25.1 255.255.255.255 g0/1",
   "D. ip route 172.25.25.0 255.255.255.0 192.168.2.2"
  ],
  "figure": "data/figures/CCNA-0582.png"
 },
 {
  "qid": "CCNA-0583",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "R1 と R2 は、RIP が設定されています。192.168.23 へのバックアップ ルートとして機能するように、フローティング スタティック ルートを使用して R1 を設定する必要があります。エンジニアは R1 でどのコマンドを設定しますか。",
  "choices": [
   "A. ip route 192.168.23.0 255.255.255.255 192.168.13.3 121",
   "B. ip route 192.168.23.0 255.255.255.0 192.168.13.3 100",
   "C. ip route 192.168.23.0 255.255.255.0 192.168.13.3",
   "D. ip route 192.168.23.0 255.255.255.0 192.168.13.3 121"
  ],
  "figure": "data/figures/CCNA-0583.png"
 },
 {
  "qid": "CCNA-0584",
  "theme": "routing",
  "type": "multiple",
  "question": "ニューヨークのルータは、2000::1 へのトラフィックが主にアトランタ サイト経由で送信され、管理距離が 2 のワシントン経由のセカンダリパスで送信されるように設定する必要があります。ニューヨークのルータで設定する必要があるコマンドはどれですか。(2つ選択)",
  "choices": [
   "A. ipv6 route 2000::1/128 2012::1 5",
   "B. ipv6 route 2000::1/128 2023::2 5",
   "C. ipv6 route 2000::1/128 2012::1",
   "D. ipv6 route 2000::1/128 2023::3 5",
   "E. ipv6 route 2000::1/128 2012::2"
  ],
  "figure": "data/figures/CCNA-0584.png"
 },
 {
  "qid": "CCNA-0585",
  "theme": "routing",
  "type": "single",
  "question": "10.200.0.2 経路のフローティングスタティックルートを設定します。",
  "choices": [
   "A. ip route 0.0.0.0 0.0.0.0 10.200.0.2 floating",
   "B. ip route 0.0.0.0 0.0.0.0 10.200.0.2",
   "C. ip route 0.0.0.0 0.0.0.0 10.200.0.2 10",
   "D. ip route 0.0.0.0 0.0.0.0 10.200.0.2 1"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0586",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "プライマリリンクに障害が発生した場合にトラフィックを R2 の LAN ネットワークに渡すには、ルータ R1にセカンダリルートが必要です。ルータを構成するにはどのコマンドを入力しますか。",
  "choices": [
   "A. ip route 10.0.2.0 256.255.255.248 null0 93",
   "B. ip route 10.0.2.0 255.255.255.240 10.0.0.6 91",
   "C. ip route 10.0.2.0 255.255.255.240 10.0.0.7 92",
   "D. ip route 10.0.2.0 255.255.255.248 10.0.0.6 91"
  ],
  "figure": "data/figures/CCNA-0586.png"
 },
 {
  "qid": "CCNA-0587",
  "theme": "routing",
  "type": "single",
  "question": "WAN回線が設置されるまでの間、192.168.1.1を持つローカル ブロードバンドモデム を一時的に使用するようにデフォルトルートを設定する必要があります。WAN回線は、インターネット上の2つの別々の自律システム間でネットワークプレフィックスを交換する外部ルーティングプロトコルを使用します。ISPはデフォルトルートのみを受信します。新しいWAN回線が設置されたときに優先されるようにするには、どの設定を適用しますか？",
  "choices": [
   "A. ip route 0.0.0.0 0.0.0.0 192.168.1.1",
   "B. ip route 0.0.0.0 0.0.0.0 192.168.1.1 25",
   "C. ip route 0.0.0.0 0.0.0.0 192.168.1.1 track 1",
   "D. ip route 0.0.0.0 0.0.0.0 192.168.1.1 20"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0588",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "境界ルータに静的ルートが実装されました。境界ルータから172.16.153.154に送信されたpingのネクストホップIPアドレスは何ですか。",
  "choices": [
   "A. 10.35.47.17",
   "B. 10.65.34.19",
   "C. 10.12.13.14",
   "D. 10.56.22.23"
  ],
  "figure": "data/figures/CCNA-0588.png"
 },
 {
  "qid": "CCNA-0589",
  "theme": "routing",
  "type": "multiple",
  "question": "エンジニアがフローティング スタティック ルートを構成する 2 つの理由は何ですか。(2つ選択)",
  "choices": [
   "A. 動的ルーティング プロトコルが失敗した場合にフォールバック静的ルーティングを有効にする",
   "B. パケットの送信元 IP に基づいて異なる方法でトラフィックをルーティングする",
   "C. プライマリ パスがダウンしたときにトラフィックをセカンダリ パスに自動的にルーティングする",
   "D. 静的ルーティングによる負荷分散をサポートする",
   "E. ルーターから送信されるトラフィックのリターン パスを制御する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0590",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "上記を参照してください。CPE で新しい静的ルートを構成した後、エンジニアは次の一連のコマンドを入力して、新しい構成が正常に動作していることを確認しました。静的デフォルト ルートはいつルーティング テーブルにインストールされますか。",
  "choices": [
   "A. 203.0.113.1 へのルートが BGP 経由で学習された場合",
   "B. 203.0.113.1 がネクストホップとして到達できなくなった場合",
   "C. 外部 BGP 経由で学習したデフォルト ルートが無効になった場合",
   "D. 外部 BGP 経由で学習したデフォルト ルートがネクスト ホップを変更する場合"
  ],
  "figure": "data/figures/CCNA-0590.png"
 },
 {
  "qid": "CCNA-0591",
  "theme": "routing",
  "type": "single",
  "question": "エンジニアは、10.200.0.2 のバックアップ ルータへのフローティング スタティック デフォルト ルートを使用してコア ルータを設定する必要があります。どのコマンドが要件を満たしますか。",
  "choices": [
   "A. ip route 0.0.0.0 0.0.0.0 10.200.0.2 1",
   "B. ip route 0.0.0.0 0.0.0.0 10.200.0.2 10",
   "C. ip route 0.0.0.0 0.0.0.0 10.200.0.2",
   "D. ip route 0.0.0.0 0.0.0.0 10.200.0.2 floating"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0592",
  "theme": "routing",
  "type": "single",
  "question": "スタティックルートの設定において、「ip route 0.0.0.0 0.0.0.0 192.168.1.1」が意味するものはどれか。",
  "choices": [
   "A. 接続されたネットワークのルート",
   "B. 192.168.1.0/24ネットワークへのホストルート",
   "C. デフォルトルート（ネクストホップ192.168.1.1）",
   "D. ループバックインターフェースへのルート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0593",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ネットワーク管理者は、本社へのインターネット アクセスを提供するように CPE を構成します。冗長性を確保するには、ISP1 と ISP2 を介してトラフィックの負荷を分散する必要があります。\nCPE ルーターで設定する必要がある 2 つのコマンド セットはどれですか?",
  "choices": [
   "A. ip route 0.0.0.0 0.0.0.0 198.51.100.1 255\nip route 0.0.0.0 0.0.0.0 203.0.113.1 255\nip route 128.0.0.0 128.0.0.0 203.0.113.1",
   "B. ip route 0.0.0.0 128.0.0.0 198.51.100.1\nip route 128.0.0.0 128.0.0.0 203.0.113.1\nip route 0.0.0.0 0.0.0.0 198.51.100.1\nip route 0.0.0.0 0.0.0.0 203.0.113.1",
   "C. ip route 0.0.0.0 0.0.0.0 198.51.100.1\nip route 0.0.0.0 0.0.0.0 203.0.113.1",
   "D. ip route 0.0.0.0 128.0.0.0 198.51.100.1\nip route 128.0.0.0 128.0.0.0 203.0.113.1",
   "E. ip route 0.0.0.0 0.0.0.0 198.51.100.1\nip route 0.0.0.0 0.0.0.0 203.0.113.1 2"
  ],
  "figure": "data/figures/CCNA-0593.png"
 },
 {
  "qid": "CCNA-0594",
  "theme": "routing",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルータ R1 は構成中です。ルーター R2 および R3 は、新しい環境用に正しく構成されています。 PC1 が 10.10.10.0/24 ネットワーク上のすべての PC と通信するには、R1 で設定する必要がある 2 つのコマンドはどれですか?",
  "choices": [
   "A. ip route 10.10.10.0 255.255.255.0 192.168.2.3\nip route 10.10.10.10 255.255.255.255 192.168.2.2",
   "B. ip route 10.10.10.0 255.255.255.0 192.168.2.2\nip route 10.10.2.2 255.255.255.255 10.10.10.10",
   "C. ip route 10.10.10.0 255.255.255.0 192.168.2.3\nip route 10.10.10.8 255.255.255.252 g0/0",
   "D. ip route 10.10.10.0 255.255.255.248 192.168.2.2\nip route 10.10.2.8 255.255.255.252 g0/1"
  ],
  "figure": "data/figures/CCNA-0594.png"
 },
 {
  "qid": "CCNA-0595",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "ネットワーク上の代替ルータとしてR2 を設定しています。初期設定を適用した後、R2 が R1 をネイバーとして表示できなかったことが判明しました。OSPF 設定を完了し、R1 とのネイバー関係を確立できるようにするには、R2 にどの設定を適用しますか。",
  "choices": [
   "A. R2(config)#interface g0/0/0\nR2(config-if)#ip ospf hello-interval 15\nR2(config-if)#ip ospf dead-interval 20",
   "B. R2(config)#router ospf 1\nR2(config-router)#router-id 192.168.1.2",
   "C. R2(config)#router ospf 1\nR2(config-router)#network 192.168.1.0 255.255.255.0 area 2\nR2(config-router)#network 10.1.1.0 255.255.255.255 area 2",
   "D. R2(config)#interface g0/0/0\nR2(config-if)#ip ospf dead-interval 20"
  ],
  "figure": "data/figures/CCNA-0595.png"
 },
 {
  "qid": "CCNA-0596",
  "theme": "ospf",
  "type": "single",
  "question": "ファーストホップ冗長プロトコルの実装により、ネットワーク上で何が保護されますか。",
  "choices": [
   "A. BGPネイバーフラッピング",
   "B. デフォルトゲートウェイ障害",
   "C. ルートブリッジ損失",
   "D. スパニングツリーループ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0597",
  "theme": "ospf",
  "type": "single",
  "question": "Cisco のエンジニアは、2 つの OSPF ネイバーがクロスオーバー イーサネット ケーブルを使用して接続されていることに気付きました。ネイバーが完全に隣接状態になるまでに時間がかかりすぎています。隣接状態が FULL 状態になるまでの時間を短縮するには、各ルータのインターフェイス設定でどのコマンドを発行しますか。",
  "choices": [
   "A. ip ospf priority 0",
   "B. ip ospf network broadcast",
   "C. ip ospf dead-interval 40",
   "D. ip ospf network point-to-point"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0598",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "R2 が R1 をネイバーとして表示できなかったことが判明しました。R2 にどの設定を適用しますか。",
  "choices": [
   "A. R2(config)#interface g0/0/0\nR2(config-if)#ip ospf hello-interval 10",
   "B. R2(config)#router ospf 1\nR2(config-router)#router-id 192.168.1.2",
   "C. R2(config)#router ospf 1\nR2(config-router)#network 192.168.1.0 255.255.255.0 area 2",
   "D. R2(config)#interface g0/0/0\nR2(config-if)#ip ospf dead-interval 40"
  ],
  "figure": "data/figures/CCNA-0598.png"
 },
 {
  "qid": "CCNA-0599",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "直接接続された 2 台のルータの設定を開始しました。2 台のルータが OSPF ネイバーになるように、R2 でどのコマンド シーケンスを設定しますか。",
  "choices": [
   "A. interface GigabitEthernet0/1\nip ospf 1 area 0",
   "B. interface GigabitEthernet0/1\nip ospf 1 area 1",
   "C. router ospf 1\nnetwork 192.168.12.0 0.0.0.127 area 0",
   "D. router ospf 1\nnetwork 192.168.12.1 0.0.0.0 area"
  ],
  "figure": "data/figures/CCNA-0599.png"
 },
 {
  "qid": "CCNA-0600",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "R2 が R1 をネイバーとして表示できなかったことが判明しました。OSPF 設定を完了し、R1 とのネイバー関係を確立できるようにするには、R2 にどの設定を適用しますか。",
  "choices": [
   "A. R2(config)#interface g0/0/0\nR2(config-if)#ip ospf hello-interval 10",
   "B. R2(config)#router ospf 1\nR2(config-router)#router-id 192.168.1.1",
   "C. R2(config)#router ospf 1\nR2(config-router)#network 192.168.1.0 255.255.255.0 area 2",
   "D. R2(config)#interface g0/0/0\nR2(config-if)#ip ospf dead-interval 45"
  ],
  "figure": "data/figures/CCNA-0600.png"
 },
 {
  "qid": "CCNA-0601",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "すべてのインターフェースは、duplex auto および ip ospf network broadcast で設定されています。どの設定により、R14 と R86 が OSPFv2 隣接関係を形成し、ルータ間で OSPF 情報を交換するための中心点として機能できるようになりますか。",
  "choices": [
   "A. R14#\ninterface FastEthernet0/0\nip address 10.73.65.65 255.255.255.252\nip ospf priority 0\nip mtu 1500\n\nrouter ospf 10\nrouter-id 10.10.1.14\nnetwork 10.10.1.14 0.0.0.0 area 0\nnetwork 10.73.65.64 0.0.0.3 area 0\n\nR86#\ninterface FastEthernet0/0\nip address 10.73.65.66 255.255.255.252\nip mtu 1500\n\nrouter ospf 10\nrouter-id 10.10.1.86\nnetwork 10.10.1.86 0.0.0.0 area 0\nnetwork 10.73.65.64 0.0.0.3 area 0",
   "B. R14#\ninterface Loopback0\nip ospf 10 area 0\n\ninterface FastEthernet0/0\nip address 10.73.65.65 255.255.255.252\nip ospf priority 255\nip ospf 10 area 0\nip mtu 1500\n\nrouter ospf 10\nrouter-id 10.10.1.14\n\nR86#\ninterface Loopback0\nip ospf 10 area 0\n\ninterface FastEthernet0/0\nip address 10.73.65.66 255.255.255.252\nip ospf 10 area 0\nip mtu 1500\n\nrouter ospf 10\nrouter-id 10.10.1.86"
  ],
  "figure": "data/figures/CCNA-0601.png"
 },
 {
  "qid": "CCNA-0602",
  "theme": "ospf",
  "type": "single",
  "question": "P2P Blocking Action オプションは 無効になっています。キャンパス内をクライアントが移動するときに、各クライアントが割り当てられた IP アドレスを保持するための設定はどれですか？",
  "choices": [
   "A. P2P Blocking ActionオプションをForward-Up Streamに設定する",
   "B. Static IP Tunneling オプションを有効にする",
   "C. DHCP Addr. Assignment チェックボックスをオンにする",
   "D. Coverage Hole Detection オプションを無効にする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0603",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "ルータOldR は、R2 とルートを交換する目的で、ネットワーク上の別のルータを置き換えています。エンジニアが最初の OSPF 設定を適用した後も、両方のデバイスでルートがまだ見つかりませんでした。ネイバー関係を有効にするために、clear IP ospf processコマンドを入力する前に、どのコマンドを発行しますか。",
  "choices": [
   "A. OldR(config)#router ospf 1\nOldR(config-router)#no router-id 192.168.1.1",
   "B. OldR(config)#interface g0/0/0\nOldR(config-if)#ip ospf dead-interval 15",
   "C. OldR(config)#interface g0/0/0\nOldR(config-if)#ip ospf hello-interval 15",
   "D. OldR(config)#router ospf 1\nOldR(config-router)# network 192.168.1.0 255.255.255.0 area 2"
  ],
  "figure": "data/figures/CCNA-0603.png"
 },
 {
  "qid": "CCNA-0604",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "ネットワーク 10.120.10.0/24 をインストールしました。このネットワークを OSPF ルーティング テーブルに追加するには、R14 ルータにどの設定を適用しますか。",
  "choices": [
   "A. router ospf 100\nnetwork 10.120.10.0 0.0.0.255 area 0",
   "B. router ospf 100 area 0\nnetwork 10.120.10.0 0.0.0.255",
   "C. router ospf 120\nnetwork 10.120.10.0 255.255.255.0 area 0\nip route 10.120.10.0 255.255.255.0 fa0/1",
   "D. router ospf 100\nnetwork 10.120.10.0 255.255.255.0 area 0"
  ],
  "figure": "data/figures/CCNA-0604.png"
 },
 {
  "qid": "CCNA-0605",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "すべてのデバイスが同時に起動したときに、どのルータが DR となりますか。",
  "choices": [
   "A. R1",
   "B. R2",
   "C. R3",
   "D. R4"
  ],
  "figure": "data/figures/CCNA-0605.png"
 },
 {
  "qid": "CCNA-0606",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "すべてのルーターの基準帯域幅が100Gbの場合、ルーターYはネットワーク192.168.1.0/24に到達するためにどのパスを使用しますか。",
  "choices": [
   "A. C > D > A > F",
   "B. E > B > F",
   "C. E > F",
   "D. C > D > A > B > F"
  ],
  "figure": "data/figures/CCNA-0606.png"
 },
 {
  "qid": "CCNA-0607",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "R3のループバックIPは、R1の2つのインターフェースを介して学習されました。R1は10Gbpsの参照帯域幅に設定されています。メトリック計算に基づいて、どのネクストホップIPが送信ルーティングに使用されますか？",
  "choices": [
   "A. 10.12.0.5",
   "B. 10.12.0.2",
   "C. 10.12.0.1",
   "D. 10.12.0.6"
  ],
  "figure": "data/figures/CCNA-0607.png"
 },
 {
  "qid": "CCNA-0608",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "OSPFネイバー ルータA、B、C、Dは 10.227.150.160/27 へのルートを送信しています。現在のルートが利用できなくなった場合、ルータYは10.227.150.160/27へのトラフィックをルーティングするためにどのコストを使用しますか？",
  "choices": [
   "A. Cost 20",
   "B. Cost 30",
   "C. Cost 40",
   "D. Cost 50"
  ],
  "figure": "data/figures/CCNA-0608.png"
 },
 {
  "qid": "CCNA-0609",
  "theme": "ospf",
  "type": "multiple",
  "question": "OSPFV2 が動作できるようにするには、アクティブなインターフェイスで設定する必要がある 2 つの最小パラメータはどれですか。(2つ選択)",
  "choices": [
   "A. OSPF プロセス ID",
   "B. OSPF MD5 認証キー",
   "C. OSPF スタブ フラグ",
   "D. IPv6 アドレス",
   "E. OSPFエリア"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0610",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "上記を参照してください。ルーター R1 は OSPF ルーター ID として何を使用しますか。",
  "choices": [
   "A. 10.10.1.10",
   "B. 10.10.10.20",
   "C. 172.16.15.10",
   "D. 192.168.0.1"
  ],
  "figure": "data/figures/CCNA-0610.png"
 },
 {
  "qid": "CCNA-0611",
  "theme": "ospf",
  "type": "single",
  "question": "ネットワーク管理者は、64 ビット アドレス 2001:0EB8:00C1:2200:0001:0000:0000:0331/64 を使用して、新しい IPv6 ネットワークを設定しています。構成を簡素化するために、管理者はアドレスを圧縮することにしました。管理者はどの IP アドレスを設定する必要がありますか。",
  "choices": [
   "A. ipv6 address 2001:EB8:C1:22:1::331/64",
   "B. ipv6 address 21:EB8:C1:2200:1::331/64",
   "C. ipv6 address 2001:EB8:C1:2200:1:0000:331/64",
   "D. ipv6 address 2001:EB8:C1:2200:1::331/64"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0612",
  "theme": "ospf",
  "type": "multiple",
  "question": "OSPF Hello プロトコルは次のタスクのうちどれを実行しますか。(2つ選択)",
  "choices": [
   "A. 動的な近隣探索を提供する。",
   "B. 到達不能な近隣ノードを 90 秒間隔で検出する。",
   "C. 近隣関係を維持する。",
   "D. 隣接するインターフェイス間で正確性パラメータをネゴシエートする。",
   "E. タイマーを使用して、最速のリンクを持つルーターを指定ルーターとして選択する。",
   "F. OSPF を実行しているすべてのルーターを検出するために、インターネットワーク全体に hello パケットをブロードキャストする。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0613",
  "theme": "ospf",
  "type": "single",
  "question": "ユーザーが OSPF を設定し、OSPF でギガビット イーサネット インターフェイスをアドバタイズしました。デフォルトでは、このインターフェイスはどのタイプの OSPF ネットワークに属しますか。",
  "choices": [
   "A. ポイントツーマルチポイント",
   "B. ポイントツーポイント",
   "C. ブロードキャスト",
   "D. 非ブロードキャスト"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0614",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "上記を参照してください。設定が適用された後、2 つのルーターは OSPF ネイバー関係を確立できません。問題の理由は何ですか。",
  "choices": [
   "A. OSPF プロセス ID が一致しない",
   "B. Router1 のネットワーク ステートメントが正しく構成されていない",
   "C. Router2 はデフォルトの hello タイマーを使用している",
   "D. OSPF ルーター ID が一致しない"
  ],
  "figure": "data/figures/CCNA-0614.png"
 },
 {
  "qid": "CCNA-0615",
  "theme": "ospf",
  "type": "single",
  "question": "ネットワーク攻撃が、ターゲットのハーフオープン TCP リソースが使い果たされるまでポートに複数のパケットを送信することによってターゲット サーバーを圧倒する場合、どのタイプの攻撃ですか。",
  "choices": [
   "A. SYN フラッド攻撃",
   "B. リフレクション攻撃",
   "C. Teardrop攻撃",
   "D. 増幅攻撃"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0616",
  "theme": "ospf",
  "type": "single",
  "question": "First Hop Redundancy Protocol（FHRP）の例として誤っているものはどれか。",
  "choices": [
   "A. STP",
   "B. LACP",
   "C. OSPF",
   "D. HSRP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0617",
  "theme": "ospf",
  "type": "single",
  "question": "次の中から、oSPFのルーターIDの選出において、最も優先されるものはどれか。",
  "choices": [
   "A. router-idコマンドで手動設定した値",
   "B. 最大の物理インターフェースのIPアドレス",
   "C. OSPFプロセスID",
   "D. 最大のループバックインターフェースのIPアドレス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0618",
  "theme": "ospf",
  "type": "single",
  "question": "OSPFのマルチエリア構成において、すべてのエリアが接続される必要があるエリアはどれか。",
  "choices": [
   "A. スタブエリア",
   "B. エリア0（バックボーンエリア）",
   "C. エリア1",
   "D. NSSA"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0619",
  "theme": "ospf",
  "type": "single",
  "question": "OSPFのネイバー関係がFull状態になる前に通過するステートとして正しい順序はどれか。",
  "choices": [
   "A. Init → Down → 2-Way → Exchange → Loading → Full",
   "B. Down → Init → 2-Way → ExStart → Exchange → Loading → Full",
   "C. Down → 2-Way → Init → Exchange → ExStart → Loading → Full",
   "D. Down → Init → Exchange → 2-Way → Loading → Full"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0620",
  "theme": "ospf",
  "type": "single",
  "question": "First Hop Redundancy Protocol（FHRP）の例として適切な説明を1つ選びなさい。",
  "choices": [
   "A. STP",
   "B. OSPF",
   "C. LACP",
   "D. HSRP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0621",
  "theme": "ospf",
  "type": "single",
  "question": "OSPFのDR（指名ルーター）の選出基準として、最も優先されるものはどれか。",
  "choices": [
   "A. 最も高い帯域幅を持つインターフェース",
   "B. ip ospf priorityの値が最も大きいルーター",
   "C. 最も多くのネイバーを持つルーター",
   "D. ルーターIDが最も小さいルーター"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0622",
  "theme": "ospf",
  "type": "single",
  "question": "RIPv2とOSPFの比較として適切な説明を1つ選びなさい。",
  "choices": [
   "A. OSPFはリンクステート型でありRIPv2はディスタンスベクタ型である",
   "B. RIPv2はリンクステート型でありOSPFはディスタンスベクタ型である",
   "C. 両方ともディスタンスベクタ型である",
   "D. 両方ともリンクステート型である"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0623",
  "theme": "ospf",
  "type": "single",
  "question": "OSPFのコストの計算式として誤っているものはどれか。",
  "choices": [
   "A. インターフェース帯域幅 ÷ リファレンス帯域幅",
   "B. リファレンス帯域幅 × インターフェース帯域幅",
   "C. リファレンス帯域幅 ÷ インターフェース帯域幅",
   "D. ホップ数"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0624",
  "theme": "ospf",
  "type": "single",
  "question": "OSPFのコストの計算式として誤っているものはどれか。",
  "choices": [
   "A. ホップ数",
   "B. リファレンス帯域幅 ÷ インターフェース帯域幅",
   "C. リファレンス帯域幅 × インターフェース帯域幅",
   "D. インターフェース帯域幅 ÷ リファレンス帯域幅"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0625",
  "theme": "ospf",
  "type": "single",
  "question": "次の中から、oSPFのコストの計算式として正しいものはどれか。",
  "choices": [
   "A. リファレンス帯域幅 ÷ インターフェース帯域幅",
   "B. インターフェース帯域幅 ÷ リファレンス帯域幅",
   "C. リファレンス帯域幅 × インターフェース帯域幅",
   "D. ホップ数"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0626",
  "theme": "ospf",
  "type": "single",
  "question": "First Hop Redundancy Protocol（FHRP）の例として誤っているものはどれか。",
  "choices": [
   "A. HSRP",
   "B. STP",
   "C. LACP",
   "D. OSPF"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0627",
  "theme": "ospf",
  "type": "single",
  "question": "RIPv2とOSPFの比較として誤っているものはどれか。",
  "choices": [
   "A. RIPv2はリンクステート型でありOSPFはディスタンスベクタ型である",
   "B. OSPFはリンクステート型でありRIPv2はディスタンスベクタ型である",
   "C. 両方ともリンクステート型である",
   "D. 両方ともディスタンスベクタ型である"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0628",
  "theme": "ospf",
  "type": "single",
  "question": "RIPv2とOSPFの比較として誤っているものはどれか。",
  "choices": [
   "A. 両方ともディスタンスベクタ型である",
   "B. 両方ともリンクステート型である",
   "C. OSPFはリンクステート型でありRIPv2はディスタンスベクタ型である",
   "D. RIPv2はリンクステート型でありOSPFはディスタンスベクタ型である"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0629",
  "theme": "ospf",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ネットワーク エンジニアが新しい OSPF ネットワークの設定を確認しています。特に指示がない限り、すべての OSPF 設定ではデフォルト値が使用されます。エンジニアは、すべてのデバイスが同時に起動した場合に、どのルーターが DR として選出されると予想していますか?",
  "choices": [
   "A. R1",
   "B. R2",
   "C. R3",
   "D. R4"
  ],
  "figure": "data/figures/CCNA-0629.png"
 },
 {
  "qid": "CCNA-0630",
  "theme": "fhrp",
  "type": "single",
  "question": "HSRPでルータによって共有され、サブネット上のホストによってデフォルト ゲートウェイ アドレスとして使用されるアドレスのタイプはどれですか。",
  "choices": [
   "A. マルチキャストアドレス",
   "B. ループバック IP アドレス",
   "C. 仮想 IP アドレス",
   "D. ブロードキャストアドレス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0631",
  "theme": "fhrp",
  "type": "single",
  "question": "Cisco とサードパーティの両方のネットワーク デバイスを含む新しいネットワークを展開する場合、デフォルト ゲートウェイ ルータに障害が発生した場合にネットワーク トラフィックの中断を回避する冗長プロトコルはどれですか。",
  "choices": [
   "A. FHRP",
   "B. VRRP",
   "C. HSRP",
   "D. GLBP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0632",
  "theme": "fhrp",
  "type": "single",
  "question": "マルチベンダー環境で新しいサブネットを構成するとき、なぜVRRP を実装しますか。",
  "choices": [
   "A. ゲートウェイへのスパニングツリー転送パスがループフリーであることを保証するため",
   "B. 冗長性のために 2 台以上の Cisco デバイスをサポートするゲートウェイ プロトコルが必要な場合",
   "C. すべてのベンダーと正常に相互運用し、Cisco デバイスに追加のセキュリティ機能を提供するため",
   "D. ホスト ARP キャッシュの変更を必要とせずに、メンバー障害後も通常の操作を続行できるようにするため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0633",
  "theme": "fhrp",
  "type": "single",
  "question": "エッジ デバイスまたはアクセス回線に障害が発生した場合に、トラフィックが即座に、透過的に、自動的に回復することを保証する Cisco 独自のプロトコルはどれですか。",
  "choices": [
   "A. SLB",
   "B. FHRP",
   "C. VRRP",
   "D. HSRP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0634",
  "theme": "fhrp",
  "type": "single",
  "question": "ファーストホップ冗長プロトコルが実装されるのはなぜですか。",
  "choices": [
   "A. デフォルトゲートウェイの障害から保護するため",
   "B. ネットワーク内のループを防ぐため",
   "C. 複数のスイッチを単一のユニットとして動作できるようにするため",
   "D. マルチリンクセグメントの負荷分散を提供するため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0635",
  "theme": "fhrp",
  "type": "multiple",
  "question": "HSRP の 2つの目的は何ですか。(2つ選択)",
  "choices": [
   "A. 2台以上のルーターをグループ化し、1台の仮想ルーターとして動作させます",
   "B. 冗長ゲートウェイを提供することで、ネットワークの可用性を向上させます",
   "C. TCP/IPネットワーク内のホストにコンフィグレーション情報を渡します",
   "D. ネットワーク上のホストが、デフォルトゲートウェイのないリモートサブネットに到達するのを助ける",
   "E. ディスクレスクライアントがブート時にIPパラメータを自動設定するメカニズムを提供する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0636",
  "theme": "fhrp",
  "type": "multiple",
  "question": "LAN ネットワーク内で VRRP によって提供される 2つの機能は何ですか。(2つ選択)",
  "choices": [
   "A. 負荷分散",
   "B. 帯域幅最適化",
   "C. 動的ルーティング更新",
   "D. 冗長性",
   "E. きめ細かい QoS"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0637",
  "theme": "fhrp",
  "type": "single",
  "question": "VRRP はどのタイプのプロトコルですか。",
  "choices": [
   "A. 動的 IP アドレス割り当てを使用する",
   "B. ルータ間通信に宛先 IP アドレス 224.0.0.102 を使用する",
   "C. シスコ独自のファースト ホップ冗長プロトコルを使用する",
   "D. 2 台以上のルータがデフォルト ゲートウェイとして動作できるようにする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0638",
  "theme": "fhrp",
  "type": "single",
  "question": "ネットワーク管理者がHSRPを実装する理由はなぜですか。",
  "choices": [
   "A. ルーターの故障時にネットワークの冗長性を確保するため",
   "B. Ciscoとサードパーティのルーターで設定可能なオープン標準プロトコルを使用するため",
   "C. ネットワーク内のホストがトラフィックのロードバランシング時に同じデフォルトゲートウェイの仮想IPを使用できるようにするため",
   "D. クライアントに複数のデフォルトゲートウェイIPを設定できるようにするため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0639",
  "theme": "fhrp",
  "type": "single",
  "question": "HSRPの機能は何ですか？",
  "choices": [
   "A. ルータの冗長性と、ルータ障害時の経路再収束を提供します。",
   "B. アクティブルータの切り替え時に、クライアントのARPキャッシュを更新するためにGratuitous ARPを使用します。",
   "C. ルータ障害時のフェイルオーバーを提供するには、アクティブルートとスタンバイルートが必要です。",
   "D. LAN上のゲートウェイ冗長性を提供するために、仮想MACアドレスを使用します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0640",
  "theme": "fhrp",
  "type": "single",
  "question": "ネットワークにHSRPを実装する理由は何ですか？",
  "choices": [
   "A. LAN内のユーザートラフィックがエッジルーティングデバイスの障害から迅速に回復することを保証するため",
   "B. LANネットワーク内の複数のゲートウェイ間で負荷分散を提供するため",
   "C. LANネットワーク内のエッジルーティングデバイスの転送能力に基づいてトラフィックを最適にルーティングするため",
   "D. LANネットワーク内のデフォルトゲートウェイに最も近いホップを識別するため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0641",
  "theme": "fhrp",
  "type": "multiple",
  "question": "FHRP の 2 つの利点は何ですか。(2つ選択)",
  "choices": [
   "A. 暗号化されたトラフィックが許可される",
   "B. レイヤ 2 ネットワークでのループを防止する。",
   "C. 複数のポートをバンドルして帯域幅を増やすことができる",
   "D. デフォルト ゲートウェイの自動フェイルオーバーを有効にする",
   "E. 複数のデバイスがネットワーク内のクライアントに対する単一の仮想ゲートウェイとして機能できるようにする。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0642",
  "theme": "fhrp",
  "type": "single",
  "question": "VRRPで仮想アドレスとして使用されるMACアドレスとは何ですか。",
  "choices": [
   "A. 00-05-42-38-53-31",
   "B. 00-00-5E-00-01-0a",
   "C. 00-00-0C-07-AD-89",
   "D. 00-07-C0-70-AB-01"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0643",
  "theme": "fhrp",
  "type": "single",
  "question": "VRRP とはどのタイプのプロトコルですか?",
  "choices": [
   "A. 2 つ以上のルーターがデフォルト ゲートウェイとして機能することを許可します 。",
   "B. シスコ独自のファーストホップ冗長プロトコルを使用する",
   "C. ルーター間の通信に宛先 IP アドレス 224.0.0.102 を使用する",
   "D. 動的 IP アドレス割り当てを使用する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0644",
  "theme": "ip-services",
  "type": "exhibit_choice",
  "question": "以下のNAT構成を完成させるための手順はどれか。",
  "choices": [
   "A. NATプールと重複する静的NATエントリを再設定する",
   "B. NAT外部インターフェイスを設定する",
   "C. e0/1の内部ネットワークのアクセスリストを変更する",
   "D. ACLをプール設定に適用する"
  ],
  "figure": "data/figures/CCNA-0644.png"
 },
 {
  "qid": "CCNA-0645",
  "theme": "ip-services",
  "type": "single",
  "question": "エンジニアはPC1のIPアドレスを10.199.77.100に変換し、PC1がR2のループバック0インターフェイスにpingを打つことを許可しなければなりません。どのコマンドセットを使用しますか。",
  "choices": [],
  "figure": "data/figures/CCNA-0645.png"
 },
 {
  "qid": "CCNA-0646",
  "theme": "ip-services",
  "type": "exhibit_choice",
  "question": "HQC では、以下の構成を使用する必要があります。\n* 最大 150,000 件の同時接続を処理できる\n* パブリック IP アドレスの消費を最小限に抑える\nどの構成が要件を満たしていますか？",
  "choices": [
   "A. ip nat pool NATPOOL 209.165.201.1 209.165.201.5 netmask 255.255.255.248\nip nat inside source list HQC interface gigabitEthernet0/0 overload",
   "B. ip nat pool NATPOOL 209.165.200.225 209.165.200.226 netmask 255.255.255.252\nip nat outside source list HQC pool NATPOOL overload",
   "C. ip nat pool NATPOOL 209.165.201.1 209.165.201.3 netmask 255.255.255.248\nip nat inside source list HQC pool NATPOOL overload",
   "D. ip nat pool NATPOOL 209.165.201.1 209.165.201.248 netmask 255.255.255.248\nip nat outside source list HQC pool NATPOOL overload"
  ],
  "figure": "data/figures/CCNA-0646.png"
 },
 {
  "qid": "CCNA-0647",
  "theme": "ip-services",
  "type": "exhibit_choice",
  "question": "上記を参照してください。この構成によって、どの機能が有効になりますか。",
  "choices": [
   "A. 静的 NAT 変換",
   "B. DHCP プール",
   "C. 動的 NAT アドレス プール",
   "D. PAT"
  ],
  "figure": "data/figures/CCNA-0647.png"
 },
 {
  "qid": "CCNA-0648",
  "theme": "ip-services",
  "type": "single",
  "question": "PAT（Port Address Translation）の特徴として適切な説明を1つ選びなさい。",
  "choices": [
   "A. IPアドレスの変換を行わずポート番号のみ変換する",
   "B. 外部から内部へのアクセスのみを許可する",
   "C. 内部ホストごとに1つのパブリックIPアドレスを割り当てる",
   "D. 1つのパブリックIPアドレスを複数の内部ホストで共有し、ポート番号で識別する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0649",
  "theme": "ip-services",
  "type": "single",
  "question": "NAT（Network Address Translation）において、内部ローカルアドレスの説明として適切な説明を1つ選びなさい。",
  "choices": [
   "A. 外部ネットワーク上のIPアドレス",
   "B. 変換前の内部ネットワーク上のプライベートIPアドレス",
   "C. 変換後のグローバルIPアドレス",
   "D. NATデバイス自体のIPアドレス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0650",
  "theme": "ip-services",
  "type": "single",
  "question": "NAT（Network Address Translation）において、内部ローカルアドレスの説明として誤っているものはどれか。",
  "choices": [
   "A. 外部ネットワーク上のIPアドレス",
   "B. 変換前の内部ネットワーク上のプライベートIPアドレス",
   "C. 変換後のグローバルIPアドレス",
   "D. NATデバイス自体のIPアドレス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0651",
  "theme": "ip-services",
  "type": "single",
  "question": "ブランチオフィスで新しいルーターを設定します。ルーターは、ブランチが本社と通信できるようにする上流の WAN ネットワークに接続されています。172.24.54.8 の中央タイムサーバーは、本社のファイアウォールの背後にあります。新しいルーターのソフトウェアクロックがタイムサーバーと同期するために、エンジニアはどのコマンドを設定しますか。",
  "choices": [
   "A. ntp client 172.24.54.8",
   "B. ntp master 172.24.54.8",
   "C. ntp peer 172.24.54.8",
   "D. ntp server 172.24.54.8"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0652",
  "theme": "ip-services",
  "type": "exhibit_choice",
  "question": "AccessSw1のNTP設定を新しいスイッチに複製する必要があります。新しいスイッチに設定を複製するには、どのコマンドを実行する必要がありますか？",
  "choices": [
   "A. ntp server 2001:db8:12::1",
   "B. ntp master 3",
   "C. ntp master",
   "D. ntp server 127.127.1.1"
  ],
  "figure": "data/figures/CCNA-0652.png"
 },
 {
  "qid": "CCNA-0653",
  "theme": "ip-services",
  "type": "single",
  "question": "デバイスをNTPサーバーとして設定する際に入力する必要があるコマンドはどれですか。",
  "choices": [
   "A. ntp peer",
   "B. ntp master",
   "C. ntp authenticate",
   "D. ntp server"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0654",
  "theme": "ip-services",
  "type": "single",
  "question": "IP SLA が UDP ジッターを測定するには、どの機能またはプロトコルが必要ですか。",
  "choices": [
   "A. LLDP",
   "B. EEM",
   "C. CDP",
   "D. NTP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0655",
  "theme": "ip-services",
  "type": "single",
  "question": "NTPの主な目的はどれか。",
  "choices": [
   "A. ネットワークデバイス間の時刻を同期する",
   "B. IPアドレスを動的に割り当てる",
   "C. ルーティングテーブルを交換する",
   "D. ネットワークトラフィックを監視する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0656",
  "theme": "ip-services",
  "type": "drag_drop",
  "question": "[DNSコマンド]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "不完全なホスト名にドメイン名を補完します",
    "DNS サーバーの IP アドレスを指定します",
    "ホストから IP アドレスへの変換を有効にします",
    "アドレスマッピング情報を表示します",
    "ホストテーブルにエントリを追加します"
   ],
   "targets": [
    {
     "label": "ip domain lookup",
     "slots": 1
    },
    {
     "label": "ip host switch_1 192.168.0.1",
     "slots": 1
    },
    {
     "label": "show hosts",
     "slots": 1
    },
    {
     "label": "ip name-server",
     "slots": 1
    },
    {
     "label": "ip domain name",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0657",
  "theme": "ip-services",
  "type": "multiple",
  "question": "ドメイン名から IP アドレスへの解決をサポートするサーバー タイプはどれですか (2つ選択)",
  "choices": [
   "A. ESXホスト",
   "B. Web",
   "C. リゾルバ",
   "D. 権威",
   "E. ファイル転送"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0658",
  "theme": "ip-services",
  "type": "drag_drop",
  "question": "DNS ルックアップ コマンドを左側から右側の関数にドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ip dns server",
    "ip domain list",
    "ip domain lookup source-interface",
    "ip domain name",
    "ip host",
    "ip name-server"
   ],
   "targets": [
    {
     "label": "個々のインターフェースでDNSルックアップを有効にする",
     "slots": 1
    },
    {
     "label": "デバイス上のDNSサーバーを有効にする",
     "slots": 1
    },
    {
     "label": "検索サービスを提供するDNSサーバーを識別します",
     "slots": 1
    },
    {
     "label": "一連のドメイン名を指定します",
     "slots": 1
    },
    {
     "label": "修飾されていないホスト名に追加するデフォルトのドメインを指定します",
     "slots": 1
    },
    {
     "label": "IPアドレスをホスト名に静的にマッピングする",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0659",
  "theme": "ip-services",
  "type": "single",
  "question": "DHCPプールが作成されました。プールは 192.168.20.0/24 を使用しており、DHCP クライアントのデフォルトゲートウェイとして、使用可能な最後から2番目の IP アドレスを使用する必要があります。",
  "choices": [
   "A. default-router 192.168.20.253",
   "B. network 192.168.20.254 255.255.255.0 secondary",
   "C. ip default-gateway 0.0.0.0 0.0.0.0 192.168.20.253",
   "D. next-server 192.168.20.254"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0660",
  "theme": "ip-services",
  "type": "multiple",
  "question": "ネットワークに DHCP を実装する 2つの理由は何ですか。 (2つ選択)",
  "choices": [
   "A. ネットワークデバイス上の IP アドレスを手動で制御および構成する",
   "B. クライアントの IP アドレス範囲を管理する管理時間を短縮する",
   "C. ネットワークデバイスによる IP アドレスの使用時間を制御する",
   "D. IP アドレスに到達するための最適なパスを動的に制御する",
   "E. IP アドレスではなく名前で Web サイトにアクセスする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0661",
  "theme": "ip-services",
  "type": "single",
  "question": "ドメイン名解決プロセスにおいて、反復DNSクエリはどの機能を果たしますか。",
  "choices": [
   "A. DNSクライアントとサーバー間の通信を自動的に暗号化する。",
   "B. 正しい情報が見つかるまで、DNSクライアントが複数のDNSサーバーに問い合わせることを許可する。",
   "C. スコープ内に設定されているすべてのルートDNSサーバーから直接情報を取得する。",
   "D. 複数のDNSサーバーで同時にレコードを動的に更新する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0662",
  "theme": "ip-services",
  "type": "single",
  "question": "DNSにおける有効なIPv6アドレスレコードとは何ですか？",
  "choices": [
   "A. A",
   "B. MX",
   "C. AAAA",
   "D. CNAME"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0663",
  "theme": "ip-services",
  "type": "single",
  "question": "CNAME レコードの目的は何ですか。",
  "choices": [
   "A. エイリアスを正規のドメイン名に関連付ける",
   "B. ドメイン名を IP アドレスにマッピングする",
   "C. ドメインの権限のあるネームサーバーを識別する",
   "D. 電子メールをメールサーバーに誘導する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0664",
  "theme": "ip-services",
  "type": "single",
  "question": "インターフェイス GigabitEthernet 0/0 が DHCP 経由で設定されていることを示す Cisco IOS コマンドはどれですか。",
  "choices": [
   "A. show ip interface GigabitEthernet 0/0 dhcp",
   "B. show interface GigabitEthernet 0/0",
   "C. show ip interface dhcp",
   "D. show ip interface GigabitEthernet 0/0",
   "E. show ip interface GigabitEthernet 0/0 brief"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0665",
  "theme": "ip-services",
  "type": "single",
  "question": "DHCP サーバーにはどのタイプの情報が存在しますか。",
  "choices": [
   "A. プール内で使用可能な IP アドレスのリスト",
   "B. パブリック IP アドレスとそれに対応する名前のリスト",
   "C. ドメイン内のエンドユーザーのユーザー名とパスワード",
   "D. 静的に割り当てられた MAC アドレスのリスト"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0666",
  "theme": "ip-services",
  "type": "single",
  "question": "アドレスの検索に関して、正確な情報を提供するのは、次のうちどれですか。",
  "choices": [
   "A. 再帰的な DNS 検索",
   "B. オペレーティング システムのキャッシュ",
   "C. ISP ローカル キャッシュ",
   "D. ブラウザのキャッシュ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0667",
  "theme": "ip-services",
  "type": "single",
  "question": "次の中から、dHCPの4段階プロセスの正しい順序はどれか。",
  "choices": [
   "A. Offer → Discover → Acknowledge → Request",
   "B. Request → Offer → Discover → Acknowledge",
   "C. Discover → Offer → Request → Acknowledge",
   "D. Discover → Request → Offer → Acknowledge"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0668",
  "theme": "ip-services",
  "type": "single",
  "question": "次の中から、uDPが使用される代表的なアプリケーションはどれか。",
  "choices": [
   "A. ファイル転送（FTP）",
   "B. メール送信（SMTP）",
   "C. DNS名前解決クエリ",
   "D. Webブラウジング（HTTP）"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0669",
  "theme": "ip-services",
  "type": "drag_drop",
  "question": "標準の DNS ルックアップ操作のステップを左側から右側の順序にドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "DNS はドメイン DNS サーバーに要求を送信します。",
    "DNS はエンドポイントに応答します。",
    "DNS はドメイン DNS サーバーから応答を受信します。",
    "エンドポイントはドメイン名の IP アドレスの要求を送信します。",
    "DNS はルート DNS サーバーに要求を送信します。"
   ],
   "targets": [
    {
     "label": "ステップ1",
     "slots": 1
    },
    {
     "label": "ステップ2",
     "slots": 1
    },
    {
     "label": "ステップ3",
     "slots": 1
    },
    {
     "label": "ステップ4",
     "slots": 1
    },
    {
     "label": "ステップ5",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0670",
  "theme": "ip-services",
  "type": "drag_drop",
  "question": "DNS コマンドを左側から右側の効果にドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "show hosts",
    "ip name-server",
    "ip host switch_1 192.168.0.1",
    "ip domain-name",
    "ip domain-lookup"
   ],
   "targets": [
    {
     "label": "ホストテーブルにエントリを追加します",
     "slots": 1
    },
    {
     "label": "DNSサーバーのFQDNを完了する",
     "slots": 1
    },
    {
     "label": "アドレスマッピング情報を表示します",
     "slots": 1
    },
    {
     "label": "ホストからIPアドレスへの変換を可能にする",
     "slots": 1
    },
    {
     "label": "DNSサーバーのIPアドレスを指定します",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0671",
  "theme": "ip-services",
  "type": "multiple",
  "question": "ドメイン名から IP アドレスへの解決をサポートする 2 つのサーバー タイプはどれですか? (2 つお選びください。)",
  "choices": [
   "A. authoritative",
   "B. web",
   "C. file transfer",
   "D. resolver",
   "E. ESX host"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0672",
  "theme": "ip-services",
  "type": "single",
  "question": "ルーターがデフォルトの DNS ルックアップ設定で構成されており、CLI に URL が入力された場合、ルーターは何をしますか?",
  "choices": [
   "A. コマンドがキャンセルされるまで、継続的に URL の解決を試みます。",
   "B. URL への ping リクエストを開始します。",
   "C. ユーザーに希望の IP アドレスを指定するように求めます。",
   "D. ネットワーク上の DNS サーバーにクエリを試みます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0673",
  "theme": "ip-services",
  "type": "exhibit_choice",
  "question": "DHCP サーバーは、表されるサブネットごとに DHCP プールを使用して構成されます。VLAN 10 上の DHCP クライアントが DHCP サーバーから動的 IP アドレスを受信できるようにするには、スイッチ SW1 でどのコマンドを構成しますか。",
  "choices": [
   "A. SW1(config-if)#ip helper-address 192.168.10.2",
   "B. SW1(config-if)#ip helper-address 192.168.20.1",
   "C. SW1(config-if)#ip helper-address 192.168.20.2",
   "D. SW1(config-if)#ip helper-address 192.168.10.1"
  ],
  "figure": "data/figures/CCNA-0673.png"
 },
 {
  "qid": "CCNA-0674",
  "theme": "ip-services",
  "type": "single",
  "question": "クライアントと DHCP サーバーは異なるサブネット上に存在します。10.10.0.1/24 サブネット上のクライアントと 192.168.10.1 の DHCP サーバーの間で要求と応答を転送するには、どのコマンドを使用しますか。",
  "choices": [
   "A. ip route 192.168.10.1",
   "B. ip helper-address 192.168.10.1",
   "C. ip dhcp address 192.168.10.1",
   "D. ip default-gateway 192.168.10.1"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0675",
  "theme": "ip-services",
  "type": "single",
  "question": "CONTROL という名前の DHCP プールが作成されました。プールは、使用可能な最後の IP アドレスを DHCP クライアントのデフォルト ゲートウェイとして使用します。サーバーは 172.16.32.15 にあります。192.168.52.0/24 サブネット上のクライアントが DHCP サーバーに到達するプロセスの次の手順は何ですか。",
  "choices": [
   "A. ip forward-protocol udp 137",
   "B. ip default-network 192.168.52.253",
   "C. ip default-gateway 192.168.52.253",
   "D. ip helper-address 172.16.32.15"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0676",
  "theme": "ip-services",
  "type": "exhibit_choice",
  "question": "172.20.1.0/24 のコンピュータがDHCPサーバーからIP設定を取得できるように、CPEルーターを設定します。CPEにどの設定を適用しますか。",
  "choices": [
   "A. interface GigabitEthernet0/1\nip helper-address 172.20.255.11",
   "B. interface GigabitEthernet0/0\nip helper-address 172.20.255.1",
   "C. interface GigabitEthernet0/0\nip helper-address 172.20.1.1",
   "D. interface GigabitEthernet0/1\nip helper-address 172.20.254.1"
  ],
  "figure": "data/figures/CCNA-0676.png"
 },
 {
  "qid": "CCNA-0677",
  "theme": "ip-services",
  "type": "single",
  "question": "ルーターに DHCP が設定されている場合にデフォルト ゲートウェイを自動的に配布するには、どのコマンドを入力する必要がありますか。",
  "choices": [
   "A. dns-server",
   "B. default-router",
   "C. ip helper-address",
   "D. default-gateway"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0678",
  "theme": "ip-services",
  "type": "multiple",
  "question": "DHCP リレー エージェントの 2 つの機能は何ですか。(2つ選択)",
  "choices": [
   "A. DNS をローカルに割り当て、要求を DHCP サーバーに転送する。",
   "B. 必要な DHCP サーバーの数を最小限に抑える",
   "C. 個々のレイヤ 3 インターフェイスで 1 つの IP ヘルパー コマンドを許可する。",
   "D. クライアント サブネット上のルーターのレイヤー 3 インターフェイスの下に設定される",
   "E. クライアントのローカル サブネットを決定するために MAC から IP への予約のみを許可する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0679",
  "theme": "ip-services",
  "type": "single",
  "question": "Cisco IOS ルータに設定されている DHCP リレー エージェント アドレスを確認するために使用されるコマンドはどれですか。",
  "choices": [
   "A. show ip interface brief",
   "B. show ip dhcp bindings",
   "C. show ip route",
   "D. show ip interface",
   "E. show interface",
   "F. show ip dhcp pool"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0680",
  "theme": "ip-services",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ルータ R3 上のインターフェイス FastEthernet0/1 に接続されているホストの DHCP アドレッシングを有効にする設定はどれですか?",
  "choices": [
   "A. interface FastEthernet0/1\nip helper-address 10.0.1.1\n!\naccess-list 100 permit tcp host 10.0.1.1 eq 67 host 10.148.2.1",
   "B. interface FastEthernet0/1\nip helper-address 10.0.1.1\n!\naccess-list 100 permit udp host 10.0.1.1 eq 67 host 10.148.2.1",
   "C. interface FastEthernet0/0\nip helper-address 10.0.1.1\n!\naccess-list 100 permit host 10.0.1.1 host 10.148.2.1 eq bootps",
   "D. interface FastEthernet0/1\nip helper-address 10.0.1.1\n!\naccess-list 100 permit udp host 10.0.1.1 eq bootps host 10.148.2.1"
  ],
  "figure": "data/figures/CCNA-0680.png"
 },
 {
  "qid": "CCNA-0681",
  "theme": "ip-services",
  "type": "single",
  "question": "ルーターに DHCP が設定されている場合にデフォルト ゲートウェイを自動的に配布するには、どのコマンドを入力する必要がありますか?",
  "choices": [
   "A. DNS サーバー",
   "B. デフォルトルーター",
   "C. ip ヘルパーアドレス",
   "D. デフォルトゲートウェイ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0682",
  "theme": "ip-services",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。エンジニアはネットワーク上で新しいルーターを構成し、この構成を適用しました。PC が DHCP サーバーから IP アドレスを取得できるようにする追加の構成はどれですか?",
  "choices": [
   "A. インターフェイス Gi0/0 で ip helper-address 172.16.2.2 コマンドを設定します。",
   "B. インターフェイス Gi0/1 で ip dhcp リレー情報コマンドを設定します。",
   "C. インターフェイス Gi0/0 で ip address dhcp コマンドを設定します。",
   "D. ip dhcp Smart-relay コマンドをルータ上でグローバルに設定します。"
  ],
  "figure": "data/figures/CCNA-0682.png"
 },
 {
  "qid": "CCNA-0683",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "SNMPv2で導入された機能のうち、1回のリクエストで大量のデータを取得できるものはどれか。",
  "choices": [
   "A. Get",
   "B. GetNext",
   "C. Set",
   "D. GetBulk",
   "E. Inform"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0684",
  "theme": "monitoring-qos",
  "type": "drag_drop",
  "question": "SNMP コンポーネントを左側から右側の説明にドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "管理対象デバイス",
    "NMS",
    "エージェント",
    "MIB"
   ],
   "targets": [
    {
     "label": "SNMP 経由で状態を問い合わせることができる、一意に識別可能なオブジェクトのコレクション",
     "slots": 1
    },
    {
     "label": "SNMPによるネットワークノード制御",
     "slots": 1
    },
    {
     "label": "監視アプリケーションを実行し、ネットワークノードを制御するシステム",
     "slots": 1
    },
    {
     "label": "デバイスとネットワークのデータをキャプチャして変換するSNMPコンポーネント",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0685",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "SNMPにおけるコミュニティ名の役割は何ですか。",
  "choices": [
   "A. SNMP トラフィック メッセージのシーケンス タグとして機能します。",
   "B. MIB オブジェクトへのアクセスを保護するためのパスワードとして機能します。",
   "C. デバイス アクセスに必要な Active Directory のユーザー名とパスワードを渡します。",
   "D. 英数字の MIB 出力値を数値に変換します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0686",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "ネットワークにおける SNMP の役割は何ですか。",
  "choices": [
   "A. プレゼンテーション層で動作する TCPを使用してネットワーク デバイスと機能を監視する",
   "B. トランスポート層で動作する SSLを使用してネットワーク デバイスから直接データを収集する",
   "C. アプリケーション層で動作する UDPを使用してネットワーク デバイスを監視および管理する",
   "D. ネットワーク層で動作する SSHを使用してネットワーク デバイスからテレメトリと重要な情報を収集する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0687",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "組織がネットワーク パフォーマンスを検証し、問題をトラブルシューティングし、エージェントを使用して監視ツールとエンド デバイス間で通信する必要がある場合、どのプロトコルが実装されますか。",
  "choices": [
   "A. FTP",
   "B. NTP",
   "C. NFS",
   "D. SNMP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0688",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "どのSNMPメッセージタイプが信頼性が高く、SNMPマネージャーからの確認応答に先行しますか。",
  "choices": [
   "A. Inform",
   "B. Get",
   "C. Traps",
   "D. Set"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0689",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "SNMPトラップとSNMPポーリングの違いは何ですか。",
  "choices": [
   "A. SNMPトラップはネットワーク・デバイスでプッシュ・モデルを使用して開始され、SNMPポーリングはサーバーで開始されます。",
   "B. SNMPトラップはプロアクティブ監視に使用され、SNMPポーリングはリアクティブ監視に使用されます。",
   "C. SNMPトラップはネットワーク管理システムによって開始され、SNMP ポーリングはネットワーク・デバイスによって開始されます。",
   "D. SNMPトラップはMIBを介して定期的な更新を送信し、SNMPポーリングはオンデマンドでデータを送信します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0690",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "自動化は、データモデルをどのように活用して管理対象ネットワークの運用複雑性を軽減しますか。",
  "choices": [
   "A. 多くのインターフェースを持つデバイスに対する特定の要求への応答時間を短縮する",
   "B. コントローラーがベンダーに依存しないようにする",
   "C. トラフィックを分類し、洞察を提供する",
   "D. SNMPやその他のポーリングツールを使用して監視を効率化する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0691",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "SNMP エージェントはどの機能を実行しますか。",
  "choices": [
   "A. NMS からの要求に応じて MIB 変数に関する情報を送信する。",
   "B. ネットワーク内のレイヤー 3 デバイス間のルーティングを管理する。",
   "C. ネットワーク デバイスと TACACS+ または RADIUS サーバー間のユーザー認証を調整する。",
   "D. リモート ネットワーク ノードに、壊滅的なシステム イベントに関する情報を要求する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0692",
  "theme": "monitoring-qos",
  "type": "multiple",
  "question": "SNMPv2で導入された機能のうち、1回のリクエストで大量のデータを取得する機能と、PDUを使用してトラップを確認する機能はどれですか。(2つ選択)",
  "choices": [
   "A. Get",
   "B. GetNext",
   "C. Set",
   "D. GetBulk",
   "E. Inform"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0693",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "SNMPv3で追加されたセキュリティ機能として誤っているものはどれか。",
  "choices": [
   "A. 認証と暗号化（authPriv）",
   "B. MIBツリーの拡張",
   "C. トラップメッセージの圧縮",
   "D. コミュニティストリング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0694",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "次の中から、sNMPv3で追加されたセキュリティ機能として正しいものはどれか。",
  "choices": [
   "A. MIBツリーの拡張",
   "B. トラップメッセージの圧縮",
   "C. 認証と暗号化（authPriv）",
   "D. コミュニティストリング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0695",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "SNMPv3で追加されたセキュリティ機能として誤っているものはどれか。",
  "choices": [
   "A. 認証と暗号化（authPriv）",
   "B. MIBツリーの拡張",
   "C. トラップメッセージの圧縮",
   "D. コミュニティストリング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0696",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "ネットワーク上のさまざまなデバイスに異なるレベルの syslog を構成する目的は何ですか。",
  "choices": [
   "A. 各デバイスからの異なる重大度レベルのメッセージのレート制限を行う",
   "B. 各デバイスからの syslog メッセージの重大度を設定する",
   "C. 各 syslog メッセージの発信元を識別する",
   "D. ローカルに保存されるさまざまなデバイスからの syslog メッセージの数を制御する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0697",
  "theme": "monitoring-qos",
  "type": "multiple",
  "question": "どのトランスポート層プロトコルが syslog メッセージを伝送しますか。(2つ選択)",
  "choices": [
   "A. TCP",
   "B. UDP",
   "C. ARP",
   "D. RTP",
   "E. IP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0698",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "syslog 重大度レベルが最も重大であると考えられ、システムが使用不能になるのはどれか。",
  "choices": [
   "A. 重大",
   "B. 緊急",
   "C. 警告",
   "D. エラー"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0699",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "ネットワークに syslog を実装する場合、エンジニアは何を考慮しますか。",
  "choices": [
   "A. Syslogは、メッセージをトリガーしたソフトウェアまたはハードウェアコンポーネントを定義します。",
   "B. デフォルトでは、すべてのメッセージレベルがsyslogサーバーに送信されます。",
   "C. ロギングレベルは、特定のメッセージの重大度を定義します。",
   "D. 16種類のロギングレベル（0～15）がある"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0700",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "どの syslog メッセージ ログレベルで、インターフェイスラインプロトコルのアップ/ダウン イベントが表示されますか。",
  "choices": [
   "A. 情報",
   "B. アラート",
   "C. デバッグ",
   "D. 通知"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0701",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "ネットワーク管理者は、syslog サーバーが受信メッセージを重要度に応じて異なるファイルにフィルタリングすることを望んでいます。どのフィルタリング基準を使用しますか。",
  "choices": [
   "A. メッセージ本文",
   "B. プロセス ID",
   "C. レベル",
   "D. 機能"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0702",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "ネットワーク機器のヘルスモニタリングにおけるsyslogレベル7の役割は何ですか？",
  "choices": [
   "A. ネットワークデバイス上で見えるエラー状態に関する情報を提供します。",
   "B. ネットワーク機器からの正常な操作メッセージを共有します。",
   "C. デバイス上の様々なデバッグコマンドからの出力を送信します。",
   "D. ネットワーク・アプライアンスの緊急事態について警告します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0703",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "デバッグ プロセスがオンになっているデバイスによって異常に多数の syslog メッセージが生成された場合に、他のメッセージを許可しながらデバッグ メッセージが syslog 経由で送信されるのを防ぐアクションはどれですか。",
  "choices": [
   "A. アクセスリストを使用してsyslogメッセージをフィルタリングします。",
   "B. グローバル設定モードでロギングモニタをオフにします。",
   "C. コンソールへのロギングを無効にします。",
   "D. ロギングトラップの重大度レベルを情報レベルに設定します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0704",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "ログ機能の目的は何ですか。",
  "choices": [
   "A. Syslog イベントを生成したプログラムまたはプロセスを示します",
   "B. Syslog イベントを説明するテキストメッセージが含まれます",
   "C. Syslog イベントの重大度を定義します",
   "D. Syslog イベントのタイムスタンプを表します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0705",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "認証と認可の違いは次のうちどれですか。",
  "choices": [
   "A. 認証はユーザーがアクセスするリソースを記録するために使用され、認可はユーザーがアクセスできるリソースを決定するために使用される。",
   "B. 認証はネットワークにアクセスする人の身元を確認し、認可はユーザーがアクセスできるリソースを決定する。",
   "C. 認証は、ユーザーがどのリソースにアクセスできるかを決定するために使用され、認可は、どの機器がネットワークへのアクセスを許可されているかを追跡するために使用される。",
   "D. 認証は個人の身元を確認するために使用され、承認はログイン用の syslog メッセージを作成するために使用される。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0706",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "エンジニアリング チームは、実装者に、warn状態とerror状態に対応する syslog を構成するよう依頼します。実装者は、望ましい結果を達成するためにどのコマンドを構成しますか。",
  "choices": [
   "A. logging trap 5",
   "B. logging trap 2",
   "C. logging trap 3",
   "D. logging trap 4"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0707",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "ルータで logging trap debug コマンドを設定するとどうなりますか。",
  "choices": [
   "A. ルーターは、より低い重大度レベルのメッセージを syslog サーバーに送信する。",
   "B. ルーターは、重大度レベルが警告、エラー、重大、緊急のすべてのメッセージを syslog サーバーに送信する。",
   "C. ルーターがすべてのメッセージを syslog サーバーに送信するようになる。",
   "D. ルーターが syslog サーバーへのすべてのメッセージの送信を停止する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0708",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "どの syslog 重大度レベルが最も重大とみなされ、システムが使用不能とみなされますか。",
  "choices": [
   "A. Error",
   "B. Emergency",
   "C. Alert",
   "D. Critical"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0709",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "Syslogのシビラティ（重大度）レベルで最も重大なものはどれか。",
  "choices": [
   "A. Alert（レベル1）",
   "B. Emergency（レベル0）",
   "C. Critical（レベル2）",
   "D. Warning（レベル4）"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0710",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "トラフィックシェーピングの目的は何ですか。",
  "choices": [
   "A. 動的なフロー識別を可能にします",
   "B. ポリシーベースのルーティングを可能にします",
   "C. ベストエフォート型のサービスを提供します",
   "D. 帯域幅の使用を制限します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0711",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "アクセス レートを超えるトラフィックをドロップする QoS 機能はどれですか。",
  "choices": [
   "A. 重み付け公平キューイング",
   "B. FIFO",
   "C. シェーピング",
   "D. ポリシング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0712",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "ドロップ確率に基づいてサブクラスに分割されるDSCPのホップ単位の転送動作はどれですか。",
  "choices": [
   "A. class-selector",
   "B. assured",
   "C. expedited",
   "D. default"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0713",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "QoS マーキングが有効になっている場合、Cisco デバイスによって変更される IP ヘッダー フィールドはどれですか。",
  "choices": [
   "A. ヘッダーチェックサム",
   "B. サービスタイプ",
   "C. DSCP",
   "D. ECN"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0714",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "スイッチ上で MAC 学習はどのように機能しますか。",
  "choices": [
   "A. キューイングせずにすべてのポートにフレームをブロードキャストする",
   "B. 不明な送信元 MAC アドレスをアドレス テーブルに追加する",
   "C. 新しいフレームを受信すると再送信要求を送信する",
   "D. 宛先が不明なフレームをマルチキャスト グループに送信する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0715",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "QoS でネットワーク トラフィックを分類する目的は何ですか。",
  "choices": [
   "A. クラスに応じてトラフィックを処理する",
   "B. 特定の処理を受けるトラフィックの種類を識別する",
   "C. パケットのクラス識別子をパケット ヘッダーの専用フィールドに書き込む",
   "D. ネットワーク デバイスでトラフィック マッチング ルールを構成する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0716",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "トラフィック・シェーピングとは何ですか。",
  "choices": [
   "A. パケットの QoS 属性を変更する",
   "B. パケット内に QoS 属性を設定する",
   "C. 過剰なトラフィックをキューに入れる",
   "D. トラフィックをクラスに整理する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0717",
  "theme": "monitoring-qos",
  "type": "exhibit_choice",
  "question": "R1が受信パケットに適用しているホップごとのQoS動作はどれですか。",
  "choices": [
   "A. キューイング",
   "B. マーキング",
   "C. シェーピング",
   "D. ポリシング"
  ],
  "figure": "data/figures/CCNA-0717.png"
 },
 {
  "qid": "CCNA-0718",
  "theme": "monitoring-qos",
  "type": "multiple",
  "question": "QoS でホップ単位の動作を使用する場合、考慮する必要がある原則はどれですか。(2つ選択)",
  "choices": [
   "A. サブインターフェースではポリシングはサポートされていません。",
   "B. シェーピングとレート制限は同じ効果があります。",
   "C. シェーピングは、トラフィック遅延を増加させることなく、過剰なトラフィックをドロップします。",
   "D. シェーピングは、過剰なトラフィックを遅延させることで、トラフィックバーストを平準化します。",
   "E. ポリシングは、着信方向と発信方向の両方で実行されます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0719",
  "theme": "monitoring-qos",
  "type": "multiple",
  "question": "トラフィック ポリシングの結果として実行される 2 つのアクションはどれですか。(2つ選択)",
  "choices": [
   "A. バースト",
   "B. ドロップ",
   "C. リマーキング",
   "D. フラグメンテーション",
   "E. バッファリング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0720",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "ドロップ確率に基づいてサブクラスに分けられるDSCPのPHB(Per Hop Behavior)はどれですか。",
  "choices": [
   "A. Expedited Forwarding",
   "B. Default",
   "C. Assured Forwarding",
   "D. Class Selector"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0721",
  "theme": "monitoring-qos",
  "type": "single",
  "question": "QoS マーキングが有効になっている場合、Cisco デバイスによってどの IP ヘッダー フィールドが変更されますか?",
  "choices": [
   "A. ECN",
   "B. Header Checksum",
   "C. Type of Service",
   "D. DSCP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0722",
  "theme": "monitoring-qos",
  "type": "drag_drop",
  "question": "Qos 機能を左側から右側の対応するステートメントにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "マーキング",
    "キューイング",
    "分類",
    "ポリシング"
   ],
   "targets": [
    {
     "label": "パケットの最大レートを超えるたびに、パケットに特定のアクションを適用します。",
     "slots": 1
    },
    {
     "label": "ToS値を設定してパケットをQoSグループに関連付ける",
     "slots": 1
    },
    {
     "label": "利用可能な帯域幅が許す限りパケットを保持し、それらを分配することでトラフィックの混雑を軽減します",
     "slots": 1
    },
    {
     "label": "特定の基準を使用してトラフィックをカテゴリに分類する全体的なプロセス",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0723",
  "theme": "monitoring-qos",
  "type": "multiple",
  "question": "トラフィック ポリシングの結果として実行される 2 つのアクションはどれですか? (2 つお選びください。)",
  "choices": [
   "A. bursting",
   "B. dropping",
   "C. remarking",
   "D. fragmentation",
   "E. buffering"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0724",
  "theme": "monitoring-qos",
  "type": "drag_drop",
  "question": "トラフィック タイプを左側から右側の QoS 配信メカニズムにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "データベース同期トラフィック",
    "標準Webブラウジングトラフィック",
    "ビデオトラフィック",
    "VoIPトラフィック"
   ],
   "targets": [
    {
     "label": "ベストエフォート",
     "slots": 1
    },
    {
     "label": "ポリシング",
     "slots": 1
    },
    {
     "label": "優先キュー",
     "slots": 1
    },
    {
     "label": "シェーピング",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0725",
  "theme": "device-access",
  "type": "single",
  "question": "WLCのどのインターフェイスまたはポートが、インバンドデバイス管理およびコントローラとアクセスポイント間の通信のデフォルトですか。",
  "choices": [
   "A. 仮想インターフェース",
   "B. マネジメントインターフェース",
   "C. コンソールポート",
   "D. サービスポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0726",
  "theme": "device-access",
  "type": "single",
  "question": "Cisco WLC への HTTP アクセスを有効にするコマンドはどれですか。",
  "choices": [
   "A. config network secureweb enable",
   "B. config certificate generate webadmin",
   "C. config network webmode enable",
   "D. config network telnet enable"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0727",
  "theme": "device-access",
  "type": "single",
  "question": "Cisco WLC のコンソール ポートの主な目的は何ですか。",
  "choices": [
   "A. IP トランスポートを介した帯域外管理",
   "B. 非同期トランスポートを介した帯域外管理",
   "C. 非同期トランスポートを介した帯域内管理",
   "D. IP トランスポートを介した帯域内管理"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0728",
  "theme": "device-access",
  "type": "multiple",
  "question": "Cisco WLC がアウトオブバンド管理に使用するポートタイプは何ですか。(2つ選択)",
  "choices": [
   "A. 冗長",
   "B. ディストリビューション",
   "C. サービス",
   "D. マネジメント",
   "E. コンソール"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0729",
  "theme": "device-access",
  "type": "single",
  "question": "Cisco WLC のコンソール接続によって提供される機能はどれですか。",
  "choices": [
   "A. デバイス管理のための安全なインバンド接続",
   "B. アウトオブバンド管理",
   "C. HTTP ベースの GUI 接続",
   "D. ファイル転送のための暗号化されていないインバンド接続"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0730",
  "theme": "device-access",
  "type": "single",
  "question": "ネットワーク管理者はどのようにして軽量モードの AP を安全に管理しますか。",
  "choices": [
   "A. HTTPS 経由で WLC GUI を使用する",
   "B. アウトオブバンド接続経由で CLI を使用する",
   "C. SSH を使用した仮想インターフェイス経由で CLI を使用する",
   "D. インバンド SSH 接続経由で AP GUI を使用する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0731",
  "theme": "device-access",
  "type": "drag_drop",
  "question": "左側の管理接続タイプを右側の定義にドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "デバイス管理用の安全な Web アクセスをサポート",
    "コントローラ CLI へのクリアテキスト接続",
    "CLI への暗号化アクセスとデータ転送用の安全なチャネルをサポート",
    "シリアルケーブル経由の物理接続をサポート"
   ],
   "targets": [
    {
     "label": "Telnet",
     "slots": 1
    },
    {
     "label": "Console",
     "slots": 1
    },
    {
     "label": "HTTPS",
     "slots": 1
    },
    {
     "label": "SSH",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0732",
  "theme": "device-access",
  "type": "single",
  "question": "WLC のアウトオブバンド管理に使用されるインターフェイスはどれですか。",
  "choices": [
   "A. dynamic",
   "B. management",
   "C. service port",
   "D. virtual"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0733",
  "theme": "device-access",
  "type": "single",
  "question": "エンジニアがデバイスを管理するために IP アドレスやダイヤルアップ番号を設定せずに AP に接続する場合、どの接続タイプが使用されますか。",
  "choices": [
   "A. VIY",
   "B. コンソール",
   "C. AUX",
   "D. イーサネット"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0734",
  "theme": "device-access",
  "type": "single",
  "question": "Cisco WLC がサポートする同時 Telnet セッションの最大数はいくつですか。",
  "choices": [
   "A. 3",
   "B. 5",
   "C. 6",
   "D. 15"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0735",
  "theme": "device-access",
  "type": "single",
  "question": "WLC のインバンド無線ネットワーク管理用のデフォルトインターフェースは何ですか。",
  "choices": [
   "A. マネジメント",
   "B. 冗長ポート",
   "C. サービスポート",
   "D. アウトオブバンド"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0736",
  "theme": "device-access",
  "type": "single",
  "question": "ネットワークエンジニアが、認証サーバーの設定とダイナミックインターフェイスの作成によって、新しい無線LANの実装を開始します。基本設定を完了するには、次に何を実行しますか。",
  "choices": [
   "A. 管理インターフェイスをインストールし、管理IPを追加します。",
   "B. アクセスポイントの高可用性と冗長性を設定します。",
   "C. 管理インターフェイスでTelnetとRADIUSアクセスを有効にする。",
   "D. 新しい WLAN を作成し、ダイナミックインターフェイスをそれにバインドします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0737",
  "theme": "device-access",
  "type": "single",
  "question": "SSH管理アクセスの一番の目的は何ですか。",
  "choices": [
   "A. ユーザー名とドメイン名のみで管理アクセスを認証するため",
   "B. HTTPS暗号化で保護されたパスワードを送信できるようにするため",
   "C. DES 56ビットと3DES（168ビット）暗号化方式をサポートするため",
   "D. 着信管理インターフェースへのセキュアなアクセスを可能にするため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0738",
  "theme": "device-access",
  "type": "single",
  "question": "Cisco WLC のコンソール ポートの主な目的は何ですか。",
  "choices": [
   "A. 非同期トランスポートによる帯域内管理",
   "B. IP トランスポートによる帯域内管理",
   "C. 非同期トランスポートによる帯域外管理",
   "D. IP トランスポートによる帯域外管理"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0739",
  "theme": "device-access",
  "type": "multiple",
  "question": "サービスポートインターフェースでサポートされているプロトコルは次のうちどれですか。(2つ選択)",
  "choices": [
   "A. Telnet",
   "B. SCP",
   "C. TACACS+",
   "D. SSH",
   "E. RADIUS"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0740",
  "theme": "device-access",
  "type": "single",
  "question": "ネットワーク エンジニアは、認証サーバーを構成し、動的インターフェイスを作成することで、新しい無線 LAN の実装を開始します。\n基本構成を完了するには、次に何を実行する必要がありますか。",
  "choices": [
   "A. 新しい WLAN を作成し、動的インターフェイスをそれにバインドする。",
   "B. アクセス ポイントの高可用性と冗長性を構成する。",
   "C. 管理インターフェイスで Telnet および RADIUS アクセスを有効する。",
   "D. 管理インターフェイスをインストールし、管理 IP を追加する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0741",
  "theme": "device-access",
  "type": "single",
  "question": "Cisco WLC のコンソール接続によってどの機能が提供されますか。",
  "choices": [
   "A. HTTP ベースの GUI 接続",
   "B. デバイス管理のための安全な帯域内接続",
   "C. 帯域外管理",
   "D. ファイル転送のための暗号化されていない帯域内接続"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0742",
  "theme": "device-access",
  "type": "multiple",
  "question": "ネットワークエンジニアは、マネージドサービスクライアントに属するスイッチを、新しいCisco Catalystスイッチに交換します。新しいスイッチは、以下のような最新のセキュリティ標準に対応するように構成されます。\nTelnet サービスは暗号化された接続で、モジュラス値は 2048になります。エンジニアは、新しいスイッチでどの 2 つのコマンドを構成する必要がありますか。(2つ選択)",
  "choices": [
   "A. transport input ssh",
   "B. transport input all",
   "C. crypto key generate rsa modulus 2048",
   "D. crypto key generate rsa general-keys modulus 1024",
   "E. crypto key generate rsa usage-keys"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0743",
  "theme": "device-access",
  "type": "single",
  "question": "安全なリモート CLI アクセスにはどのプロトコルが使用されますか。",
  "choices": [
   "A. Telnet",
   "B. HTTP",
   "C. HTTPS",
   "D. SSH"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0744",
  "theme": "device-access",
  "type": "single",
  "question": "SSL を使用するプロトコルはどれですか。",
  "choices": [
   "A. SSH",
   "B. HTTPS",
   "C. HTTP",
   "D. Telnet"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0745",
  "theme": "device-access",
  "type": "exhibit_choice",
  "question": "SW1のリモート管理アクセスを安全で暗号化されたものに更新したい。スイッチに適用する必要がある コマンドはどれか。(2つ選択)",
  "choices": [
   "A. SW1(config)#line vty 0 15\nSW1(config-line)#transport input ssh",
   "B. SW1(config)# crypto key generate rsa",
   "C. SW1(config)# interface f0/1\nSW1(config-if)# switch port mode trunk",
   "D. SW1(config)#enable secret ccnaTest123",
   "E. SW1(config)# username NEW secret R3mote123"
  ],
  "figure": "data/figures/CCNA-0745.png"
 },
 {
  "qid": "CCNA-0746",
  "theme": "device-access",
  "type": "exhibit_choice",
  "question": "エンジニアがスクリプトを実行し、SSH に必要のないコマンドを追加したため、それらのコマンドを削除する必要があります。設定を修正するには、どのコマンドを実行しますか。(2つ選択)",
  "choices": [
   "A. no ip domain name ccna.cisco.com",
   "B. no login local",
   "C. no ip name-server 198.51.100.210",
   "D. no service password-encryption",
   "E. no hostname CPE"
  ],
  "figure": "data/figures/CCNA-0746.png"
 },
 {
  "qid": "CCNA-0747",
  "theme": "device-access",
  "type": "single",
  "question": "R1 で SSH バージョン 2 のみを設定しています。暗号化プロトコルを使用したリモート管理を許可するために必要な最小構成は何ですか。",
  "choices": [
   "C. hostname R1\nservice password-encryption\ncrypto key generate rsa general-keys modulus 1024\nusername cisco privilege 15 password 0 cisco123\nip ssh version 2\nline vty 0 15\n transport input ssh\n login local",
   "D. hostname R1\nip domain-name cisco\ncrypto key generate rsa general-keys modulus 1024\nusername cisco privilege 15 password 0 cisco123\nip ssh version 2\nline vty 0 15\n transport input ssh\n login local"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0748",
  "theme": "device-access",
  "type": "exhibit_choice",
  "question": "SSHアクセスだけを許可し、パスワードを隠すには、どのコマンドセットが必要ですか。",
  "choices": [
   "A. SW1(config-line)#login local\nSW1(config-line)#exit\nSW1(config)#enable secret test!2E",
   "B. SW1(config-line)#transport input ssh\nSW1(config-line)#exit\nSW1(config)#service password-encryption",
   "C. SW1(config-line)#login local\nSW1(config-line)#exit",
   "D. SW1(config-line)#exit\nSW1(config)#aaa new-model"
  ],
  "figure": "data/figures/CCNA-0748.png"
 },
 {
  "qid": "CCNA-0749",
  "theme": "device-access",
  "type": "single",
  "question": "エンジニアは、ローカル ルーター上でドメイン名、ユーザー名、およびパスワードを設定しました。\nSecure Shell アクセス RSA キーの構成を完了する、次の手順は何ですか。",
  "choices": [
   "A. crypto key import rsa pem",
   "B. crypto key generate rsa",
   "C. crypto key zeroize rsa",
   "D. crypto key pubkey-chain rsa"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0750",
  "theme": "device-access",
  "type": "single",
  "question": "ネットワーク管理者は、ルーター R1 へのリモート アクセス用に SSH を設定する必要があります。要件は、公開キーと秘密キーのペアを使用して、接続クライアントとの間の管理トラフィックを暗号化することです。どの構成を適用すると要件を満たしますか。",
  "choices": [
   "A. R1#enable\nR1#configure terminal\nR1(config)#ip domain-name cisco.com\nR1(config)#crypto key generate ec keysize 1024",
   "B. R1#enable\nR1#configure terminal\nR1(config)#ip domain-name cisco.com\nR1(config)#crypto key generate ec keysize 2048",
   "C. R1#enable\nR1#configure terminal\nR1(config)#ip domain-name cisco.com\nR1(config)#crypto key encrypt rsa name myKey",
   "D. R1#enable\nR1#configure terminal\nR1(config)#ip domain-name cisco.com\nR1(config)#crypto key generate rsa modulus 1024"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0751",
  "theme": "device-access",
  "type": "single",
  "question": "Secure Shell バージョン 2 から R15 へのアクセスを有効にするために必要な最小構成項目はどれですか。",
  "choices": [
   "A. Router(config)#hostname R15 -\nR15(config)#ip domain-name cisco.com\nR15(config)#crypto key generate rsa general-keys modulus 1024\nR15(config)#ip ssh version 2 -\nR15(config-line)#line vty 0 15 -\nR15(config-line)# transport input ssh",
   "B. Router(config)#crypto key generate rsa general-keys modulus 1024\nRouter(config)#ip ssh version 2 -\nRouter(config-line)#line vty 015\nRouter(config-line)# transport input ssh\nRouter(contig)#ip ssh logging events\nR15(config)#ip ssh stricthostkeycheck",
   "C. Router(config)#hostname R15 -\nR15(config)#crypto key generate rsa general-keys modulus 1024\nR15(config-line)#line vty 0 15 -\nR15(config-line)# transport input ssh\nR15(config)#ip ssh source-interface Fa0/0\nR15(config)#ip ssh stricthostkeycheck",
   "D. Router(config)#ip domain-name cisco.com\nRouter(config)#crypto key generate rsa general-keys modulus 1024\nRouter(contig)#ip ssh version 2 -\nRouter(config-line)#line vty 0 15\nRouter(config-line)# transport input all\nRouter(config)#ip ssh logging events"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0752",
  "theme": "device-access",
  "type": "single",
  "question": "FTP に関連する事実はどれですか。",
  "choices": [
   "A. ブロック番号を使用してデータ転送エラーを識別し、軽減します。",
   "B. 常にユーザー認証なしで動作します。",
   "C. よく知られている UDP ポート 69 を使用します。",
   "D. 制御トラフィックとデータ トラフィックに 2 つの別々の接続を使用します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0753",
  "theme": "device-access",
  "type": "single",
  "question": "TFTP はどのような機能を提供しますか。",
  "choices": [
   "A. データストレージデバイスなしでシステム上に構成ファイルをロードする",
   "B. LAN内で安全なファイルアクセスを提供する",
   "C. WANを介したファイル転送のための暗号化メカニズムを提供する",
   "D. プライベートデータネットワークを介したデータ通信の認証を提供する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0754",
  "theme": "device-access",
  "type": "single",
  "question": "FTPの機能は何ですか。",
  "choices": [
   "A. データ転送にはよく知られたUDPポート69を使用する。",
   "B. ブロック番号を使ってデータ転送エラーを特定し、軽減する。",
   "C. コントロール・トラフィックとデータ・トラフィックに2つの別々のコネクションを使用する。",
   "D. 常にユーザー接続の検証なしで動作する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0755",
  "theme": "device-access",
  "type": "single",
  "question": "ファイアウォールで TCP 20 と 21 を許可している企業イントラネット上で、大きなファイルを転送する際に使用すべきプロトコルはどれか。",
  "choices": [
   "A. FTP",
   "B. REST API",
   "C. TFTP",
   "D. SMTP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0756",
  "theme": "device-access",
  "type": "exhibit_choice",
  "question": "TCP ポート 22 を使用して新しいソフトウェアをインストールするには、[Download File] タブでどのタスクを実行しますか?",
  "choices": [
   "A. [File Type]Code、[Transfer Mode]SFTP、WLC の IP アドレスを指定する。",
   "B. [File Type]Configuration、[Transfer Mode]FTP、ファイル サーバの IP アドレスを指定する。",
   "C. [File Type]Code、[Transfer Mode]SFTP、ファイル サーバの IP アドレスを指定する。",
   "D. [File Type]Configuration、[Transfer Mode]SFTP、WLCのIP アドレスを指定する。"
  ],
  "figure": "data/figures/CCNA-0756.png"
 },
 {
  "qid": "CCNA-0757",
  "theme": "device-access",
  "type": "single",
  "question": "ユーザー名やパスワードの要件を省略し、送信されたすべてのデータを確認するファイル転送プロトコルはどれですか。",
  "choices": [
   "A. FTP",
   "B. TFTP",
   "C. SCP",
   "D. SFTP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0758",
  "theme": "device-access",
  "type": "single",
  "question": "Web サーバーによって実行される機能とは何ですか。",
  "choices": [
   "A. クライアントデバイスから電子メールを送受信する",
   "B. FTP アクセス用にファイルを安全に保存する",
   "C. ユーザーのアイデンティティを認証および認可する",
   "D. HTTP 経由で送信されるアプリケーションを提供する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0759",
  "theme": "device-access",
  "type": "single",
  "question": "TFTP はどの機能を提供しますか?",
  "choices": [
   "A. データストレージデバイスのないシステムに設定ファイルをロードします。",
   "B. プライベート データ ネットワークを介したデータ通信に認証を提供する",
   "C. WAN 経由のファイル転送のための暗号化メカニズムを提供する",
   "D. LAN 内で安全なファイル アクセスを提供する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0760",
  "theme": "device-access",
  "type": "exhibit_choice",
  "question": "SSH 経由での接続用にルーターを設定しています。service password-encryption コマンドが発行されました。次の要件を満たす必要があるとき、どれを設定しますか。\n・ユーザー名を CCUser として作成します\n・パスワードを NA!2$cc として作成します\n・ユーザー パスワードを暗号化します",
  "choices": [
   "A. username CCUser password NA!2$cc\nenable password level 5 NA!2$cc",
   "B. username CCUser privilege 15 password NA!2$cc\nenable secret 0 NA!2$cc",
   "C. username CCUser secret NA!2$cc",
   "D. username CCUser privilege 10 password NA!2$cc"
  ],
  "figure": "data/figures/CCNA-0760.png"
 },
 {
  "qid": "CCNA-0761",
  "theme": "device-access",
  "type": "exhibit_choice",
  "question": "R4 のローカル アクセスを確立し、次の要件を満たすとき、どの設定をしますか。\n・Telnet アクセスのみが許可されます\n・enableパスワードは安全に保存します\n・enableパスワードはプレーンテキストで適用します\n・ログインが成功すると、R4 へのフルアクセスが許可されます",
  "choices": [
   "A. username test1 password testpass1\nenable password level 1 7 Test123\n!\nline vty 0 15\naccounting exec default\ntransport input all",
   "B. username test1 password testpass1\nenable secret level 15 0 Test123\n!\nline vty 0 15\nlogin local\ntransport input telnet",
   "C. username test1 password testpass1\nenable secret level 1 0 Test123\n!\nline vty 0 15\nlogin authentication\npassword Test123\ntransport input telnet",
   "D. username test1 password testpass1\nenable password level 15 0 Test123\n!\nline vty 0 15\npassword Test123\ntransport input all"
  ],
  "figure": "data/figures/CCNA-0761.png"
 },
 {
  "qid": "CCNA-0762",
  "theme": "device-access",
  "type": "exhibit_choice",
  "question": "ローカルのユーザー名とパスワードを使用して、Telnet経由で直接特権モードにアクセスできるようにするには、どの追加構成を適用しますか？",
  "choices": [
   "A. R1(config)#username admin\nR1(config-if)#line vty 0 4\nR1(config-line)#password p@ss1234",
   "B. R1(config)#username admin\nR1(config-if)#line vty 0 4\nR1(config-line)#password p@ss1234\nR1(config-line)#transport input telnet",
   "C. R1(config)#username admin secret p@ss1234\nR1(config-if)#line vty 0 4\nR1(config-line)#login local\nR1(config)#enable secret p@ss1234",
   "D. R1(config)#username admin privilege 15 secret p@ss1234\nR1(config-if)#line vty 0 4\nR1(config-line)#login local"
  ],
  "figure": "data/figures/CCNA-0762.png"
 },
 {
  "qid": "CCNA-0763",
  "theme": "device-access",
  "type": "single",
  "question": "servicepassword-encryption コマンドがルータで入力されました。この構成の効果は何ですか。",
  "choices": [
   "A. 権限のないユーザーが実行コンフィギュレーション内のクリアテキスト パスワードを表示できないように制限する。",
   "B. ネットワーク管理者がクリアテキストのパスワードを設定できないようにする",
   "C. スイッチ上の無許可の PC 接続から VLAN データベースを保護する。",
   "D. VPN トンネルの確立時のパスワード交換を暗号化する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0764",
  "theme": "device-access",
  "type": "single",
  "question": "エンジニアは、新しいユーザー アカウント用に R1 を構成する必要があります。アカウントは次の要件を満たしている必要があります。\n・ローカル データベースで構成されている必要があります。\n・ユーザー名は、engineer2 です。\n・構成可能な最も強力なパスワードを使用する必要があります。\nエンジニアはルータ上でどのコマンドを設定する必要がありますか。",
  "choices": [
   "A. R1(config)# username engineer2 privilege 1 password 7 test2021",
   "B. R1(config)# username engineer2 secret 4 $1$b1Ju$kZbBS1Pyh4QzwXyZ",
   "C. R1(config)# username engineer2 algorithm-type scrypt secret test2021",
   "D. R1(config)# username engineer2 secret 5 password $1$b1Ju$kZbBS1Pyh4QzwXyZ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0765",
  "theme": "device-access",
  "type": "exhibit_choice",
  "question": "上記を参照してください。管理者は、暗号化ハッシュとして保存されたパスワードを使用して、ローカル認証用に 4 つのスイッチを構成します。4 つのスイッチは、管理者がネットワーク インフラストラクチャを管理するための SSH アクセスもサポートする必要があります。これらの要件を満たすように正しく構成されているスイッチはどれですか。",
  "choices": [
   "A. SW1",
   "B. SW2",
   "C. SW3",
   "D. SW4"
  ],
  "figure": "data/figures/CCNA-0765.png"
 },
 {
  "qid": "CCNA-0766",
  "theme": "device-access",
  "type": "single",
  "question": "管理者は、ユーザが「Cisco」をパスワードとして追加できないようにするために、password complexity not construction-name コマンドを使用する必要があります。\nこのコマンドの前に、どのコマンドを発行する必要がありますか。",
  "choices": [
   "A. login authentication my-auth-list",
   "B. service password-encryption",
   "C. password complexity enable",
   "D. confreg 0x2142"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0767",
  "theme": "device-access",
  "type": "single",
  "question": "実行中のコンフィギュレーション内のすべてのパスワードを暗号化するグローバル コマンドはどれですか。",
  "choices": [
   "A. service password-encryption",
   "B. enable password-encryption",
   "C. enable secret",
   "D. password-encrypt"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0768",
  "theme": "device-access",
  "type": "single",
  "question": "パスワードがルーターまたはスイッチの設定にプレーン テキストとして保存されるのを防ぐコマンドはどれですか。",
  "choices": [
   "A. enable secret",
   "B. enable password",
   "C. service password-encryption",
   "D. username cisco password encrypt"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0769",
  "theme": "device-access",
  "type": "single",
  "question": "実行コンフィギュレーション内のすべてのパスワードを暗号化するグローバル コマンドはどれですか?",
  "choices": [
   "A. サービスのパスワード暗号化",
   "B. パスワード暗号化を有効にする",
   "C. シークレットを有効にする",
   "D. パスワード暗号化"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0770",
  "theme": "device-access",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。 R4 へのローカル アクセスを確立し、次の要件を満たす必要があります。\n・Telnet アクセスのみが許可されます。\n・イネーブルパスワードは安全に保管する必要があります。\n・イネーブル パスワードはプレーン テキストで適用する必要があります。\n・ログインに成功したら、R4 へのフルアクセスを許可する必要があります。\nどの構成スクリプトが要件を満たしますか?",
  "choices": [
   "A. !\nconf t\n!\nusername test1 password testpass1\nenable secret level 15 0 Test123\n!\nline vty 0 15\nlogin local\ntransport input telnet",
   "B. !\nconfig t\n!\nusername test1 password testpass1\nenable password level 15 0 Test123\n!\nline vty 0 15\nlogin local\ntransport input all",
   "C. !\nconfig t\n!\nusername test1 password testpass1\nenable password level 1 7 Test123\n!\nline vty 0 15\naccounting exec default\ntransport input all",
   "D. !\nconfig t\n!\nusername test1 password testpass1\nenable secret level 1 0 Test123\n!\nline vty 0 15\nlogin authentication\npassword Test123\ntransport input telnet"
  ],
  "figure": "data/figures/CCNA-0770.png"
 },
 {
  "qid": "CCNA-0771",
  "theme": "acl-l2security",
  "type": "single",
  "question": "ネットワーク エンジニアは、新しい Cisco IOS ルータでアクセス リストを設定する必要があります。\nアクセス リストは、192.168.240.0/20 ネットワークからネットワーク 10.125.128.32/27 への HTTP トラフィックを拒否する必要がありますが、192.168.240.0/20 ネットワークが残りの 10.0.0.0/8 ネットワークに到達することを許可する必要があります。\nエンジニアはどの構成を適用する必要がありますか。",
  "choices": [
   "A. ip access-list extended deny_outbound\n10 permit ip 192.168.240.0 255.255.240.0 10.0.0.0 255.0.0.0\n20 deny tcp 192.168.240.0 255.255.240.0 10.125.128.32 255.255.255.224 eq 443\n30 permit ip any any",
   "B. ip access-list extended deny_outbound\n10 deny tcp 192.168.240.0 0.0.15.255 10.125.128.32 0.0.0.31 eq 80\n20 permit ip 192.168.240.0 0.0.15.255 10.0.0.0 0.255.255.255\n30 deny ip any any log",
   "C. ip access-list extended deny_outbound\n10 deny tcp 10.125.128.32 255.255.255.224 192.168.240.0 255.255.240.0 eq 443\n20 deny tcp 192.168.240.0 255.255.240.0 10.125.128.32 255.255.255.224 eq 443\n30 permit ip 192.168.240.0 255.255.240.0 10.0.0.0 255.0.0.0",
   "D. ip access-list extended deny_outbound\n10 deny tcp 192.168.240.0 0.0.15.255 any eq 80\n20 deny tcp 192.168.240.0 0.0.15.255 10.125.128.32 0.0.0.31 eq 80\n30 permit ip 192.168.240.0 0.0.15.255 10.0.0.0 0.255.255.255"
  ],
  "figure": "data/figures/CCNA-0771.png"
 },
 {
  "qid": "CCNA-0772",
  "theme": "acl-l2security",
  "type": "multiple",
  "question": "管理者は、203.0.113.0/24 ネットワーク内のホストからの管理接続のみを受け入れるように Cisco Catalyst スイッチを設定しています。スイッチを通過するその他のトラフィックは中断することなく通過する必要があります。エンジニアはどの 2つの設定をルータに適用しますか。 (2つ選択)",
  "choices": [
   "A. ip access-list extended Management\npermit tcp any range 22 23 203.0.113.0 0.0.0.255",
   "B. line vty 0 15\naccess-class Management in",
   "C. ip access-list standard Management\npermit 203.0.113.0 255.255.255.0",
   "D. interface range vlan 1 - 4094\nip access-group Management out",
   "E. ip access-list standard Management\npermit 203.0.113.0 0.0.0.255"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0773",
  "theme": "acl-l2security",
  "type": "exhibit_choice",
  "question": "PC2 からファイル サーバーへの接続をブロックしながらも、PC2 が他のネットワーク ホストやデバイスに接続できるようにする必要があります。どの構成を使用しますか。",
  "choices": [
   "A. R1(config)#access-list 1 permit 192.168.2.10\nR1(config)#access-list 1 deny any\nR1(config)#interface g0/1\nR1(config-if)#ip access-group 1 out",
   "B. R2(config)#access-list 1 deny 192.168.2.10\nR2(config)#access-list 1 permit any\nR2(config)#interface g0/1\nR2(config-if)#ip access-group 1 out",
   "C. R2(config)#access-list 1 permit 192.168.2.10\nR2(config)#access-list 1 deny 192.168.2.0 0.0.0.255\nR2(config)#interface g0/1\nR2(config)#ip access-group 1 in",
   "D. R1(config)#access-list 1 deny 192.168.2.10\nR1(config)#access-list 1 permit 192.168.2.0 0.0.0.255\nR1(config)#interface g0/0\nR1(config-if)#ip access-group 1 in"
  ],
  "figure": "data/figures/CCNA-0773.png"
 },
 {
  "qid": "CCNA-0774",
  "theme": "acl-l2security",
  "type": "exhibit_choice",
  "question": "上記を参照してください。この ACL は、クライアントが UDP 経由で HTTP、HTTPS、および DNS サービスにのみアクセスできるように設定されています。新しい管理者は、ONS サービスに TCP アクセスを追加したいと考えています。ACL を効率的に更新する構成はどれですか。",
  "choices": [
   "A. no ip access-list extended Services\nip access-list extended Services\n30 permit tcp 10.0.0.0 0.255.255.255 host 198.51.100.11 eq domain",
   "B. ip access-list extended Services\n35 permit tcp 10.0.0.0 0.255.255.255 host 198.51.100.11 eq domain",
   "C. ip access-list extended Services\npermit tcp 10.0.0.0 0.255.255.255 host 198.51.100.11 eq domain",
   "D. no ip access-list extended Services\nip access-list extended Services\npermit udp 10.0.0.0 0.255.255.255 any eq 53\npermit tcp 10.0.0.0 0.255.255.255 host 198.51.100.11 eq domain deny ip any any log"
  ],
  "figure": "data/figures/CCNA-0774.png"
 },
 {
  "qid": "CCNA-0775",
  "theme": "acl-l2security",
  "type": "single",
  "question": "エンジニアは、IP サブネット 10.139.58.0/28 からルーターへのリモート アクセスを構成しています。ドメイン名、暗号キー、SSH が設定されました。宛先ルーターでトラフィックを有効にする設定はどれですか。",
  "choices": [
   "A. interface FastEthernet0/0\nip address 10.122.49.1 255.255.255.252\nip access-group 110 in\nip access-list extended 110\npermit tcp 10.139.58.0 0.0.0.15 host 10.122.49.1 eq 22",
   "B. interface FastEthernet0/0\nip address 10.122.49.1 255.255.255.240\naccess-group 120 in\nip access-list extended 120\npermit tcp 10.139.58.0 255.255.255.248 any eq 22",
   "C. interface FastEthernet0/0\nip address 10.122.49.1 255.255.255.252\nip access-group 105 in\nip access-list standard 105\npermit tcp 10.139.58.0 0.0.0.7 eq 22 host 10.122.49.1",
   "D. interface FastEthernet0/0\nip address 10.122.49.1 255.255.255.248\nip access-group 10 in\nip access-list standard 10\npermit udp 10.139.58.0 0.0.0.7 host 10.122.49.1 eq 22"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0776",
  "theme": "acl-l2security",
  "type": "exhibit_choice",
  "question": "上記を参照してください。ネットワーク管理者は、ネットワーク内のルーターをリモートで管理するために SSH アクセスを許可する必要があります。運用チームは 10.20.1.0/25 ネットワークに常駐しています。このタスクを実行できるコマンドはどれですか。",
  "choices": [
   "A. access-list 2699 permit udp 10.20.1.0 0.0.0.255",
   "B. no access-list 2699 deny tcp any 10.20.1.0 0.0.0.127 eq 22",
   "C. access-list 2699 permit tcp any 10.20.1.0 0.0.0.255 eq 22",
   "D. no access-list 2699 deny ip any 10.20.1.0 0.0.0.255"
  ],
  "figure": "data/figures/CCNA-0776.png"
 },
 {
  "qid": "CCNA-0777",
  "theme": "acl-l2security",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。ネットワーク管理者は、10.10.0.0/24 サブネットからインターフェイス Serial0 上の WAN へのトラフィックを許可する必要があります。管理者がコマンドを適用すると、構成はどのような影響を受けますか?",
  "choices": [
   "A. ルーターは、ソース IP の最後のオクテットが 0 に設定された Serial0 へのすべての受信トラフィックを受け入れます。",
   "B. 許可コマンドが失敗し、エラー コードが返されます。",
   "C. ルータがインターフェイスにアクセス リストを適用できません。",
   "D. IP 範囲 10.0.0.0 ～ 10.0.0.255 からの送信元トラフィックは Serial0 で許可されます。"
  ],
  "figure": "data/figures/CCNA-0777.png"
 },
 {
  "qid": "CCNA-0778",
  "theme": "acl-l2security",
  "type": "single",
  "question": "次の中から、標準ACLの特徴として正しいものはどれか。",
  "choices": [
   "A. MACアドレスに基づいてフィルタリングを行う",
   "B. 送信元と宛先の両方のIPアドレスに基づいてフィルタリングを行う",
   "C. 送信元IPアドレスのみに基づいてフィルタリングを行う",
   "D. レイヤ4のポート番号に基づいてフィルタリングを行う"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0779",
  "theme": "acl-l2security",
  "type": "single",
  "question": "Cisco IOSデバイスでSSHを有効にするために必要な設定はどれか。",
  "choices": [
   "A. ACLの設定のみ",
   "B. OSPFの有効化",
   "C. NATの設定",
   "D. ホスト名とドメイン名の設定、RSA鍵の生成"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0780",
  "theme": "acl-l2security",
  "type": "single",
  "question": "拡張ACLを適用する際の推奨位置はどれか。",
  "choices": [
   "A. ネットワークのコア部分",
   "B. 宛先に最も近い場所",
   "C. 送信元に最も近い場所",
   "D. 任意の場所（位置は影響しない）"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0781",
  "theme": "acl-l2security",
  "type": "single",
  "question": "標準ACLの特徴として誤っているものはどれか。",
  "choices": [
   "A. 送信元IPアドレスのみに基づいてフィルタリングを行う",
   "B. MACアドレスに基づいてフィルタリングを行う",
   "C. 送信元と宛先の両方のIPアドレスに基づいてフィルタリングを行う",
   "D. レイヤ4のポート番号に基づいてフィルタリングを行う"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0782",
  "theme": "acl-l2security",
  "type": "single",
  "question": "標準ACLの特徴として誤っているものはどれか。",
  "choices": [
   "A. 送信元IPアドレスのみに基づいてフィルタリングを行う",
   "B. レイヤ4のポート番号に基づいてフィルタリングを行う",
   "C. 送信元と宛先の両方のIPアドレスに基づいてフィルタリングを行う",
   "D. MACアドレスに基づいてフィルタリングを行う"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0783",
  "theme": "acl-l2security",
  "type": "single",
  "question": "標準ACLの特徴として誤っているものはどれか。",
  "choices": [
   "A. 送信元IPアドレスのみに基づいてフィルタリングを行う",
   "B. 送信元と宛先の両方のIPアドレスに基づいてフィルタリングを行う",
   "C. レイヤ4のポート番号に基づいてフィルタリングを行う",
   "D. MACアドレスに基づいてフィルタリングを行う"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0784",
  "theme": "acl-l2security",
  "type": "single",
  "question": "VoIP 電話機が接続されたスイッチポートで、音声VLAN 4 のMAC アドレス abcd.abcd.abcd を使用してポートセキュリティを設定するにコマンドはどれか。",
  "choices": [
   "A. switchport port-security mac-address abcd.abcd.abcd",
   "B. switchport port-security mac-address abcd.abcd.abcd vlan 4",
   "C. switchport port-security mac-address sticky abcd.abcd.abcd vlan 4",
   "D. switchport port-security mac-address abcd.abcd.abcd vlan voice"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0785",
  "theme": "acl-l2security",
  "type": "exhibit_choice",
  "question": "PC1 から SW1 および SW2 ネットワークへの接続を制限する必要があります。許可される MAC アドレスは 2 つに制限する必要があります。どの構成で会議室の接続が保護されますか。",
  "choices": [
   "A. interface gi1/0/15\nswitchport port-security\nswitchport port-security mac-address 0000.abcd.0004 vlan 100",
   "B. interface gi1/0/15\nswitchport port-security mac-address 0000.abcd.0004 vlan 100",
   "C. interface gi1/0/15\nswitchport port-security mac-address 0000.abcd.0004 vlan 100\ninterface switchport secure-mac limit 2",
   "D. interface gi1/0/15\nswitchport port-security\nswitchport port-security maximum 2"
  ],
  "figure": "data/figures/CCNA-0785.png"
 },
 {
  "qid": "CCNA-0786",
  "theme": "acl-l2security",
  "type": "single",
  "question": "偽のDHCP サーバーを識別するために何が使用されますか。",
  "choices": [
   "A. DHCP REQUEST",
   "B. DHCP DISCOVER",
   "C. DHCP ACK",
   "D. DHCP OFFER"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0787",
  "theme": "acl-l2security",
  "type": "single",
  "question": "不明な MAC アドレスからのトラフィックをドロップし、SNMP トラップを転送するポート セキュリティ違反モードはどれですか。",
  "choices": [
   "A. restrict（制限）",
   "B. protect（保護）",
   "C. shutdown VLAN",
   "D. shutdown"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0788",
  "theme": "acl-l2security",
  "type": "multiple",
  "question": "ARPスプーフィング攻撃未遂の余波を受け、ネットワークセキュリティを評価している。ポートチャネル1がディストリビューションスイッチに向かうアクセススイッチのアップリンクインタフェースである場合、適切な保護を提供するためにアクセスレイヤスイッチに設定するのはどれか。(2つ選択)",
  "choices": [
   "A. ip dhcp snooping\n!\ninterface Port-channel1\nswitchport port-security maximum 1\nswitchport port-security",
   "B. ip dhcp snooping vlan 1-4094\nip dhcp snooping\n!\ninterface Port-channel1\nip dhcp snooping trust",
   "C. ip dhcp snooping vlan 1-4094\n!\ninterface Port-channel1\nswitchport protected\nswitchport port-security maximum 1",
   "D. ip arp inspection trust\n!\ninterface Port-channel1\nswitchport port-security maximum 4094\nswitchport port-security\nip verify source mac-check",
   "E. ip arp inspection vlan 1-4094\n!\ninterface Port-channel1\nip arp inspection trust"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0789",
  "theme": "acl-l2security",
  "type": "single",
  "question": "エンジニアは、VoIP ハンドセットに接続されるスイッチ ポートを構成しています。音声 VLAN 4 上で手動で割り当てられた MAC アドレス abcd.abcd.abcd を使用してポート セキュリティを有効にするには、エンジニアがどのコマンドを設定する必要がありますか。",
  "choices": [
   "A. switchport port-security mac-address abcd.abcd.abcd vlan 4",
   "B. switchport port-security mac-address abcd.abcd.abcd vlan voice",
   "C. switchport port-security mac-address abcd.abcd.abcd",
   "D. switchport port-security mac-address sticky abcd.abcd.abcd vlan 4"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0790",
  "theme": "acl-l2security",
  "type": "single",
  "question": "最大 MAC アドレス数を超えたため、スイッチ ポートでポート セキュリティ違反が発生しました。セキュリティ違反カウントを増加させ、SNMP トラップを転送するには、どのコマンドを設定する必要がありますか。",
  "choices": [
   "A. switchport port-security violation access",
   "B. switchport port-security violation protect",
   "C. switchport port-security violation restrict",
   "D. switchport port-security violation shutdown"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0791",
  "theme": "acl-l2security",
  "type": "single",
  "question": "DHCP スヌーピングによってどの機能が実行されますか。",
  "choices": [
   "A. パケット転送のためにマルチキャスト トラフィックをリッスンする。",
   "B. 特定のトラフィックをレート制限する",
   "C. スイッチ間で VLAN 情報を伝達する",
   "D. DDoS 軽減策を提供する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0792",
  "theme": "acl-l2security",
  "type": "single",
  "question": "ダイナミックARP検査によって軽減されるのはどのタイプの攻撃ですか。",
  "choices": [
   "A. DDoS",
   "B. マルウェア",
   "C. 中間者",
   "D. ワーム"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0793",
  "theme": "acl-l2security",
  "type": "single",
  "question": "VLAN ホッピング攻撃はどのように軽減されますか。",
  "choices": [
   "A. トランク ポートを手動で実装し、DTP を無効にする",
   "B. 拡張 VLAN を構成する",
   "C. すべてのポートをアクティブにし、デフォルトの VLAN に配置する。",
   "D. ダイナミック ARP 検査を有効にする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0794",
  "theme": "acl-l2security",
  "type": "exhibit_choice",
  "question": "上記を参照してください。ネットワーク環境が正常に動作している場合、インターフェイス fastethernet 0/1 にはどのタイプのデバイスを接続する必要がありますか。",
  "choices": [
   "A. DHCP クライアント",
   "B. アクセスポイント",
   "C. ルーター",
   "D. PC"
  ],
  "figure": "data/figures/CCNA-0794.png"
 },
 {
  "qid": "CCNA-0795",
  "theme": "acl-l2security",
  "type": "single",
  "question": "スイッチは DHCP スヌーピング情報をどこに保持しますか。",
  "choices": [
   "A. CAM テーブル",
   "B. フレーム転送データベース",
   "C. MAC アドレス テーブル",
   "D. バインディング データベース"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0796",
  "theme": "acl-l2security",
  "type": "single",
  "question": "VLAN ホッピング攻撃からネットワークを保護する方法は何ですか。",
  "choices": [
   "A. インターネットに接続された VLAN にポート セキュリティを実装する",
   "B. ダイナミックARP 検査を有効にする",
   "C. すべてのアクセス ポートをネイティブ VLAN 以外の VLAN に割り当てる",
   "D. トラフィックが VLAN を変更しないように ACL を設定する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0797",
  "theme": "acl-l2security",
  "type": "single",
  "question": "DAI（Dynamic ARP Inspection）の説明として誤っているものはどれか。",
  "choices": [
   "A. ARPキャッシュのタイムアウトを延長する",
   "B. DHCPスヌーピングバインディングテーブルを使用してARPパケットの正当性を検証する",
   "C. ARPテーブルのサイズを制限する",
   "D. Gratuitous ARPを自動生成する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0798",
  "theme": "acl-l2security",
  "type": "single",
  "question": "次の中から、ポートセキュリティのバイオレーションモードで、違反フレームを破棄しログを記録するモードはどれか。",
  "choices": [
   "A. shutdown",
   "B. restrict",
   "C. dynamic",
   "D. protect"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0799",
  "theme": "acl-l2security",
  "type": "single",
  "question": "DHCPスヌーピングの目的として正しいものはどれか。",
  "choices": [
   "A. DHCPリレーエージェントの機能を提供する",
   "B. DHCPアドレスプールを拡張する",
   "C. DHCPリース時間を短縮する",
   "D. 不正なDHCPサーバーからの応答をブロックする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0800",
  "theme": "acl-l2security",
  "type": "single",
  "question": "DAI（Dynamic ARP Inspection）の説明として適切な説明を1つ選びなさい。",
  "choices": [
   "A. ARPテーブルのサイズを制限する",
   "B. DHCPスヌーピングバインディングテーブルを使用してARPパケットの正当性を検証する",
   "C. Gratuitous ARPを自動生成する",
   "D. ARPキャッシュのタイムアウトを延長する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0801",
  "theme": "acl-l2security",
  "type": "single",
  "question": "DAI（Dynamic ARP Inspection）の説明として誤っているものはどれか。",
  "choices": [
   "A. DHCPスヌーピングバインディングテーブルを使用してARPパケットの正当性を検証する",
   "B. ARPテーブルのサイズを制限する",
   "C. Gratuitous ARPを自動生成する",
   "D. ARPキャッシュのタイムアウトを延長する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0802",
  "theme": "acl-l2security",
  "type": "single",
  "question": "DHCPスヌーピングの目的として誤っているものはどれか。",
  "choices": [
   "A. DHCPアドレスプールを拡張する",
   "B. DHCPリレーエージェントの機能を提供する",
   "C. 不正なDHCPサーバーからの応答をブロックする",
   "D. DHCPリース時間を短縮する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0803",
  "theme": "acl-l2security",
  "type": "single",
  "question": "DAI（Dynamic ARP Inspection）の説明として誤っているものはどれか。",
  "choices": [
   "A. DHCPスヌーピングバインディングテーブルを使用してARPパケットの正当性を検証する",
   "B. Gratuitous ARPを自動生成する",
   "C. ARPテーブルのサイズを制限する",
   "D. ARPキャッシュのタイムアウトを延長する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0804",
  "theme": "acl-l2security",
  "type": "drag_drop",
  "question": "左側の攻撃軽減テクニックを、右側の軽減対象となる攻撃の種類にドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ダイナミック トランキング プロトコルを無効にする",
    "802.1x認証プロトコルを構成する",
    "DHCPスヌーピング機能を設定する",
    "デフォルト以外のVLANを使用してネイティブVLANを構成する"
   ],
   "targets": [
    {
     "label": "802.1q 二重タグ付け VLAN ホッピング攻撃",
     "slots": 1
    },
    {
     "label": "MACフラッディング攻撃",
     "slots": 1
    },
    {
     "label": "中間者スプーフィング攻撃",
     "slots": 1
    },
    {
     "label": "スイッチスプーフィングVLANホッピング攻撃",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0805",
  "theme": "acl-l2security",
  "type": "multiple",
  "question": "展示品をご参照ください。ネットワーク エンジニアは、新しいスイッチでポート セキュリティの構成を開始しました。次の要件を満たす必要があります。\n・MAC アドレスは動的に学習される必要があります。\n・不要なトラフィックが発生した場合、インターフェイスを無効にせずにログ メッセージを生成する必要があります。\nこのタスクを完了するには、どの 2 つのコマンドを構成する必要がありますか? (2 つお選びください。)",
  "choices": [
   "A. SW(config-if)#switchport port-security violation restrict",
   "B. SW(config-if)#switchport port-security mac-address 0010.7B84.45E6",
   "C. SW(config-if)#switchport port-security maximum 2",
   "D. SW(config-if)#switchport port-security violation shutdown",
   "E. SW(config-if)#switchport port-security mac-address sticky"
  ],
  "figure": "data/figures/CCNA-0805.png"
 },
 {
  "qid": "CCNA-0806",
  "theme": "acl-l2security",
  "type": "drag_drop",
  "question": "DHCP スヌーピング用語を左側から右側の説明にドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "スプリアスDHCPサーバー",
    "スヌーピングバインディングデータベース",
    "信頼されていない",
    "信頼できる",
    "DHCPサーバー"
   ],
   "targets": [
    {
     "label": "管理ドメインに未知のネットワーク上のホストのリスト",
     "slots": 1
    },
    {
     "label": "ネットワーク上のホストにIPアドレスを割り当てるネットワークコンポーネント",
     "slots": 1
    },
    {
     "label": "ネットワーク管理者の制御下にある内部デバイス",
     "slots": 1
    },
    {
     "label": "管理ドメイン内の未知のDHCPサーバー",
     "slots": 1
    },
    {
     "label": "すべてのインターフェイスのデフォルト状態",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0807",
  "theme": "acl-l2security",
  "type": "single",
  "question": "偽の DHCP サーバーを識別するために何が使用されますか?",
  "choices": [
   "A. DHCPACK",
   "B. DHCPREQUEST",
   "C.DHCPOFFER",
   "D.DHCPDISCOVER"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0808",
  "theme": "acl-l2security",
  "type": "single",
  "question": "VLAN ホッピング攻撃からネットワークを保護するアクションはどれですか?",
  "choices": [
   "A. インターネットに面した VLAN にポート セキュリティを実装します。",
   "B. ネイティブ VLAN を未使用の VLAN ID に変更します。",
   "C. 動的 ARP 検査を有効にする。",
   "D. トラフィックが VLAN を変更しないように ACL を設定します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0809",
  "theme": "acl-l2security",
  "type": "single",
  "question": "不明な MAC アドレスからのトラフィックをドロップし、SNMP トラップを転送するポート セキュリティ違反モードはどれですか?",
  "choices": [
   "A. VLAN のシャットダウン",
   "B. 保護",
   "C. 制限",
   "D. シャットダウン"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0810",
  "theme": "aaa",
  "type": "drag_drop",
  "question": "AAA サービスに関するステートメントを左側から右側の対応する AAA サービスにドラッグ アンド ドロップします。すべてのオプションが使用されるわけではありません。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "「あなたが誰であるか」を確認します。",
    "TACACS+ 経由でユーザー検証を実行します。",
    "各接続の継続時間を記録します。",
    "ユーザー アクセス レポートをサポートします。",
    "ユーザーが実行できる CLI コマンドを制限します。",
    "FTP サーバーなどのネットワーク資産へのアクセスを許可します。"
   ],
   "targets": [
    {
     "label": "アカウンティング",
     "slots": 2
    },
    {
     "label": "認可",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0811",
  "theme": "aaa",
  "type": "multiple",
  "question": "アクセスポイントの認証と構成に管理者が使用するプロトコルはどれですか(2つ選択)。",
  "choices": [
   "A. ケルベロス",
   "B. 802.1Q",
   "C. 802.1x",
   "D. TACACS+",
   "E. RADIUS"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0812",
  "theme": "aaa",
  "type": "drag_drop",
  "question": "[AAA]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ユーザーごとに属性を割り当てます",
    "ログイン試行を許可または拒否",
    "ユーザーが実行できる CLI コマンドを制限します",
    "ローカル、PPP、RADIUS、TACACS+をサポート"
   ],
   "targets": [
    {
     "label": "認証",
     "slots": 2
    },
    {
     "label": "認可",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0813",
  "theme": "aaa",
  "type": "drag_drop",
  "question": "[AAA機能]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "デバイスがユーザーまたはグループベースのアクセスを許可できるようにします",
    "RADIUSサーバーを活用してリバースTelnetセッションへのユーザーアクセスを許可",
    "デバイスへのアクセスを許可する前にユーザーを検証",
    "ユーザーが実行できる CLI コマンドを制限します"
   ],
   "targets": [
    {
     "label": "認証",
     "slots": 2
    },
    {
     "label": "認可",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0814",
  "theme": "aaa",
  "type": "drag_drop",
  "question": "[AAA]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "TACACSを介してユーザー検証を実行します。",
    "各接続の継続時間を記録します。",
    "「あなたが誰であるか」を確認します。",
    "ユーザー アクセス レポートをサポートします。"
   ],
   "targets": [
    {
     "label": "アカウンティング",
     "slots": 2
    },
    {
     "label": "認証",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0815",
  "theme": "aaa",
  "type": "drag_drop",
  "question": "[AAA]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ローカル、PPP、RADIUS、TACACS オプションをサポートします",
    "ユーザーが使用しているサービスを追跡します",
    "ログイン試行を許可または拒否します",
    "ユーザーが消費したネットワークリソースの量を記録します"
   ],
   "targets": [
    {
     "label": "アカウンティング",
     "slots": 2
    },
    {
     "label": "認証",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0816",
  "theme": "aaa",
  "type": "single",
  "question": "WPA3 に実装された拡張機能とは何ですか。",
  "choices": [
   "A. アクセス ポイントを識別するために PKI と RADIUS を採用する",
   "B. 802.1x 認証と AES-128 暗号化を適用する",
   "C. TKIP とパケットごとのキーイングを使用する",
   "D. 認証解除攻撃と関連付け解除攻撃から防御する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0817",
  "theme": "aaa",
  "type": "drag_drop",
  "question": "[AAA]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ユーザーが実行できる CLI コマンドを制限します",
    "TACACS+を使用して、ネットワーク管理者が入力した設定コマンドを記録します",
    "ユーザーがリモートサーバー上のネットワークにアクセスした時間の長さを記録します",
    "デバイスがユーザーまたはグループベースのアクセスを許可できるようにします"
   ],
   "targets": [
    {
     "label": "アカウンティング",
     "slots": 2
    },
    {
     "label": "認可",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0818",
  "theme": "aaa",
  "type": "single",
  "question": "AAA 認証と認可の違いは何ですか。",
  "choices": [
   "A. 認証はユーザがアクセスするシステムプロセスを制御し、認可はユーザが開始する活動を記録する。",
   "B. 認証はシステムにアクセスしようとするユーザーを識別し、認可はユーザーのパスワードを検証する。",
   "C. 認証はシステムにアクセスしようとしているユーザを識別・検証し、認可はユーザが実行するタスクを制御する。",
   "D. 認証はユーザ名とパスワードを検証し、認可は認証エージェントとユーザデータベース間の通信を処理する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0819",
  "theme": "aaa",
  "type": "drag_drop",
  "question": "AAA サービスに関するステートメントを左側から右側の対応する AAA サービスにドラッグ アンド ドロップします。すべてのオプションが使用されるわけではありません。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "FTP サーバーなどのネットワークへのアクセスを許可します。",
    "「あなたが誰であるか」を確認します。",
    "TACACS+ 経由でユーザー検証を実行します。",
    "ユーザー アクセス レポートをサポートします。",
    "ユーザーが実行できる CLI コマンドを制限します。",
    "各接続の継続時間を記録します。"
   ],
   "targets": [
    {
     "label": "認証",
     "slots": 2
    },
    {
     "label": "認可",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0820",
  "theme": "aaa",
  "type": "multiple",
  "question": "認証とアカウンティングを区別する 2 つの文はどれですか。(2つ選択)",
  "choices": [
   "A. 認証のみがユーザーに資格情報を要求し、応答を返します。",
   "B. 認証のみがユーザー アクティビティ監査をサポートします。",
   "C. 認証のみが「あなたが誰であるか」を検証します",
   "D. 認証のみがユーザーの接続期間を記録します。",
   "E. 認証のみが課金ユーザーにサポート情報を提供します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0821",
  "theme": "aaa",
  "type": "multiple",
  "question": "RADIUSサーバーを使って全ユーザーとデバイスを認証したいが、すべての端末がdot1xに対応しているわけではありません。この要件を満たすには、どの設定を変更しますか。（2つ選択）",
  "choices": [
   "A. [レイヤ2] タブで［AutoConfig iPSK］を有効にします。",
   "B. [AAAサーバー]タブで[認証サーバー]を選択します。",
   "C. [レイヤ2] タブで［エンタープライズセキュリティ］タイプを設定します。",
   "D. [レイヤ3] タブで［認証］を設定します。",
   "E. [レイヤ2」タブで「WPA2ポリシー」を有効にします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0822",
  "theme": "aaa",
  "type": "single",
  "question": "事前に設定された秘密鍵とSSIDを使用し、セキュリティ保護された鍵ハッシュアルゴリズムを設定する必要があります。ユーザー認証方法としてAAAサーバーを使用しないでください。このタスクを完了するには、どのアクションを実行すればよいですか。",
  "choices": [
   "A. PSK-SHA2を設定します",
   "B. キー文字列を使用してPSKフォーマットをHEXに設定します",
   "C. CCMP128(AES)を設定します",
   "D. AutoConfig iPSKを有効にします"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0823",
  "theme": "aaa",
  "type": "multiple",
  "question": "管理者がアクセス ポイントの認証と構成に使用する 2 つのプロトコルはどれですか。(2つ選択)",
  "choices": [
   "A. 802.1Q",
   "B. RADIUS",
   "C. Kerberos",
   "D. TACACS+",
   "E. 802.1x"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0824",
  "theme": "aaa",
  "type": "single",
  "question": "アクセス要求パケット内のどのフィールドが RADIUS によって暗号化されますか。",
  "choices": [
   "A. 認可されたサービス",
   "B. パスワード",
   "C. 識別子",
   "D. ユーザー名"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0825",
  "theme": "aaa",
  "type": "single",
  "question": "次世代IPSの機能とは何ですか。",
  "choices": [
   "A. ユーザーアクティビティとネットワークイベントを相関させる",
   "B. コントローラーベースのネットワーク内でコントローラーとして機能する",
   "C. RADIUS サーバーと統合して、レイヤー 2 デバイス認証ルールを適用する。",
   "D. 学習した MAC アドレスに基づいて転送を決定する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0826",
  "theme": "aaa",
  "type": "single",
  "question": "WLC への管理アクセスを提供するために RADIUS が選択されている場合、どのサービスが欠落していますか。",
  "choices": [
   "A. 認可",
   "B. 認証",
   "C. アカウンティング",
   "D. 機密性"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0827",
  "theme": "aaa",
  "type": "single",
  "question": "WPA3 に実装された拡張機能とは何ですか。",
  "choices": [
   "A. 802.1x 認証と AES-128 暗号化を適用する。",
   "B. PKI と RADIUS を使用してアクセス ポイントを識別する",
   "C. TKIP とパケットごとのキーイングを使用する",
   "D. 認証解除および関連付け解除攻撃を防御する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0828",
  "theme": "aaa",
  "type": "single",
  "question": "中間者攻撃を防ぐためにどのセキュリティ方式が使用されますか。",
  "choices": [
   "A. 認証",
   "B. アンチリプレイ",
   "C. 認可",
   "D. アカウンティング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0829",
  "theme": "aaa",
  "type": "single",
  "question": "ユーザーがユーザー名とパスワードを使用してネットワーク デバイスにログインすると、どの管理セキュリティ プロセスが呼び出されますか。",
  "choices": [
   "A. 認証",
   "B. 監査",
   "C. アカウンティング",
   "D. 認可"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0830",
  "theme": "aaa",
  "type": "single",
  "question": "AAA認証の3つの要素として誤っているものはどれか。",
  "choices": [
   "A. Authentication（認証）、Access（アクセス）、Audit（監査）",
   "B. Authentication（認証）、Authorization（認可）、Availability（可用性）",
   "C. Authorization（認可）、Access（アクセス）、Accounting（課金記録）",
   "D. Authentication（認証）、Authorization（認可）、Accounting（課金記録）"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0831",
  "theme": "aaa",
  "type": "single",
  "question": "次の中から、aAA認証の3つの要素として正しいものはどれか。",
  "choices": [
   "A. Authentication（認証）、Authorization（認可）、Availability（可用性）",
   "B. Authorization（認可）、Access（アクセス）、Accounting（課金記録）",
   "C. Authentication（認証）、Access（アクセス）、Audit（監査）",
   "D. Authentication（認証）、Authorization（認可）、Accounting（課金記録）"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0832",
  "theme": "aaa",
  "type": "single",
  "question": "WPA3-Personalが使用する認証方式はどれか。",
  "choices": [
   "A. PSK（Pre-Shared Key）",
   "B. SAE（Simultaneous Authentication of Equals）",
   "C. 802.1X",
   "D. TACACS+"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0833",
  "theme": "aaa",
  "type": "single",
  "question": "RADIUSとTACACS+の比較として適切な説明を1つ選びなさい。",
  "choices": [
   "A. RADIUSはTCPを使用し、TACACS+はUDPを使用する",
   "B. 両方ともUDPを使用する",
   "C. 両方ともTCPを使用する",
   "D. RADIUSはUDPを使用し、TACACS+はTCPを使用する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0834",
  "theme": "aaa",
  "type": "single",
  "question": "AAA認証の3つの要素として誤っているものはどれか。",
  "choices": [
   "A. Authentication（認証）、Access（アクセス）、Audit（監査）",
   "B. Authentication（認証）、Authorization（認可）、Availability（可用性）",
   "C. Authorization（認可）、Access（アクセス）、Accounting（課金記録）",
   "D. Authentication（認証）、Authorization（認可）、Accounting（課金記録）"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0835",
  "theme": "aaa",
  "type": "single",
  "question": "RADIUSとTACACS+の比較として誤っているものはどれか。",
  "choices": [
   "A. RADIUSはTCPを使用し、TACACS+はUDPを使用する",
   "B. 両方ともTCPを使用する",
   "C. RADIUSはUDPを使用し、TACACS+はTCPを使用する",
   "D. 両方ともUDPを使用する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0836",
  "theme": "aaa",
  "type": "single",
  "question": "RADIUSとTACACS+の比較として誤っているものはどれか。",
  "choices": [
   "A. 両方ともTCPを使用する",
   "B. 両方ともUDPを使用する",
   "C. RADIUSはTCPを使用し、TACACS+はUDPを使用する",
   "D. RADIUSはUDPを使用し、TACACS+はTCPを使用する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0837",
  "theme": "aaa",
  "type": "single",
  "question": "RADIUSとTACACS+の比較として誤っているものはどれか。",
  "choices": [
   "A. RADIUSはUDPを使用し、TACACS+はTCPを使用する",
   "B. RADIUSはTCPを使用し、TACACS+はUDPを使用する",
   "C. 両方ともUDPを使用する",
   "D. 両方ともTCPを使用する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0838",
  "theme": "aaa",
  "type": "drag_drop",
  "question": "AAA に関するステートメントを左側から右側の対応する AAA サービスにドラッグ アンド ドロップします。すべてのオプションが使用されるわけではありません。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ユーザーが実行できる CLI コマンドに到達します。",
    "ユーザーが消費したネットワーク リソースの量を記録します。",
    "ログイン試行を許可し、導出します。",
    "ユーザーごとに属性を割り当てます。",
    "ユーザーが使用しているサービスを追跡します。",
    "ローカル、PPP、RADIUS、TACACS+ オプションをサポートします。"
   ],
   "targets": [
    {
     "label": "認証",
     "slots": 2
    },
    {
     "label": "認可",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0839",
  "theme": "aaa",
  "type": "drag_drop",
  "question": "AAA サービスに関するステートメントを左側から右側の対応する AAA サービスにドラッグ アンド ドロップします。すべてのオプションが使用されるわけではありません。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "FTP サーバーなどのネットワーク資産へのアクセスを許可します。",
    "「あなたが誰であるか」を確認します。",
    "各接続の継続時間を記録します。",
    "TACACS+ 経由でユーザー検証を実行します。",
    "ユーザー アクセス レポートをサポートします。",
    "ユーザーが利用できるサービスを制限します。"
   ],
   "targets": [
    {
     "label": "Accounting",
     "slots": 2
    },
    {
     "label": "認可",
     "slots": 2
    }
   ]
  }
 },
 {
  "qid": "CCNA-0840",
  "theme": "aaa",
  "type": "single",
  "question": "次世代 IPS の機能とは何ですか？",
  "choices": [
   "A. ネットワーク内で観察された脆弱性を分析し、軽減します。",
   "B. コントローラーベースのネットワーク内でコントローラーとして機能します。",
   "C. RADIUS サーバーと統合して、レイヤー 2 デバイス認証ルールを適用します。",
   "D. 学習した MAC アドレスに基づいて転送を決定します 。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0841",
  "theme": "security-vpn",
  "type": "single",
  "question": "バックドアマルウェアの定義は何ですか。",
  "choices": [
   "A. 他の悪意のあるプログラムを起動するために使用される悪意のあるプログラム",
   "B. ユーザーのマシンに感染し、そのマシンを使用してスパムを送信する悪意のあるコード",
   "C. 他の悪意のあるコードをダウンロードすることを主な目的とする悪意のあるコード",
   "D. 権限のないユーザーによるアクセスを許可するためにインストールされる悪意のあるコード"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0842",
  "theme": "security-vpn",
  "type": "single",
  "question": "個々のネットワーク エンドポイントを攻撃から保護するためのソリューションとして何が使用されていますか。",
  "choices": [
   "A. ルーター",
   "B. ワイヤレス コントローラー",
   "C. ウイルス対策ソフトウェア",
   "D. Cisco DNA Center"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0843",
  "theme": "security-vpn",
  "type": "single",
  "question": "ネットワーク セキュリティ チームは、フィッシング攻撃の被害者となる従業員が増加していることに気づきました。この問題を軽減するには、どのセキュリティ プログラムを導入しますか。",
  "choices": [
   "A. ユーザー意識向上トレーニング",
   "B. 電子メールシステムのパッチ",
   "C. すべての PC でソフトウェアファイアウォールを有効にする",
   "D. 物理的なアクセス制御"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0844",
  "theme": "security-vpn",
  "type": "single",
  "question": "WPA3-SAEを使用したSSIDはワイヤレスクライアントによって使用されている間、どのような機能を持つか。",
  "choices": [
   "A. エアスニッフィング攻撃に対するネットワークセキュリティを低下させ、複雑なパスワードの使用を抑制します。",
   "B. オフライン辞書攻撃に対するネットワークセキュリティを向上させ、時間のかかる総当たり攻撃を抑制します。",
   "C. 中間者攻撃に対するネットワーク・セキュリティを高め、サービス拒否攻撃を抑制する。",
   "D. オフライン辞書攻撃に対するネットワークセキュリティを低下させ、ネットワークへの容易なアクセスを促す。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0845",
  "theme": "security-vpn",
  "type": "multiple",
  "question": "ソーシャル エンジニアリングに分類される攻撃の 2 つのタイプはどれですか。(2つ選択)",
  "choices": [
   "A. フォーニング",
   "B. マルバタイジング",
   "C. プロービング",
   "D. ファーミング",
   "E. フィッシング"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0846",
  "theme": "security-vpn",
  "type": "single",
  "question": "ゼロデイエクスプロイトとは何ですか。",
  "choices": [
   "A. ネットワークが悪意のあるトラフィックで飽和し、リソースと帯域幅に過負荷がかかる場合",
   "B. 攻撃者が SQL サーバーに悪意のあるコードを挿入した場合",
   "C. 修正が利用可能になる前に、新しいネットワークの脆弱性が発見された場合",
   "D. 加害者が 2 者間の会話に介入し、データをキャプチャまたは改ざんする場合"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0847",
  "theme": "security-vpn",
  "type": "multiple",
  "question": "ネットワーク内で許容可能なセキュリティ体制を実現するには、どの 2 つの実践が推奨されますか。(2つ選択)",
  "choices": [
   "A. 暗号化キーチェーンを使用してネットワーク デバイスを認証する。",
   "B. 内部電子メール サーバーとファイル サーバーを指定された DMZ に配置する。",
   "C. 安全に取得できるように、デバイス構成を暗号化された USB ドライブにバックアップする。",
   "D. 未使用または不要なポート、インターフェイス、およびサービスを無効にする。",
   "E. ネットワーク機器を安全な位置に保管する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0848",
  "theme": "security-vpn",
  "type": "single",
  "question": "どの WLC 管理接続タイプが中間者攻撃に対して脆弱ですか?",
  "choices": [
   "A. コンソール",
   "B. Telnet",
   "C. SSH",
   "D. HTTPS"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0849",
  "theme": "security-vpn",
  "type": "single",
  "question": "中間者攻撃を防ぐためにどのセキュリティ方式が使用されますか?",
  "choices": [
   "A. authentication",
   "B. anti-replay",
   "C. authorization",
   "D. accounting"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0850",
  "theme": "security-vpn",
  "type": "multiple",
  "question": "ソーシャル エンジニアリングに分類される攻撃の 2 種類はどれですか? (2 つお選びください。)",
  "choices": [
   "A. phoning",
   "B. malvertising",
   "C. probing",
   "D. pharming",
   "E. phishing"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0851",
  "theme": "security-vpn",
  "type": "single",
  "question": "セキュリティを強化するために、組織はデータ センターへのアクセスを制限するバッジ認証を実装します。セキュリティプログラムの要素はどれですか。",
  "choices": [
   "A. ユーザートレーニング",
   "B. ユーザーの意識",
   "C. 脆弱性の検証",
   "D. 物理的なアクセス制御"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0852",
  "theme": "security-vpn",
  "type": "multiple",
  "question": "物理的なアクセス制御要素をサポートするタスクはどれですか。(2つ選択)",
  "choices": [
   "A. ビデオ監視システムを導入する",
   "B. 企業のセキュリティポリシーに関するワークショップを実施する",
   "C. 重要な場所へのバッジアクセスを実装する",
   "D. 新しいセキュリティ規制に関するスライドショーを作成する",
   "E. 組織の機密データを保護する方法に関する情報を配布する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0853",
  "theme": "security-vpn",
  "type": "single",
  "question": "組織は新しいセキュリティポリシーを策定し、そのポリシーを印刷して全従業員に配布し、従業員がポリシーを確認し適用するように決定しました。この組織が実施しているセキュリティプログラムの要素はどれですか？",
  "choices": [
   "A. 資産の特定",
   "B. ユーザートレーニング",
   "C. 物理的アクセス制御",
   "D. 脆弱性制御"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0854",
  "theme": "security-vpn",
  "type": "single",
  "question": "従業員が意図せず電子メールで機密情報を漏洩するのを防ぐのに役立つセキュリティ プログラムの要素はどれですか。",
  "choices": [
   "A. ワークステーションの画面録画",
   "B. ユーザー啓発キャンペーン",
   "C. 制御されたインターネットアクセス",
   "D. 物理的なアクセス制御"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0855",
  "theme": "security-vpn",
  "type": "single",
  "question": "従業員のグループが 1 人の ID バッジを使用して建物に侵入した場合、どのタイプのセキュリティ プログラムに違反しますか。",
  "choices": [
   "A. 侵入検知",
   "B. ネットワーク認証",
   "C. 物理的アクセス制御",
   "D. ユーザーの意識"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0856",
  "theme": "security-vpn",
  "type": "single",
  "question": "組織のセキュリティ プログラムの一部として物理的アクセス制御を実装するアクションはどれですか。",
  "choices": [
   "A. 主要なインフラストラクチャを監視するための IP カメラの設定",
   "B. コンソールポートのパスワードの設定",
   "C. リモートの場所での syslog のバックアップ",
   "D. ネットワークデバイスでのイネーブルパスワードの設定"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0857",
  "theme": "security-vpn",
  "type": "single",
  "question": "パスワード保護を実装する場合、どのようなアクションを実行しますか。",
  "choices": [
   "A. パスワードを、シングルファクタ認証を使用してモバイル デバイスの連絡先として保存します。",
   "B. 上級 IT 管理者とパスワードを共有し、適切な監視を確保します。",
   "C. 特殊文字を含め、パスワードは可能な限り長くします。",
   "D. パスワードが複雑な場合は、8 文字未満の長さを使用します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0858",
  "theme": "security-vpn",
  "type": "single",
  "question": "自動化されたネットワーク管理アプローチを実装する理由は何ですか。",
  "choices": [
   "A. ネットワーク構成の不整合を削減します",
   "B. 定期的な管理コストが増加します",
   "C. 「ボックス単位」の構成と展開を可能にします",
   "D. 単純なパスワード ポリシーを解読します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0859",
  "theme": "security-vpn",
  "type": "single",
  "question": "管理者が自動化されたネットワーク管理ソリューションの実装を選択するのはなぜでしょうか。",
  "choices": [
   "A. ボックスごとの構成と展開を可能にするため",
   "B. 定期的な管理コストを制限するため",
   "C. 運用コストを削減するため",
   "D. よりシンプルなパスワード ポリシーをサポートするため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0860",
  "theme": "security-vpn",
  "type": "single",
  "question": "会社はすべてのシステムに多要素認証を要求することを決定しました。どのパラメータ セットが要件を満たしていますか。",
  "choices": [
   "A. 個人の 10 桁の PIN と RSA 証明書",
   "B. 複雑なパスワードと個人の 10 桁の PIN",
   "C. 8 文字から 15 文字のパスワードと個人の 12 桁の PIN",
   "D. 指紋スキャンと顔認識"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0861",
  "theme": "security-vpn",
  "type": "single",
  "question": "企業デバイスが企業ネットワークにログインできるようにするために実装されているパスワード認証以外の方法として最適なものはどれか。",
  "choices": [
   "A. デジタル証明書",
   "B. マジックリンク",
   "C. ワンタイムパスワード",
   "D. 90日ごとの更新ポリシー"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0862",
  "theme": "security-vpn",
  "type": "single",
  "question": "安全なパスワードポリシーを作成するのに役立つガイドラインはどれか。",
  "choices": [
   "A. パスワードマネージャーにパスワードを保存することをユーザーに禁止する",
   "B. サービスアカウントで使用されるパスワードが期限切れにならないようにする",
   "C. 単純な短いパスワードではなく、複雑で長いパスワードを要求する",
   "D. パスワードの共有を非常に小さなグループに制限する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0863",
  "theme": "security-vpn",
  "type": "single",
  "question": "WPA3が従来よりも高度なセキュリティを提供できる仕組みはどれか。",
  "choices": [
   "A. 自動デバイスペアリング",
   "B. 共有鍵における特殊文字のサポート",
   "C. 証明書ベースの認証",
   "D. SAE パスワードベースの鍵交換"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0864",
  "theme": "security-vpn",
  "type": "single",
  "question": "認証に成功するために、ユーザーが物理的な属性を提供する必要がある認証方法はどれですか。",
  "choices": [
   "A. 証明書",
   "B. パスワード",
   "C. 多要素",
   "D. バイオメトリクス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0865",
  "theme": "security-vpn",
  "type": "single",
  "question": "攻撃者がシステム管理者の平文のパスワードをスニッフィング（盗聴）できた場合の、パスワード攻撃を軽減する適切な解決策は何ですか。",
  "choices": [
   "A. 次世代ファイアウォールによって、ステートフルパケットインスペクションを維持する。",
   "B. 2つの異なる認証ソースを使用する多要素認証",
   "C. ACL を使用して、受信する Telnet セッションを「admin」アカウントに制限する。",
   "D. 既知の攻撃ベクトルのブロックリストを持つIPS"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0866",
  "theme": "security-vpn",
  "type": "single",
  "question": "機械学習はネットワークセキュリティにどのような利点をもたらしますか。",
  "choices": [
   "A. リアルタイムの脅威検出を改善します",
   "B. ファイアウォールのルール セットを管理します",
   "C. パスワードの複雑さの要件を適用します",
   "D. VPN アクセス権限を制御します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0867",
  "theme": "security-vpn",
  "type": "single",
  "question": "ワンタイムパスワード、ログイン名、個人のスマートフォンの組み合わせを使用するセキュリティ要素はどれですか?",
  "choices": [
   "A. ソフトウェア定義セグメンテーション",
   "B. 多要素認証",
   "C. 属性ベースアクセス制御",
   "D. ルールベースアクセス制御"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0868",
  "theme": "security-vpn",
  "type": "single",
  "question": "新しい多要素認証ソリューションを導入する場合、どの方法の組み合わせが最低限のセキュリティ要件を満たしますか?",
  "choices": [
   "A. 8～15文字のパスワードと12桁の個人用PIN",
   "B. 認証されたUSBドングルと携帯電話",
   "C. 複雑なパスワードと時間ベースのワンタイムパスワード",
   "D. 指紋スキャンと顔認識"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0869",
  "theme": "security-vpn",
  "type": "single",
  "question": "多要素認証の主な機能は何ですか？",
  "choices": [
   "A. 3つの認証要素を用いてエンドユーザーの権限を識別する",
   "B. 2つの認証要素を用いてエンドユーザーを認証および認可する",
   "C. 2つ以上の認証要素を用いてエンドユーザーの本人確認を行う",
   "D. 2つの認証要素を用いてエンドユーザーのアクセス権限を検証する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0870",
  "theme": "security-vpn",
  "type": "single",
  "question": "ダイジェスト認証のどの機能が、資格情報が平文で送信されるのを防ぎますか？",
  "choices": [
   "A. SSL/TLS暗号化",
   "B. チャレンジレスポンス方式",
   "C. トークンベース認証",
   "D. 公開鍵基盤"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0871",
  "theme": "security-vpn",
  "type": "multiple",
  "question": "複数の支社や大規模な導入向けにシスコが推奨するVPN テクノロジーはどれか(2つ選択)。",
  "choices": [
   "A. IPsec リモートアクセス",
   "B. サイト間 VPN",
   "C. クライアントレス VPN",
   "D. GETVPN",
   "E. DMVPN"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0872",
  "theme": "security-vpn",
  "type": "multiple",
  "question": "IPsec スイート内のプロトコルは何ですか。(2つ選択)",
  "choices": [
   "A. 3DES",
   "B. AH",
   "C. ESP",
   "D. TLS",
   "E. AES"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0873",
  "theme": "security-vpn",
  "type": "single",
  "question": "RSAの特徴は何ですか。",
  "choices": [
   "A. 暗号化には事前共有キーを使用します。",
   "B. 非対称暗号化アルゴリズムです。",
   "C. 暗号化には両側に同一のキーが必要です。",
   "D. 対称復号化アルゴリズムです。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0874",
  "theme": "security-vpn",
  "type": "single",
  "question": "パケットの宛先がセキュリティ終端ポイントと異なる場合、どの IPsec 暗号化モードが適切ですか。",
  "choices": [
   "A. トンネル",
   "B. メイン",
   "C. アグレッシブ",
   "D. トランスポート"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0875",
  "theme": "security-vpn",
  "type": "single",
  "question": "パケットの送信元および宛先 IP アドレス部分が暗号化されていないサイト間 VPN 接続からパケットが送信される場合、どの暗号化モードが使用されますか。",
  "choices": [
   "A. PPTP",
   "B. セキュアシェル",
   "C. トランスポート",
   "D. PPPoE"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0876",
  "theme": "security-vpn",
  "type": "single",
  "question": "IPsecはどのようにして組織内のアプリケーションに安全なネットワークを提供するのでしょうか。",
  "choices": [
   "A. TFTPを活用し、ネットワーク上のピア間で安全なファイル転送を行います。",
   "B. ネットワークノード間でトラフィックを安全に転送するGREトンネルを提供します。",
   "C. ピア間のセキュリティ・アソシエーションのセットを可能にする。",
   "D. FTPを利用して、ネットワーク上のノード間のファイル転送をセキュアにします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0877",
  "theme": "security-vpn",
  "type": "multiple",
  "question": "企業内のファイアウォールの 2 つの機能は何ですか。(2つ選択)",
  "choices": [
   "A. スタンドアロンモードでサイト間VPNのエンドポイントとして機能します。",
   "B. URLベースのトラフィックフィルタリングを有効にする。",
   "C. マルチコンテキストモードでリモートアクセスVPNのエンドポイントとしてサポートします。",
   "D. ホスト間でレイヤー2サービスを提供します。",
   "E. ワイヤレスデバイスのネットワーク接続を可能にします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0878",
  "theme": "security-vpn",
  "type": "single",
  "question": "IPsec VPNの展開を計画する際に考慮すべきことは何か。",
  "choices": [
   "A. IPsecトランスポートモードでは、中間デバイスがパケットの最終宛先を確認できる",
   "B. IPsecトンネルモードでは、IPペイロードのみが暗号化される",
   "C. IPsecトランスポートモードでは、トンネルモードのGREトンネルのセキュリティが向上する",
   "D. IPsecトランスポートモードでは、レイヤー4ヘッダーが暗号化されないため、パケットの完全な検査が可能になる"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0879",
  "theme": "security-vpn",
  "type": "single",
  "question": "IPパケット全体をカプセル化するIPsecモードはどれか。",
  "choices": [
   "A. トンネル",
   "B. トランスポート",
   "C. SSL VPN",
   "D. Q-in-Q"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0880",
  "theme": "security-vpn",
  "type": "single",
  "question": "IPsec VPNの実装時に考慮しなければならない要素はどれか。",
  "choices": [
   "A. IPsecトランスポートモードは、検査のためにレイヤ4ヘッダを暗号化せずに残す。",
   "B. IPsecトランスポートモードは、トンネルモードよりもGREトンネルのセキュリティを向上させます。",
   "C. IPsec トンネルモードでは、IP ペイロードだけが暗号化されます。",
   "D. IPsec トンネルモードでは、元の IP データグラム全体が暗号化されます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0881",
  "theme": "security-vpn",
  "type": "multiple",
  "question": "IPsecサイト間VPNにおけるトンネルモードの主な機能は何ですか。(2つ選択)",
  "choices": [
   "A. オリジナルパケットのデータフィールドを認証する",
   "B. データフィールドと完全なIPパケットを暗号化する",
   "C. パケット内のデータフィールドのみを保護する",
   "D. 元のパケットヘッダが見える状態で送信する",
   "E. 新しいIPアドレスを持つ新しいIPsecヘッダを挿入します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0882",
  "theme": "security-vpn",
  "type": "single",
  "question": "純粋なIPsecで送信されるトラフィックのタイプはどれか。",
  "choices": [
   "A. 2つの異なるサイトにあるスイッチ間のスパニングツリー更新",
   "B. リモートサイトのホストから本社のサーバーへのユニキャストメッセージ",
   "C. 複数のリモートサイトの1つにあるMACアドレスを見つけようとするスイッチからのブロードキャストパケット",
   "D. あるサイトのサーバーから別のサイトのホストへのマルチキャストトラフィック"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0883",
  "theme": "security-vpn",
  "type": "single",
  "question": "RSAの特徴は何ですか。",
  "choices": [
   "A. 双方が同一の鍵を持つ必要がある",
   "B. 秘密鍵暗号化アルゴリズムである",
   "C. 暗号化に共有鍵を使用する",
   "D. 公開鍵暗号方式である"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0884",
  "theme": "security-vpn",
  "type": "single",
  "question": "管理者がリモート アクセス IPsec VPN の実装を選択するのはなぜですか?",
  "choices": [
   "A. インターネット経由でリモートユーザーとプライベートNWの間に暗号化されたトンネルを確立するため",
   "B. SSLを使用してWebブラウザ経由でインターネット対応の任意の場所から企業NWにアクセスできるようにするため",
   "C. HTTPSサーバー、認証サブシステム、およびエンドユーザー間の安全なリンクを提供するため",
   "D. ネゴシエートされたVPNゲートウェイ経由でデバイスとユーザー間の認証に暗号化を使用するため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0885",
  "theme": "security-vpn",
  "type": "single",
  "question": "従業員がパブリック Wi-Fi から安全なサーバーにアクセスする場合、どのタイプのVPN 接続が使用されますか。",
  "choices": [
   "A. サイト間",
   "B. ルータ間",
   "C. リモート",
   "D. オープン"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0886",
  "theme": "security-vpn",
  "type": "single",
  "question": "サイト間 VPN が構成されている場合、元の IP パケット全体のカプセル化と暗号化を提供する IPsec モードはどれですか。",
  "choices": [
   "A. AH を使用した IPsec トランスポート モード",
   "B. AH を使用した IPsec トンネル モード",
   "C. ESP を使用した IPsec トランスポート モード",
   "D. ESP を使用した IPsec トンネル モード"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0887",
  "theme": "security-vpn",
  "type": "single",
  "question": "リモート アクセス VPN の機能とは何ですか。",
  "choices": [
   "A. 2 つのブランチ サイト間に安全なトンネルを確立する。",
   "B. 暗号化トンネリングを使用して、複数のユーザーのデータのプライバシーを同時に保護する。",
   "C. ユーザーが企業の内部ネットワークに接続している場合にのみ使用される。",
   "D. ユーザーが安全なトンネルを通じて社内ネットワーク リソースにアクセスできるようにする。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0888",
  "theme": "security-vpn",
  "type": "single",
  "question": "サイト間 VPN が使用される場合、ユーザー データの転送はどのプロトコルが担当しますか。",
  "choices": [
   "A. IPsec",
   "B. IKEv1",
   "C. MD5",
   "D. IKEv2"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0889",
  "theme": "security-vpn",
  "type": "single",
  "question": "リモート サイト間でマルチキャスト トラフィックを伝送し、暗号化をサポートするメカニズムは何ですか。",
  "choices": [
   "A. ISATAP",
   "B. IPsec over ISATAP",
   "C. GRE",
   "D. GRE over IPsec"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0890",
  "theme": "security-vpn",
  "type": "single",
  "question": "IP ヘッダーとペイロードを暗号化する IPsec トランスポート モードはどれですか。",
  "choices": [
   "A. パイプ",
   "B. トランスポート",
   "C. コントロール",
   "D. トンネル"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0891",
  "theme": "security-vpn",
  "type": "single",
  "question": "パケットの宛先がセキュリティ終端点と異なる場合、どの IPsec 暗号化モードが適切ですか?",
  "choices": [
   "A. transport",
   "B. main",
   "C. aggressive",
   "D. tunnel"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0892",
  "theme": "security-vpn",
  "type": "single",
  "question": "IPsec は組織内のアプリケーションに安全なネットワーキングをどのように提供しますか?",
  "choices": [
   "A. FTP を利用して、ネットワーク上のノード間のファイル転送を保護します。",
   "B. ネットワーク ノード間でトラフィックを安全に送信するための GRE トンネルを提供します。",
   "C. ピア間の一連のセキュリティ アソシエーションを有効にします。",
   "D. TFTP を利用して、ネットワーク上のピア間で安全なファイル転送を提供します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0893",
  "theme": "automation",
  "type": "single",
  "question": "ネットワーク環境で自動化を実装するのはなぜですか。",
  "choices": [
   "A. デバイス情報のストレージを一元管理するため",
   "B. すべてのデバイスにわたって一貫した構成状態を維持するプロセスを簡素化するため",
   "C. 管理プレーンをネットワークの残りの部分とは別に展開するため",
   "D. 一元化されたユーザーアカウント管理を実装するため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0894",
  "theme": "automation",
  "type": "single",
  "question": "ネットワーク管理者は、従来管理されたネットワーク上でネットワークの整合性を維持しながら、どのようにメンテナンス コストを削減しますか。",
  "choices": [
   "A. ネットワークの問題を早期に警告するために、自動化されたネットワーク監視システムを導入する",
   "B. ネットワークを積極的に管理するために、追加のネットワーク管理者を雇用する",
   "C. 自動化を使用してネットワーク管理タスクを集中化する",
   "D. 問題解決を確認する変更管理プロセスを自動化する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0895",
  "theme": "automation",
  "type": "single",
  "question": "自動化の実装を決定する際に、ネットワーク管理者は何を考慮すべきでしょうか。",
  "choices": [
   "A. 手作業による変更は、構成エラーや不整合の原因になることが多い。",
   "B. ネットワークの自動化は、通常、ネットワーク内の仮想デバイスの構成と管理に限定される。",
   "C. ネットワークの自動化は、通常、企業の管理運用コストを増加させます。",
   "D. 自動化されたシステムでは、ネットワークの変更を大規模に拡張することが困難な場合がある。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0896",
  "theme": "automation",
  "type": "single",
  "question": "ネットワークの自動化は、ネットワークのダウンタイムをどのように削減しますか？",
  "choices": [
   "A. ネットワーク管理者がネットワークの変更を実行した時に基づいてEメールを生成することができ、可視性が向上します。",
   "B. 設定テンプレートとテストを実装に組み込むことができ、ネットワーク変更の成功率を高めます。",
   "C. 一度に複数のデバイスで変更を並行して実施できるため、変更速度が向上する。",
   "D. インテント・ベースのコンフィギュレーションを備えた自動化プラットフォームを使用することで、すべての変更が実施前に機能停止の可能性がないかチェックされる。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0897",
  "theme": "automation",
  "type": "single",
  "question": "ネットワーク管理の自動化を導入すると、どのような結果が期待されますか。",
  "choices": [
   "A. 分散管理プレーンを使用する必要がある。",
   "B. 新しいデバイス構成が追加されると、複雑さが増す。",
   "C. ネットワーク デバイスを構成するにはカスタム アプリケーションが必要である。",
   "D. ソフトウェアのアップグレードは中央コントローラーから実行される。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0898",
  "theme": "automation",
  "type": "single",
  "question": "ネットワーク管理者は自動化の導入を決定する際に何を考慮する必要がありますか?",
  "choices": [
   "A. 自動化システムでは、ネットワークの変更を大規模に拡張することが難しい場合があります。",
   "B. ネットワークの自動化は通常、ネットワーク内の仮想デバイスの構成と管理に限定されます。",
   "C. ネットワークの自動化により、通常、企業管理の運用コストが増加します。",
   "D. 手動による変更により、構成エラーや不整合が頻繁に発生します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0899",
  "theme": "automation",
  "type": "drag_drop",
  "question": "[デバイス管理]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "カスタムおよび非標準構成の柔軟性が高い",
    "集中型ソフトウェア管理のサポート",
    "バックグラウンドデバイス構成の連携・自動化",
    "個別のソフトウェア管理を使用",
    "デバイスごとの管理に依存",
    "オープン API のサポート"
   ],
   "targets": [
    {
     "label": "Cisco DNA Center",
     "slots": 3
    },
    {
     "label": "従来型",
     "slots": 3
    }
   ]
  }
 },
 {
  "qid": "CCNA-0900",
  "theme": "automation",
  "type": "drag_drop",
  "question": "[Cisco DNA Center]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "アルゴリズムを使用してセキュリティ脅威を検出",
    "SDA をサポートしていない",
    "Cisco Prime Infrastructure を活用",
    "ノースバウンド API を使用",
    "エンタープライズ顧客の作業負荷を軽減",
    "複雑なプロトコルの手動設定が必要"
   ],
   "targets": [
    {
     "label": "従来のキャンパスデバイス管理",
     "slots": 3
    },
    {
     "label": "Cisco DNA Center",
     "slots": 3
    }
   ]
  }
 },
 {
  "qid": "CCNA-0901",
  "theme": "automation",
  "type": "single",
  "question": "SDN のノースバウンド REST API を説明するものは何ですか。",
  "choices": [
   "A. 制御プレーンとデータ プレーンのネットワーク要素向けインターフェイス",
   "B. GET、POST、PUT、および DELETE メソッドのアプリケーション向けインターフェイス",
   "C. GET、POST、PUT、および DELETE メソッドのネットワーク要素向けインターフェイス",
   "D. SNMP GET 要求のアプリケーション向けインターフェイス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0902",
  "theme": "automation",
  "type": "multiple",
  "question": "コントローラ ベースのアーキテクチャを実装する利点は何ですか。(2つ選択)",
  "choices": [
   "A. 複雑で大規模な IP アドレス指定スキームをサポートします。",
   "B. 拡張性と管理オプションが向上します。",
   "C. 仮想マシンへのシームレスな接続が可能になります。",
   "D. 構成タスクの自動化が可能になります。",
   "E. サービス拒否攻撃に対するセキュリティが強化されます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0903",
  "theme": "automation",
  "type": "single",
  "question": "SDN ネットワーク内でコントロール プレーンとデータ プレーンを分離する利点は何ですか。",
  "choices": [
   "A. ネットワーク全体の複雑さを軽減する",
   "B. データクエリをコントロールプレーンに制限する",
   "C. コストを削減する",
   "D. 仮想マシンの作成をデータプレーンにオフロードする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0904",
  "theme": "automation",
  "type": "drag_drop",
  "question": "[デバイス管理]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "STP 展開",
    "ルーティングされたアクセスの展開",
    "オーバーレイおよびアンダーレイ構成",
    "コンソール経由の構成",
    "VLAN および HSRP 構成",
    "VXLAN および LISP 構成"
   ],
   "targets": [
    {
     "label": "Cisco DNA Center",
     "slots": 3
    },
    {
     "label": "従来型",
     "slots": 3
    }
   ]
  }
 },
 {
  "qid": "CCNA-0905",
  "theme": "automation",
  "type": "single",
  "question": "データ プレーンによって提供される主要な機能は何ですか。",
  "choices": [
   "A. ルーティングの決定",
   "B. ルーティングテーブルデータの交換",
   "C. トラフィックを次のホップに転送",
   "D. パケットの発信"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0906",
  "theme": "automation",
  "type": "single",
  "question": "制御プレーンやデータプレーン機能に関連するコントローラベースのネットワークと、従来のネットワークの違いは何ですか。",
  "choices": [
   "A. コントローラベースのネットワークはすべての重要な制御プレーン機能を集中管理し、従来のネットワークは制御プレーン機能を分散管理する。",
   "B. 従来のネットワークは、すべての重要な制御プレーン機能を集中管理し、コントローラベースのネットワークは制御プレーン機能を分散管理する。",
   "C. 従来のネットワークは重要なデータプレーン機能をすべて集中管理し、コントローラベースのネットワークはデータプレーン機能を分散管理する。",
   "D. コントローラベースのネットワークがすべての重要なデータプレーン機能を集中管理し、従来のネットワークがデータプレーン機能を分散管理する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0907",
  "theme": "automation",
  "type": "single",
  "question": "ネットワークにおけるコントロールプレーンの機能は何ですか。",
  "choices": [
   "A. ネットワークデバイスへのCLIアクセスを提供する",
   "B. 他のルーターとトポロジー情報を交換する",
   "C. フォワーディング情報ベースでイグレスインターフェースを検索する",
   "D. 次のホップにトラフィックを転送する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0908",
  "theme": "automation",
  "type": "single",
  "question": "データ プレーンではどのネットワーク機能が実行されますか。",
  "choices": [
   "A. 受信 SSH 管理トラフィックの処理",
   "B. OSPF Hello パケットの送受信",
   "C. スパニングツリーの選択を容易にする",
   "D. リモートクライアント/サーバートラフィックの転送"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0909",
  "theme": "automation",
  "type": "single",
  "question": "データ プレーン内で発生するネットワーク アクションはどれですか。",
  "choices": [
   "A. 受信した ICMP エコー要求に応答する",
   "B. 受信した NETCONF RPC から構成を変更する",
   "C. ルーティング プロトコル (OSPF、EIGRP、RIP、BGP) を実行する",
   "D. 宛先 IP アドレスを IP ルーティング テーブルと比較する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0910",
  "theme": "automation",
  "type": "single",
  "question": "SDN ネットワーク内でコントロール プレーンをデータ プレーンから分離する利点は何ですか。",
  "choices": [
   "A. データクエリをコントロールプレーンに制限する",
   "B. コストを削減する",
   "C. ネットワーク全体の複雑性が軽減される",
   "D. 仮想マシンの作成をデータ プレーンにオフロードする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0911",
  "theme": "automation",
  "type": "single",
  "question": "次の中から、sDN（Software-Defined Networking）アーキテクチャにおいて、コントロールプレーンとデータプレーンの関係として正しいものはどれか。",
  "choices": [
   "A. コントロールプレーンは中央のコントローラーに集約され、データプレーンは各デバイスに残る",
   "B. コントロールプレーンとデータプレーンの両方がコントローラーに集約される",
   "C. コントロールプレーンとデータプレーンは常に同じデバイス上にある",
   "D. データプレーンがコントローラーに集約され、コントロールプレーンは各デバイスに残る"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0912",
  "theme": "automation",
  "type": "single",
  "question": "SDN（Software-Defined Networking）アーキテクチャにおいて、コントロールプレーンとデータプレーンの関係として誤っているものはどれか。",
  "choices": [
   "A. コントロールプレーンとデータプレーンの両方がコントローラーに集約される",
   "B. コントロールプレーンとデータプレーンは常に同じデバイス上にある",
   "C. データプレーンがコントローラーに集約され、コントロールプレーンは各デバイスに残る",
   "D. コントロールプレーンは中央のコントローラーに集約され、データプレーンは各デバイスに残る"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0913",
  "theme": "automation",
  "type": "drag_drop",
  "question": "デバイス管理に関するステートメントを左側から右側の対応するタイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "ノースバウンド API を使用する",
    "Cisco Prime インフラストラクチャを活用する",
    "企業顧客の作業負荷を軽減します",
    "SDA のサポートが不足している",
    "セキュリティ上の脅威を検出するアルゴリズムを使用する",
    "複雑なプロトコルを手動で設定する必要がある"
   ],
   "targets": [
    {
     "label": "従来のキャンパスデバイス管理",
     "slots": 3
    },
    {
     "label": "Cisco DNA センター",
     "slots": 3
    }
   ]
  }
 },
 {
  "qid": "CCNA-0914",
  "theme": "automation",
  "type": "drag_drop",
  "question": "デバイス管理テクノロジの使用例を左側から右側の対応するタイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "コンソール経由の設定",
    "ルーテッドアクセスの展開",
    "VLAN と HSRP の設定",
    "オーバーレイとアンダーレイの構成",
    "VXLAN と LISP の設定",
    "STP展開"
   ],
   "targets": [
    {
     "label": "Cisco DNA センター",
     "slots": 3
    },
    {
     "label": "従来型",
     "slots": 3
    }
   ]
  }
 },
 {
  "qid": "CCNA-0915",
  "theme": "automation",
  "type": "drag_drop",
  "question": "デバイス管理に関するステートメントを左側から右側の対応するデバイス管理タイプにドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "デバイスごとにデバイス構成を管理します。",
    "NetFlow を使用して潜在的なセキュリティ脅威を分析し、そのトラフィックに対して適切なアクションを実行します。",
    "セキュリティは、ファイアウォール、VPN、IPS を使用してネットワークの境界付近で管理されます。",
    "複数のデバイスに一貫した構成を適用するための CLI テンプレートをサポートしています。",
    "複数のツールとアプリケーションを使用して、さまざまな種類のデータを分析およびトラブルシューティングします。",
    "ネットワーク セキュリティと分析のための単一のインターフェイスを提供します。"
   ],
   "targets": [
    {
     "label": "Cisco DNA Center デバイス管理",
     "slots": 3
    },
    {
     "label": "従来のデバイス管理",
     "slots": 3
    }
   ]
  }
 },
 {
  "qid": "CCNA-0916",
  "theme": "automation",
  "type": "single",
  "question": "Northbound API の機能は何ですか。",
  "choices": [
   "A. ソフトウェアをアップグレードし、ファイルを復元します",
   "B. グローバルなプロビジョニングと構成に依存します",
   "C. 構成の分散処理をサポートします",
   "D. SDN コントローラーとネットワーク アプリケーション間のパスを提供します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0917",
  "theme": "automation",
  "type": "single",
  "question": "コントローラ上のプログラムとネットワーク デバイス上のプログラム間の通信を可能にするインターフェイスはどれですか。",
  "choices": [
   "A. ノースバウンドインターフェース",
   "B. ソフトウェア仮想インターフェース",
   "C. サウスバウンドインターフェース",
   "D. トンネルインターフェース"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0918",
  "theme": "automation",
  "type": "single",
  "question": "Cisco DNA Center の機能は何ですか。",
  "choices": [
   "A. データセンターネットワークポリシーコントローラ",
   "B. デバイスとサービスの自動化のためのソフトウェア定義コントローラ",
   "C. すべてのネットワークデバイスへの安全なアクセスを許可するコンソールサーバー",
   "D. IPアドレスプール配布スケジューラ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0919",
  "theme": "automation",
  "type": "multiple",
  "question": "ソフトウェア定義ネットワークには、どのノースバウンド API がありますか。(2つ選択)",
  "choices": [
   "A. SOAP",
   "B. OpFlex",
   "C. REST",
   "D. NETCONF",
   "E. OpenFlow"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0920",
  "theme": "automation",
  "type": "single",
  "question": "Cisco DNA Center は、従来のキャンパス管理に比べてどのような利点がありますか。",
  "choices": [
   "A. Cisco DNA Center は YANG と NETCONF を活用してファブリック デバイスと非ファブリック デバイスのステータスを評価し、従来のキャンパス管理では CLI のみを使用します。",
   "B. Cisco DNA Center はさまざまな管理プロトコルからの情報を相関させて洞察を得ますが、従来のキャンパス管理では手動による分析が必要です。",
   "C. Cisco DNA Center はネットワーク デバイス間のセキュリティ ポスチャを自動的に比較しますが、従来のキャンパス管理では手動による比較が必要です。",
   "D. Cisco DNA Center はコントローラで管理タスクを処理してインフラストラクチャ デバイスの負荷を軽減し、従来のキャンパス管理ではデータ バックボーンを使用します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0921",
  "theme": "automation",
  "type": "single",
  "question": "ソフトウェア定義ネットワークにおけるコントローラーの機能は何ですか。",
  "choices": [
   "A. ハードウェアレベルでのマルチキャスト複製",
   "B. パケット処理ポリシーの管理",
   "C. パケットの転送",
   "D. パケットの断片化と再構成"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0922",
  "theme": "automation",
  "type": "single",
  "question": "新しいワイヤレス ネットワークを自律モードの AP で構成するか、クラウドベース モードで実行される AP で構成するかを決定する際に、ネットワーク管理者が考慮する必要があることは何ですか。",
  "choices": [
   "A. 自律モードの AP はアンダーレイへの依存度が低いが、クラウドベース モードの APよりも保守が複雑",
   "B. 自律モードの AP はクラウドベース モードの AP よりも導入と自動化が簡単です",
   "C. クラウドベース モードの AP は導入が簡単ですが、自律モードの AP よりも自動化が困難です",
   "D. クラウドベース モードの AP はアンダーレイに依存しており、自律モードの AP よりも保守が複雑です"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0923",
  "theme": "automation",
  "type": "single",
  "question": "サウスバウンド API の機能は何ですか。",
  "choices": [
   "A. サーバーとスイッチング ファブリック間の構成変更を自動化します。",
   "B. SDN コントローラーとスイッチング ファブリック間のフロー制御を管理します。",
   "C. オーケストレーションを使用して、Web サーバーから仮想サーバー構成をプロビジョニングします。",
   "D. SDN コントローラーとアプリケーション間の情報交換を容易にします。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0924",
  "theme": "automation",
  "type": "single",
  "question": "Cisco DNA Center は従来のキャンパス管理に比べてどのような利点がありますか。",
  "choices": [
   "A. Cisco DNA Center は暗号化された管理に SNMPv3 を活用し、従来のキャンパス管理では SNMPv2 を使用します。",
   "B. Cisco DNA Center は API を活用し、従来のキャンパス管理では手動でのデータ収集が必要です。",
   "C. Cisco DNA Center は暗号化されたエントリの SSH アクセスを自動化しますが、従来のキャンパス管理では SSH は使用されません。",
   "D. Cisco DNA Center は安全な Web アクセスのために HTTPS を自動化しますが、従来のキャンパス管理では HTTP を使用します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0925",
  "theme": "automation",
  "type": "drag_drop",
  "question": "[ノースバウンド API]ドラッグアンドドロップ (4つ選択)",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "データプレーンと制御プレーン間のインターフェースにOpenFlowを使用",
    "自動化をサポート",
    "システム間のデータ共有をサポート",
    "SDNコントローラとアプリケーション層の間で通信",
    "ネットワーク仮想化プロトコルをサポート",
    "SDNコントローラとデータ層の間で通信",
    "RESTベースの要件をサポート"
   ],
   "targets": [
    {
     "label": "ノースバウンド API",
     "slots": 4
    }
   ]
  }
 },
 {
  "qid": "CCNA-0926",
  "theme": "automation",
  "type": "single",
  "question": "従来のネットワーク デバイスによって一般的に実行される機能はどれがソフトウェア定義コントローラーに置き換えられますか。",
  "choices": [
   "A. VPN リンク処理の暗号化と復号化",
   "B. ルート テーブルの構築と転送テーブルの更新",
   "C. NAT 操作中の送信元または宛先アドレスの変更",
   "D. データリンク フレーム内のパケットのカプセル化とカプセル化解除"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0927",
  "theme": "automation",
  "type": "single",
  "question": "自動ライフサイクル管理にCisco DNA Centerを選択する理由は何ですか。",
  "choices": [
   "A. サービスを中断することなくアップグレードを実行するため",
   "B. ネットワークにソフトウェアの冗長性を提供するため",
   "C. パッチとアップデートを迅速かつ正確に展開するため",
   "D. ネットワーク内のすべてのノードへの SSH アクセスを可能にするため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0928",
  "theme": "automation",
  "type": "single",
  "question": "ソフトウェア定義ネットワークではどのプレーンが集中化されますか。",
  "choices": [
   "A. アプリケーション",
   "B. サービス",
   "C. 制御",
   "D. データ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0929",
  "theme": "automation",
  "type": "single",
  "question": "サウスバウンド API が使用される場合、どの通信対話が行われますか。",
  "choices": [
   "A. SDN コントローラーとネットワーク上の PC 間",
   "B. SDN コントローラーとネットワーク上のスイッチおよびルーター 間",
   "C. SDN コントローラーとネットワーク上のサービスおよびアプリケーション 間",
   "D. ネットワーク アプリケーションとネットワーク上のスイッチおよびルーター 間"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0930",
  "theme": "automation",
  "type": "single",
  "question": "SDN コントローラーは、転送変更をサウスバウンド API に中継する通信プロトコルとして何を使用しますか。",
  "choices": [
   "A. Java",
   "B. REST",
   "C. OpenFlow",
   "D. XML"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0931",
  "theme": "automation",
  "type": "single",
  "question": "Software-Defined NetworkにあるノースバウンドAPIはどれですか。",
  "choices": [
   "A. REST",
   "B. OpenFlow",
   "C. NETCONF",
   "D. RESTCONF",
   "E. OpFlex"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0932",
  "theme": "automation",
  "type": "multiple",
  "question": "Software-Defined Networkにある2つのノースバウンドAPIはどれですか。(2つ選択)",
  "choices": [
   "A. REST",
   "B. OpenFlow",
   "C. SOAP",
   "D. NETCONF",
   "E. OpFlex"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0933",
  "theme": "automation",
  "type": "multiple",
  "question": "2 つのサウスバウンド API は何ですか。(2つ選択)",
  "choices": [
   "A. Thrift",
   "B. DSC",
   "C. CORBA",
   "D. NETCONF",
   "E. OpenFlow"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0934",
  "theme": "automation",
  "type": "single",
  "question": "コントローラーベースのアーキテクチャでエッジデバイスと対話するために使用される API はどれですか。",
  "choices": [
   "A. ノースバウンド",
   "B. オーバーレイ",
   "C. サウスバウンド",
   "D. アンダーレイ"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0935",
  "theme": "automation",
  "type": "single",
  "question": "Cisco DNA Centerの主な機能として正しい説明を選びなさい。",
  "choices": [
   "A. 物理的なケーブル配線を管理する",
   "B. ファイアウォールのルール管理のみを行う",
   "C. DHCPサーバーの機能を提供する",
   "D. インテントベースのネットワーク管理と自動化を提供する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0936",
  "theme": "automation",
  "type": "single",
  "question": "Cisco DNA Center は、従来のキャンパス管理に比べてどのような利点をもたらしますか?",
  "choices": [
   "A. Cisco DNA Center は安全な Web アクセスのために HTTPS を自動化し、従来のキャンパス管理では HTTP を使用します。",
   "B. Cisco DNA Center は暗号化管理に SNMPv3 を利用し、従来のキャンパス管理では SNMPv2 を使用します。",
   "C. Cisco DNA Center は API を活用しており、従来のキャンパス管理では手動でデータを収集する必要があります。",
   "D. Cisco DNA Center は、暗号化されたエントリのための SSH アクセスを自動化しており、従来のキャンパス管理には SSH がありません。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0937",
  "theme": "automation",
  "type": "single",
  "question": "コントローラーベースのネットワーキング アーキテクチャにおけるサウスバウンド API の目的は何ですか?",
  "choices": [
   "A. コントローラーとアプリケーション間の通信を容易にする",
   "B. アプリケーション開発者がネットワークと対話できるようにする",
   "C. コントローラーを他の自動化およびオーケストレーション ツールと統合する",
   "D. コントローラとネットワークハードウェア間の通信を容易にする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0938",
  "theme": "automation",
  "type": "single",
  "question": "SDN 環境におけるノースバウンド API の機能は何ですか?",
  "choices": [
   "A. グローバル プロビジョニングと構成に依存します。",
   "B. ソフトウェアをアップグレードし、ファイルを復元します。",
   "C. 設定のための分散処理をサポートします。",
   "D. オーケストレーションおよびネットワーク自動化サービスを提供します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0939",
  "theme": "automation",
  "type": "single",
  "question": "ネットワーク アーキテクトは、新しいネットワークにデバイスを展開するために Cisco DNA Center を実装するかどうかを検討しています。この組織は、現在、従来のキャンパス設計でデバイスを導入するのにかかる時間を短縮することに重点を置いています。 Cisco DNA Center が従来の管理オプションよりも適切である理由は何ですか?",
  "choices": [
   "A. Cisco DNA Center は、単一画面での導入をサポートしています。",
   "B. Cisco DNA Center は、サードパーティ デバイスにゼロタッチ プロビジョニングを提供します。",
   "C. Cisco DNA Center は、サードパーティのアクセス ポイントおよびデバイスの分析の必要性を軽減します。",
   "D. Cisco DNA Center は、Cisco デバイスに関するレポートを作成する際の syslog 出力のレベルを最小限に抑えます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0940",
  "theme": "automation",
  "type": "single",
  "question": "クライアント上で実行されているアプリケーションが IP ネットワーク経由でサーバーにデータを送信できるようにするインターフェイスのタイプはどれですか?",
  "choices": [
   "A. ノースバウンド インターフェイス",
   "B. アプリケーションプログラミングインターフェース",
   "C. サウスバウンドインターフェース",
   "D. Representational State Transfer アプリケーション プログラミング インターフェイス"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0941",
  "theme": "automation",
  "type": "single",
  "question": "ソフトウェア定義ネットワーキングではどのプレーンが集中化されていますか?",
  "choices": [
   "A. アプリケーション",
   "B. サービス",
   "C. データ",
   "D. コントロール"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0942",
  "theme": "automation",
  "type": "single",
  "question": "機械学習は侵入検知システムの有効性にどのように貢献するでしょうか。",
  "choices": [
   "A. セキュリティの権限レベルを割り当てる",
   "B. セキュリティポリシーの更新を指示する",
   "C. 古いソフトウェアを監視する",
   "D. 侵入を示すパターンを識別する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0943",
  "theme": "automation",
  "type": "single",
  "question": "AIはネットワークトラフィック分析にどのように貢献しますか。",
  "choices": [
   "A. トラフィックのルートマッピングを簡素化します",
   "B. データパケットの配信速度を向上させます",
   "C. 異常検出のためにパターンを分析します",
   "D. ネットワークの脅威を排除します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0944",
  "theme": "automation",
  "type": "single",
  "question": "機械学習によって不正なネットワークアクセスの検出がどのように改善されますか。",
  "choices": [
   "A. 古いソフトウェアを監視します。",
   "B. セキュリティ ポリシーの更新を指示します。",
   "C. 侵入を示すパターンを識別します。",
   "D. セキュリティ クリアランス レベルを割り当てます。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0945",
  "theme": "automation",
  "type": "single",
  "question": "ネットワーク運用における生成 AI の機能は何ですか？",
  "choices": [
   "A. 人工的なネットワーク構成を作成します",
   "B. ネットワークのファームウェア更新を適用します",
   "C. 使用されていないサービスを無効にします",
   "D. 最適なデータストレージソリューションを計算します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0946",
  "theme": "automation",
  "type": "single",
  "question": "予測 AI モデルはネットワーク負荷分散においてどのような役割を果たしますか?",
  "choices": [
   "A. 将来のトラフィックの急増を予測します",
   "B. デバイスにIPアドレスを割り当てます",
   "C. 導入に適したケーブルの種類を選択します",
   "D. 過去のトラフィック量のみを監視します"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0947",
  "theme": "automation",
  "type": "single",
  "question": "生成AIはネットワークシミュレーションをどのように支援しますか？",
  "choices": [
   "A. 最適なデータストレージソリューションを計算します。",
   "B. 合成ネットワーク構成を作成します。",
   "C. ネットワークファームウェアのアップデートを展開します。",
   "D. グリーンフィールドネットワーク設計を作成します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0948",
  "theme": "automation",
  "type": "single",
  "question": "現在、ネットワークデータの監視において AI はどのような役割を果たしていますか。",
  "choices": [
   "A. デバイスの故障のみを予測します",
   "B. トラフィックルートのマッピングを簡素化します",
   "C. パターンを分析して異常を検出します",
   "D. データパケットの配信速度を向上させます"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0949",
  "theme": "automation",
  "type": "drag_drop",
  "question": "[HTTP メソッド]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "データベースのエントリを更新する",
    "サーバーからリソースを削除する",
    "サーバー上にリソースを作成する",
    "サーバーからデータを読み込む"
   ],
   "targets": [
    {
     "label": "POST",
     "slots": 1
    },
    {
     "label": "GET",
     "slots": 1
    },
    {
     "label": "DELETE",
     "slots": 1
    },
    {
     "label": "PUT",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0950",
  "theme": "automation",
  "type": "single",
  "question": "異なるホストにあるアプリケーションにデータを転送するために HTTP メッセージを使用するものは何ですか。",
  "choices": [
   "A. REST",
   "B. OpenStack",
   "C. OpFlex",
   "D. OpenFlow"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0951",
  "theme": "automation",
  "type": "single",
  "question": "HTTP 内で PUT メソッドはいつ使用されますか。",
  "choices": [
   "A. DNS サーバーを更新する場合",
   "B. 読み取り専用操作が必要な場合",
   "C. Web サイトを表示する場合",
   "D. 非べき等操作が必要な場合"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0952",
  "theme": "automation",
  "type": "multiple",
  "question": "CRUD モデルでは、どのHTTP メソッドが UPDATE 操作をサポートしますか。(2つ選択)",
  "choices": [
   "A. PUT",
   "B. PATCH",
   "C. DELETE",
   "D. POST",
   "E. GET"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0953",
  "theme": "automation",
  "type": "single",
  "question": "HTTP 内の PUT メソッドとは何ですか。",
  "choices": [
   "A. 宛先のデータを置き換えます",
   "B. ウェブサイトを表示します",
   "C. 読み取り専用操作です",
   "D. 不可逆操作です"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0954",
  "theme": "automation",
  "type": "multiple",
  "question": "REST ベースの API によって実行されるアクションに適した HTTP メソッドはどれですか。(2つ選択)",
  "choices": [
   "A. REMOVE",
   "B. REDIRECT",
   "C. POST",
   "D. GET",
   "E. POP"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0955",
  "theme": "automation",
  "type": "single",
  "question": "サウスバウンド API の機能について説明しているものはどれですか。",
  "choices": [
   "A. 通信にはHTTPメッセージを使う。",
   "B. コントローラとネットワークデバイス間の通信を可能にする。",
   "C. コントローラから SDN アプリケーションに情報を伝える。",
   "D. 管理プレーンと通信する。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0956",
  "theme": "automation",
  "type": "single",
  "question": "REST API は通信にどのプロトコルを使用しますか。",
  "choices": [
   "A. HTTP",
   "B. STP",
   "C. SNMP",
   "D. SSH"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0957",
  "theme": "automation",
  "type": "single",
  "question": "企業ネットワーク上のファイアウォールの機能は何ですか。",
  "choices": [
   "A. 企業とISPの間の仲介装置として機能する。",
   "B. インターネット上のホストへのデフォルトゲートウェイとして機能する。",
   "C. ステートレス・インスペクションに基づいてトラフィックを処理する",
   "D. イングレスとイグレスのトラフィックを許可したり拒否したりする"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0958",
  "theme": "automation",
  "type": "drag_drop",
  "question": "左側の HTTP 動詞を右側の API 操作にドラッグ アンド ドロップします。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "指定された URI の下に従属リソースを作成します",
    "特定のリソースの現在のバージョンをペイロードの新しいコンテンツで完全に置き換えます",
    "リソースに関する特定の情報を要求します",
    "特定のリソースを消去します",
    "特定のリソースを部分的に変更します"
   ],
   "targets": [
    {
     "label": "DELETE",
     "slots": 1
    },
    {
     "label": "GET",
     "slots": 1
    },
    {
     "label": "PATCH",
     "slots": 1
    },
    {
     "label": "POST",
     "slots": 1
    },
    {
     "label": "PUT",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0959",
  "theme": "automation",
  "type": "single",
  "question": "REST API ではどのメソッド セットがサポートされていますか。",
  "choices": [
   "A. GET、PUT、ERASE、CHANGE",
   "B. GET、POST、ERASE、CHANGE",
   "C. GET、POST、MOD、ERASE",
   "D. GET、PUT、POST、DELETE"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0960",
  "theme": "automation",
  "type": "single",
  "question": "RESTリクエストのURI文字列の目的は何ですか。",
  "choices": [
   "A. リモートリソースの変更方法を指定するため",
   "B. ターゲットサーバー上のリソースを識別するため",
   "C. リクエストのデータコンテンツエンコーディングで応答するため",
   "D. データまたはペイロードをリモートリソースに転送する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0961",
  "theme": "automation",
  "type": "single",
  "question": "アプリケーションがJSON形式のコンテンツを要求する場合、RESTリクエストに必ず含まなければならないヘッダーはどれですか？",
  "choices": [
   "A. Content-Type: application/json",
   "B. Accept-Encoding: application/json",
   "C. Accept: application/json",
   "D. Accept-Language: application/json"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0962",
  "theme": "automation",
  "type": "single",
  "question": "レート制限を適用するために API キーが使用されるのはなぜですか?",
  "choices": [
   "A. クライアントを一意に識別して使用パターンを監視する",
   "B. 過度の使用を防ぐためにデータを暗号化する",
   "C. 自動的に期限切れになる埋め込み権限を含める",
   "D. 各リクエストの地理的位置を追跡する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0963",
  "theme": "automation",
  "type": "multiple",
  "question": "RESTベースのAPIがリソースを作成するために呼び出すHTTP動詞はどれですか？（2つ選択）",
  "choices": [
   "A. GET",
   "B. DELETE",
   "C. POST",
   "D. PUT",
   "E. PATCH"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0964",
  "theme": "automation",
  "type": "single",
  "question": "APIキーはレート制限の適用にどのように使用されますか？",
  "choices": [
   "A. APIリクエストで送信されるデータを暗号化するため",
   "B. APIリクエストが通過するネットワークパスを定義するため",
   "C. クライアントが受信を希望するデータ形式を指定するため",
   "D. 各クライアントアプリケーションを一意に識別するため"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0965",
  "theme": "automation",
  "type": "single",
  "question": "クライアント上で実行されているアプリケーションが IP ネットワーク経由でサーバーにデータを送信できるようにするインターフェイスのタイプはどれですか。",
  "choices": [
   "A. ノースバウンドインターフェイス",
   "B. Application Programming Interface",
   "C. サウスバウンドインターフェース",
   "D. REST API"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0966",
  "theme": "automation",
  "type": "single",
  "question": "REST API リクエストが成功した後に返される HTTP ステータス コードはどれですか。",
  "choices": [
   "A. 200",
   "B. 301",
   "C. 404",
   "D. 500"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0967",
  "theme": "automation",
  "type": "single",
  "question": "ネットワーク上で実行されている SDN コントローラー エンド アプリケーション間の通信にはどのテクノロジーが適していますか。",
  "choices": [
   "A. サウスバウンド API",
   "B. REST API",
   "C. NETCONF",
   "D. OpenFlow"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0968",
  "theme": "automation",
  "type": "single",
  "question": "REST API セキュリティに関して JWT を説明している定義はどれですか。",
  "choices": [
   "A. 認証に使用される暗号化された JSON トークン",
   "B. 認可に使用される暗号化された JSON トークン",
   "C. 情報を安全に交換するために使用されるエンコードされた JSON トークン",
   "D. 認証に使用されるエンコードされた JSON トークン"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0969",
  "theme": "automation",
  "type": "single",
  "question": "HCL 言語を使用する構成管理ツールは次のうちどれですか。",
  "choices": [
   "A. Terraform",
   "B. Ansible",
   "C. REST API",
   "D. OpFlex"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0970",
  "theme": "automation",
  "type": "multiple",
  "question": "エラーを表す 2 つの REST API ステータス コード クラスはどれですか。(2つ選択)",
  "choices": [
   "A. 1XX",
   "B. 2XX",
   "C. 3XX",
   "D. 4XX",
   "E. 5XX"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0971",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "上記を参照してください。ネットワーク エンジニアは NETCONF を設定する必要があります。設定を作成した後、エンジニアはコマンド show line から出力を取得しますが、show running-config からは出力を取得しません。どのコマンドが構成を完了しますか。",
  "choices": [
   "A. Device(config)# netconf lock-time 500",
   "B. Device(config)# netconf max-message 1000",
   "C. Device(config)# no netconf ssh acl 1",
   "D. Device(config)# netconf max-sessions 100"
  ],
  "figure": "data/figures/CCNA-0971.png"
 },
 {
  "qid": "CCNA-0972",
  "theme": "automation",
  "type": "single",
  "question": "ユーザー名とパスワード認証を必要とする REST API 認証方法はどれですか。",
  "choices": [
   "A. APIキー認証",
   "B. Bearer認証",
   "C. OAuth 2.0",
   "D. Basic認証"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0973",
  "theme": "automation",
  "type": "single",
  "question": "次の中から、rEST APIで使用されるHTTPメソッドのうち、リソースの取得に使用されるものはどれか。",
  "choices": [
   "A. POST",
   "B. DELETE",
   "C. PUT",
   "D. GET"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0974",
  "theme": "automation",
  "type": "single",
  "question": "企業ネットワーク上のファイアウォールの機能は何ですか?",
  "choices": [
   "A. 入力トラフィックと出力トラフィックを許可および拒否します。",
   "B. インターネット上のホストへのデフォルト ゲートウェイとして機能します。",
   "C. ステートレス検査に基づいてトラフィックを処理します。",
   "D. 企業とその ISP の間の仲介デバイスとして機能します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0975",
  "theme": "automation",
  "type": "drag_drop",
  "question": "[Ansible]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "コマンドとタスクを実行できるターゲットデバイスを定義する Ansible ファイル",
    "実行されるPythonコードの単位",
    "1つ以上のターゲットデバイスに対して実行される特定のアクション",
    "YAMLで記述された自動化タスクの集合",
    "対象デバイスを管理するAnsibleがインストールされたデバイス",
    "コマンドを実行できるAnsibleがインストールされていないネットワークデバイス"
   ],
   "targets": [
    {
     "label": "playbook",
     "slots": 1
    },
    {
     "label": "コントロールノード",
     "slots": 1
    },
    {
     "label": "マネージドノード",
     "slots": 1
    },
    {
     "label": "モジュール",
     "slots": 1
    },
    {
     "label": "タスク",
     "slots": 1
    },
    {
     "label": "インベントリ",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0976",
  "theme": "automation",
  "type": "drag_drop",
  "question": "[構成管理]ドラッグアンドドロップ",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "構成または更新を自動的にインストールまたは展開します",
    "中央機関が更新を利用できる時期を判断するデーモン",
    "管理しやすい展開オプションですが、拡張性に欠ける場合があります",
    "中央サーバーが必要に応じてノードに更新を送信するモデル",
    "組み込みの管理機能なしで動作するデバイス ハードウェア"
   ],
   "targets": [
    {
     "label": "エージェント",
     "slots": 1
    },
    {
     "label": "エージェントレス",
     "slots": 1
    },
    {
     "label": "プル",
     "slots": 1
    },
    {
     "label": "プロビジョニング",
     "slots": 1
    },
    {
     "label": "プッシュ",
     "slots": 1
    }
   ]
  }
 },
 {
  "qid": "CCNA-0977",
  "theme": "automation",
  "type": "single",
  "question": "Chef 構成管理は必要なデバイス構成をどのように強制しますか。",
  "choices": [
   "A. デバイスにインストールされたエージェントは Chef Infra Server に接続し、Cookbook から必要な設定を取り出します。",
   "B. Chef Infra Server は設定された Cookbook を使って、更新を要求するリモートデバイスに必要な設定をプッシュします。",
   "C. Chef Infra Server は、設定された Cookbook を使って、デバイスが新しいコンフィグレーションをプルする時期になったら、各リモートデバイスにアラートを出します。",
   "D. デバイスにインストールされたエージェントが Chef Infra Server に問い合わせ、Cookbook から設定をプッシュして応答します。"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0978",
  "theme": "automation",
  "type": "single",
  "question": "Ansible インベントリとは何ですか。",
  "choices": [
   "A. YAML フォーマットで表現された、ターゲットデバイスで実行するアクションのコレクション",
   "B. Ansible内で実行されるPythonコードの単位",
   "C. ターゲットデバイスを管理するAnsibleがインストールされたデバイス",
   "D. コマンドとタスクが実行されるターゲットデバイスを定義するファイル"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0979",
  "theme": "automation",
  "type": "single",
  "question": "Ansibleがネットワーク内のノードにモジュールをプッシュするために使用するプロトコルはどれですか。",
  "choices": [
   "A. SSH",
   "B. Kerberos",
   "C. SNMP",
   "D. Telnet"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0980",
  "theme": "automation",
  "type": "multiple",
  "question": "ネットワーク自動化において Ansible が提供する機能はどれですか。(2つ選択)",
  "choices": [
   "A. ネットワーク資格情報を提供する",
   "B. 構成をクライアントにプッシュする",
   "C. バージョン管理を使用してジョブテンプレートを起動する",
   "D. YAML 言語を使用する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0981",
  "theme": "automation",
  "type": "single",
  "question": "Terraform ワークフローの中心となる 3 つのステップは何ですか。",
  "choices": [
   "A. Plan, Execute, Check",
   "B. Write, Plan, Apply",
   "C. Create, Apply, Plan",
   "D. Plan, Write, Act"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0982",
  "theme": "automation",
  "type": "multiple",
  "question": "スイッチ上で VLAN を構成する Ansible スクリプトを作成するために必要な 2 つのコンポーネントはどれですか。(2つ選択)",
  "choices": [
   "A. プレイブック",
   "B. レシピ",
   "C. モデル",
   "D. クックブック",
   "E. タスク"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0983",
  "theme": "automation",
  "type": "single",
  "question": "次の中から、puppetの設定管理における「マニフェスト」の役割はどれか。",
  "choices": [
   "A. ログファイルを収集するエージェント",
   "B. ネットワークトポロジー図を生成するツール",
   "C. システムの望ましい状態を宣言的に定義するファイル",
   "D. バックアップスケジュールを管理するファイル"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0984",
  "theme": "automation",
  "type": "single",
  "question": "Ansibleの特徴として適切な説明を1つ選びなさい。",
  "choices": [
   "A. クライアントプル型のアーキテクチャを採用している",
   "B. 各管理対象ノードにエージェントのインストールが必要",
   "C. エージェントレスで動作し、SSHを使用してデバイスを管理する",
   "D. Rubyで記述された設定管理ツールである"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0985",
  "theme": "automation",
  "type": "single",
  "question": "Ansibleの特徴として誤っているものはどれか。",
  "choices": [
   "A. 各管理対象ノードにエージェントのインストールが必要",
   "B. エージェントレスで動作し、SSHを使用してデバイスを管理する",
   "C. Rubyで記述された設定管理ツールである",
   "D. クライアントプル型のアーキテクチャを採用している"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0986",
  "theme": "automation",
  "type": "single",
  "question": "Ansibleの特徴として誤っているものはどれか。",
  "choices": [
   "A. クライアントプル型のアーキテクチャを採用している",
   "B. 各管理対象ノードにエージェントのインストールが必要",
   "C. Rubyで記述された設定管理ツールである",
   "D. エージェントレスで動作し、SSHを使用してデバイスを管理する"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0987",
  "theme": "automation",
  "type": "single",
  "question": "Ansibleの特徴として誤っているものはどれか。",
  "choices": [
   "A. クライアントプル型のアーキテクチャを採用している",
   "B. エージェントレスで動作し、SSHを使用してデバイスを管理する",
   "C. Rubyで記述された設定管理ツールである",
   "D. 各管理対象ノードにエージェントのインストールが必要"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-0988",
  "theme": "automation",
  "type": "drag_drop",
  "question": "Ansible 機能を左から右にドラッグ アンド ドロップします。すべての機能が使用されているわけではありません。",
  "choices": [],
  "figure": null,
  "dnd": {
   "items": [
    "デフォルトではSSH経由でモジュールを実行します",
    "YAML言語を使用します",
    "エージェントを使用してホストを管理する",
    "設定をクライアントにプッシュする",
    "クライアントがサーバーから構成を取得する必要がある",
    "エージェントなしで動作する"
   ],
   "targets": [
    {
     "label": "特徴",
     "slots": null
    }
   ]
  }
 },
 {
  "qid": "CCNA-0989",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "JSON オブジェクトの数はいくつですか。",
  "choices": [
   "A. 1",
   "B. 2",
   "C. 3",
   "D. 4"
  ],
  "figure": "data/figures/CCNA-0989.png"
 },
 {
  "qid": "CCNA-0990",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "JSON データにはいくつの配列がありますか。",
  "choices": [
   "A. 1つ",
   "B. 3つ",
   "C. 6つ",
   "D. 9つ"
  ],
  "figure": "data/figures/CCNA-0990.png"
 },
 {
  "qid": "CCNA-0991",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "JSON スキーマの 2 行目の「switch」という単語は何を表していますか。",
  "choices": [
   "A. object（オブジェクト）",
   "B. key（キー）",
   "C. value（値）",
   "D. array（配列）"
  ],
  "figure": "data/figures/CCNA-0991.png"
 },
 {
  "qid": "CCNA-0992",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "オブジェクト、キー、JSON リスト値はいくつありますか。",
  "choices": [
   "A. 3 つのオブジェクト、3 つのキー、2 つの JSON リスト値",
   "B. 1 つのオブジェクト、3 つのキー、2 つの JSON リスト値",
   "C. 3 つのオブジェクト、2 つのキー、3 つの JSON リスト値",
   "D. 1 つのオブジェクト、3 つのキー、3 つの JSON リスト値"
  ],
  "figure": "data/figures/CCNA-0992.png"
 },
 {
  "qid": "CCNA-0993",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「port」という単語は何を表していますか。",
  "choices": [
   "A. バリュー",
   "B. 配列",
   "C. キー",
   "D. オブジェクト"
  ],
  "figure": "data/figures/CCNA-0993.png"
 },
 {
  "qid": "CCNA-0994",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の単語「ge3/36」は何を表していますか。",
  "choices": [
   "A. 値",
   "B. 配列",
   "C. キー",
   "D. オブジェクト"
  ],
  "figure": "data/figures/CCNA-0994.png"
 },
 {
  "qid": "CCNA-0995",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "1 行目から 5 行目で終わる部分は何が表されますか。",
  "choices": [
   "A. object",
   "B. key",
   "C. value",
   "D. array"
  ],
  "figure": "data/figures/CCNA-0995.png"
 },
 {
  "qid": "CCNA-0996",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「R20」という単語は何を表していますか。",
  "choices": [
   "A. value",
   "B. array",
   "C. key",
   "D. object"
  ],
  "figure": "data/figures/CCNA-0996.png"
 },
 {
  "qid": "CCNA-0997",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "表示されている JSON データ型はどれですか。",
  "choices": [
   "A. 文字列",
   "B. 配列",
   "C. オブジェクト",
   "D. bool値"
  ],
  "figure": "data/figures/CCNA-0997.png"
 },
 {
  "qid": "CCNA-0998",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この出力を実行するには何が欠けているのでしょうか。",
  "choices": [
   "A. 先頭に角括弧 ( [ )",
   "B. 末尾に中括弧 ( } )",
   "C. 「Cisco Devices」文字列を囲む二重引用符 (\" \")",
   "D. 各行の先頭に感嘆符 (!)"
  ],
  "figure": "data/figures/CCNA-0998.png"
 },
 {
  "qid": "CCNA-0999",
  "theme": "automation",
  "type": "single",
  "question": "JSON テキストの RFC 4627 デフォルト エンコーディングは何ですか。",
  "choices": [
   "A. UTF-8",
   "B. GB18030",
   "C. UCS-2",
   "D. 16進数"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-1000",
  "theme": "automation",
  "type": "single",
  "question": "[\"red\", \"one\"]は、どのタイプの JSON データですか。",
  "choices": [
   "A. 数値",
   "B. 配列",
   "C. オブジェクト",
   "D. 文字列"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-1001",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "このJSONスキーマ内の「switch」という単語は何を表していますか？",
  "choices": [
   "A. 配列",
   "B. 値",
   "C. キー",
   "D. オブジェクト"
  ],
  "figure": "data/figures/CCNA-1001.png"
 },
 {
  "qid": "CCNA-1002",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の 2 行目には何が表されていますか?",
  "choices": [
   "A. array",
   "B. value",
   "C. key",
   "D. object"
  ],
  "figure": "data/figures/CCNA-1002.png"
 },
 {
  "qid": "CCNA-1003",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の 3 行目には何が表されていますか。",
  "choices": [
   "A. 配列",
   "B. 値",
   "C. キー",
   "D. オブジェクト"
  ],
  "figure": "data/figures/CCNA-1003.png"
 },
 {
  "qid": "CCNA-1004",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "上記を参照してください。どのタイプの JSON データが表されますか。",
  "choices": [
   "A. 配列",
   "B. 数字",
   "C. 文字列",
   "D. オブジェクト"
  ],
  "figure": "data/figures/CCNA-1004.png"
 },
 {
  "qid": "CCNA-1005",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「fe5/42」という単語は何を表しますか。",
  "choices": [
   "A. 配列",
   "B. オブジェクト",
   "C. キー",
   "D. 値"
  ],
  "figure": "data/figures/CCNA-1005.png"
 },
 {
  "qid": "CCNA-1006",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「port」という単語は何を表しますか。",
  "choices": [
   "A. 配列",
   "B. オブジェクト",
   "C. キー",
   "D. 値"
  ],
  "figure": "data/figures/CCNA-1006.png"
 },
 {
  "qid": "CCNA-1007",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "上記を参照してください。JSON データには配列がいくつ存在しますか。",
  "choices": [
   "A. 1",
   "B. 3",
   "C. 6",
   "D. 9"
  ],
  "figure": "data/figures/CCNA-1007.png"
 },
 {
  "qid": "CCNA-1008",
  "theme": "automation",
  "type": "single",
  "question": "JSONデータ形式の特徴として正しいものはどれか。",
  "choices": [
   "A. バイナリ形式でデータを格納する",
   "B. YAMLと完全に互換性がある",
   "C. XMLと同じタグベースの構造を持つ",
   "D. キーと値のペアでデータを表現し、人間にも機械にも読みやすい"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-1009",
  "theme": "automation",
  "type": "single",
  "question": "JSONデータ形式の特徴として誤っているものはどれか。",
  "choices": [
   "A. XMLと同じタグベースの構造を持つ",
   "B. YAMLと完全に互換性がある",
   "C. バイナリ形式でデータを格納する",
   "D. キーと値のペアでデータを表現し、人間にも機械にも読みやすい"
  ],
  "figure": null
 },
 {
  "qid": "CCNA-1010",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。「警告」という言葉はどの構造に直接存在するのでしょうか?",
  "choices": [
   "A. 配列",
   "B. オブジェクト",
   "C. ブール値",
   "D. 文字列"
  ],
  "figure": "data/figures/CCNA-1010.png"
 },
 {
  "qid": "CCNA-1011",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。 JSON データ内で apple は何を表しますか?",
  "choices": [
   "A. 配列",
   "B. オブジェクト",
   "C. 番号",
   "D. 文字列"
  ],
  "figure": "data/figures/CCNA-1011.png"
 },
 {
  "qid": "CCNA-1012",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「LB20」という単語は何を表しますか?",
  "choices": [
   "A. 値",
   "B. 配列",
   "C. オブジェクト",
   "D. キー"
  ],
  "figure": "data/figures/CCNA-1012.png"
 },
 {
  "qid": "CCNA-1013",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の 1 行目から 5 行目で終わるものは何で表されますか?",
  "choices": [
   "A. キー",
   "B. オブジェクト",
   "C. 配列",
   "D. 値"
  ],
  "figure": "data/figures/CCNA-1013.png"
 },
 {
  "qid": "CCNA-1014",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「IDS」という単語は何を表しますか?",
  "choices": [
   "A. オブジェクト",
   "B. 値",
   "C. 配列",
   "D. キー"
  ],
  "figure": "data/figures/CCNA-1014.png"
 },
 {
  "qid": "CCNA-1015",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマの 4 行目では何が表されていますか?",
  "choices": [
   "A. オブジェクト",
   "B. 配列",
   "C. キー",
   "D. 値"
  ],
  "figure": "data/figures/CCNA-1015.png"
 },
 {
  "qid": "CCNA-1016",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「ポート」という単語は何を表しますか?",
  "choices": [
   "A. キー",
   "B. 値",
   "C. 配列",
   "D. オブジェクト"
  ],
  "figure": "data/figures/CCNA-1016.png"
 },
 {
  "qid": "CCNA-1017",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「VPN11」という単語は何を表しますか?",
  "choices": [
   "A. キー",
   "B. 配列",
   "C. オブジェクト",
   "D. 値"
  ],
  "figure": "data/figures/CCNA-1017.png"
 },
 {
  "qid": "CCNA-1018",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「R29」という単語は何を表しますか?",
  "choices": [
   "A. 配列",
   "B. キー",
   "C. オブジェクト",
   "D. 値"
  ],
  "figure": "data/figures/CCNA-1018.png"
 },
 {
  "qid": "CCNA-1019",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の行 2 には何が表されますか?",
  "choices": [
   "A. オブジェクト",
   "B. 値",
   "C. キー",
   "D. 配列"
  ],
  "figure": "data/figures/CCNA-1019.png"
 },
 {
  "qid": "CCNA-1020",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の行 2 には何が表されますか?",
  "choices": [
   "A. オブジェクト",
   "B. 値",
   "C. キー",
   "D. 配列"
  ],
  "figure": "data/figures/CCNA-1020.png"
 },
 {
  "qid": "CCNA-1021",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「ファイアウォール」という単語は何を表しますか?",
  "choices": [
   "A. 値",
   "B. キー",
   "C. オブジェクト",
   "D. 配列"
  ],
  "figure": "data/figures/CCNA-1021.png"
 },
 {
  "qid": "CCNA-1022",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「R20」という単語は何を表しますか?",
  "choices": [
   "A. 値",
   "B. 配列",
   "C. オブジェクト",
   "D. キー"
  ],
  "figure": "data/figures/CCNA-1022.png"
 },
 {
  "qid": "CCNA-1023",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "この JSON スキーマ内の「LB13」という単語は何を表しますか?",
  "choices": [
   "A. 配列",
   "B. 値",
   "C. オブジェクト",
   "D. キー"
  ],
  "figure": "data/figures/CCNA-1023.png"
 },
 {
  "qid": "CCNA-1024",
  "theme": "automation",
  "type": "exhibit_choice",
  "question": "展示品をご参照ください。表示される JSON データのタイプはどれですか?",
  "choices": [
   "A. ブール値",
   "B. 文字列",
   "C. オブジェクト",
   "D. シーケンス"
  ],
  "figure": "data/figures/CCNA-1024.png"
 },
 {
  "qid": "CCNA-1025",
  "theme": "simulation",
  "type": "sim",
  "question": "3台のルータ間の接続が確立されており、実装を完了するには、IPサービスを記載されている順序で設定する必要があります。割り当てられたタスクには、NAT、NTP、DHCP、およびSSHサービスの設定が含まれます。\n\nタスク1.\nR3 から R1 ループバック アドレスに送信されるすべてのトラフィックは、R2 の NAT 用に設定する必要があります。すべての送信元アドレスは、NAT という名前の標準アクセス リストのみを使用して、R3 から R2 の E0/0 の IP アドレスに変換する必要があります。確認するには、R3 から送信された R1 ループバック アドレスへの ping が成功する必要があります。\n\nタスク2.\nR1 Ethernet0/2 の IP アドレスを使用して、R1 を NTP サーバーとして設定し、R2 をクライアントとして設定します。NTP サーバーの時計を2019年1月1日の午前0時に設定します。\n\nタスク3.\nR1を NETPOOL という名前のプール内のネットワーク 10.1.3.0/24 のDHCP サーバーとして設定します。1つのコマンドを使用して、アドレス 1 ～ 10 を範囲から除外します。R3のEthernet0/2 には、DHCP 経由で 10.1.3.11 を発行する必要があります。\n\nタスク4.\n他のリモート接続プロトコルを介したアクセスを除外しながら、R1 から R3 への SSH 接続を設定します。 ユーザー netadmin とパスワード N3t4ccess によるアクセスは、RSA および 1024 ビットを使用してR3 に設定する必要があります。R1 から宛先 10.1.3.11 を使用して、SSH セッションで接続を確認します。 ホスト名やドメイン名は設定済みです。",
  "title": "IP サービス",
  "choices": [],
  "figure": "data/figures/CCNA-1025.png"
 },
 {
  "qid": "CCNA-1026",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.\nXLATE という標準リストを使用して、R2上で動的な 1対1 アドレス マッピングを設定します。これにより、すべてのトラフィックが、R3 から R1 に送信されるトラフィックに対して 10.10.10.0/24 ネットワークを使用して、R3 の送信元アドレスを test_pool というプールに変換できるようになります。R3 から 192.168.100.1 に ping を送信して、到達可能性を確認します。\n\nタスク2.\nR1 にはすでに DHCP サーバーが設定されています。R3でDHCPクライアントを設定します。R3 をDHCP サーバーから Ethernet0/2 上の IP アドレスを動的に受信するように設定します。\n\nタスク3.\nIP アドレス 10.1.2.1 を使用して、R1 を NTP サーバーとして設定し、R2 をピアではなくクライアントとして設定します。\n\nタスク4.\nRSA を使用して、R3 でユーザーrootとパスワードs3cret を使用して、他のリモート接続プロトコル経由のアクセスを除外しながら、R1 から R3 への SSH アクセスを設定します。R3 の E0/2 に割り当てられた宛先アドレスを使用して、R1 から R3 への接続を確認します。 ホスト名やドメイン名は設定済みです。",
  "title": "IP サービス2",
  "choices": [],
  "figure": "data/figures/CCNA-1026.png"
 },
 {
  "qid": "CCNA-1027",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.\nホスト ルートを使用して静的ルーティングを設定し、送信元 IP 209.165.200.230 を使用して、R3 からR1 ループバック アドレスへの接続を確立します。\n\nタスク2 . R2にR4宛のIPv4デフォルトルートを設定する\n\nタスク3.R2にR4宛のIPv6デフォルトルートを設定する",
  "title": "スタティック",
  "choices": [],
  "figure": "data/figures/CCNA-1027.png"
 },
 {
  "qid": "CCNA-1028",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.\nR1 および R2 ルータ ID を、それらの間で共有されているリンクのインターフェイス IP アドレスを使用して設定します。\n\nタスク2.\nR1および R3 に面する R2 リンクを最大値で設定します。\nR2 は DR にします。\nR2 に面する R1 および R3 リンクは、DR 選択のデフォルトの OSPF 設定のままにします。\n\nタスク3.\nホスト ワイルドカード マスクを使用して、3 台のルータすべてがそれぞれの Loopback1 ネットワークをアドバタイズするように設定します。\n\nタスク4.\nR1 と R3 間のリンクを設定して、他の OSPF ルータを追加する機能を無効にします。",
  "title": "OSPF",
  "choices": [],
  "figure": "data/figures/CCNA-1028.png"
 },
 {
  "qid": "CCNA-1029",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. LACP EtherChannel を設定し、番号を 44 にします。両側で E0/0 および E0/1 を使用して、SW1 と SW2 の間に設定します。LACP モードは両端で一致している必要があります。\n\nタスク2. EtherChannel をトランク リンクとして設定します。\nタスク3. 802.1q タグを使用してトランク リンクを設定します。\n\nタスク4. EtherChannel のタグなし VLAN として「MONITORING」を設定します。",
  "title": "LACP",
  "choices": [],
  "figure": "data/figures/CCNA-1029.png"
 },
 {
  "qid": "CCNA-1030",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.\nSW1にCompute という名前の VLAN 100 と Telephony という名前の VLAN 200 を設定します。\n\nタスク2.\nSW2のE0/1 を、 Availableという名前の既存の VLAN を使用するように設定します。\n\nタスク3.アクセスポートを使用してスイッチ間の接続を構成します。\n\nタスク4.データおよび音声 VLAN を使用して SW1のE0/1を設定します。\n\nタスク5.Cisco 独自のネイバー探索プロトコルがオフになるように、SW2 E0/1 を設定します。",
  "title": "音声VLAN構成",
  "choices": [],
  "figure": "data/figures/CCNA-1030.png"
 },
 {
  "qid": "CCNA-1031",
  "theme": "simulation",
  "type": "sim",
  "question": "指定された VLAN のみがそれぞれのスイッチに設定され、スイッチ間のリンク全体で許可されることを要求しています。VTP 設定は変更または削除しないでください。\nネットワークには、2 つのユーザー定義 VLAN を設定する必要があります。\nVLAN 110: MARKETING\nVLAN 210: FINANCE\n\nタスク1.\n各スイッチでVLAN を設定し、PCに接続されたインターフェイスでアクセス ポートとして割り当てます。\n\nタスク2.\nSw1 および Sw2 上の e0/2 を、必要な VLAN のみが許可された 802.1q トランクとして設定します。\n\nタスク3.\nSw2 および Sw3 の e0/3 を、必要な VLAN のみが許可された 802.1q トランクとして設定します。",
  "title": "VLANおよびトランキング構成",
  "choices": [],
  "figure": "data/figures/CCNA-1031.png"
 },
 {
  "qid": "CCNA-1032",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.仮想ポート0～4で Telnet アクセスが可能な SW101 のローカルアカウントを構成する\nユーザー名: support\nパスワード: max2learn\n権限レベル: Execモード\n\nタスク2. SW101 に単一の名前付きアクセスリストを設定して適用する\n名前: ENT_ACL\nPC2 のみが PC1 に ping することを禁止\nPC2 のみが SW101 に telnet することを許可\nVLAN 200上の PC2以外のデバイスは telnet することを禁止\nVLAN 200 からのその他のすべてのネットワーク トラフィックを許可\n\nタスク3. SW102 のEthernet 0/0 にセキュリティを設定します。\n・セキュア MAC アドレスの最大数を 4 に設定します。\n・セキュアMACアドレスの数が最大値に達している場合、違反パケットをドロップします。通知アクションは必要ありません。\n・セキュア MAC アドレスを動的に学習できるようにします。",
  "title": "名前付きアクセスリストとポートセキュリティ",
  "choices": [],
  "figure": "data/figures/CCNA-1032.png"
 },
 {
  "qid": "CCNA-1033",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.仮想ポート0 ～ 4で Telnet アクセスが可能な Gw1 のローカル アカウントを構成する\nユーザー名: wheel\nパスワード: lock3path\nアルゴリズムの種類: Scrypt\n特権レベル: Execモード\n\nタスク2.VLAN 10 からのネットワーク トラフィックを制御するために、Gw1 に名前付きアクセスリストを設定して適用する\n名前: CORP_ACL\nBOOTP と HTTPS を許可する\n他のすべてのトラフィックを制限し、入力インターフェイス、送信元 MAC アドレス、パケットの送信元と宛先の IP アドレス、およびポートをログに記録する。\n\nタスク3. Sw1 で DHCP スヌーピングを設定します\nVLAN 10 の DHCP スヌーピングを有効にする\nDHCP オプション 82 データ挿入を無効にする\nDHCP スヌーピングの MAC アドレス検証を有効にする\n信頼できるインターフェイスを有効にする",
  "title": "名前付きアクセスリストとDHCP スヌーピング",
  "choices": [],
  "figure": "data/figures/CCNA-1033.png"
 },
 {
  "qid": "CCNA-1034",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. PC3のスイッチポートに接続するVLANを「SALES」という名前で設定する\n\nタスク2. Server1に接続するスイッチポートを構成する\n\nタスク3. PC3に接続するスイッチポートを構成する\n\nタスク4. R1がシスコ独自のネイバー探索プロトコルを介してSW-1を検出し、ネットワーク上の他のすべてのデバイスがSW-1を検出できないことを確認します。",
  "title": "VLAN と CDP",
  "choices": [],
  "figure": "data/figures/CCNA-1034.png"
 },
 {
  "qid": "CCNA-1035",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.サブネット172.16.0.0/16は以下の要件を満たすこと\n・サブネットを16個に分割する\n・2番目のサブネットを使用する\n・最初の使用可能なIPアドレスをSw101のe0/0に割り当てる\n・最後に使用可能なIPアドレスをSw102のe0/0に割り当てる\n\nタスク2.サブネット2001:DB8::/50は以下の要件を満たすこと\n・サブネットを16個に分割する\n・2番目のサブネットを使用する\n・Sw101 の e0/0 に固有の 64 ビットインターフェイス識別子を使用して IPv6 GUA を割り当てる\n・Sw102 の e0/0 に固有の 64 ビットインターフェイス識別子を使用して IPv6 GUA を割り当てる",
  "title": "IPv4 および IPv6 導入",
  "choices": [],
  "figure": "data/figures/CCNA-1035.png"
 },
 {
  "qid": "CCNA-1036",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. R1からサーバー宛てのとき、R2を優先するように設定する\n\nタスク2. R2でISPへのデフォルトルートを設定する\n\nタスク3 . R1からR4のLAN（10.0.41.0/24）宛てのとき、R3を優先するように設定する\n\nタスク4 . R1からR4のLAN（10.0.41.0/24）宛てのとき、R3とR4間のリンクが失敗した場合に備えて、R2を経由する設定をする。管理距離は254としてのフローティング スタティック ルートをバックアップ ルートとして設定する。",
  "title": "スタティックルーティング3",
  "choices": [],
  "figure": "data/figures/CCNA-1036.png"
 },
 {
  "qid": "CCNA-1037",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. SW-1をVLAN 35で設定し、SALESというラベルを付ける\n\nタスク2. SW-2をVLAN 39で設定し、MARKETINGとラベルを付ける\n\nタスク3. SW-1で、PC1に接続するスイッチポートを構成する。1つのVLANのみ許可する。\n\nタスク4. SW-2で、PC2に接続するスイッチポートを構成する。1つのVLANのみ許可する。\n\nタスク5.業界標準プロトコルを使用してSW-1とSW-2をユニバーサルネイバーディスカバリ用に構成し、PC1に接続するインターフェースで無効にします。",
  "title": "VLAN & LLDP",
  "choices": [],
  "figure": "data/figures/CCNA-1037.png"
 },
 {
  "qid": "CCNA-1038",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. R1 が 2001:db8:41::/64 に到達するとき、R2を優先するようにルートを設定する\n\nタスク2. R1が2001:db8:41::/64 に到達するとき、R2との接続がダウンした場合に備えて、R3を経由するフローティングスタティックルートを設定する。\n\nタスク3. R1でサーバーに対して、pingとtracerouteが機能することを確認する",
  "title": "IPv6 スタティックルーティング",
  "choices": [],
  "figure": "data/figures/CCNA-1038.png"
 },
 {
  "qid": "CCNA-1039",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. Cisco IP電話とPC1のトラフィックを転送するようにSW-1 e0/1を設定する\n\nタスク2. PC2のトラフィックを転送するためにSW-2 e0/1を構成する\n\nタスク3. SW-1で「Engineering」という名前のVLAN 10を設定する\n\nタスク4.ベンダー標準のネイバー探索プロトコルを使用するようにSW-1とSW-2間のリンクを構成する\n\nタスク5. SW-1からR1へのリンクを設定して、Ciscoネイバー探索プロトコルが通過しないようにする",
  "title": "音声VLAN2",
  "choices": [],
  "figure": "data/figures/CCNA-1039.png"
 },
 {
  "qid": "CCNA-1040",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.\n仮想ポート0～4でのみTelnet アクセスが可能な、Sw103 のローカルアカウントを設定する\nUsername: devnet\nPassword: access8cli\nAlgorithm type: SHA256\n権限レベル: Exec mode\n\nタスク2.\n最小数の ACEを使用して、既存の NACL「INTERNET_ACL」を変更し、インターネット宛てのネットワークトラフィックを制御し、R1にACL を適用する。\n・172.16.0.0/16 からの HTTPS を許可する\n・VLAN101に対してのみ Telnet を許可する\n・他のすべてのトラフィックを制限し、入力インターフェイス、送信元 MAC アドレス、パケットの送信元と宛先の IP アドレス、およびポートをログに記録する\n\nタスク3. Sw101 で DHCPスヌーピングを構成する\n・VLAN 101のDHCPスヌーピングを有効にする\n・DHCPオプション82の挿入を無効にする\n・DHCPスヌーピングMACアドレス検証を有効にする",
  "title": "名前付きアクセスリストと DHCP スヌーピング 2",
  "choices": [],
  "figure": "data/figures/CCNA-1040.png"
 },
 {
  "qid": "CCNA-1041",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.両方のスイッチで2つのVLANを設定し、指定されたVLAN名を付けます。\n\nタスク2.両方のスイッチの E0/1、E0/2、E0/3 ポートで2つのVLANを適用し、Cisco IP 電話と PC がトラフィックを通過できる設定にします。\n\nタスク3. e0/0 上のベンダー中立プロトコルによるネイバー検出を許可するように Sw1 と Sw2 を設定します。",
  "title": "音声VLANとLLDP",
  "choices": [],
  "figure": "data/figures/CCNA-1041.png"
 },
 {
  "qid": "CCNA-1042",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.\nSW-1,SW-2の e0/0およびe0/1を 802.1qトランキング用に設定し、すべてのVLANを許可する。\n\nタスク2.\nSW-1のe0/2 と SW-3のe0/0、SW-2のe0/2 と SW-3のe0/1 におけるスイッチ間リンクをネイティブVLAN35を使用するように設定する。\n\nタスク3.\nSW-1,SW-2の e0/0とe0/1 をリンクアグリゲーション用に設定します。SW-1はすぐにLACPをネゴシエートし、SW-2はLACP要求にのみ応答する必要があります。",
  "title": "ISL トランキングと LACP シミュレーション",
  "choices": [],
  "figure": "data/figures/CCNA-1042.png"
 },
 {
  "qid": "CCNA-1043",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. SW-1ポートE0/0をVLAN5と6のみを許可するように設定する\n\nタスク2. SW-1とSW-2のE0/1ポートの両方をVLAN 77経由でタグなしトラフィックを送受信するように設定する\n\nタスク3. SW-2 E0/2ポートをVLAN 6のみを許可するように設定する\n\nタスク4.業界標準プロトコルを使用して、次の要件を満たすリンクアグリゲーション用にSW-3とSW-4のポートe0/0とe0/1を設定します。\n・SW-3ポートは、アグリゲーションプロトコルを直ちにネゴシエートする必要があります。\n・SW-4ポートは、アグリゲーションプロトコルのネゴシエーションを開始してはなりません。\n・指定された番号割り当てを使用します。",
  "title": "ネイティブVLANおよびLACP",
  "choices": [],
  "figure": "data/figures/CCNA-1043.png"
 },
 {
  "qid": "CCNA-1044",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. R1 が R4 の LAN 上の PC1 にのみ到達するために R2 経由のパスを優先するようにスタティックルーティングを構成する\n\nタスク2. プライマリ経路で障害が発生した場合に、R1から送信されたトラフィックがR3を経由してPC1に到達する代替経路を確保する静的ルーティングを設定する。\n最高の管理者距離 (254) を持つフローティング スタティック ルートをバックアップ ルートとして設定できます。\n\nタスク3.最小のホップ数を使用して、R1とR3でインターネットへのデフォルトルートを構成する",
  "title": "静的ルーティング4",
  "choices": [],
  "figure": "data/figures/CCNA-1044.png"
 },
 {
  "qid": "CCNA-1045",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク\n1. ルーターR1とR2のEthernet0/1を使用して、192.168.180.0/24の範囲から次の使用可能な/28を設定します。ネットワーク192.168.180.0/28は使用できません。\n2. IPv4/28サブネットでは、ルーターR1を最初の使用可能なホストアドレスで設定する必要があります。\n3. IPv4 /28 サブネットの場合、ルーター R2 は最後の使用可能なホストアドレスで構成する必要があります。\n\n4. IPv6 /64 サブネットの場合、トポロジーから提供された IP アドレスでルーターを構成します。\n5. IPv4 および IPv6 のアドレス範囲のルーター間で ping が機能する必要があります。",
  "title": "IPv4 および IPv6 接続",
  "choices": [],
  "figure": "data/figures/CCNA-1045.png"
 },
 {
  "qid": "CCNA-1046",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. 3つのスイッチすべてにVLAN 99を設定し、FINANCIALというラベルを付けます。\n\nタスク2. PC1、PC2、PC3に接続するスイッチポートを構成する\n\nタスク3. Ciscoの近隣探索プロトコルはSW-1で無効になっており、再度有効にする必要があります。\n\nタスク4. PC1はSW-1を検出できないようにする必要があります。",
  "title": "VLAN & CDP シミュレーション 2",
  "choices": [],
  "figure": "data/figures/CCNA-1046.png"
 },
 {
  "qid": "CCNA-1047",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1:\n+ IPv4 ネットワークで使用可能な最初のホスト IP アドレスを使用して R1 を設定します。\n+ IPv4 ネットワークで使用可能な最後のホスト IP アドレスを使用して R2 を設定します。\n+ ping を使用して接続を確認します。\n\nタスク2:\n+ サブネット ルータ エニーキャスト アドレスをどちらのルータにも割り当てないでください。\n+ IPv6 ネットワークで使用可能な最初のホスト IP アドレス を使用して R1 を設定します。\n+ IPv6 ネットワークで使用可能な最後のホスト IP アドレス を使用して R2 を設定します。\n+ ping を使用して接続を確認します。",
  "title": "IPv4 および IPv6 割り当て",
  "choices": [],
  "figure": "data/figures/CCNA-1047.png"
 },
 {
  "qid": "CCNA-1048",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. SW-1をVLAN 15で設定し、OPSと正確にラベル付けする\n\nタスク2. SW-2をVLAN 66で設定し、ENGINEERINGとラベル付けする\n\nタスク3. PC1に接続するスイッチポートを構成する\n\nタスク4. PC2に接続するスイッチポートを構成する\n\nタスク5.ベンダーに依存しない標準プロトコルを使用して、SW-1とSW-2のE0/2接続をネイバー探索用に設定し、両方のスイッチのe0/0がシスコ独自のプロトコルを使用していることを確認します。",
  "title": "VLAN CDP & LLDP",
  "choices": [],
  "figure": "data/figures/CCNA-1048.png"
 },
 {
  "qid": "CCNA-1049",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク 1. VLAN101に接続されたそれぞれのインターフェース下のすべてのデバイスで、プロセスID 110のOSPFエリア0を設定します。\n\nタスク 2.R1のOSPF優先度を255に設定し、DRにします。Sw101のOSPF優先度を254に設定し、BDRにします。R2とR3は、DR/BDRの選出に参加しないように設定します。",
  "title": "OSPF2",
  "choices": [],
  "figure": "data/figures/CCNA-1049.png"
 },
 {
  "qid": "CCNA-1050",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. R1 で OSPF を次のように構成します。\n・プロセス ID 33 を使用する\n・ルーター ID として E0/1のIPアドレスを使用する\n\nタスク2. R1は、エリア0 の DRとなるようにします。OSPF プロセスのネットワークステートメントは使用しないでください。",
  "title": "OSPF3",
  "choices": [],
  "figure": "data/figures/CCNA-1050.png"
 },
 {
  "qid": "CCNA-1051",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク 1. IEEE標準のフレームタグ付け方法を使用して、ポートE0/0とE0/1のSw1とSw2間のトランクを設定します。\n・トランクポートにVLAN 45をタグなしで追加します。\n・VLAN 15とタグなしVLANのみをトランク全体に拡張します。\n・PC1がPC2にpingを送信できることを確認します。\n\nタスク 2. Sw1とSw2 で、IEEE 802.3ad リンクアグリゲーションを使用します。\n・E0/0 と E0/1 を単一の論理リンクにし、トランク構成はそのままにします\n・ポートチャネル番号 15 に物理ポートをバンドルします\n・両方ポートでリンクアグリゲーションを自動設定できるようにします",
  "title": "Trunking & LACP",
  "choices": [],
  "figure": "data/figures/CCNA-1051.png"
 },
 {
  "qid": "CCNA-1052",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. Sw1とSw2を、指示通りのVLAN名で設定します。\n\nタスク2. Sw1とSw2を、トポロジーに従って、適切なインターフェースにVLANを割り当て、各インターフェースにノン・トランク、ノン・タグのシングルVLANを設定します。\n\nタスク 3. 両方のスイッチを構成し、e0/0 インターフェイス全体にネイティブ VLAN を含むデバイス情報をブロードキャストするために、L2 ベンダーニュートラル検出プロトコルを使用します。",
  "title": "VLAN",
  "choices": [],
  "figure": "data/figures/CCNA-1052.png"
 },
 {
  "qid": "CCNA-1053",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク 1. SW-1 および SW-2 のポート e0/1 および e0/2 の両方を設定し、許可された VLAN のみを許可する\n\nタスク 2. SW-3 および SW-4 の両方のポート e0/2 を設定し、許可された VLAN のみ許可する\n\nタスク 3. VLAN 99 上でタグなしトラフィックの送受信を行うよう、SW-1 および SW-2 の e0/1 ポートの両方を設定します。\n\nタスク 4. 業界標準プロトコルを使用して、SW-3とSW-4の両方のポートe0/0とe0/1をリンクアグリゲーション用に設定します。すべてのポートは直ちにリンクアグリゲーションをネゴシエートする必要があります。",
  "title": "Allowed, Native VLAN & LACP 2",
  "choices": [],
  "figure": "data/figures/CCNA-1053.png"
 },
 {
  "qid": "CCNA-1054",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク 1. IEEE 標準のフレーム タグ付け方法を使用して、ポート E0/0 および E0/1 上の SW1 と Sw2 間のトランクを設定します。\n・トランク間では PC の VLAN のみを許可する必要があります。\n・ルータは PC としてシミュレートされ、IP アドレスが事前に設定されています。\n・PC の設定は変更しないでください。\n\nタスク 2. SW1 と SW2 で、IEEE 802.3ad リンク アグリゲーションを使用します。\n・リンクに番号 10 を割り当てます。\n・E0/0 と E0/1 を 1 つの論理リンクに結合します。\n・両方のリンクでアグリゲーションをネゴシエートする必要があります。",
  "title": "802.1Q Trunking & LACP",
  "choices": [],
  "figure": "data/figures/CCNA-1054.png"
 },
 {
  "qid": "CCNA-1055",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク\n2 台のルータ間で IPv4 と IPv6 を設定します。\nIPv4 Subnet: 192.168.168.192/28\nIPv6 Subnet: 2001:db8:12::60/125\n\nタスク 1\n・R1をiPv4ネットワークで最初に使用可能なホストIPアドレスで設定する。\n・R2をIPv4ネットワークで最後に使用可能なホストIPアドレスで設定する。\n・pingを使って接続性を確認する。\n\nタスク 2\n・どちらのルーターにもサブネットルーターのエニーキャストアドレスを割り当てない。\n・R1をIPv6ネットワークで最初に使用可能なホストIPアドレスで設定する。\n・R2をIPv6ネットワークで最後に使用可能なホストIPアドレスで設定する。\n・pingを使って接続性を確認する。",
  "title": "IPv4 and IPv6 Assignment Sim 2",
  "choices": [],
  "figure": "data/figures/CCNA-1055.png"
 },
 {
  "qid": "CCNA-1056",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. SW-2およびSW-3 の e0/0を設定して、トランキングに業界標準のカプセル化方式を使用し、VLAN 10のみにタグを付けます。\n\nタスク2. SW-2およびSW-3 の e0/0で、VLAN 11経由でタグなしトラフィックを送受信する設定をする\n\nタスク3. SW-2およびSW-3 の e0/2-3 を設定して、トランキングに業界標準のカプセル化方式を使用し、すべてのVLANにタグを付けする。\n\n4. 業界標準プロトコルを使用して、次の要件を満たすリンクアグリゲーション用にSW-2およびSW-3 の e0/2 およびe0/3を設定します。\n・SW-2はアグリゲーションプロトコルのネゴシエーションを開始しないこと\n・SW-3はアグリゲーションプロトコルを直ちにネゴシエートすること\n・指定番号割り当てを使用すること",
  "title": "802.1Q Trunking, Native VLAN & LACP",
  "choices": [],
  "figure": "data/figures/CCNA-1056.png"
 },
 {
  "qid": "CCNA-1057",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1\n①R5に 宛先 10.200.220.6 のホスト ルートを設定します。\n②R1に R3 を経由して R6 に向かう静的デフォルト ルートを設定します。\n③R5で traceroute と ping を使用して、R6 へのパスと R6 の到達可能性を確認します。\n\nタスク2\n①R3 へのリンクに障害が発生した場合に R2 を経由して R6 に向かうパスを優先するように、R1 にフローティング スタティック デフォルト ルートを設定します。管理距離を 225 に設定します。\n②R2で 戻りトラフィックを 10.100.110.0/25 に転送します。\n③ R1 の e0/1 をシャットダウンした後、R5 から traceroute と ping を使用して、R6 へのパスと到達可能性を確認します。",
  "title": "Static Routing Configuration Sim 5",
  "choices": [],
  "figure": "data/figures/CCNA-1057.png"
 },
 {
  "qid": "CCNA-1058",
  "theme": "simulation",
  "type": "sim",
  "question": "ルータ R3 と R4 は完全に設定されており、アクセスできません。ISP と R4 にある LAN へのさまざまな接続用に静的ルートを設定します。\n\nタスク1. R2でISPへのデフォルトルートを設定する\n\nタスク2. R1でISPへのデフォルトルートを設定する\n\nタスク3. 10.0.41.10 のサーバーへのルートを R2 に設定する\n\nタスク4. LANへのプライマリパスとしてR3を優先するLANへのルートをR1に設定する",
  "title": "Static Routing Configuration Sim 6",
  "choices": [],
  "figure": "data/figures/CCNA-1058.png"
 },
 {
  "qid": "CCNA-1059",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1\n・R2 に PAT を構成し、10.0.12.1 の通信を e0/0 のパブリックな IP アドレスに変換します。\n・Sw1から209.165.200.224へのpingを使用して、R2での変換が成功していることを確認します。\n\nタスク2\nR2 e0/1 に構成されたNTPサーバーを使用して、SW1にNTPクライアントを構成します。\nntp broadcast clientまたはntp broadcastコマンドは使用しないでください。\n\nタスク3\nSW1 の VLAN101 インターフェースで R2 e0/1 に DHCP 要求を転送するよう DHCP リレーエージェントを設定します。\n\nタスク4\nSW1のVTYライン0から4にSSHサーバーを設定します。\n・2048ビットRSAキーとSSHバージョン2を使用します。",
  "title": "PAT, NTP & DHCP Relay",
  "choices": [],
  "figure": "data/figures/CCNA-1059.png"
 },
 {
  "qid": "CCNA-1060",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1. HQ1でOSPFを設定し、HQ2とHQ3がネイバーになるようにします。\n・プロセスID 111を使用します。\n・ルータIDとしてLo0 IPを使用します。\n・使用されているプレフィックスと一致するように逆サブネットマスクを使用して、接続されたネットワークをアドバタイズします。\n\nタスク 2.すべてのリンクで HQ1 が常にエリア 0 の DR になるようにします。",
  "title": "OSPF DR Sim",
  "choices": [],
  "figure": "data/figures/CCNA-1060.png"
 },
 {
  "qid": "CCNA-1061",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク1.最小限のACE数を使用して、拡張名前付きACLを設定し、トポロジ内に配置して、可能な限り多くのリソースを節約します。ACLの要件は次のとおりです。\n・ACL名 = WWW_ACL\n・VLAN 202からのHTTPトラフィックのみを許可\n・PC1のTelnetのみをブロック\n・その他のトラフィックはすべて許可\n\nタスク2. Sw2に、仮想ポート0～4でTelnetアクセスを許可するローカルアカウントを設定します。\n・ユーザー名: AdminGroup\n・パスワード: BumBL3d\n・アルゴリズムの種類: Scrypt\n・権限レベル: Execモード\n\nタスク3. Sw3を以下のとおり構成する。\n・VLAN 102および202のDHCPスヌーピングを有効にする\n・DHCPスヌーピングのMACアドレス検証を有効にする",
  "title": "NACL DHCP Snooping 3",
  "choices": [],
  "figure": "data/figures/CCNA-1061.png"
 },
 {
  "qid": "CCNA-1062",
  "theme": "simulation",
  "type": "sim",
  "question": "タスク 1.事前定義された設定を使用して、R1上の NAT/PAT の設定を完了します。\n\nR1 事前定義された設定\ninterface Ethernet0/0\nip nat outside\ninterface Ethernet0/1\nip nat inside\naccess-list 192 permit ip 192.168.0.0 0.0.3.255 any\n\nタスク 2.次の情報を使用して、R1 および Sw1 で NTP を設定します。\n・NTPサーバー：R1\n・ソース：Loopback0  //R1の\n・クライアント：Sw1\n\nタスク3. R1にはDHCPプールと関連情報が事前に設定されています。PC1はIPアドレスを自動的に取得するように設定されています。Sw1 にリレー エージェントを設定します。\n\nタスク4. Sw1にはローカルユーザーとドメイン名が事前設定されています。Sw1でSSH設定を完了してください。\n・RSAキー：2048ビット\n・SSHバージョン：2",
  "title": "NAT DHCP SSH Sim",
  "choices": [],
  "figure": "data/figures/CCNA-1062.png"
 },
 {
  "qid": "CCNA-1063",
  "theme": "simulation",
  "type": "sim",
  "question": "シミュレーション\nこれは、仮想デバイス上でタスクが実行されるラボ項目です。\n\n・このラボ項目のタスクを表示するには、「タスク」タブを参照してください。\n・デバイス コンソールにアクセスしてタスクを実行するには、[トポロジ] タブを参照してください。\n・デバイス アイコンをクリックするか、コンソール ウィンドウ上のタブを使用すると、必要なすべてのデバイスにコンソール アクセスが可能になります。\n・必要な事前設定がすべて適用されている。\n・どのデバイスのイネーブルパスワードまたはホスト名も変更しないでください。\n・次の項目に進む前に、設定を NVRAM に保存します。\n・画面の下部にある [次へ] をクリックしてこのラボを送信し、次の質問に進みます。\n・[次へ] をクリックすると、ラボが閉じられ、再度開くことはできません。\n\nタスク\n2 つのスイッチ間のすべての物理ケーブルが取り付けられています。指定された VLAN とインターフェイスを使用して、スイッチ間のネットワーク接続を構成します。\n\n1. 各タスクの必要に応じて、Compute という名前の VLAN 12 と Telephony という名前の VLAN 34 を設定します。\n2. SW2 上の Ethernet0/1 を、Available という名前の既存の VLAN を使用するように設定します。\n3. アクセス ポートを使用してスイッチ間の接続を構成します。\n4. データ VLAN と音声 VLAN を使用して SW1 に Ethernet0/1 を設定します。\n5. シスコ独自の近隣探索プロトコルが指定されたインターフェイスに対してのみオフになるように、SW2 で Ethernet0/1 を設定します。",
  "choices": [],
  "figure": "data/figures/CCNA-1063.png"
 },
 {
  "qid": "CCNA-1064",
  "theme": "simulation",
  "type": "sim",
  "question": "シミュレーション\nこれは仮想デバイス上でタスクが実行されるラボ項目です。\n\n・このラボ項目のタスクを表示するには、「タスク」タブを参照してください。\n・デバイス コンソールにアクセスしてタスクを実行するには、[トポロジ] タブを参照してください。\n・デバイス アイコンをクリックするか、コンソール ウィンドウ上のタブを使用すると、必要なすべてのデバイスにコンソール アクセスが可能になります。\n・必要な事前設定がすべて適用されている。\n・どのデバイスのイネーブルパスワードまたはホスト名も変更しないでください。\n・次の項目に進む前に、設定を NVRAM に保存します。\n・画面の下部にある [次へ] をクリックしてこのラボを送信し、次の質問に進みます。\n・[次へ] をクリックするとラボが閉じられ、再度開くことはできません。\n\nタスク\nレイヤ 2 接続用に 3 つのスイッチを構成する必要があります。同社では、セキュリティ上の目的で、指定された VLAN のみをそれぞれのスイッチに設定し、スイッチ間のリンク全体で許可することを要求しています。 VTP 設定を変更または削除しないでください。\n\nネットワークには、次の 2 つのユーザー定義 VLAN を設定する必要があります。\n\nVLAN 202: MARKETING\n\nVLAN 303: FINANCE\n\n1. 指定されたスイッチ上で VLAN を設定し、PC に接続されているインターフェイスへのアクセス ポートとして割り当てます。\n2. Sw1 および Sw2 の e0/2 インターフェイスを、必要な VLAN のみが許可された 802.1q トランクとして設定します。\n3. Sw2 および Sw3 上の e0/3 インターフェイスを、必要な VLAN のみが許可された 802.1q トランクとして設定します。",
  "choices": [],
  "figure": "data/figures/CCNA-1064.png"
 },
 {
  "qid": "CCNA-1065",
  "theme": "simulation",
  "type": "sim",
  "question": "シミュレーション\nこれは仮想デバイス上でタスクが実行されるラボ項目です。\n\n・このラボ項目のタスクを表示するには、「タスク」タブを参照してください。\n・デバイス コンソールにアクセスしてタスクを実行するには、[トポロジ] タブを参照してください。\n・デバイス アイコンをクリックするか、コンソール ウィンドウ上のタブを使用すると、必要なすべてのデバイスにコンソール アクセスが可能になります。\n・必要な事前設定がすべて適用されている。\n・どのデバイスのイネーブルパスワードまたはホスト名も変更しないでください。\n・次の項目に進む前に、設定を NVRAM に保存します。\n・画面の下部にある [次へ] をクリックしてこのラボを送信し、次の質問に進みます。\n・[次へ] をクリックするとラボが閉じられ、再度開くことはできません。\n\nタスク\nIP 接続と OSPF は、必要に応じてすべてのデバイスで事前に構成されています。 IP アドレス指定や OSPF には変更を加えないでください。企業ポリシーでは、フローティング スタティックを使用しない負荷分散または冗長性を除き、スタティック ルートを構成するときに、接続されたインターフェイスとネクスト ホップを使用します。インターネット上のサブネット 172.20.20.128/25 と、SW1 に接続されている 192.168.0.0/24 の LAN との間に接続を確立する必要があります。\n\n1. ルーター R2 でスイッチ SW1 LAN サブネットへの到達可能性を設定します。\n2. ルーター R1 でインターネットサブネットへのデフォルトの到達可能性を構成します。\n3. ルータ R1 と R2 の間の両方の冗長リンクを考慮して、インターネット サブネットに到達するようにルータ R2 に単一の静的ルートを設定します。デフォルト ルートはルーター R2 では許可されません。\n4. ルータ R1 でスイッチ SW1 LAN サブネットに向かうスタティック ルートを設定します。このルートでは、プライマリ リンクは Ethernet0/1 を経由し、バックアップ リンクはフローティング ルートを使用して Ethernet0/2 を経由する必要があります。必要に応じて、最小アドミニストレーティブ ディスタンス値を使用します。",
  "choices": [],
  "figure": "data/figures/CCNA-1065.png"
 },
 {
  "qid": "CCNA-1066",
  "theme": "simulation",
  "type": "sim",
  "question": "シミュレーション\nこれは仮想デバイス上でタスクが実行されるラボ項目です。\n\n・このラボ項目のタスクを表示するには、「タスク」タブを参照してください。\n・[トポロジ] タブを参照してデバイス コンソールにアクセスし、タスクを実行します。\n・デバイス アイコンをクリックするか、コンソール ウィンドウの上にあるタブを使用すると、必要なすべてのデバイスでコンソール アクセスが可能になります。\n・必要な事前設定はすべて適用されています。\n・どのデバイスのイネーブル パスワードまたはホスト名も変更しないでください。\n・次の項目に進む前に、設定を NVRAM に保存してください。\n・画面の下部にある [次へ] をクリックして、このラボを送信し、次の質問に進みます。\n・[次へ] をクリックすると、ラボが閉じられ、再度開くことはできません。\n\nタスク\n\nすべての物理ケーブルが配置されています。ある企業は、16 の新しいサイトを展開する予定です。これらのサイトは、IPv4 ネットワークと IPv6 ネットワークの両方を利用します。\n\n1. サブネット要件を満たし、ホスト数を最大化するためのサブネット 10.20.0.0/16\n・2 番目のサブネットの使用\n- 最初に使用可能な IP アドレスを Sw101 の e0/0 に割り当てます。\n- 最後の使用可能な IP アドレスを Sw102 の e0/0 に割り当てます。\n\n2. サブネット 2001:db8::/52 でサブネット要件を満たし、ホスト数を最大化します。\n・2 番目のサブネットを使用します。\n- Sw101 の e0/0 で一意の 64 ビット インターフェイス識別子を使用して IPv6 GUA を割り当てます。 -\nSw102 の e0/0 で一意の 64 ビット インターフェイス識別子を使用して IPv6 GUA を割り当てます。",
  "choices": [],
  "figure": "data/figures/CCNA-1066.png"
 },
 {
  "qid": "CCNA-1067",
  "theme": "simulation",
  "type": "sim",
  "question": "シミュレーション\nこれは仮想デバイス上でタスクが実行されるラボ項目です。\n\n・このラボ項目のタスクを表示するには、「タスク」タブを参照してください。\n・デバイス コンソールにアクセスしてタスクを実行するには、[トポロジ] タブを参照してください。\n・デバイス アイコンをクリックするか、コンソール ウィンドウ上のタブを使用すると、必要なすべてのデバイスにコンソール アクセスが可能になります。\n・必要な事前設定がすべて適用されている。\n・どのデバイスのイネーブルパスワードまたはホスト名も変更しないでください。\n・次の項目に進む前に、設定を NVRAM に保存します。\n・画面の下部にある [次へ] をクリックしてこのラボを送信し、次の質問に進みます。\n・[次へ] をクリックするとラボが閉じられ、再度開くことはできません。\n\nタスク\n\nすべての物理ケーブル配線が適切に配置されています。ある企業は、64 の新しいサイトを展開する予定です。これらのサイトは、IPv4 ネットワークと IPv6 ネットワークの両方を利用します。\n\n1. サブネット要件を満たし、ホスト数を最大化するためのサブネット 10.30.64.0/19\n・2 番目のサブネットの使用\n- 最初に使用可能な IP アドレスを Sw101 の e0/0 に割り当てます。\n- 最後の使用可能な IP アドレスを Sw102 の e0/0 に割り当てます。\n\n2. サブネット 2001:db8::/56 でサブネット要件を満たし、ホスト数を最大化します。\n・2 番目のサブネットを使用します。\n- Sw101 の e0/0 で一意の 64 ビット インターフェイス識別子を使用して IPv6 GUA を割り当てます。 -\nSw102 の e0/0 で一意の 64 ビット インターフェイス識別子を使用して IPv6 GUA を割り当てます。",
  "choices": [],
  "figure": "data/figures/CCNA-1067.png"
 },
 {
  "qid": "CCNA-1068",
  "theme": "simulation",
  "type": "sim",
  "question": "シミュレーション\nこれは、仮想デバイス上でタスクが実行されるラボ項目です。\n\n・このラボ項目のタスクを表示するには、「タスク」タブを参照してください。\n・デバイス コンソールにアクセスしてタスクを実行するには、[トポロジ] タブを参照してください。\n・デバイス アイコンをクリックするか、コンソール ウィンドウ上のタブを使用すると、必要なすべてのデバイスにコンソール アクセスが可能になります。\n・必要な事前設定がすべて適用されている。\n・どのデバイスのイネーブルパスワードまたはホスト名も変更しないでください。\n・次の項目に進む前に、設定を NVRAM に保存します。\n・画面の下部にある [次へ] をクリックしてこのラボを送信し、次の質問に進みます。\n・[次へ] をクリックすると、ラボが終了し、再度開くことができなくなります。\n\nタスク\n\nSW-3 および SW-4 には、必要なすべてのコマンドが事前に設定されています。すべての物理的なケーブル配線が適切に配置され、検証されていること。すべての接続が動作可能である必要があります。\n\n1. SW-1 と SW-2 の両方のスイッチ ポート e0/0 と e0/1 を、VLAN 1、12、および 22 のみを許可する 802.1q トランキング用に設定します。\n2. SW-1 ポート e0/2 を 802.1q トランキング用に設定し、VLAN 12 と 22 のみを含めます。\n3. 業界標準プロトコルを使用して、SW-1 と SW-2 の両方のスイッチ ポート e0/0 と e0/1 をリンク アグリゲーション用に設定します。すべてのポートは、リンクをただちにネゴシエートするように構成する必要があります。",
  "choices": [],
  "figure": "data/figures/CCNA-1068.png"
 },
 {
  "qid": "CCNA-1069",
  "theme": "simulation",
  "type": "sim",
  "question": "シミュレーション\nこれは、仮想デバイス上でタスクが実行されるラボ項目です。\n\n・このラボ項目のタスクを表示するには、「タスク」タブを参照してください。\n・デバイス コンソールにアクセスしてタスクを実行するには、[トポロジ] タブを参照してください。\n・デバイス アイコンをクリックするか、コンソール ウィンドウ上のタブを使用すると、必要なすべてのデバイスにコンソール アクセスが可能になります。\n・必要な事前設定がすべて適用されている。\n・どのデバイスのイネーブルパスワードまたはホスト名も変更しないでください。\n・次の項目に進む前に、設定を NVRAM に保存します。\n・画面の下部にある [次へ] をクリックしてこのラボを送信し、次の質問に進みます。\n・[次へ] をクリックすると、ラボが終了し、再度開くことができなくなります。\n\nタスク\n\nトポロジを参照します。すべての物理的なケーブル配線が適切に配置されています。ローカル ユーザー アカウント、名前付き ACL (NACL)、およびセキュリティを構成します。\n\n1. 仮想ポート 0 ～ 4 でのみ Telnet アクセスができるように、Sw101 上でローカル アカウントを構成します。次の情報を使用します。\no ユーザー名: netops\no パスワード: ipsec4all\no アルゴリズム: \"Vigenere\"\no 特権レベル: Exec モード\n\n2. 以下を使用して、Sw103 に単一の NACL を設定して適用します。\n\no 名前: ENT_ACL\no VLAN 10 上の PC1 のみを制限します。 PC2 への ping から\no VLAN 10 上の PC1 のみが R1 (172.16.30.2) への Telnet を許可する\no 他のすべてのデバイスが VLAN 10 から Telnet することを禁止する\no VLAN 10 からの他のすべてのネットワーク トラフィックを許可する\n\n3. Sw102 のインターフェイス Ethernet 0/0 でセキュリティを設定します\n\n。セキュア MAC アドレスの最大数を 2 に設定します。\no ポートがパケットを破棄し、違反の数をカウントし、syslog メッセージを送信するようにします。\no セキュア MAC アドレスを動的に学習できるようにします。",
  "choices": [],
  "figure": "data/figures/CCNA-1069.png"
 },
 {
  "qid": "CCNA-1070",
  "theme": "simulation",
  "type": "sim",
  "question": "シミュレーション\nこれは仮想デバイス上でタスクが実行されるラボ項目です。\n\n・このラボ項目のタスクを表示するには、「タスク」タブを参照してください。\n・デバイス コンソールにアクセスしてタスクを実行するには、[トポロジ] タブを参照してください。\n・デバイス アイコンをクリックするか、コンソール ウィンドウ上のタブを使用すると、必要なすべてのデバイスにコンソール アクセスが可能になります。\n・必要な事前設定がすべて適用されている。\n・どのデバイスのイネーブルパスワードまたはホスト名も変更しないでください。\n・次の項目に進む前に、設定を NVRAM に保存します。\n・画面の下部にある [次へ] をクリックしてこのラボを送信し、次の質問に進みます。\n・[次へ] をクリックすると、ラボが閉じられ、再度開くことはできません。\n\nタスク\n\nトポロジを参照します。すべての物理的なケーブル配線が適切に配置されています。ローカル ユーザー アカウントを設定し、名前付き ACL (NACL)、および動的 Arp 検査を設定します。\n\n1. 仮想ポート 0 ～ 4 でのみ Telnet アクセスができるように、Sw3 上でローカル アカウントを構成します。次の情報を使用します。\n\no ユーザー名: tech12\no パスワード:load1key\no アルゴリズム タイプ: md5\no 特権レベル: Exec モード\n\n2. R1 に NACL を設定して適用し、ISP へのネットワーク トラフィックを制御します。\n\no 名前: ISP_ACL\no RFC 1918 クラス A を制限します。および B アドレス\no 他のすべてのアドレスを許可します\n\n3. DHCP IP プールは VLAN 5 の R1 に事前設定されており、DHCP スヌーピングは Sw2 に設定されています。 Sw2 で設定します。\n\no VLAN 5 のダイナミック ARP インスペクション\no ARP パケットの宛先 MAC アドレスの検証を有効にする\no ARP パケットの送信元 MAC アドレスの検証を有効にする\no ARP パケットの IP アドレスの検証を有効にする",
  "choices": [],
  "figure": "data/figures/CCNA-1070.png"
 },
 {
  "qid": "CCNA-1071",
  "theme": "simulation",
  "type": "sim",
  "question": "シミュレーション\nこれは仮想デバイス上でタスクが実行されるラボ項目です。\n\n・このラボ項目のタスクを表示するには、「タスク」タブを参照してください。\n・デバイス コンソールにアクセスしてタスクを実行するには、[トポロジ] タブを参照してください。\n・デバイス アイコンをクリックするか、コンソール ウィンドウ上のタブを使用すると、必要なすべてのデバイスにコンソール アクセスが可能になります。\n・必要な事前設定がすべて適用されている。\n・既存の設定はデバイスから削除せず、リストされたタスクを実行するために必要な適切な変更を加えるために必要な設定のみを削除します。\n・どのデバイスのイネーブルパスワードまたはホスト名も変更しないでください。\n・次の項目に進む前に、設定を NVRAM に保存します。\n・画面の下部にある [次へ] をクリックしてこのラボを送信し、次の質問に進みます。\n・[次へ] をクリックすると、ラボが閉じられ、再度開くことはできません。\n\nタスク 1\n\nIEEE 標準フレーム タグ付け方式を使用して、ポート E0/0 および E0/1 上の Sw1 と Sw2 の間のトランクを構成します。\n・VLAN 99 をタグなしとしてトランク ポートに追加します。\n・VLAN 110 とタグなし VLAN のみをトランク全体に拡張します。\n・PC1 が PC2 に ping できることを確認します。\n\nタスク 2\n\nSw1 および Sw2 で、IEEE 802.3ad リンク アグリゲーションを使用します。\n\n・トランク構成をそのままにして、E0/0 と E0/1 を単一の論理リンクに結合します。\n・リンクに番号 20 を割り当てます。\n・両方のリンクが集約をネゴシエートする必要があります。",
  "choices": [],
  "figure": "data/figures/CCNA-1071.png"
 },
 {
  "qid": "CCNA-1072",
  "theme": "simulation",
  "type": "sim",
  "question": "192.168.2.32/27 のネットワークで、割り当て可能な最初の IP を RT1 e0/0 に、最後の IP を RT2 e0/0 に設定しなさい。",
  "choices": [],
  "figure": null
 },
 {
  "qid": "CCNA-1073",
  "theme": "simulation",
  "type": "sim",
  "question": "10.0.0.128/25 のネットワークで、割り当て可能な最初の IP を RT1 e0/0 に、最後の IP を RT2 e0/0 に設定しなさい。",
  "choices": [],
  "figure": null
 },
 {
  "qid": "CCNA-1074",
  "theme": "simulation",
  "type": "sim",
  "question": "172.16.0.0/26 のネットワークで、割り当て可能な最初の IP を RT1 e0/0 に、最後の IP を RT2 e0/0 に設定しなさい。",
  "choices": [],
  "figure": null
 },
 {
  "qid": "CCNA-1075",
  "theme": "simulation",
  "type": "sim",
  "question": "ルータ R1 のインターフェース GigabitEthernet0/0 に IP アドレス 192.168.10.1/24 を設定し、有効化しなさい。",
  "choices": [],
  "figure": null
 },
 {
  "qid": "CCNA-1076",
  "theme": "simulation",
  "type": "sim",
  "question": "スイッチ SW1 の VLAN 10 に名前\"SALES\"を設定し、VLAN 10 をインターフェース FastEthernet0/1 に割り当てなさい。",
  "choices": [],
  "figure": null
 },
 {
  "qid": "CCNA-1077",
  "theme": "simulation",
  "type": "sim",
  "question": "ルータ R2 で OSPF プロセス ID 1 を設定し、ネットワーク 192.168.20.0/24 をエリア 0 に追加しなさい。",
  "choices": [],
  "figure": null
 },
 {
  "qid": "CCNA-1078",
  "theme": "simulation",
  "type": "sim",
  "question": "ルータ R1 でスタティックルートを設定し、ネットワーク 192.168.30.0/24 へのトラフィックを次のホップ 192.168.10.2 に送るようにしなさい。",
  "choices": [],
  "figure": null
 },
 {
  "qid": "CCNA-1079",
  "theme": "simulation",
  "type": "sim",
  "question": "ルータ R2 でデフォルトルートを設定し、すべての未特定トラフィックを次のホップ 10.0.0.1 に送るようにしなさい。",
  "choices": [],
  "figure": null
 },
 {
  "qid": "CCNA-1080",
  "theme": "simulation",
  "type": "sim",
  "question": "ルータ R3 で RIP プロトコルを有効化し、ネットワーク 192.168.40.0/24 と 192.168.50.0/24 を RIP に追加しなさい。",
  "choices": [],
  "figure": null
 },
 {
  "qid": "CCNA-1081",
  "theme": "simulation",
  "type": "sim",
  "question": "ルータ R4 で EIGRP プロセス ID 100 を設定し、ネットワーク 10.1.1.0/24 と 10.2.2.0/24 を EIGRP に追加しなさい。",
  "choices": [],
  "figure": null
 }
];
