export default {
    //startup, input, damage, frames, extra
    "alisa" : {
        "standing" : [
            ["i10","1,1","23","+5","Can transition to DES with input 1,1,1+2"],
            ["i10","1,2,2","35","+21a (+6)"],
            ["i12","2,2","32","+15a (+5)"],
            ["i12","df+4","13","+4"],
            ["i13","4","24","+14g"],
            ["i13","3,2","30","+20a (+11)"],
            ["i14","f+1+2","25","+14c","Can transition to BOT with input f+1+2,3, and DBT with input f+1+2,3,F"],
            ["i14","f+3,2","30 (+)","+38d (+30)"],
            ["i14","f+3,1+2","35","+8"],
            ["i15","b+4,4","34","+9a (-1)","Can transition to BOT with input b+4,4,3"],
            ["i15","uf+4,4","16 (+)","+45a (+37)"],
            ["i16","uf+2","22 (+)","+20a (+11)"],
            ["i16","f+4,1,4","60","+1a","Can transition to DES with input f+4,1+2"],
            ["i16","df+2","16 (+)","+32a (+22)"],
            ["i17","f+2,1","32","+14c","Can transition to DES with input f+2,1+2"],
            ["i17","ub+2","23","+38a (-20)"],
            ["i18","b+3+4","22 (+)","+32a (+22)","For pushback moves"],
        ],
        "crouching" : [
            ["i11","ws4","15","+6"],
            ["i13","ws1,2","24","+6"],
            ["i15","uf+4,4","16 (+)","+45a (+37)"],
            ["i17","ws2","24 (+)","+33a (+23)"],
        ]
    },
    "asuka" : {
        "standing" : [
            ["i10","1,2","15","+6"],
            ["i12","2,3","25","+14gc"],
            ["i14","uf+2","45","Th"],
            ["i14","db+1,2","33","HE/+28"],
            ["i15","df+2","14 (+)","+35a (+25)"],
            ["i16","1+2","21 (+)","+27a"],
            ["i17","f+2","20 (+)","+33a (+23)"],
            ["i20","uf+4","25","+31a (+21)"],            
        ],
        "crouching" : [
            ["i11","ws4","15","+8"],
            ["i13","ws2,1","28","+9"],
            ["i14", "ws1,4","32 (+)","+37a (+29)"],
            ["i18","ws3","20 (+)","+35a (+25)"],
            ["i20","uf+4","25 (+)","+31a (+21)"],
        ]
    },
    "azucena" : { // Has backturned, grounded, whiff, special punishers
        "standing" : [
            ["i10","1,1","20","+8"],
            ["i10","1,2","+28","+8~+9","W!"],
            ["i12","4,1","29","+4~+5"],
            ["i13","df+1,4","24","+4~+5"],
            ["i14","3,3","34","+43a (-15)"],
            ["i14","b+1,1","30","+8"],
            ["i15","df+2 (+)","12","+28a (+18)"],
            ["i16","f+1+2","25","+41a (+17)"],
            ["i16","df+4,1","38","+20a (+3)"],
            ["i16","f,F+3 (+)","20","+35a (+25)"],
            ["i20","db+1+2 (+)","23","+33a (+23)"],
        ],
        "crouching" : [
            ["i11","ws4,1","23","+6~+7"],
            ["i13","ws1","17","+6~+7"],
            ["i15","ws2 (+)","14","+32 (+22)"],
        ],
        "backturned" : [
            ["-6","2,1,2","41","+20a (+3)"],
            ["-10","b+4,3,4,3","59","+39d (-19)"],
        ]
    },
    "bryan" : {
        "standing" : [
            ["i10","1,4","19","+4"],
            ["i10","2,3","24","+6"],
            ["i12","4,3","27","+2"],
            ["i13","uf+2,2,2,3","34","+30a (+12)"],
            ["i13","df+2,1","23","+5"],
            ["i14","f,n,b+2","20 (+)","+43a (+33)"],
            ["i15","f+2,1,4","42","+3a"],
            ["i16","b+4","18 (+)","+15"],
            ["i18","f+4,1","20 (+)","+40a (+32)"],
        ],
        "crouching" : [
            ["i11","ws4","16","+5"],
            ["i12","ws3","17","+4"],
            ["i13","FC.df+2,1","37","+34a (+8)"],
            ["i13","uf+2,2,2,3","34","+30a (+12)"],
            ["i16","ws1","20 (+)","+35a (+25)"],
            ["i18","ws2","30 (+)","+50a"],
            ["i23","uf,n,4","20 (+)","+32a (+22)"],
        ]
    },
    "claudio" : {
        "standing" : [
            ["i10", "1,2", "17", "+6"],
            ["i12", "f+2,2", "29", "+18a (-13)"],
            ["i12","STB.4,2","45","+27( +1)"],
            ["i13", "d+1+2", "28", "+7a (-2)"],
            ["i14", "3,2", "36", "+15"],
            ["i15", "uf+4", "13 (+)", "+33a (+23)"],
            ["i15", "df+1,2", "25 (+)", "+31a (+21)"]
        ],
        "crouching" : [
            ["i11", "ws4", "18", "+5"],
            ["i12", "ws1,1", "27", "+9"],
            ["i14","FC.df+2,1+2","34","+10a (+1)"],
            ["i15","ws2","20 (+)","+26a (+16)"]
        ]
    },
    "eddy" : {
        "standing" : [
            ["i10","1,3","21","+7c"],
            ["i10","1,2","17","+8"],
            ["i12","2,3","30","+8s"],
            ["i13","df1,3","31","+22a (+5)"],
            ["i15","df+3","17 (+)","+31a (+21)"],
        ],
        "crouching" : [
            ["i11","ws4,4","23","+8"],
            ["i13","ws1,3","20 (+)","+38a (+20)"],
            ["i15","ws2","20 (+)","+51"],
        ]
    },
    "deviljin" : { // Has backturned, grounded, whiff, special punishers
        "standing" : [
            ["i10","1,1,2","25","+18a (+13)"],
            ["i10","1,2,2","25","+4"],
            ["i13","df+4,4","26","-4"],
            ["i14","f,n,d,df+2","23","+39a (+29)"],
            ["i14","b+2,3","34","+8(-1) / HE"],
            ["i15","d+3+4","25 (+)","+30 (+20)"],
            ["i16","uf+3+4","28","+33a (-25)"],
        ],
        "crouching" : [
            ["i11","ws4,4","30","+4c"],
            ["i13","ws1,2","27","+6/+14 MCR"],
            ["i15","ws2","20 (+)","+72a (+56)"],
        ],
        "backturned" : [
            ["-10","1,2,3,4","59","+12c"],
        ]
    },
    "dragunov" : {
        "standing" : [
            ["i10","2,1","20","+8","Can transition to SNK at +10 with input 2,1,DF"],
            ["i12","4,1","27","+8"],
            ["i12","df+4","14","+2","Use over 4,1 only if you need a mid."],
            ["i13","df+1","13","+7","Use over 4,1 only if you need a mid."],
            ["i14","b+4,3","35","+21a (+12) / HE","Heat Engager +17g, Heat Dash +62a (+42)"],
            ["i14","f+4,3","38","+20a"],
            ["i15","df+2","14 (+)","+28a (+18)"],
            ["i16","uf+1","20  (+)","+37d (+29)"],
            ["i17","f+1+2","27","+35a","Long range punisher; such as Paul's Deathfist"],
            ["i20","f+3,1+2","38  (+)","+22a / HE","Heat Engager +17g, Heat Dash +67a (+50)"],
            ["i23","uf,n,4","20","+32a (+22)"],
        ],
        "crouching" : [
            ["i11","ws4","15","+6"],
            ["i12","ws1,3","28","+15a (+6)"],
            ["i12","ws1,2","25","+10g"],
            ["i12","ws1+2","28","+19a (+9)"],
            ["i15","ws2","15 (+)","+28a (+18)"],
            ["i23","uf,n,4","20 (+)","+32a (+22)"],
        ]
    },
    "feng" : {
        "standing" : [
            ["i10","1,3","24","+8"],
            ["i10","1,2,2","26","+3","Can transition to BT at +5 with input 1,2,2~B"],
            ["i13","b+1+2","31","+18a (+13) / HE","Heat Engager. +18a (+13) when already in Heat or Heat is not available."],
            ["i15","uf+4","13 (+)","+33a (+23)"],
            ["i15","df+4,3","36","+15g","Only use over uf+4 if they're out of range of uf+4"],
            ["i18","f+4","19 (+)","+52a","Can transition to BT at +55a with input f+4~B"],
        ],
        "crouching" : [
            ["i11","ws4","18","+7"],
            ["i13","ws1,3","33","+4c"],
            ["i15","ws3","15 (+)","+33a (+23)"],
            ["i15","uf+4","13 (+)","+33a (+23)"],
            ["i18","FC.df+2 (+)","21","+55a"],
        ]
    },
    "hwoarang" : { // Has backturned, grounded, whiff, special punishers
        "standing" : [
            ["i10","1,2,3","17","+11g LFS"],
            ["i10","1,2,4","17","+11g RFS"],
            ["i10","2,F+3","31","+8"],
            ["i11","4,3","30","+8"],
            ["i11","4,4","27","+10g RFS"],
            ["i13","df+1,3","30","+6"],
            ["i13","df3+4","30","+4s / HE"],
            ["i14","uf+3+4,4","30","+7 RFF"],
            ["i15","df+2","13 (+)","+34a (+24)"],
            ["i16","b+3","17 (+)","+35a (+25)"],
            ["i18","f,n,df+4 (+)","18","+59a (+49)"],
        ],
        "crouching" : [
            ["i10","ws1","12","+8"],
            ["i11","ws4,4","28","+4c RFF"],
            ["i14","ws3","2 (+)0","+23d"],
            ["i15","ws2,3","23 (+)","+70a (+50) LFS"],
            ["i23","uf,n,4","25 (+)","+34a (+24)"],
        ],
        "backturned" : [
            ["-10","1,1,3,3","39","+4"],
            ["-11","4,4,3","47 (+)","+14d"],
            ["-14","3,3,4","42 (+)","+40a (+31)"],
        ]
    },
    "jack8" : { // Has backturned, grounded, whiff, special punishers
        "standing" : [
            ["i10","f+2","22","+5"],
            ["i10","H.2+3","50","-2d (-12)","Heat Smash. Only available while in Heat."],
            ["i11","2,1","22","+2"],
            ["i11","2,3","28","+5"],
            ["i12","1,1","32","+4c"],
            ["i13","df+3+4","28","+10a (+1)"],
            ["i14","f+1,1","38","+8d (-1)"],
            ["i14","b+1+2","28","-1d (-10)"],
            ["i15","df+2","13 (+)","+31a (+21)"],
        ],
        "crouching" : [
            ["i10","H.2+3","50","-2d (-12)","Heat Smash. Only available while in Heat. Will not work against moves that also leave opponent recovering in crouch (i.e. Lars SEN 2)."],
            ["i11","FC.2","8","+7"],
            ["i11","ws4","20","+5"],
            ["i12","FC.df+4,2","27","+4c"],
            ["i12","FC.db+2+4","25","+6d (Heat)", "Will only work against moves that also leave opponent recovering in crouch (i.e. Victor PRF 1)."],
            ["i14","ws2,1","27 (+)","+3d", "Use b3 afterwards for a total of 38 dmg and oki."],
            ["i14","ws2,4","36","+21a (+11)"],
            ["i15","ws1","14 (+)","+34a (+24)"],
        ],
        "backturned" : [
            ["-11","2,1,2","42 (+)","+29a (+19)","ws3~D, GMH f1 T!, ff+2, b32D, GMH f1. "],
            ["-11","uf+1+2","70","+3d"],
            ["-14","f+1,2,1","45 (+)","+65a (+49)","f4, b1, f121"]
        ]
    },
    "jin" : {
        "standing" : [
            ["i10","2,4","29","+11"],
            ["i12","b+1,2","31","+32a (+17)"],
            ["i13","df+1,4","28","+10"],
            ["i14","f+1+2","38","+21a (+11)"],
            ["i14","f+3,1","29","+4"],
            ["i15","d+3+4","20 (+)","+32a (+22)"],
        ],
        "crouching" : [
            ["i11","ws4,4","28","+4~+5"],
            ["i13","ws1,2","26","+3~+4"],
            ["i13","ws1,3,2,1,4,2","45","-8"],
            ["i14","ws2","14 (+)","+39a~+40a (+29~+30a)"],
        ],
        "backturned" : [
            ["-10","1,2,1","37","+31a (+21)"]
        ]
    },
    "jun" : {
        "standing" : [
            ["i10","uf+1","36","+22a"],
            ["i10","1,2","13","+6"],
            ["i12","2,1,4","28","-1"],
            ["i13","1+2","26","HE/+28"],
            ["i14","3","20","+18a (+1)"],
            ["i15","db+1,1,1+2","45","+21a (+11)"],
            ["i16","df+2","14 (+)","+29a (+19)"],
            ["i16","df+2,1+2","26 (+)","+38a (+28)"],
            ["i17","f+2","20 (+)","+33a (+23)"],
        ],
        "crouching" : [
            ["i10","FC.df+1","36","+26a (+11)"],
            ["i11","ws4","21","+18a (+11)"],
            ["i12","ws1,1","21","+2~+3"],
            ["i12","ws1,4","30","+0c~+1c"],
            ["i13","ws2,1","32","+19a (+10)"],
            ["i14","ws3","16 (+)","+25a (+5)"],
            ["i18","ws3+4","23","+38a (+28)"],
        ]
    },
    "kazuya" : { // Has backturned, special punishers
        "standing" : [
            ["i10","1,1,2","23","+20a (+15)"],
            ["i10","1,2,2","25","+4"],
            ["i11","b+1,2","30","+9 (+0)"],
            ["i12","1+2","25","+13a"],
            ["i13","f,n,d,df+2","23 (+)","+39a (+29)"],
            ["i13","db+1,2","30","HE/KND"],
            ["i15","df+1,2","31","HE/+9"],
            ["i15","df+1,4","31","KND"],
        ],
        "crouching" : [
            ["i11","ws4,4","29","-4c"],
            ["i13","ws1,2","22 (+)","+73a (+57)"],
            ["i16","ws2","25 (+)","+57a"],
        ],
        "backturned" : [
            ["-10","1,2,4","31","-3"],
            ["-12","2,2","36","+7"],
            ["-14","b+2,2,1+2","46","+38d (-20)"],
        ]
    },
    "king" : { // Has backturned, grounded, whiff, special punishers
        "standing" : [
            ["i10","2,1","25","+8"],
            ["i12","b+1,2","33","+5"],
            ["i14","b+2,1","37","+19a (+10)"],
            ["i15","uf+4","13 (+)","+33a (+23)"],
            ["i15","f+2,1","37","+17g/+16d"],
            ["i16","b+3:1+2","43","+0d"],
        ],
        "crouching" : [
            ["i11","ws4","20","+5"],
            ["i14","ws2,2","36","+12g"],
            ["i15","FC.df+2","21 (+)","+56a"],
            ["i18","ws1+2","20 (+)","+35a (+25)"],
        ],
        "backturned" : [
            ["-15","f+2,d+1,2","44","-+27a (+17)","Leads to a Burning Knuckle combo. Burning Knuckle combos are character specific so use the linked resource to learn the appropriate combo."],
        ]
    },
    "kuma" : {
        "standing" : [
            ["i10","2,1","21","+2"],
            ["i12","f+2,1","31","+36a (+10)"],
            ["i13","1+2","25","+18g / HE"],
            ["i14","db+1,2","31","+4"],
            ["i15","df+2,1","22 (+)","+35a (+25)"],
        ],
        "crouching" : [
            ["i11","ws4","20","+5"],
            ["i13","ws1,2","33","+6 (+20g)"],
            ["i15","ws2","20 (+)","+29a (+19)"],
            ["i22","ws3+4","20 (+)","+61a"],
        ]
    },
    "lars" : {
        "standing" : [
            ["i10","2,1","22","+8"],
            ["i12","f+2,1","25","+5 / +6 SEN"],
            ["i12","f+2,4","32","+15 (+6)"],
            ["i13","f+1,2","21","+6 SEN"],
            ["i13","f+1+4","28","+18 (+8)"],
            ["i14","f,n,b+2,1","20 (+)","+47a (+39)"],
            ["i15","f+1+2","20 (+)","+28"],
        ],
        "crouching" : [
            ["i11","ws4","16","+5"],
            ["i13","ws2,1","30","+2c"],
            ["i13","ws2,3,D","33","+6 LEN"],
            ["i15","ws1","16 (+)","+38a / +36a SEN"],
            ["i23","uf,n,4","20 (+)","+32a (+22)"],
        ]
    },
    "law" : {
        "standing" : [
            ["i10","1,1,2","22","+6"],
            ["i10","2,b+2","16","+7"],
            ["i12","3,4","32","+19a (+10)"],
            ["i13","4,3","27","+1"],
            ["i14","3+4,4","40","+31d (-27)"],
            ["i14","b+4,3","34","+24a (+15)"],
            ["i15","df+2","12 (+)","+34a (+24)"],
            ["i15","uf+4","14 (+)","+33a (+23)"],
            ["i16","1+2","20","+12a (+5)"],
        ],
        "crouching" : [
            ["i11","ws4","14","+7"],
            ["i13","ws1,2","35","+40d (-18)"],
            ["i15","uf+4","14","+33a (+23)"],
            ["i15","ws2","20 (+)","+31a (+21)"],
            ["i16","ws3","16","+19"],
            ["i18","uf+3","20 (+)","+42d (-16)"],
            ["i19","uf,n,4","20 (+)","+30a (+20)"],
        ]
    },
    "lee" : {
        "standing" : [
            ["i10","1,3:3:3	","28 (+)","+14a"],
            ["i10","1,2,4","24","-1"],
            ["i10","1,2:4","26","+5"],
            ["i11","4,4:4","31","+17g"],
            ["i13","f+1+2","32","+18a (+9)"],
            ["i13","df+4,4","33","+17g"],
            ["i14","f+2,1","34","+42d (-16)"],
            ["i14","b+1:1,2","41","+39d (-19)"],
            ["i15","f+3,3,3,3,3,4","35 (+)","+68a (+53)"],
            ["i15","uf+4","14 (+)","+31a (+21)"],
            ["i15","df+2","12 (+)","+34a (+24)"],
        ],
        "crouching" : [
            ["i10","ws3,3","27","-4c"],
            ["i11","ws4","16","+5"],
            ["i13","ws1,4","32","+4"],
            ["i13","ws1,2","20","+6"],
            ["i14","ws2,3","36 (+)","+32a (+22)"],
            ["i15","uf+4","15 (+)","+31a (+21)"],
            ["i18","FC UF4","25 (+)","+28 (+18)"],
        ]
    },
    "leo" : { // Has whiff, special punishers. Check if it's fine.
        "standing" : [
            ["i10","1,2","15","+8"],
            ["i10","1,4","22","+11 KNK","The transition into KNK applies even when blocked, leaving Leo at -5 in stance on block. You can use 1,2 for a safer but lower damage option."],
            ["i11","2,2","29","+6"],
            ["i13","uf+1,2","33","+37d (-21)","High balcony break. Gain LTG on hit with 1+2 - +22g (-36)."],
            ["i14","b+2,1+2","32","+8","Heat Engager +17g, Heat Dash +67a (+50)"],
            ["i14","f+2,4,LTG.3","50 (+)","+16d","High balcony break."],
            ["i14","f+2,2","35","+8"],
            ["i15","df+2","15 (+)","+28a (+18)"],
            ["i15","uf+4","15 (+)","+33a (+23)"],
            ["i16","db+2,4","40","+12a (+3)","Hit confirmable. More range than df+2. Heat Engager +17g, Heat Dash +64a (+42)."],
            ["i17","f+1+2","24","+10a (+1)","Mid balcony break."],
            ["i23","uf,n,4","20 (+)","+32a (+22)"],
        ],
        "crouching" : [
            ["i11","ws4,1+2","26","+4d","Heat Engager +17g, Heat Dash +43a (+35)."],
            ["i13","uf+1,2","33","+37d (-21)","High balcony break. Gain LTG on hit with 1+2 - +22g (-36)"],
            ["i13","ws1+2","25","+22g","Mid balcony break. Gain LTG on hit with 1+2 - +3."],
            ["i13","ws3,1,d","18","+9 BOK"],
            ["i15","ws2","17 (+)","+28a (+18)"],
            ["i23","uf,n,4","20 (+)","+32a (+22)"],
        ]
    },
    "leroy" : {
        "standing" : [
            ["i10","1,2,4","25","+3"],
            ["i12","2,2","30","+7"],
            ["i13","df+1,4","26","+3"],
            ["i14","1+2,1+2,1","38","+7a (-2) / HE"],
            ["i14","uf+3+4,1+2","46","+23 (+13)"],
            ["i15","df+2,1+2","22 (+)","+33 (+23)"],
        ],
        "crouching" : [
            ["i11","ws4","16","+5"],
            ["i13","ws1,4","30","+3"],
            ["i14","uf+3+4,1+2","46","+23 (+13)"],
            ["i15","ws2","21 (+)","+51a"],
        ]
    },
    "lili" : {
        "standing" : [
            ["i10","1,1","21","+4 BT"],
            ["i10","2,4","28","+24a (+15)"],
            ["i12","f+2,3","30","+24a (+7)"],
            ["i12","1+2","26","+20d (+10)"],
            ["i13","df+4,4","35","-2"],
            ["i15","uf+3","13 (+)","+30a (+20)"],
            ["i16","df+2","15 (+)","+31a (+21)"],
            ["i17","d+3+4","23 (+)","+45a (+35)"],
        ],
        "crouching" : [
            ["i11","ws4","18","+20a (+13)"],
            ["i13","ws1,2","26","+8"],
            ["i15","uf+3","13 (+)","+30a (+20)"],
            ["i16","ws2","17 (+)","+39a (+29)"],
        ],
        "backturned" : [
            ["-10","1,2,4","37","+2a (-7)"],
            ["-10","1,2, 1+2","43","+20d (+10)"],
            ["-12","Back Throw","60","+1d"],
            ["-15","uf+3+4,3+4","38 (+)","+45a (+35)"],
        ],
    },
    "nina" : {
        "standing" : [
            ["i10","1,4","22","+1~+2"],
            ["i10","1,2","15","+5"],
            ["i11","db+1+2","27","+10a (+1)"],
            ["i12","b+1,4","32","+7~+8"],
            ["i12","b+2,2","28","+5~+6"],
            ["i14","b+3+4,1+2","34","+34a (-24)"],
            ["i14","3,4","34","+20a (+11)"],
            ["i14","f+3","30","+24a (+15)"],
            ["i15","b+1+4","18 (+)","+34a (+24)"],
            ["i15","df+2","12 (+)","+34a (+24)"],
            ["i18","db+3+4","21 (+)","+36 (+26)"],
            ["i18","uf+2,1","20 (+)","+49a (+40)"],
        ],
        "crouching" : [
            ["i11","ws4","15","+7~+8"],
            ["i13","ws3","15","+2"],
            ["i13","ws1,1+2","35","+34a (-24)"],
            ["i15","ws2","15 (+)","+28a (+18)"],
            ["i18","ws3+4","21 (+)","+36 (+26)"],
            ["i18","uf+2,1","20 (+)","+49a (+40)"],
        ]
    },
    "panda" : {
        "standing" : [
            ["i10","2,1","21","+2"],
            ["i12","f+2,1","31","+36a (+10)"],
            ["i13","1+2","25","+18g / HE"],
            ["i14","db+1,2","31","+4"],
            ["i15","df+2,1","22 (+)","+35a (+25)"],
        ],
        "crouching" : [
            ["i11","ws4","20","+5"],
            ["i13","ws1,2","33","+6 (+20g)"],
            ["i15","ws2","20 (+)","+29a (+19)"],
            ["i22","ws3+4","20 (+)","+61a"],
        ]
    },
    "paul" : { // Has backturned, grounded, whiff, special punishers
        "standing" : [
            ["i10","1,2","17","+8"],
            ["i10","1,2,3","24","-14"],
            ["i12","b+1,2","33","+16d (-1) FDFA"],
            ["i12","d+1+2","30","+16d (+11)"],
            ["i13","f+2","38","+9"],
            ["i14","b+3","16 (+)","+31a (+25)"],
            ["i15","df+2","13 (+)","+33a (+23)"],
            ["i15","uf+3","15 (+)","+25a (+15)"],
            ["i15","uf+4","13 (+)","+33a (+23)"],
            ["i15","CS.2","45","+26a (-10) FDFA","hard, Long range only"],
            ["i16","f+3,1","32","+12d (+3)","Long range only"],
            ["i18","SWA.1+2","22 (+)","+37a (+27)","hard"]
        ],
        "crouching" : [
            ["i11","ws4","18","+5"],
            ["i13","ws3,2","37","+17d (+8)"],
            ["i14","f,F+2:1","38","+37d (+11)","Done as FC.df+2:1"],
            ["i15","ws2","20 (+)","+27a (+17)"],
            ["i18","SWA.1+2","22","+37a (+27)","hard, Must be crouch cancelled first"]
        ],
        "backturned" : [
            ["-15","3,2~b > SWA.1+2","53 (+)","+37a (+27)","Not guaranteed on Azucena or Raven due to their parries from BT stance."]
        ]
    },
    "raven" : {
        "standing" : [
            ["i10","2,4","25","+8~+9","Ends in a dash"],
            ["i12","4,1","29","+7~+8","Ends in BT"],
            ["i13","db+2,1","28","+8~+9"],
            ["i14","df+1,4","38","+32a (-26)"],
            ["i15","df+4,4,3","53","+18a"],
            ["i16","df+2,3","32","+28a (+19)"]
        ],
        "crouching" : [
            ["i11","ws4","18","+7~+8"],
            ["i13","ws2","17","+8~+9","Use in case ws4 doesn't connect"],
            ["i14","ws1","14","+35a (+25)"],
            ["i25","uf,n,4","20","+32a (+22)"],
        ]
    },
    "reina" : {
        "standing" : [
            ["i10","1,1,2","23","+11 SEN","+2 (cancel)"],
            ["i10","1,2,2","27","+0"],
            ["i12","2,2,1","32","+12a"],
            ["i12","1+2","25","+24a (+14)"],
            ["i13","f,n,df+2","23 (+)","+25a (+25)","hard"],
            ["i13","df+1,2","28","+12a / HE"],
            ["i13","f+2,3","24","+2","for moves with pushback"],
            ["i14","2~1","22 (+)","+31d (+23)"],
            ["i15","df+2","13 (+)","+30a (+20)"],
            ["i17","uf+4","15 (+)","+70a (+54)","To launch crouching opponents"]
        ],
        "crouching" : [
            ["i11","ws4,4","25","-1c"],
            ["i13","ws1","12 (+)","+13 SEN"],
            ["i15","FC.df+4","20 (+)","+54a"],
            ["i20","FC.df+3","25 (+)","+54a (+34)"]
        ],
        "backturned" : [
            ["-10","1,2,3,4","44","+21a (+12)"],
            ["-12","2,2,2,qcf+2","58","+21a (+0)"],
            ["-12","f+2,3,F~1+2 WRA.2","75","+11 (+2)"],
            ["-12","f+2,3,F~1+2 WRA.3+4","74","-4 (-12)","Should be chosen when the SEN.1+2 doesn't lead to a tailspin. This can occur when the opponent is off-axis to the right, and will cause WRA.2 to whiff (although getting whiff punished hard is unlikely). This option can be tech-rolled out of when SEN.1+2 does lead to a tailspin. The opponent's status on hit can be reacted to, allowing the correct option to be chosen every time."],
            ["-14","f,n,d,df+2","23 (+)","+25a (+25)"],
            ["-15","df+2","13 (+)","+30a (+20)"]            
        ]
    },
    "shaheen" : {
        "standing" : [
            ["i10","2,3","28","+3","Can go into SNK"],
            ["i12","f+2,3","33","+20"],
            ["i13","f,b+2","42","0","Fast input"],
            ["i14","db+2,1","35","+1"],
            ["i14","df+4,3","36","+23 (+14)"],
            ["i15","df+2","13 (+)","+34 (+24)"],
            ["i15","uf+4","13 (+)","+33 (+23)"],
        ],
        "crouching" : [
            ["i11","ws4","16","+5"],
            ["i13","ws3,3","34","+11 (+2)"],
            ["i15","uf+4","13 (+)","+33 (+23)"],
            ["i16","ws2","21 (+)","+57"]
        ],
        "backturned" : [
            ["-10","1,2,3","32","+3"]
        ]
    },
    "steve" : {
        "standing" : [
            ["i10","1,1,2","27","+4"],
            ["i12","2,2","29","+6"],
            ["i13","b+1,2","27","+7 LNH"],
            ["i14","1+2","28","+18a (+11)"],
            ["i15","f+1+2,2","42","+3d"],
            ["i17","b+2","15","+14"],
            ["i18","f+3+4~uf+2","23","LNC"],
        ],
        "crouching" : [
            ["i11","WS.1,2","32","+3c"],
            ["i13","WS.2,2","32","+11 LNH"],
            ["i18","FC.df+2","20","+34a (+24)"]
        ]
    },
    "victor" : {
        "standing" : [
            ["i10","1,1,2","27","+3"],
            ["i12","2,2,2","37","+4 (W! +12)"],
            ["i12","3,1+2","30","+5"],
            ["i12","2,1,F","22","+5 / +7 PRF"],
            ["i13","uf+1,1","30","+15 / +3 IAI"],
            ["i13","df+4,2","31","+4 (W! +12)"],
            ["i14","f+4,1","36","+18a (+9) / HE"],
            ["i15","df+2","14 (+)","+31a (+21)"],
            ["i17","b+3,1","40","+21a (+16)"]
        ],
        "crouching" : [
            ["i11","ws4","16","+5"],
            ["i13","ws1+2,F","27","+8 / +8 PRF"],
            ["i13","uf+1,1","30","+15 / +3 IAI"],
            ["i15","ws1","20 (+)","+53a"]
        ]
    },
    "xiaoyu" : {
        "standing" : [
            ["i10","1,d+2","16","+8"],
            ["i12","f+1+2","25","+15d (+10)"],
            ["i13","b+4,1","30","+40d (-18) / HE"],
            ["i14","3","17 (+)","+22a"],
            ["i15","b+1+2","20 (+)","+29a (+19)"],
        ],
        "crouching" : [
            ["i11","ws4","20","+20a (+13)"],
            ["i12","ws1,4","24","+12g"],
            ["i14","ws1+2,1+2","32","+7c"],
            ["i16","uf+3","13 (+)","+29a (+19)"],
            ["i20","ub+3","23 (+)","+36a (+26)"],
            ["i22","ws2*","20 (+)","+38a (+28)","Charged (button held down) input"]
        ]
    },
    "yoshimitsu" : {
        "standing" : [
            ["i6","1SS.1+4","21 (+)","+14"],
            ["i8","NSS.1+4","24 (+)","+14 +64a"],
            ["i10","1,1SS.1","26","+4c"],
            ["i10","1,NSS.1","29","+16d"],
            ["i11","2,2","28","+15g"],
            ["i11","2,NSS.1","30","+19d"],
            ["i13","df+1,4","31","+4"],
            ["i14","b+2,2","33","+2d (+17 HE)"],
            ["i14","f,n,d,df+2","20","+6g"],
            ["i15","df+2","13 (+)","+34a (+24)"],
            ["i15","uf+3","15 (+)","+32a (+22)"],
            ["i17","f,n,d,df+1","22 (+)","+35a (+25)"],
            ["i18","H.2+3","51","-3d","Heat smash, requires heat"]
        ],
        "crouching" : [
            ["i6","FC 1SS.d+1+4 	 	","20 (+)","+14"],
            ["i8","FC NSS.d+1+4 	 	","24 (+)","+14 +64a"],
            ["i11","ws4","14","+5"],
            ["i14","ws1,2 (+)","30","+14g"],
            ["i15","ws2,1SS.1","27 (+)","+36a (+26)"],
            ["i15","uf+3","15 (+)","+32a (+22)"],
            ["i17","f,n,d,df+1","22 (+)","+35a (+25)"],
            ["i18","H.2+3","51","-3d","Heat smash, requires heat"],
        ]
    },
    "zafina" : { // Special punishers
        "standing" : [
            ["i10","1,3","19","+7","Shifts to SCR, hold B to cancel the stance"],
            ["i10","1,4","22","+22","Shifts to TRT"],
            ["i12","H.2+3","51","+0d","Heat smash, requires heat"],
            ["i13","df+1,4","28","+12g"],
            ["i14","f+4","13 (+)","+22a"],
            ["i14","df+4,1","36","+3d","Costs health, enters heat, can heat dash for a mini combo"],
            ["i15","df+3,4","32 (+)","+22a"],
            ["i16","df+2","13 (+)","+32a (+22)"],
        ],
        "crouching" : [
            ["i11","ws4","14","+4"],
            ["i12","ws3","20","+9","Shifts to SCR, hold B to cancel the stance"],
            ["i12","H.2+3","51","+0d","Heat smash, requires heat"],
            ["i15","ws1,2","27 (+)","+36a (+26)"],
            ["i18","ws2","20 (+)","+28a (+18)"]
        ]
    },
}