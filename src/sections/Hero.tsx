export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 70% at 22% 42%, rgba(123,31,143,0.55), transparent 62%), radial-gradient(ellipse 60% 55% at 85% 72%, rgba(177,69,201,0.22), transparent 65%)" }} />
        <div className="absolute inset-0 opacity-[0.13]" style={{ backgroundImage: "linear-gradient(var(--color-violet) 1px, transparent 1px), linear-gradient(90deg, var(--color-violet) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(ellipse 85% 75% at 30% 45%, #000 5%, transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 30% 45%, #000 5%, transparent 72%)" }} />
        <svg className="arena-drift absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" style={{ maskImage: "linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%), radial-gradient(ellipse 30% 40% at 66% 54%, rgba(0,0,0,0.15) 55%, #000 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%), radial-gradient(ellipse 30% 40% at 66% 54%, rgba(0,0,0,0.15) 55%, #000 100%)", maskComposite: "intersect", WebkitMaskComposite: "source-in" }}>
          <defs>
            <filter id="candle-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g opacity="0.22">
            <rect x="12.692307692307693" y="847.3460833658464" width="30" height="32.653916634153575" fill="#22c55e" rx="2" />
            <rect x="68.07692307692308" y="781.7521807225421" width="30" height="98.2478192774579" fill="#22c55e" rx="2" />
            <rect x="123.46153846153847" y="772.623257949017" width="30" height="107.37674205098301" fill="#22c55e" rx="2" />
            <rect x="178.84615384615387" y="831.71868248377" width="30" height="48.28131751623005" fill="#f43f5e" rx="2" />
            <rect x="234.23076923076923" y="827.2354363743216" width="30" height="52.76456362567842" fill="#22c55e" rx="2" />
            <rect x="289.6153846153846" y="781.0651854379103" width="30" height="98.93481456208974" fill="#22c55e" rx="2" />
            <rect x="345" y="843.669894314371" width="30" height="36.33010568562895" fill="#22c55e" rx="2" />
            <rect x="400.3846153846154" y="835.0978818885051" width="30" height="44.90211811149493" fill="#f43f5e" rx="2" />
            <rect x="455.7692307692308" y="839.3721510586329" width="30" height="40.62784894136712" fill="#22c55e" rx="2" />
            <rect x="511.15384615384613" y="781.5511634899303" width="30" height="98.44883651006967" fill="#22c55e" rx="2" />
            <rect x="566.5384615384615" y="839.7465521283448" width="30" height="40.253447871655226" fill="#f43f5e" rx="2" />
            <rect x="621.923076923077" y="790.9723775601014" width="30" height="89.02762243989855" fill="#22c55e" rx="2" />
            <rect x="677.3076923076924" y="786.5138971875422" width="30" height="93.48610281245783" fill="#22c55e" rx="2" />
            <rect x="732.6923076923077" y="778.671265381854" width="30" height="101.32873461814597" fill="#22c55e" rx="2" />
            <rect x="788.0769230769232" y="825.9463013429195" width="30" height="54.05369865708053" fill="#22c55e" rx="2" />
            <rect x="843.4615384615386" y="802.807203438133" width="30" height="77.192796561867" fill="#f43f5e" rx="2" />
            <rect x="898.8461538461539" y="826.8401425099" width="30" height="53.15985749009997" fill="#f43f5e" rx="2" />
            <rect x="954.2307692307693" y="842.8509451588616" width="30" height="37.14905484113842" fill="#f43f5e" rx="2" />
            <rect x="1009.6153846153846" y="799.941444741562" width="30" height="80.05855525843799" fill="#22c55e" rx="2" />
            <rect x="1065" y="802.7821401855908" width="30" height="77.21785981440917" fill="#22c55e" rx="2" />
            <rect x="1120.3846153846152" y="807.1689135232009" width="30" height="72.8310864767991" fill="#22c55e" rx="2" />
            <rect x="1175.7692307692307" y="812.2980380989611" width="30" height="67.70196190103889" fill="#22c55e" rx="2" />
            <rect x="1231.1538461538462" y="823.5339981387369" width="30" height="56.46600186126307" fill="#22c55e" rx="2" />
            <rect x="1286.5384615384614" y="781.3108533830382" width="30" height="98.6891466169618" fill="#22c55e" rx="2" />
            <rect x="1341.923076923077" y="771.7765047005378" width="30" height="108.22349529946223" fill="#22c55e" rx="2" />
            <rect x="1397.3076923076924" y="794.0853146836162" width="30" height="85.91468531638384" fill="#22c55e" rx="2" />
          </g>
          <g opacity="0.75" filter="url(#candle-glow)">
            <g fill="#22c55e">
              <rect x="26.192307692307693" y="714.0848299309797" width="3" height="97.83637748349463" rx="1.5" />
              <rect x="12.692307692307693" y="732.6477238389849" width="30" height="47.352276161015084" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="81.57692307692308" y="667.9195738417468" width="3" height="82.18221415502956" rx="1.5" />
              <rect x="68.07692307692308" y="704.8019430047273" width="30" height="27.845780834257653" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="136.96153846153845" y="651.7251213779299" width="3" height="73.59516491198917" rx="1.5" />
              <rect x="123.46153846153847" y="692.41419770658" width="30" height="12.387745298147252" rx="4" />
            </g>
            <g fill="#f43f5e">
              <rect x="192.34615384615387" y="651.4311710591054" width="3" height="87.17756762245665" rx="1.5" />
              <rect x="178.84615384615387" y="692.41419770658" width="30" height="20.31229562342162" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="247.73076923076923" y="655.9590908126903" width="3" height="85.46407529821624" rx="1.5" />
              <rect x="234.23076923076923" y="693.926247307658" width="30" height="18.800246022343686" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="303.1153846153846" y="622.2469658892785" width="3" height="92.0103349384666" rx="1.5" />
              <rect x="289.6153846153846" y="636.3434860128161" width="30" height="57.582761294841816" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="358.5" y="550.4562353656996" width="3" height="108.5589392079786" rx="1.5" />
              <rect x="345" y="591.0450787490603" width="30" height="45.29840726375585" rx="4" />
            </g>
            <g fill="#f43f5e">
              <rect x="413.8846153846154" y="574.1997896463048" width="3" height="54.28309624020005" rx="1.5" />
              <rect x="400.3846153846154" y="591.0450787490603" width="30" height="4" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="469.2692307692308" y="508.10282315162897" width="3" height="103.81118716549133" rx="1.5" />
              <rect x="455.7692307692308" y="532.8097188574071" width="30" height="59.15464076370006" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="524.6538461538462" y="463.8283098784271" width="3" height="95.016474973578" rx="1.5" />
              <rect x="511.15384615384613" y="475.2736690372224" width="30" height="57.5360498201847" rx="4" />
            </g>
            <g fill="#f43f5e">
              <rect x="580.0384615384615" y="460.0237320314157" width="3" height="51.66178011784331" rx="1.5" />
              <rect x="566.5384615384615" y="475.2736690372224" width="30" height="11.202612184286124" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="635.423076923077" y="462.7912392563555" width="3" height="45.38063764402642" rx="1.5" />
              <rect x="621.923076923077" y="478.9038200488682" width="30" height="7.572461172640317" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="690.8076923076924" y="417.9675606951672" width="3" height="100.52579541241755" rx="1.5" />
              <rect x="677.3076923076924" y="456.44121860355096" width="30" height="22.46260144531726" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="746.1923076923077" y="430.26553810292813" width="3" height="35.70778847455978" rx="1.5" />
              <rect x="732.6923076923077" y="445.0689379689093" width="30" height="11.37228063464164" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="801.5769230769232" y="391.7787521190937" width="3" height="91.48936280298977" rx="1.5" />
              <rect x="788.0769230769232" y="412.75486576259095" width="30" height="32.31407220631837" rx="4" />
            </g>
            <g fill="#f43f5e">
              <rect x="856.9615384615386" y="396.6232869632538" width="3" height="73.81727597380058" rx="1.5" />
              <rect x="843.4615384615386" y="412.75486576259095" width="30" height="24.72456604272128" rx="4" />
            </g>
            <g fill="#f43f5e">
              <rect x="912.3461538461539" y="405.05178863473196" width="3" height="58.744357182011015" rx="1.5" />
              <rect x="898.8461538461539" y="437.47943180531223" width="30" height="12.030339315831668" rx="4" />
            </g>
            <g fill="#f43f5e">
              <rect x="967.7307692307693" y="440.4027371387366" width="3" height="32.05463929643855" rx="1.5" />
              <rect x="954.2307692307693" y="449.5097711211439" width="30" height="12.09735656559468" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="1023.1153846153848" y="403.4553787848722" width="3" height="68.41802441857755" rx="1.5" />
              <rect x="1009.6153846153846" y="426.98870015710554" width="30" height="34.61842752963304" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="1078.5" y="331.30985073549635" width="3" height="128.84962504932656" rx="1.5" />
              <rect x="1065" y="363.2471436843272" width="30" height="63.74155647277831" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="1133.8846153846152" y="309.65953856913336" width="3" height="80.56008277989923" rx="1.5" />
              <rect x="1120.3846153846152" y="319.4723709511753" width="30" height="43.774772733151906" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="1189.2692307692307" y="276.05971583541447" width="3" height="81.04491179173812" rx="1.5" />
              <rect x="1175.7692307692307" y="284.8511240845915" width="30" height="34.62124686658382" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="1244.6538461538462" y="223.5876271057498" width="3" height="91.2381504654698" rx="1.5" />
              <rect x="1231.1538461538462" y="245.5298202106353" width="30" height="39.3213038739562" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="1300.0384615384614" y="201.67519151389564" width="3" height="67.16284733748063" rx="1.5" />
              <rect x="1286.5384615384614" y="221.95781089335645" width="30" height="23.572009317278855" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="1355.423076923077" y="188.33827894087847" width="3" height="49.05637867253273" rx="1.5" />
              <rect x="1341.923076923077" y="210.11306218057837" width="30" height="11.844748712778085" rx="4" />
            </g>
            <g fill="#22c55e">
              <rect x="1410.8076923076924" y="152.23695392889869" width="3" height="70.3145774259977" rx="1.5" />
              <rect x="1397.3076923076924" y="174.53619768500295" width="30" height="35.57686449557542" rx="4" />
            </g>
          </g>
          <polyline points="27.7,732.6 83.1,718.7 138.5,710.0 193.8,710.6 249.2,707.3 304.6,695.5 360.0,680.6 415.4,669.5 470.8,644.5 526.2,615.8 581.5,590.1 636.9,560.8 692.3,531.2 747.7,507.2 803.1,485.0 858.5,465.7 913.8,455.2 969.2,453.5 1024.6,446.1 1080.0,431.6 1135.4,414.5 1190.8,394.5 1246.2,373.6 1301.5,346.6 1356.9,316.7 1412.3,280.8" stroke="var(--color-gold-bright)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" opacity="0.12" />
          <polyline points="27.7,732.6 83.1,718.7 138.5,710.0 193.8,710.6 249.2,707.3 304.6,695.5 360.0,680.6 415.4,669.5 470.8,644.5 526.2,615.8 581.5,590.1 636.9,560.8 692.3,531.2 747.7,507.2 803.1,485.0 858.5,465.7 913.8,455.2 969.2,453.5 1024.6,446.1 1080.0,431.6 1135.4,414.5 1190.8,394.5 1246.2,373.6 1301.5,346.6 1356.9,316.7 1412.3,280.8" stroke="var(--color-gold-bright)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        </svg>
        <span className="arena-particle absolute rounded-full" style={{ left: "34.33%", top: "59.63%", width: "3.2px", height: "3.2px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.3s", "--p-delay": "6.4s", "--p-opacity": "0.95" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "90.64%", top: "8.82%", width: "3.1px", height: "3.1px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "15.2s", "--p-delay": "9.8s", "--p-opacity": "0.84" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "97.51%", top: "17.67%", width: "2.4px", height: "2.4px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.8s", "--p-delay": "3.2s", "--p-opacity": "0.59" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "8.59%", top: "57.42%", width: "1.7px", height: "1.7px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "13.6s", "--p-delay": "0.4s", "--p-opacity": "0.60" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "82.54%", top: "9.58%", width: "3.5px", height: "3.5px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "13.2s", "--p-delay": "6.0s", "--p-opacity": "0.93" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "33.68%", top: "94.72%", width: "2.8px", height: "2.8px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "18.3s", "--p-delay": "5.5s", "--p-opacity": "0.86" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "26.69%", top: "79.66%", width: "1px", height: "1px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "18.6s", "--p-delay": "2.2s", "--p-opacity": "0.83" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "86.91%", top: "49.59%", width: "3.4px", height: "3.4px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "9.9s", "--p-delay": "10.7s", "--p-opacity": "0.75" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "0.64%", top: "43.05%", width: "2.4px", height: "2.4px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "14.2s", "--p-delay": "6.6s", "--p-opacity": "0.33" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "43.51%", top: "66.64%", width: "2.5px", height: "2.5px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "19.0s", "--p-delay": "0.5s", "--p-opacity": "0.54" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "52.75%", top: "27.58%", width: "1.6px", height: "1.6px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "18.8s", "--p-delay": "5.0s", "--p-opacity": "0.64" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "60.18%", top: "93.61%", width: "1.6px", height: "1.6px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "13.0s", "--p-delay": "12.9s", "--p-opacity": "0.89" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "8.47%", top: "39.84%", width: "1.6px", height: "1.6px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "8.8s", "--p-delay": "9.4s", "--p-opacity": "0.83" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "27.24%", top: "56.56%", width: "1.4px", height: "1.4px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "8.5s", "--p-delay": "4.0s", "--p-opacity": "0.29" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "24.93%", top: "8.66%", width: "2.5px", height: "2.5px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.3s", "--p-delay": "4.2s", "--p-opacity": "0.70" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "51.94%", top: "8.08%", width: "2.2px", height: "2.2px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "9.7s", "--p-delay": "4.3s", "--p-opacity": "0.70" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "41.17%", top: "5.66%", width: "3.5px", height: "3.5px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "10.6s", "--p-delay": "9.1s", "--p-opacity": "0.54" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "21.03%", top: "37.89%", width: "1.6px", height: "1.6px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "16.2s", "--p-delay": "1.2s", "--p-opacity": "0.25" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "33.62%", top: "61.82%", width: "1.5px", height: "1.5px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "15.3s", "--p-delay": "0.1s", "--p-opacity": "0.35" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "99.87%", top: "27.85%", width: "1.7px", height: "1.7px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "18.5s", "--p-delay": "3.5s", "--p-opacity": "0.66" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "87.26%", top: "61.18%", width: "2.6px", height: "2.6px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "12.7s", "--p-delay": "12.6s", "--p-opacity": "0.99" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "46.49%", top: "89.55%", width: "3.2px", height: "3.2px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "16.4s", "--p-delay": "6.9s", "--p-opacity": "1.00" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "98.10%", top: "37.31%", width: "1.9px", height: "1.9px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "9.4s", "--p-delay": "3.7s", "--p-opacity": "0.64" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "66.27%", top: "77.20%", width: "1.7px", height: "1.7px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "12.9s", "--p-delay": "2.5s", "--p-opacity": "0.96" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "9.20%", top: "79.10%", width: "1.5px", height: "1.5px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "11.7s", "--p-delay": "6.7s", "--p-opacity": "0.44" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "96.45%", top: "75.08%", width: "3.5px", height: "3.5px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "8.6s", "--p-delay": "7.4s", "--p-opacity": "0.30" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "17.86%", top: "8.57%", width: "1px", height: "1px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "8.9s", "--p-delay": "0.1s", "--p-opacity": "0.42" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "52.00%", top: "77.32%", width: "1.8px", height: "1.8px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.5s", "--p-delay": "1.8s", "--p-opacity": "0.59" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "85.25%", top: "36.01%", width: "2.5px", height: "2.5px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "12.6s", "--p-delay": "9.3s", "--p-opacity": "0.68" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "17.23%", top: "6.65%", width: "2.2px", height: "2.2px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "16.0s", "--p-delay": "11.4s", "--p-opacity": "0.67" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "49.94%", top: "11.47%", width: "3.1px", height: "3.1px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "12.1s", "--p-delay": "3.4s", "--p-opacity": "0.56" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "29.24%", top: "55.67%", width: "1.5px", height: "1.5px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "8.6s", "--p-delay": "9.0s", "--p-opacity": "0.91" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "43.80%", top: "73.00%", width: "2.1px", height: "2.1px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "18.4s", "--p-delay": "5.8s", "--p-opacity": "0.73" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "9.69%", top: "3.06%", width: "3.4px", height: "3.4px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "12.4s", "--p-delay": "10.4s", "--p-opacity": "0.78" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "82.56%", top: "73.00%", width: "1.6px", height: "1.6px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "13.7s", "--p-delay": "4.8s", "--p-opacity": "0.72" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "91.69%", top: "71.07%", width: "2.4px", height: "2.4px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "17.1s", "--p-delay": "8.9s", "--p-opacity": "0.65" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "61.20%", top: "39.55%", width: "2.9px", height: "2.9px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "17.4s", "--p-delay": "3.4s", "--p-opacity": "0.46" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "95.06%", top: "16.48%", width: "2px", height: "2px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "9.4s", "--p-delay": "1.1s", "--p-opacity": "0.33" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "31.71%", top: "64.52%", width: "2.8px", height: "2.8px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "13.5s", "--p-delay": "1.2s", "--p-opacity": "0.56" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "7.51%", top: "79.39%", width: "1.6px", height: "1.6px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "13.8s", "--p-delay": "6.9s", "--p-opacity": "0.72" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "7.25%", top: "25.87%", width: "2.5px", height: "2.5px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "14.7s", "--p-delay": "6.7s", "--p-opacity": "0.56" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "85.00%", top: "86.10%", width: "1.3px", height: "1.3px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "15.2s", "--p-delay": "12.4s", "--p-opacity": "0.42" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "33.29%", top: "51.88%", width: "1.3px", height: "1.3px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "14.9s", "--p-delay": "4.1s", "--p-opacity": "0.37" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "23.83%", top: "49.91%", width: "1.3px", height: "1.3px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.2s", "--p-delay": "5.9s", "--p-opacity": "0.34" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "61.78%", top: "37.66%", width: "3.6px", height: "3.6px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "13.4s", "--p-delay": "5.4s", "--p-opacity": "0.54" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "28.68%", top: "64.58%", width: "1.5px", height: "1.5px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "9.3s", "--p-delay": "1.6s", "--p-opacity": "0.65" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "45.65%", top: "73.51%", width: "1.2px", height: "1.2px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "17.7s", "--p-delay": "1.1s", "--p-opacity": "0.40" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "24.45%", top: "91.92%", width: "1.1px", height: "1.1px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "16.9s", "--p-delay": "7.5s", "--p-opacity": "0.59" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "9.19%", top: "89.64%", width: "2.1px", height: "2.1px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "9.1s", "--p-delay": "4.6s", "--p-opacity": "0.85" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "56.88%", top: "3.50%", width: "2.9px", height: "2.9px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "15.2s", "--p-delay": "6.7s", "--p-opacity": "0.50" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "20.82%", top: "41.94%", width: "2px", height: "2px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "12.8s", "--p-delay": "7.9s", "--p-opacity": "0.30" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "49.40%", top: "62.80%", width: "3.4px", height: "3.4px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "13.6s", "--p-delay": "10.7s", "--p-opacity": "0.42" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "75.82%", top: "53.18%", width: "1.1px", height: "1.1px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "10.7s", "--p-delay": "7.1s", "--p-opacity": "0.37" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "33.31%", top: "80.80%", width: "3.5px", height: "3.5px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.9s", "--p-delay": "2.7s", "--p-opacity": "0.92" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "80.34%", top: "11.00%", width: "1.8px", height: "1.8px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "11.2s", "--p-delay": "6.0s", "--p-opacity": "0.39" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "62.69%", top: "12.70%", width: "1.3px", height: "1.3px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "16.1s", "--p-delay": "11.5s", "--p-opacity": "0.32" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "77.11%", top: "64.43%", width: "2.4px", height: "2.4px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "11.9s", "--p-delay": "6.5s", "--p-opacity": "0.75" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "60.13%", top: "56.88%", width: "2.1px", height: "2.1px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.9s", "--p-delay": "10.4s", "--p-opacity": "0.49" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "79.24%", top: "42.74%", width: "1.9px", height: "1.9px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "14.3s", "--p-delay": "7.5s", "--p-opacity": "0.33" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "63.76%", top: "70.31%", width: "2.3px", height: "2.3px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "13.1s", "--p-delay": "1.2s", "--p-opacity": "0.94" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "18.17%", top: "12.84%", width: "1.4px", height: "1.4px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "16.4s", "--p-delay": "2.4s", "--p-opacity": "0.76" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "18.26%", top: "53.03%", width: "2.1px", height: "2.1px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "10.2s", "--p-delay": "9.0s", "--p-opacity": "0.79" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "78.73%", top: "70.67%", width: "1.3px", height: "1.3px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "11.7s", "--p-delay": "11.6s", "--p-opacity": "0.31" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "32.10%", top: "15.60%", width: "2.9px", height: "2.9px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "12.1s", "--p-delay": "12.9s", "--p-opacity": "0.35" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "49.56%", top: "3.53%", width: "2.6px", height: "2.6px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "10.9s", "--p-delay": "6.9s", "--p-opacity": "0.38" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "24.19%", top: "59.16%", width: "1.4px", height: "1.4px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "18.9s", "--p-delay": "0.7s", "--p-opacity": "0.37" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "-0.95%", top: "63.31%", width: "2.4px", height: "2.4px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "18.3s", "--p-delay": "8.2s", "--p-opacity": "0.30" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "-0.58%", top: "41.11%", width: "1.7px", height: "1.7px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "14.4s", "--p-delay": "12.0s", "--p-opacity": "0.54" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "70.11%", top: "16.70%", width: "1.1px", height: "1.1px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "15.1s", "--p-delay": "12.4s", "--p-opacity": "0.67" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "68.64%", top: "20.26%", width: "2.6px", height: "2.6px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "9.6s", "--p-delay": "1.7s", "--p-opacity": "0.99" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "69.79%", top: "26.69%", width: "2px", height: "2px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.9s", "--p-delay": "7.6s", "--p-opacity": "0.29" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "94.63%", top: "29.22%", width: "1.1px", height: "1.1px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "14.3s", "--p-delay": "12.3s", "--p-opacity": "0.51" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "93.07%", top: "57.13%", width: "1.3px", height: "1.3px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "9.4s", "--p-delay": "5.6s", "--p-opacity": "0.35" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "67.69%", top: "34.76%", width: "1px", height: "1px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "15.0s", "--p-delay": "6.5s", "--p-opacity": "0.44" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "28.08%", top: "11.78%", width: "1px", height: "1px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "14.0s", "--p-delay": "10.3s", "--p-opacity": "0.30" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "51.92%", top: "39.22%", width: "2.7px", height: "2.7px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "9.6s", "--p-delay": "1.7s", "--p-opacity": "0.47" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "-1.30%", top: "57.22%", width: "1.5px", height: "1.5px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "9.2s", "--p-delay": "12.5s", "--p-opacity": "0.42" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "10.53%", top: "63.65%", width: "2.5px", height: "2.5px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "15.6s", "--p-delay": "1.9s", "--p-opacity": "0.71" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "18.99%", top: "58.69%", width: "3.3px", height: "3.3px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "10.0s", "--p-delay": "5.8s", "--p-opacity": "0.56" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "18.29%", top: "27.79%", width: "3.5px", height: "3.5px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "13.8s", "--p-delay": "2.4s", "--p-opacity": "0.91" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "15.66%", top: "49.22%", width: "1.3px", height: "1.3px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.4s", "--p-delay": "8.6s", "--p-opacity": "0.39" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "28.79%", top: "30.01%", width: "2.6px", height: "2.6px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "12.3s", "--p-delay": "1.8s", "--p-opacity": "0.81" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "100.72%", top: "40.51%", width: "1.9px", height: "1.9px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "11.8s", "--p-delay": "3.8s", "--p-opacity": "0.86" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "84.52%", top: "12.21%", width: "1.6px", height: "1.6px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "10.4s", "--p-delay": "10.4s", "--p-opacity": "0.82" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "28.21%", top: "8.56%", width: "1.2px", height: "1.2px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.7s", "--p-delay": "3.0s", "--p-opacity": "0.29" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "71.80%", top: "57.01%", width: "1.4px", height: "1.4px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "9.2s", "--p-delay": "9.9s", "--p-opacity": "0.28" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "66.48%", top: "62.25%", width: "2px", height: "2px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "12.1s", "--p-delay": "9.6s", "--p-opacity": "0.92" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "48.54%", top: "35.88%", width: "2.1px", height: "2.1px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "8.6s", "--p-delay": "1.6s", "--p-opacity": "0.87" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "62.61%", top: "33.28%", width: "2.3px", height: "2.3px", background: "var(--color-gold-bright)", boxShadow: "0 0 8px 1.5px rgba(231,182,242,0.7)", "--p-duration": "15.1s", "--p-delay": "4.6s", "--p-opacity": "0.78" }} />
        <span className="arena-particle absolute rounded-full" style={{ left: "5.75%", top: "33.87%", width: "3.2px", height: "3.2px", background: "var(--color-violet)", boxShadow: "0 0 7px 1.5px rgba(177,69,201,0.6)", "--p-duration": "17.3s", "--p-delay": "4.5s", "--p-opacity": "0.36" }} />
        <span className="absolute inset-y-0 left-6 hidden w-px bg-gradient-to-b from-transparent via-violet/25 to-transparent lg:block" />
        <span className="absolute inset-y-0 right-6 hidden w-px bg-gradient-to-b from-transparent via-violet/25 to-transparent lg:block" />
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 120% 90% at 50% 45%, transparent 35%, rgba(11,11,15,0.75) 85%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-[38%]" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,15,0.65) 45%, var(--color-bg) 100%)" }} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[11] hidden xl:block">
        <div className="arena-container relative xl:max-w-[100rem]">
          <div className="hero-figure absolute bottom-0 left-[clamp(1.25rem,4vw,3rem)]">
            <div aria-hidden="true" className="hero-figure-rim pointer-events-none absolute -inset-x-[24%] -top-[8%] bottom-[6%] -z-10" />
            <img alt="Anish Singh Thakur" width="629" height="904" decoding="async" className="arena-enter select-none" style={{ "--e-delay": "0.34s" }} src="/anish.webp" />
            <div aria-hidden="true" className="hero-figure-base pointer-events-none absolute inset-x-[-10%] bottom-0 h-24" />
          </div>
        </div>
      </div>
      <div className="relative z-10 border-b border-white/5 backdrop-blur-sm">
        <div className="arena-container grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-3.5">
          <div className="col-start-2 flex items-center gap-4 sm:gap-6">
            <img alt="Lemonn" width="193" height="52" decoding="async" className="h-6 w-auto sm:h-7 lg:h-8" src="/lemonn-white.svg" />
            <span aria-hidden="true" className="text-2xl font-light leading-none text-fg-muted sm:text-3xl">
              ×
            </span>
            <span className="flex h-10 w-32 items-center justify-center rounded-xl bg-white px-2 sm:h-11 sm:w-36 lg:h-12 lg:w-40">
              <img alt="Booming Bulls Academy" width="2170" height="725" decoding="async" className="h-full w-full object-contain" src="/bomming-bulls-icon.webp" />
            </span>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-1 items-center xl:mt-auto xl:min-h-[calc(var(--hero-pw)*1.2131)] xl:flex-none">
        <div className="arena-container py-14 md:py-16 lg:py-20 xl:max-w-[100rem] xl:py-0">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[var(--hero-pw)_minmax(0,1fr)] xl:gap-16">
            <div className="relative text-center lg:col-start-2 lg:row-start-1 lg:text-left">
              <div aria-hidden="true" className="pointer-events-none absolute -inset-x-16 -inset-y-20 -z-10 lg:-left-4" style={{ background: "radial-gradient(ellipse 62% 58% at 42% 50%, rgba(11,11,15,0.92) 0%, rgba(11,11,15,0.78) 45%, transparent 82%)" }} />
              <div className="arena-enter flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start" style={{ "--e-delay": "0.05s" }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-accent xl:text-xs">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-accent" />
                  The Pride Pool
                </span>
                <span className="text-sm font-extrabold tracking-tight text-violet sm:text-base xl:text-lg">
                  World Trading Championship · Celebration
                </span>
              </div>
              <h1 id="hero-heading" className="arena-enter mt-5 font-extrabold leading-[0.88] tracking-[-0.045em] text-fg" style={{ "--e-delay": "0.14s" }}>
                <span className="arena-reveal block text-[clamp(3.5rem,13.5vw,8rem)] lg:text-[clamp(4rem,8vw,6rem)] xl:text-[clamp(5.5rem,8.5vw,9rem)] text-white [text-shadow:0_0_60px_rgba(177,69,201,0.45)]" style={{ "--r-delay": "0.18s" }}>
                  ₹1 Crore
                </span>
                <span className="arena-reveal mt-1.5 block text-[clamp(1.375rem,4.4vw,2.625rem)] leading-[1.05] text-grad-silver pb-[0.14em] -mb-[0.14em] xl:text-[clamp(2.5rem,3.8vw,3.5rem)]" style={{ "--r-delay": "0.42s" }}>
                  Brokerage Credits Pool
                </span>
              </h1>
              <p className="arena-enter mt-3 text-[clamp(1.0625rem,2.2vw,1.375rem)] font-semibold text-fg xl:text-[1.75rem]" style={{ "--e-delay": "0.2s" }}>
                for India’s trading community
              </p>
              <p className="arena-enter mt-4 flex justify-center lg:justify-start" style={{ "--e-delay": "0.22s" }}>
                <a href="#giveaway" className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-3.5 py-1.5 text-[0.8125rem] font-bold text-accent transition-colors duration-200 hover:bg-accent/20">
                  <span aria-hidden="true">
                    💻
                  </span>
                  <span data-placeholder="true">
                    + 20 laptops to be won
                  </span>
                </a>
              </p>
              <p className="arena-enter mx-auto mt-5 max-w-[42ch] text-pretty text-base font-medium leading-relaxed text-fg/90 lg:mx-0 md:text-[1.0625rem] xl:text-xl" style={{ "--e-delay": "0.24s" }}>
                Celebrating Anish Singh Thakur’s achievement at the World Trading Championship.
              </p>
              <div className="arena-enter mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start" style={{ "--e-delay": "0.32s" }}>
                <a href="#" className="arena-cta inline-flex h-[3.25rem] items-center justify-center gap-2 btn-key px-7 text-[0.9375rem] xl:h-16 xl:px-10 xl:text-lg font-extrabold tracking-[-0.01em]">
                  Join the ₹1 Crore Pool
                  <span aria-hidden="true">
                    →
                  </span>
                </a>
                <p className="flex items-center gap-2 text-sm font-semibold text-fg/85 xl:text-base">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-success" />
                  Existing Lemonn users are already in
                </p>
              </div>
            </div>
            <div className="relative order-first -mb-14 w-full max-w-[16rem] justify-self-center sm:-mb-16 sm:max-w-[20rem] lg:order-none lg:mb-0 lg:max-w-[25rem] xl:hidden">
              <div aria-hidden="true" className="hero-figure-rim pointer-events-none absolute -inset-x-[24%] -top-[8%] bottom-[6%] -z-10" />
              <img alt="Anish Singh Thakur" width="629" height="904" decoding="async" className="arena-enter h-auto w-full select-none" style={{ "--e-delay": "0.34s", maskImage: "linear-gradient(to bottom, #000 62%, transparent 84%)", WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent 84%)" }} src="/anish.webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
