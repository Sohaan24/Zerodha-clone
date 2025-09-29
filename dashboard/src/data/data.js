export const watchlist = [
  {
    name: "INFY",
    price: 1555.45,
    percent: "-1.60%",
    isDown: true,
  },
  {
    name: "ONGC",
    price: 116.8,
    percent: "-0.09%",
    isDown: true,
  },
  {
    name: "TCS",
    price: 3194.8,
    percent: "-0.25%",
    isDown: true,
  },
  {
    name: "KPITTECH",
    price: 266.45,
    percent: "3.54%",
    isDown: false,
  },
  {
    name: "QUICKHEAL",
    price: 308.55,
    percent: "-0.15%",
    isDown: true,
  },
  {
    name: "WIPRO",
    price: 577.75,
    percent: "0.32%",
    isDown: false,
  },
  {
    name: "M&M",
    price: 779.8,
    percent: "-0.01%",
    isDown: true,
  },
  {
    name: "RELIANCE",
    price: 2112.4,
    percent: "1.44%",
    isDown: false,
  },
  {
    name: "HUL",
    price: 512.4,
    percent: "1.04%",
    isDown: false,
  },
  {
    name: "HDFCBANK",
    price: 1522.35,
    percent: "0.11%",
    isDown: false,
  },
  {
    name: "BHARTIARTL",
    price: 541.15,
    percent: "2.99%",
    isDown: false,
  },
  {
    name: "ITC",
    price: 207.9,
    percent: "0.80%",
    isDown: false,
  },
];

// holdings
export const holdings = [
  {
    name: "BHARTIARTL",
    qty: 2,
    avg: 538.05,
    price: 541.15,
    net: "+0.58%",
    day: "+2.99%",
  },
  {
    name: "HDFCBANK",
    qty: 2,
    avg: 1383.4,
    price: 1522.35,
    net: "+10.04%",
    day: "+0.11%",
  },
  {
    name: "HINDUNILVR",
    qty: 1,
    avg: 2335.85,
    price: 2417.4,
    net: "+3.49%",
    day: "+0.21%",
  },
  {
    name: "INFY",
    qty: 1,
    avg: 1350.5,
    price: 1555.45,
    net: "+15.18%",
    day: "-1.60%",
    isLoss: true,
  },
  {
    name: "ITC",
    qty: 5,
    avg: 202.0,
    price: 207.9,
    net: "+2.92%",
    day: "+0.80%",
  },
  {
    name: "KPITTECH",
    qty: 5,
    avg: 250.3,
    price: 266.45,
    net: "+6.45%",
    day: "+3.54%",
  },
  {
    name: "M&M",
    qty: 2,
    avg: 809.9,
    price: 779.8,
    net: "-3.72%",
    day: "-0.01%",
    isLoss: true,
  },
  {
    name: "RELIANCE",
    qty: 1,
    avg: 2193.7,
    price: 2112.4,
    net: "-3.71%",
    day: "+1.44%",
  },
  {
    name: "SBIN",
    qty: 4,
    avg: 324.35,
    price: 430.2,
    net: "+32.63%",
    day: "-0.34%",
    isLoss: true,
  },
  {
    name: "SGBMAY29",
    qty: 2,
    avg: 4727.0,
    price: 4719.0,
    net: "-0.17%",
    day: "+0.15%",
  },
  {
    name: "TATAPOWER",
    qty: 5,
    avg: 104.2,
    price: 124.15,
    net: "+19.15%",
    day: "-0.24%",
    isLoss: true,
  },
  {
    name: "TCS",
    qty: 1,
    avg: 3041.7,
    price: 3194.8,
    net: "+5.03%",
    day: "-0.25%",
    isLoss: true,
  },
  {
    name: "WIPRO",
    qty: 4,
    avg: 489.3,
    price: 577.75,
    net: "+18.08%",
    day: "+0.32%",
  },
];

// positions
export const positions = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
  {
    product: "MIS",
    name: "NIFTY",
    qty: 1,
    avg: 18500.0,
    price: 18650.0,
    net: "+0.81%",
    day: "+0.25%",
    isLoss: false,
  },
  {
    product: "CNC",
    name: "TATAMOTORS",
    qty: 3,
    avg: 450.0,
    price: 465.0,
    net: "+3.33%",
    day: "+1.20%",
    isLoss: false,
  },
];

// orders
export const orders = [
  {
    id: "ORD001",
    instrument: "RELIANCE",
    type: "BUY",
    qty: 2,
    price: 2100.0,
    status: "COMPLETE",
    time: "10:30 AM",
    date: "2024-01-15"
  },
  {
    id: "ORD002", 
    instrument: "TCS",
    type: "SELL",
    qty: 1,
    price: 3200.0,
    status: "COMPLETE",
    time: "11:45 AM",
    date: "2024-01-15"
  },
  {
    id: "ORD003",
    instrument: "INFY",
    type: "BUY",
    qty: 5,
    price: 1560.0,
    status: "PENDING",
    time: "02:15 PM",
    date: "2024-01-15"
  },
  {
    id: "ORD004",
    instrument: "HDFCBANK",
    type: "BUY",
    qty: 3,
    price: 1500.0,
    status: "COMPLETE",
    time: "09:20 AM",
    date: "2024-01-14"
  },
  {
    id: "ORD005",
    instrument: "WIPRO",
    type: "SELL",
    qty: 2,
    price: 580.0,
    status: "CANCELLED",
    time: "03:30 PM",
    date: "2024-01-14"
  }
];

// funds data
export const fundsData = {
  equity: {
    availableMargin: 4043.10,
    usedMargin: 3757.30,
    availableCash: 4043.10,
    openingBalance: 4043.10,
    closingBalance: 3736.40,
    payin: 4064.00,
    span: 0.00,
    deliveryMargin: 0.00,
    exposure: 0.00,
    optionsPremium: 0.00,
    collateralLiquid: 0.00,
    collateralEquity: 0.00,
    totalCollateral: 0.00
  },
  commodity: {
    hasAccount: false,
    message: "You don't have a commodity account"
  }
};

// apps data
export const appsData = [
  {
    name: "Kite",
    description: "Trading platform",
    icon: "📈",
    status: "Active",
    lastUsed: "2 hours ago"
  },
  {
    name: "Coin",
    description: "Mutual fund investing",
    icon: "💰",
    status: "Active", 
    lastUsed: "1 day ago"
  },
  {
    name: "Varsity",
    description: "Educational content",
    icon: "📚",
    status: "Available",
    lastUsed: "Never"
  },
  {
    name: "Smallcase",
    description: "Thematic investing",
    icon: "🎯",
    status: "Available",
    lastUsed: "Never"
  },
  {
    name: "Streak",
    description: "Algo trading",
    icon: "⚡",
    status: "Available",
    lastUsed: "Never"
  }
];
