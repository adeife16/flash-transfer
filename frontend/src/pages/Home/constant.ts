import mu1 from "../../assests/Images/mu1.svg";
import mu2 from "../../assests/Images/mu2.svg";
import mu3 from "../../assests/Images/mu3.svg";
import mu4 from "../../assests/Images/mu4.svg";
import mu5 from "../../assests/Images/mu5.svg";
import mu6 from "../../assests/Images/mu6.svg";
import mu7 from "../../assests/Images/mu7.svg";
import mu8 from "../../assests/Images/mu8.svg";
import mu9 from "../../assests/Images/mu9.svg";
import mu10 from "../../assests/Images/mu10.svg";
import mu11 from "../../assests/Images/mu11.svg";
import mu12 from "../../assests/Images/mu12.svg";


import m1 from "../../assests/Images/m1.svg";
import m2 from "../../assests/Images/m2.svg";
import m3 from "../../assests/Images/m3.svg";
import m4 from "../../assests/Images/m4.svg";
import m5 from "../../assests/Images/m5.svg";
import m6 from "../../assests/Images/m6.svg";
import m7 from "../../assests/Images/m7.svg";
import m8 from "../../assests/Images/m8.svg";
import m9 from "../../assests/Images/m9.svg";
import m10 from "../../assests/Images/m10.svg";
import m11 from "../../assests/Images/m11.svg";
import m12 from "../../assests/Images/m12.svg";
import m13 from "../../assests/Images/m13.svg";
import m14 from "../../assests/Images/m14.svg";
import m15 from "../../assests/Images/m15.svg";
import m16 from "../../assests/Images/m16.svg";
import m17 from "../../assests/Images/m17.svg";
import m18 from "../../assests/Images/m18.svg";
import m19 from "../../assests/Images/m19.svg";
import m20 from "../../assests/Images/m20.svg";
import m21 from "../../assests/Images/m21.svg";
import m22 from "../../assests/Images/m22.svg";
import m23 from "../../assests/Images/m23.svg";
import m24 from "../../assests/Images/m24.svg";
import m25 from "../../assests/Images/m25.svg";
import m26 from "../../assests/Images/m26.svg";
import m27 from "../../assests/Images/m27.svg";
import m28 from "../../assests/Images/m28.svg";
import m29 from "../../assests/Images/m29.svg";
import m30 from "../../assests/Images/m30.svg";
import m31 from "../../assests/Images/m31.svg";
import m32 from "../../assests/Images/m32.svg";
import m33 from "../../assests/Images/m33.svg";

