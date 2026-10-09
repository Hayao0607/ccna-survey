// scripts/05_build_survey.py が生成。手で編集しない
window.SURVEY_CONFIG = {
 "exam_id": "ccna-200-301",
 "exam_name": "CCNA 200-301",
 "title": "CCNA 200-301 出題アンケート",
 "questions_version": "2026-10-08",
 "storage_key": "survey:ccna-200-301",
 "variant": null,
 "scope_books": [],
 "judgments": [
  {
   "value": "seen",
   "label": "出た",
   "help": "ほぼ同じ問題を見た"
  },
  {
   "value": "similar",
   "label": "似た問題",
   "help": "同じ知識を別の問い方で問われた"
  },
  {
   "value": "not_seen",
   "label": "見ていない",
   "help": "見た覚えがない",
   "default": true
  }
 ],
 "profile": {
  "_note": "事前アンケート（問題の判定の前に答えてもらう）。回答は回答ファイルの profile に {質問id: 値} で入る。type: multi=複数選択（値は value の配列。other_text に自由記入）／ratio=割合（値は {項目id: 数}、合計 total にする）／single=1つ選ぶ（値は value）",
  "title": "事前アンケート",
  "questions": [
   {
    "id": "study_methods",
    "type": "multi",
    "required": true,
    "label": "どのような勉強をしていましたか（あてはまるものをすべて）",
    "options": [
     {
      "value": "ccnavi",
      "label": "CCNAVI"
     },
     {
      "value": "aohon",
      "label": "青本"
     },
     {
      "value": "ai",
      "label": "AI"
     },
     {
      "value": "lab",
      "label": "実機・Packet Tracerでの演習"
     },
     {
      "value": "video",
      "label": "動画"
     },
     {
      "value": "other_books",
      "label": "他社出版の参考書"
     },
     {
      "value": "pingt",
      "label": "Ping-t"
     },
     {
      "value": "other",
      "label": "その他",
      "free_text": true
     }
    ]
   },
   {
    "id": "match_ratio",
    "type": "ratio",
    "required": true,
    "total": 10,
    "unit": "割",
    "min": 0,
    "max": 10,
    "label": "本番の問題のうち、勉強した問題と比べてそれぞれ何割くらいでしたか（体感。合計10割）",
    "items": [
     {
      "id": "exact",
      "label": "完全一致"
     },
     {
      "id": "similar",
      "label": "類題"
     },
     {
      "id": "new",
      "label": "初見"
     }
    ]
   },
   {
    "id": "daily_hours",
    "type": "single",
    "required": true,
    "label": "1日の平均学習時間",
    "options": [
     {
      "value": "lt30m",
      "label": "30分未満"
     },
     {
      "value": "30m_1h",
      "label": "30分〜1時間"
     },
     {
      "value": "1_2h",
      "label": "1〜2時間"
     },
     {
      "value": "2_3h",
      "label": "2〜3時間"
     },
     {
      "value": "ge3h",
      "label": "3時間以上"
     }
    ]
   },
   {
    "id": "study_period",
    "type": "single",
    "required": false,
    "label": "学習期間",
    "options": [
     {
      "value": "lt1m",
      "label": "1か月未満"
     },
     {
      "value": "1_2m",
      "label": "1〜2か月"
     },
     {
      "value": "2_3m",
      "label": "2〜3か月"
     },
     {
      "value": "ge3m",
      "label": "3か月以上"
     }
    ]
   }
  ]
 },
 "themes": [
  {
   "id": "network-basics",
   "name": "ネットワークの土台",
   "count": 105
  },
  {
   "id": "addressing",
   "name": "アドレスの計算",
   "count": 87
  },
  {
   "id": "devices-virtualization",
   "name": "機器の種類と仮想化",
   "count": 54
  },
  {
   "id": "switching",
   "name": "スイッチが転送する仕組み",
   "count": 27
  },
  {
   "id": "vlan-trunk",
   "name": "VLANとトランク",
   "count": 53
  },
  {
   "id": "stp",
   "name": "ループ防止（STP）",
   "count": 44
  },
  {
   "id": "etherchannel",
   "name": "リンクの束ね（EtherChannel）",
   "count": 25
  },
  {
   "id": "wireless",
   "name": "無線の仕組み",
   "count": 70
  },
  {
   "id": "wireless-security",
   "name": "無線のセキュリティ",
   "count": 33
  },
  {
   "id": "routing",
   "name": "経路の決まり方",
   "count": 96
  },
  {
   "id": "ospf",
   "name": "OSPF",
   "count": 35
  },
  {
   "id": "fhrp",
   "name": "ゲートウェイの冗長化",
   "count": 14
  },
  {
   "id": "ip-services",
   "name": "アドレス配布・名前・時刻",
   "count": 39
  },
  {
   "id": "monitoring-qos",
   "name": "監視と優先制御",
   "count": 42
  },
  {
   "id": "device-access",
   "name": "機器への入り方",
   "count": 46
  },
  {
   "id": "acl-l2security",
   "name": "通信の許可と拒否",
   "count": 39
  },
  {
   "id": "aaa",
   "name": "認証の仕組み（AAA）",
   "count": 31
  },
  {
   "id": "security-vpn",
   "name": "セキュリティの考え方とVPN",
   "count": 52
  },
  {
   "id": "automation",
   "name": "自動化とプログラム",
   "count": 132
  },
  {
   "id": "simulation",
   "name": "シミュレーション（SIM）",
   "count": 57
  }
 ],
 "adapters": [
  "download"
 ],
 "default_adapter": "download"
};
