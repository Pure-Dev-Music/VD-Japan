import React, { useState } from 'react';
import { 
  Plane, Train, MapPin, Camera, ShoppingBag, Utensils, 
  Coffee, Mountain, ChevronRight, Clock, CreditCard, 
  Info, Calendar, Smartphone, briefcase, ThermometerSnowflake,
  Share2, Download
} from 'lucide-react';

const App = () => {
  const [viewMode, setViewMode] = useState('summary'); // 'summary' or 'details'
  const [activeDay, setActiveDay] = useState(1);

  const itinerary = [
    {
      day: 1,
      date: "10 ก.พ.",
      title: "เกียวโต: การเดินทางเริ่มต้น",
      location: "Kyoto",
      color: "bg-emerald-500",
      textColor: "text-emerald-700",
      bgColor: "bg-emerald-50",
      description: "เดินทางจากสนามบินคันไซมุ่งหน้าสู่เมืองหลวงเก่าเกียวโต",
      activities: [
        { time: "08:40", text: "แลนดิ้ง Kansai Airport (KIX)", icon: <Plane className="w-4 h-4" /> },
        { time: "11:30", text: "Haruka Express ไป Kyoto (~75 นาที)", icon: <Train className="w-4 h-4" />, cost: "468 ฿" },
        { time: "บ่าย", text: "เช็คอินที่พัก & เก็บกระเป๋า", icon: <MapPin className="w-4 h-4" /> },
        { time: "เย็น", text: "เดินเล่น Kamo River / Shijo Shopping Street", icon: <Camera className="w-4 h-4" /> }
      ]
    },
    {
      day: 2,
      date: "11 ก.พ.",
      title: "กิโมโน & กวางนารา",
      location: "Kyoto & Nara",
      color: "bg-red-500",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      description: "สัมผัสวัฒนธรรมญี่ปุ่นด้วยชุดกิโมโนและไปเยี่ยมกวางที่นารา",
      activities: [
        { time: "เช้า", text: "วัด Kiyomizu-dera (เช่าชุดกิโมโน)", icon: <Camera className="w-4 h-4" />, extra: "ชุด+ผม: 955 ฿" },
        { time: "บ่าย", text: "นั่งรถไฟไป Nara", icon: <Train className="w-4 h-4" /> },
        { time: "เย็น", text: "วัด Todaiji & สวนกวาง Nara Park", icon: <MapPin className="w-4 h-4" /> }
      ]
    },
    {
      day: 3,
      date: "12 ก.พ.",
      title: "หมู่บ้านมรดกโลก",
      location: "Takayama & Shirakawago",
      color: "bg-orange-500",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50",
      description: "เดินทางสู่เมืองเก่าท่ามกลางหุบเขาและหมู่บ้านหิมะ",
      activities: [
        { time: "เช้า", text: "Shinkansen จาก Nagoya -> Takayama", icon: <Train className="w-4 h-4" />, cost: "1,500 ฿" },
        { time: "เที่ยง", text: "เช็คอินที่พัก Takayama", icon: <MapPin className="w-4 h-4" /> },
        { time: "บ่าย", text: "นั่งบัสไป Shirakawa-go", icon: <Camera className="w-4 h-4" /> },
        { time: "ค่ำ", text: "พักผ่อนในเมือง Takayama", icon: <Utensils className="w-4 h-4" /> }
      ]
    },
    {
      day: 4,
      date: "13 ก.พ.",
      title: "ยอดเขาสูง & ย่านกูลิโกะ",
      location: "Takayama & Osaka",
      color: "bg-blue-500",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      description: "ชมวิวมุมสูงจากกระเช้าก่อนมุ่งหน้าสู่แสงสีของโอซาก้า",
      activities: [
        { time: "เช้า", text: "Shinhotaka Ropeway", icon: <Mountain className="w-4 h-4" />, cost: "720 ฿" },
        { time: "กลางวัน", text: "เดินเล่นเมืองเก่า Takayama", icon: <ShoppingBag className="w-4 h-4" /> },
        { time: "บ่าย", text: "นั่งรถไฟกลับเข้า Osaka", icon: <Train className="w-4 h-4" />, cost: "1,700 ฿" },
        { time: "เย็น", text: "เช็คอิน & ป้ายกูลิโกะ Shinsaibashi", icon: <Camera className="w-4 h-4" /> }
      ]
    },
    {
      day: 5,
      date: "14 ก.พ.",
      title: "วาเลนไทน์ที่ USJ",
      location: "Osaka",
      color: "bg-yellow-500",
      textColor: "text-yellow-700",
      bgColor: "bg-yellow-50",
      description: "ตะลุยโลกสวนสนุกและชิมของอร่อยที่ตลาดปลา",
      activities: [
        { time: "เช้า", text: "ตลาดปลา Kurumon", icon: <Utensils className="w-4 h-4" /> },
        { time: "ทั้งวัน", text: "Universal Studios Japan", icon: <Camera className="w-4 h-4" />, cost: "2,080 ฿" },
        { time: "ค่ำ", text: "Namba Nightlife / ดริ้งจอยๆ", icon: <Coffee className="w-4 h-4" /> }
      ]
    },
    {
      day: 6,
      date: "15 ก.พ.",
      title: "ปราสาท & คาเฟ่ริมน้ำ",
      location: "Osaka",
      color: "bg-purple-500",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50",
      description: "วันพักผ่อน เดินชมปราสาทและนั่งคาเฟ่ชิลล์ๆ",
      activities: [
        { time: "สาย", text: "Slow Morning", icon: <Clock className="w-4 h-4" /> },
        { time: "บ่าย", text: "Osaka Castle & สวนรอบปราสาท", icon: <MapPin className="w-4 h-4" /> },
        { time: "บ่ายแก่", text: "คาเฟ่ Brooklyn Roasting Company", icon: <Coffee className="w-4 h-4" /> },
        { time: "เย็น", text: "อิสระช้อปปิ้งในเมือง", icon: <ShoppingBag className="w-4 h-4" /> }
      ]
    },
    {
      day: 7,
      date: "16 ก.พ.",
      title: "ช้อปปิ้งวันสุดท้าย",
      location: "Osaka -> KIX",
      color: "bg-slate-700",
      textColor: "text-slate-900",
      bgColor: "bg-slate-100",
      description: "ซื้อของฝากก่อนเดินทางกลับโดยสวัสดิภาพ",
      activities: [
        { time: "เช้า-บ่าย", text: "Last minute shopping", icon: <ShoppingBag className="w-4 h-4" /> },
        { time: "18:00", text: "เดินทางไปสนามบิน Kansai", icon: <Train className="w-4 h-4" /> },
        { time: "19:00", text: "Check-in @ KIX", icon: <Plane className="w-4 h-4" /> },
        { time: "21:00", text: "Departure", icon: <Plane className="w-4 h-4" /> }
      ]
    }
  ];

  const totalCost = 7423;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold">JP</div>
            <span className="font-bold text-slate-800">Japan Trip 2026</span>
          </div>
          <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setViewMode('summary')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${viewMode === 'summary' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >
              ภาพรวม
            </button>
            <button 
              onClick={() => setViewMode('details')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${viewMode === 'details' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >
              รายวัน
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-4 md:p-8">
        
        {viewMode === 'summary' ? (
          /* SUMMARY VIEW */
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hero Card */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 shadow-2xl">
              <div className="relative z-10">
                <h1 className="text-4xl font-extrabold mb-2">เส้นทางสายคันไซ - ทาคายาม่า</h1>
                <p className="text-slate-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> 10 - 16 กุมภาพันธ์ 2026 (7 วัน 6 คืน)
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                    <p className="text-xs text-slate-400">งบประมาณเริ่มต้น</p>
                    <p className="text-xl font-bold text-blue-400">฿{totalCost.toLocaleString()}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                    <p className="text-xs text-slate-400">สภาพอากาศ</p>
                    <p className="text-xl font-bold text-emerald-400">-2°C ถึง 10°C</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full -mr-20 -mt-20"></div>
            </div>

            {/* Itinerary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {itinerary.map((day) => (
                <div 
                  key={day.day} 
                  onClick={() => {setViewMode('details'); setActiveDay(day.day);}}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${day.color} text-white`}>
                      Day {day.day}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{day.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{day.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{day.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase">
                    <MapPin className="w-3 h-3" /> {day.location}
                  </div>
                </div>
              ))}
            </div>

            {/* Preparation Section */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 italic">
                <Info className="w-6 h-6 text-blue-500" /> สิ่งที่ต้องเตรียมตัวก่อนไป
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-3">
                  <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 mb-2">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <p className="font-bold">Digital Prep</p>
                  <ul className="text-slate-500 space-y-1 text-xs">
                    <li>• Visit Japan Web (ลงทะเบียนล่วงหน้า)</li>
                    <li>• ซื้อซิม/เช่า Pocket WiFi</li>
                    <li>• แอป Google Maps / Google Translate</li>
                    <li>• แอป USJ (สำหรับจองคิวเครื่องเล่น)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="bg-orange-50 w-10 h-10 rounded-xl flex items-center justify-center text-orange-600 mb-2">
                    <ThermometerSnowflake className="w-5 h-5" />
                  </div>
                  <p className="font-bold">Clothing</p>
                  <ul className="text-slate-500 space-y-1 text-xs">
                    <li>• Heattech (Ultra Warm สำหรับ Takayama)</li>
                    <li>• ถุงมือ ถุงเท้าหนา และหมวกไหมพรม</li>
                    <li>• แผ่นแปะความร้อน (Kairo)</li>
                    <li>• รองเท้าผ้าใบกันน้ำ/Snow Boots</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="bg-emerald-50 w-10 h-10 rounded-xl flex items-center justify-center text-emerald-600 mb-2">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <p className="font-bold">Finances</p>
                  <ul className="text-slate-500 space-y-1 text-xs">
                    <li>• เงินสดเยน (สำหรับร้านอาหารเล็กๆ)</li>
                    <li>• Travel Card (YouTrip / Planet / IC Card)</li>
                    <li>• แลกเหรียญ 100 เยนไว้หยอดตู้กดน้ำ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* DETAIL VIEW */
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            {/* Desktop Day Selector */}
            <div className="hidden md:flex gap-2 mb-8 overflow-x-auto py-2 px-1">
              {itinerary.map((d) => (
                <button
                  key={d.day}
                  onClick={() => setActiveDay(d.day)}
                  className={`px-5 py-3 rounded-2xl transition-all whitespace-nowrap font-bold text-sm ${
                    activeDay === d.day 
                    ? `${d.color} text-white shadow-lg -translate-y-1` 
                    : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Day {d.day}
                </button>
              ))}
            </div>

            {/* Current Day Content */}
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
              <div className={`${itinerary[activeDay-1].color} p-8 text-white relative`}>
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Day {activeDay} • {itinerary[activeDay-1].date}
                      </span>
                    </div>
                    <h2 className="text-3xl font-black">{itinerary[activeDay-1].title}</h2>
                    <p className="text-white/80 mt-2 font-medium italic">{itinerary[activeDay-1].description}</p>
                  </div>
                  <div className="hidden sm:block p-4 bg-white/10 rounded-[2rem] border border-white/20">
                    <MapPin className="w-10 h-10" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="space-y-8 relative">
                  <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-100 hidden sm:block"></div>
                  
                  {itinerary[activeDay-1].activities.map((act, idx) => (
                    <div key={idx} className="flex gap-6 relative group">
                      <div className={`z-10 w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-white transition-transform group-hover:scale-110 ${itinerary[activeDay-1].bgColor} ${itinerary[activeDay-1].textColor}`}>
                        {act.icon}
                      </div>
                      <div className="flex-1 pb-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">{act.time}</span>
                          {act.cost && (
                            <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-lg flex items-center gap-1 border border-blue-100">
                              <CreditCard className="w-3 h-3" /> {act.cost}
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-slate-800 mt-1">{act.text}</h4>
                        {act.extra && (
                          <div className="mt-2 flex items-center gap-2 bg-slate-50 border border-slate-100 p-2 rounded-xl">
                            <Info className="w-3 h-3 text-slate-400" />
                            <span className="text-xs text-slate-500 font-medium">{act.extra}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Day Navigation for Mobile */}
                <div className="mt-12 flex items-center justify-between">
                   <button 
                    onClick={() => setActiveDay(Math.max(1, activeDay - 1))}
                    disabled={activeDay === 1}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl text-xs font-bold text-slate-600 disabled:opacity-20"
                  >
                    ก่อนหน้า
                  </button>
                  <div className="flex gap-1.5">
                    {itinerary.map(i => (
                      <div key={i.day} className={`w-1.5 h-1.5 rounded-full transition-all ${activeDay === i.day ? 'w-4 ' + itinerary[i.day-1].color : 'bg-slate-200'}`} />
                    ))}
                  </div>
                  <button 
                    onClick={() => setActiveDay(Math.min(7, activeDay + 1))}
                    disabled={activeDay === 7}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl text-xs font-bold text-slate-600 disabled:opacity-20"
                  >
                    ถัดไป
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <footer className="mt-12 text-center border-t border-slate-200 pt-8">
          <p className="text-slate-400 text-sm mb-6">ทริปนี้ถูกจัดเตรียมไว้สำหรับทีมงานคนสำคัญ 🇯🇵</p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all">
              <Share2 className="w-4 h-4" /> แชร์แผนการเดินทาง
            </button>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-sm font-bold shadow-lg hover:bg-slate-800 transition-all"
            >
              <Download className="w-4 h-4" /> บันทึกเป็นไฟล์ PDF
            </button>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;