import m34 from "../../assests/Images/m34.svg";
import m35 from "../../assests/Images/m35.svg";
import m36 from "../../assests/Images/m36.svg";
import m37 from "../../assests/Images/m37.svg";
import m38 from "../../assests/Images/m38.svg";
import m39 from "../../assests/Images/m39.svg";
import m40 from "../../assests/Images/m40.svg";
import m41 from "../../assests/Images/m41.svg";
import m42 from "../../assests/Images/m42.svg";
import m43 from "../../assests/Images/m43.svg";
import m44 from "../../assests/Images/m44.svg";
import m45 from "../../assests/Images/m45.svg";
import m46 from "../../assests/Images/m46.svg";
import m47 from "../../assests/Images/m47.svg";
import m48 from "../../assests/Images/m48.svg";
import m49 from "../../assests/Images/m49.svg";
import m50 from "../../assests/Images/m50.svg";
import m51 from "../../assests/Images/m51.svg";
import m52 from "../../assests/Images/m52.svg";
import m53 from "../../assests/Images/m53.svg";
import m54 from "../../assests/Images/m54.svg";
import m55 from "../../assests/Images/m55.svg";
import m56 from "../../assests/Images/m56.svg";
import m57 from "../../assests/Images/m57.svg";
import m58 from "../../assests/Images/m58.svg";
import m59 from "../../assests/Images/m59.svg";
import m60 from "../../assests/Images/m60.svg";
import m61 from "../../assests/Images/m61.svg";
import m62 from "../../assests/Images/m62.svg";
import m63 from "../../assests/Images/m63.svg";
import m64 from "../../assests/Images/m64.svg";
import m65 from "../../assests/Images/m65.svg";
import m66 from "../../assests/Images/m66.svg";
import m67 from "../../assests/Images/m67.svg";
import m68 from "../../assests/Images/m68.svg";
import m69 from "../../assests/Images/m69.svg";
export type CashType = {
    label: string;
    img: any;
    value: number
}
export const getCashByVal = (val: string): CashType => {
    const value = parseInt(val);
    const token = CashList.filter((item) => {
        return item.value === value;
    })
    return token[0];
}
export const CurrencyList: any[] = [
    {
        value: 1,
        label: "BNB",
        img: mu2
    },
    {
        value: 2,
        label: "MATIC",
        img: mu3
    },
    {
        value: 3,
        label: "USDT",
        img: mu4
    },
    {
        value: 4,
        label: "DAI",
        img: mu5
    },
    {
        value: 5,
        label: "ETHEREUM",
        img: mu6
    },
    {
        value: 6,
        label: "PAX GOLD",
        img: mu7
    },
    {
        value: 7,
        label: "BITCOIN",
        img: mu8
    },
    {
        value: 8,
        label: "LUNC",
        img: mu9
    },
    {
        value: 9,
        label: "SHIBA INU",
        img: mu10
    },
    {
        value: 10,
        label: "DOGECOIN",
        img: mu11
    },
    {
        value: 11,
        label: "FLOKI",
        img: mu12
    }
]
export const CashList: any[] = [
    {
        value: 1,
        label: "Taïwan - New Dollar",
        img: m1
    },
    {
        value: 2,
        label: "Lithuania - Litas",
        img: m2
    },
    {
        value: 3,
        label: "Togo - CFA Franc",
        img: m3
    },
    {
        value: 4,
        label: "Sudan - Sudanese Pound",
        img: m4
    },
    {
        value: 5,
        label: "Benin - CFA Franc",

        img: m5
    },
    {
        value: 6,
        label: "Ghana - Ghanaian Cedi",
        img: m6
    },
    {
        value: 7,
        label: "Tchad - ",
        img: m7
    },
    {
        value: 8,
        label: "Guinea - Guinea Fran",
        img: m8
    },
    {
        value: 9,
        label: "Belarus - Belarusian Rubble",
        img: m9
    },
    {
        value: 10,
        label: "Niger - CFA Franc",
        img: m10
    },
    {
        value: 11,
        label: "Greece - Euro",
        img: m11
    },
    {
        value: 12,
        label: "Burkina Faso - CFA Franc",
        img: m12
    },

    {
        value: 13,
        label: "Salvador - Salvadoran Colon",
        img: m3
    },
    {
        value: 14,
        label: "Liechtenstein - Swiss Franc",
        img: m14
    },
    {
        value: 15,
        label: "Georgia - Georgian Lari",
        img: m15
    },
    {
        value: 16,
        label: "Estonia - Estonian Kroon",
        img: m16
    },
    {
        value: 17,
        label: "Malta - Euro",
        img: m17
    },
    {
        value: 18,
        label: "Tanzania- ",
        img: m18
    },
    {
        value: 19,
        label: "Kenya - Kenyan Shilling",
        img: m19
    },
    {
        value: 20,
        label: "Slovenia - Slovenian Tolar",
        img: m20
    },
    {
        value: 21,
        label: "Senegal - CFA Franc",
        img: m21
    },
    {
        value: 22,
        label: "Somalia - Somalia Shilling",
        img: m22
    },
    {
        value: 23,
        label: "Zimbabwe - Zimbabwean Dollar",
        img: m23
    },
    {
        value: 24,
        label: "Romania - Romanian Leu",
        img: m24
    },
    {
        value: 25,
        label: "Sweden - Sweden Krona",
        img: m25
    },
    {
        value: 26,
        label: "Finland - Euro",
        img: m26
    },
    {
        value: 27,
        label: "Denmark - Danish Krone",
        img: m27
    },
    {
        value: 28,
        label: "Belgium - Euro",
        img: m28 
    },
    {
        value: 29,
        label: "Netherlands - Euro",
        img: m29
    },
    {
        value: 30,
        label: "Ireland - Euro",
        img: m30
    },
    {
        value: 31,
        label: "Germany - Euro",
        img: m31
    },
    {
        value: 32,
        label: "Pakistan - Pakistani Rupees",
        img: m32
    },
    {
        value: 33,
        label: "India - Indian Rupees",
        img: m33
    },
    {
        value: 34,
        label: "Hong Kong - Hong Kong Dollar",
        img: m34
    },
    {
        value: 35,
        label: "Brazil - Brazilian Real",
        img: m35
    },
    {
        value: 36,
        label: "Canada - Canadian Dollar",
        img: m36
    },
    {
        value: 37,
        label: "France - Euro",
        img: m37
    },
    {
        value: 38,
        label: "Argentina - Argentine Peso",
        img: m38
    },
    {
        value: 39,
        label: "Colombia - Colombian Peso",
        img: m39
    },
    {
        value: 40,
        label: "USA - USA Dollar",
        img: m40
    },
    {
        value: 41,
        label: "Austria - Australian Dollar",
        img: m41
    },
    {
        value: 42,
        label: "UAE - UAE-Dirham",
        img: m42
    },
    {
        value: 43,
        label: "Switzerland - Swiss Franc",
        img: m43
    },
    {
        value: 44,
        label: "Mexico - Mexican Peso",
        img: m44
    },
    {
        value: 45,
        label: "Indonesia - Indonesian Rupiah",
        img: m45
    },
    {
        value: 46,
        label: "Italy - Euro",
        img: m46
    },
    {
        value: 47,
        label: "South Korea - South Korean Won",
        img: m47
    },
    {
        value: 48,
        label: "Spain - Euro",
        img: m48
    },
    {
        value: 49,
        label: "Japan - Japanese Yen",
        img: m49
    },
    {
        value: 50,
        label: "Nigeria - Nigerian Naira",
        img: m50
    },
    {
        value: 51,
        label: "Republic of Congo - Congolese Franc",
        img: m51
    },
    {
        value: 52,
        label: "Egypt - Egyptian Pound",
        img: m52
    },
    {
        value: 53,
        label: "Vietnam - Vietnamese Dong",
        img: m53
    },
    {
        value: 54,
        label: "United Kingdom - British Pound ",
        img: m54
    },
    {
        value: 55,
        label: "Thailand - Thai Baht",
        img: m55
    },
    {
        value: 56,
        label: "Ivory Coast - CFA Franc",
        img: m56
    },
    {
        value: 57,
        label: "Malaysia - Malaysian Ringgit",
        img: m57
    },
    {
        value: 58,
        label: "Mali - CFA Franc",
        img: m58
    },
    {
        value: 59,
        label: "Cameroun - CFA Franc",
        img: m59
    },
    {
        value: 60,
        label: "Lebanon - Lebanese Pound",
        img: m60
    },
    {
        value: 61,
        label: "South Africa - South Africa Rand",
        img: m61
    },
    {
        value: 62,
        label: "Palestinian Territor - Israeli Shekel",
        img: m62
    },
    {
        value: 63,
        label: "Ukraine - Ukrainian Hryvnia",
        img: m63
    },
    {
        value: 64,
        label: "Singapore - Singapore Dollar",
        img: m64
    },
    {
        value: 65,
        label: "Portugal - Euro",
        img: m65
    },
    {
        value: 66,
        label: "Australia - Australian Dollar",
        img: m66
    },
    {
        value: 67,
        label: "Philippines - Philippine Peso",
        img: m67
    },
    {
        value: 68,
        label: "Tunisia - Tunisian Dinar",
        img: m68
    },
    {
        value: 69,
        label: "Turkey - Turkish Lira",
        img: m69
    },

]