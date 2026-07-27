/* IELTS Academic Reading Test 1 — Born to Learn, original material.
   Copy this file to make a new test: change the id in catalog.js,
   swap the passages, the questions and the key. Structure stays identical. */
window.TEST_DATA = {
 passages:[
 {
  n:1, title:"The box that rebuilt trade",
  paras:[
  ["A","In 1950 the business of moving goods across an ocean had changed little in a century. Cargo arrived at a port as a heterogeneous mass — sacks of coffee, crates of machinery, barrels of oil, bales of cotton — and every item was handled separately. Gangs of dockers lifted, carried and stacked, fitting awkward shapes into a hold as though assembling a puzzle whose pieces changed with every voyage. This was known as break-bulk cargo, and it was slow. A ship might spend as many days in port as it spent at sea, and handling costs alone could account for more than half the expense of an international shipment. Theft along the quayside was so routine that it was written into the accounts as an ordinary overhead."],
  ["B","The person who changed this was not a shipping man. Malcolm McLean owned a road haulage business in North Carolina, and what irritated him was the time his drivers lost queuing at the dockside while their loads were unpacked and carried aboard by hand. His question was not how to load a ship more quickly but why the load had to be broken up at all. If the body of a trailer could be lifted from its wheels and set directly on a deck, the goods inside would not be touched again between the factory and their destination. The insight came from outside the industry precisely because everyone inside it had spent a career improving a process McLean proposed to abolish."],
  ["C","In April 1956 a converted oil tanker, renamed Ideal X, left Newark with fifty-eight metal boxes secured to a reinforced deck. The voyage to Houston was unremarkable in every respect except its accounting. Loading conventional cargo cost in the region of $5.83 a tonne; loading the boxes cost just under sixteen cents. Even after allowing for the cranes that had to be built and the deck space the boxes wasted, the gap was of an order that no gradual improvement to break-bulk handling could ever have produced. What had been a labour problem became an engineering one, and engineering problems tend to yield to money."],
  ["D","Cheapness by itself did not make a system. A box that fitted one firm's ships, cranes and road chassis was of little use to anybody else, and through the early 1960s competing operators built to incompatible dimensions, each hoping its own would become the norm. The negotiations that settled the matter took the better part of a decade and were conducted in international standards committees rather than in the marketplace. What emerged was a short list of agreed lengths together with common corner fittings, so that any crane could lift any box and any box could be locked to any other. The container became genuinely useful only at the point where it stopped being one company's property and became an industry's unit of measurement."],
  ["E","Not everyone welcomed it. Dock labour was skilled, well organised and numerous, and containerisation offered its members redundancy. In several ports, unions negotiated agreements that slowed the changeover, secured payments for displaced workers or restricted which categories of cargo could be packed into boxes. Some shipping lines resisted too, having recently ordered conventional vessels that the new method rendered obsolete long before they were worn out. For roughly fifteen years the two systems ran alongside each other, and it was not obvious to everyone which would win."],
  ["F","The geography of shipping then changed. Break-bulk ports had grown up in the centres of cities, close to the warehouses they filled and the labour that filled them. Container ships needed deep water, wide approaches and, above all, flat land — dozens of hectares on which to stack boxes and turn the vehicles that carried them away. Almost no old urban waterfront could supply this, so terminals moved downriver or to entirely new sites, and cities that had been shaped by their docks found the docks gone within a single generation. In London, Liverpool and New York the abandoned quaysides stood empty for years before being rebuilt as housing."],
  ["G","The deepest consequence was felt not in shipping but in manufacturing. Once moving a component across an ocean costs a small and, more importantly, a predictable amount, there is little reason for the stages of production to stay in one place. A firm could design in one country, buy parts from five others, assemble in a sixth and sell in a hundred. The container did not cause this dispersal on its own — tariffs fell and communications improved over the same decades — but it removed the physical friction that had made distance expensive. The steel box is entirely unremarkable to look at, and that is very nearly the point: it is a piece of infrastructure whose whole value lies in being identical everywhere."]],
  groups:[
   {type:"headings", range:"Questions 1–6",
    inst:"Reading Passage 1 has seven paragraphs, <b>A–G</b>. Choose the correct heading for each paragraph from the list below.",
    options:[["i","An idea brought in from another industry"],["ii","Agreeing on a single set of measurements"],
             ["iii","The first voyage and what it cost"],["iv","How cargo was handled before"],
             ["v","Objections from those who stood to lose"],["vi","Ports abandon the cities"],
             ["vii","Production divided between countries"],["viii","Early designs that failed commercially"],
             ["ix","Government control of freight charges"]],
    example:{para:"A", ans:"iv"},
    items:[
     {q:1,label:"Paragraph B",ans:"i",p:"B",why:"McLean ran a road haulage business, not a shipping company, and the paragraph closes by saying the insight came from outside the industry."},
     {q:2,label:"Paragraph C",ans:"iii",p:"C",why:"The whole paragraph is the 1956 voyage of the Ideal X and the comparison of loading costs."},
     {q:3,label:"Paragraph D",ans:"ii",p:"D",why:"Incompatible dimensions, standards committees, agreed lengths and common corner fittings. Heading viii is the trap: failed designs are never mentioned, only incompatible ones."},
     {q:4,label:"Paragraph E",ans:"v",p:"E",why:"Unions and shipping lines with new conventional vessels — both groups faced losses."},
     {q:5,label:"Paragraph F",ans:"vi",p:"F",why:"Terminals move downriver to new sites and city waterfronts empty."},
     {q:6,label:"Paragraph G",ans:"vii",p:"G",why:"Design in one country, parts from five others, assembly in a sixth."}]},
   {type:"radio", range:"Questions 7–10", opts:["TRUE","FALSE","NOT GIVEN"],
    inst:"Do the following statements agree with the information in Reading Passage 1? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
    items:[
     {q:7,text:"McLean had spent his working life in the shipping industry before he developed the container.",ans:"FALSE",p:"B",why:"He owned a road haulage business, and the paragraph stresses that the idea came from outside shipping."},
     {q:8,text:"The Ideal X was built specifically to carry containers.",ans:"FALSE",p:"C",why:"It was a converted oil tanker with a reinforced deck."},
     {q:9,text:"Dockworkers in Asian ports resisted containerisation more strongly than those in Europe.",ans:"NOT GIVEN",p:"E",why:"Resistance is described, but no comparison between regions is made anywhere in the passage."},
     {q:10,text:"Agreement on common container dimensions was reached through competition between firms.",ans:"FALSE",p:"D",why:"The passage says the opposite: it was settled in international standards committees rather than in the marketplace."}]},
   {type:"text", range:"Questions 11–13", note:"NO MORE THAN TWO WORDS from the passage",
    inst:"Complete the sentences below. Write <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.",
    items:[
     {q:11,before:"Loading goods item by item was known as",after:"cargo.",ans:["break-bulk","break bulk","breakbulk"],p:"A",why:"Stated directly at the end of the first paragraph."},
     {q:12,before:"Container terminals need large areas of",after:"on which to stack boxes.",ans:["flat land"],p:"F",why:"“above all, flat land — dozens of hectares on which to stack boxes”."},
     {q:13,before:"Disused dock areas in several cities were later rebuilt as",after:".",ans:["housing"],p:"F",why:"The final sentence of paragraph F."}]}]
 },
 {
  n:2, title:"Four days, same pay",
  paras:[
  ["A","The phrase “four-day week” describes two quite different arrangements, and most disagreement about it comes from confusing them. The first is a compressed week, in which the same forty hours are packed into four longer days. The second, which is what recent trials have tested, is a genuine reduction in hours with no reduction in pay. Its organisers summarise it as the hundred-eighty-hundred principle: a hundred per cent of salary for eighty per cent of the time, in exchange for a commitment to maintain a hundred per cent of output. It is the last of the three figures that makes the arrangement interesting and the last that is hardest to verify."],
  ["B","Shorter hours are not a new demand, but the conditions that revived it were specific. Employers in several sectors were struggling to recruit and to keep experienced staff. The sudden normalisation of home working had already demonstrated that arrangements previously described as impossible could be introduced in a fortnight. And measured productivity in service industries had been close to flat for years, which made managers unusually receptive to proposals that promised more output rather than merely cheaper input."],
  ["C","The largest trials have followed a similar design. Organisations volunteer, spend two months redesigning how work is done, then operate a reduced week for six months while collecting figures on revenue, sickness absence, resignations and self-reported strain. Two features of this design deserve emphasis. Participating organisations select themselves, which means they are the ones that already suspected the arrangement might suit them. And most performance figures are supplied by the participants rather than gathered independently. Neither point makes the results worthless, but both place a limit on how far they can be generalised."],
  ["D","Within those limits, the aggregate results have been consistent. Revenue in participating firms has generally held steady or risen slightly over the trial period. Sickness absence has fallen, in some cases sharply. Resignations have dropped, and the great majority of organisations have continued the arrangement after their trial ended, which is arguably a more persuasive figure than any of the others, since continuing costs the employer real money."],
  ["E","The picture is much less uniform once the results are broken down by the kind of work involved. Where output is a matter of coverage rather than of tasks completed, the arithmetic becomes unforgiving. A hospital ward that took part in one scheme concluded that its hours could not be cut without either hiring additional staff or accepting a level of cover its clinical leads judged unsafe. A secondary school approached about joining a trial found it could not participate at all, because the number of teaching hours it must provide is fixed in law. By contrast, a call centre with flexible shift patterns adopted the model with little difficulty, and reported that customers noticed no change in how quickly their calls were answered."],
  ["F","What actually changed inside the organisations that succeeded is less dramatic than the headlines suggest. Almost none of them found that staff worked faster. What they found was that a great deal of the working week had not been work. One software company halved the time it spent in internal meetings, largely by requiring a written agenda and a stated purpose before any meeting could be booked. Others reduced interruptions, shortened reporting cycles or abandoned status updates that nobody read. A design consultancy that made comparatively few operational changes nonetheless recorded the steepest fall in staff leaving of any participant, which its directors attributed less to the shorter week itself than to what offering it signalled."],
  ["G","Two questions remain genuinely open. The first is durability: most published trials run for six months, and it is not known whether the initial gains reflect a lasting change in how work is organised or the ordinary lift that accompanies any well-publicised new arrangement. The second is measurement. In work whose output cannot be counted in units, the finding that output did not fall frequently means only that no fall was detected — which is a weaker claim, and one that the more careful advocates of the four-day week are willing to make explicitly."]],
  groups:[
   {type:"features", range:"Questions 14–18",
    inst:"Look at the following statements and the list of organisations below. Match each statement with the correct organisation, <b>A–E</b>.",
    options:[["A","a software company"],["B","a hospital ward"],["C","a call centre"],["D","a secondary school"],["E","a design consultancy"]],
    items:[
     {q:14,text:"It reduced the time given to internal meetings by half.",ans:"A",p:"F",why:"The software company introduced a written agenda requirement."},
     {q:15,text:"It judged that fewer hours would mean an unacceptable level of cover.",ans:"B",p:"E",why:"The hospital ward's clinical leads regarded the reduced cover as unsafe."},
     {q:16,text:"It was prevented from joining a trial by a legal requirement.",ans:"D",p:"E",why:"The school's teaching hours are fixed in law."},
     {q:17,text:"It recorded the largest reduction in staff departures.",ans:"E",p:"F",why:"The design consultancy, despite making few operational changes."},
     {q:18,text:"It maintained its service without any change being apparent to customers.",ans:"C",p:"E",why:"The call centre reported no change in how quickly calls were answered."}]},
   {type:"radio", range:"Questions 19–22", opts:["TRUE","FALSE","NOT GIVEN"],
    inst:"Do the following statements agree with the information in Reading Passage 2? Write <b>TRUE</b>, <b>FALSE</b> or <b>NOT GIVEN</b>.",
    items:[
     {q:19,text:"The arrangement tested in recent trials requires staff to work longer on the days they do work.",ans:"FALSE",p:"A",why:"That describes the compressed week, which the passage separates from the model actually tested."},
     {q:20,text:"Organisations taking part in the trials were chosen at random.",ans:"FALSE",p:"C",why:"They volunteer, and the passage explicitly calls this self-selection."},
     {q:21,text:"Employees in the trials reported spending more time on hobbies.",ans:"NOT GIVEN",p:"D",why:"Absence, resignations and strain are measured; how the free day was used is never discussed."},
     {q:22,text:"Most organisations kept the reduced week after their trial finished.",ans:"TRUE",p:"D",why:"The great majority continued, which the writer treats as the most persuasive result."}]},
   {type:"text", range:"Questions 23–26", note:"ONE WORD ONLY from the passage",
    inst:"Complete the sentences below. Write <b>ONE WORD ONLY</b> from the passage for each answer.",
    items:[
     {q:23,before:"The principle behind the trials is full pay, eighty per cent of the time and unchanged",after:".",ans:["output"],p:"A",why:"The hundred-eighty-hundred principle, third figure."},
     {q:24,before:"The model is hardest to apply where output depends on",after:"rather than on tasks completed.",ans:["coverage"],p:"E",why:"First sentence of paragraph E."},
     {q:25,before:"Successful organisations found that staff did not work",after:"; they removed work that had no purpose.",ans:["faster"],p:"F",why:"“Almost none of them found that staff worked faster.”"},
     {q:26,before:"A remaining doubt concerns the",after:"of gains recorded over only six months.",ans:["durability"],p:"G",why:"Named directly as the first of the two open questions."}]}]
 },
 {
  n:3, title:"When the experiment is run again",
  paras:[
  ["A","Between 2011 and the present, a number of large collaborative projects set out to do something that sounds unglamorous and turned out to be contentious: repeat published experiments. What distinguished these projects was scale. Rather than checking a single disputed finding, teams took whole samples of studies from prominent journals and attempted each one again under conditions as close to the original as documentation allowed. In several fields — psychology first, then parts of cancer biology, economics and ecology — the proportion of studies producing a result comparable to the original fell well below what most researchers had expected, in some samples below half."],
  ["B","It is worth being precise about what such a result does and does not show. A failure to replicate is not evidence of dishonesty; deliberate fabrication is rare and is a separate problem with separate remedies. Nor does it establish that the original finding was false. Any single experiment samples a noisy world, and where a real effect is small, two honest studies of moderate size can easily disagree by chance alone. What a low replication rate does show, unambiguously, is that the published record is a less reliable guide to what is true than its confident language implies."],
  ["C","From this, one group of researchers draws a strong conclusion. On their reading, the shortfall is far too large to be explained by ordinary statistical variation, and its source is structural. Journals have historically preferred novel and striking results to confirmations of existing ones, and appointment and promotion committees have followed the journals. A researcher who spends two years failing to find an effect has, under these conventions, produced nothing publishable. The consequence is a literature filtered towards surprise, in which the most memorable findings are disproportionately likely to be the ones that were lucky. Those who take this view are careful to add that the individuals involved are for the most part behaving sensibly given the system in which they work; the fault is in what the system rewards."],
  ["D","A second group accepts the figures and disputes the framing. Disagreement between studies, on this account, is not a malfunction of research but the ordinary way a field converges on an answer, and the word “crisis” imports a standard of first-time reliability that no empirical science has ever met or claimed. Findings are provisional by design; the record is meant to be corrected, and the replication projects are themselves evidence that correction is working rather than that it has failed. Some in this group add a further caution: replication studies are subject to exactly the same statistical noise as the originals, so a failed repetition is one more piece of evidence rather than a verdict."],
  ["E","A third position cuts across both. Some effects, particularly in the study of human behaviour, may be genuinely real and genuinely dependent on context — on the population studied, the period, the setting, even the manner of the person conducting the experiment. If an effect holds among undergraduates in one country in one decade and not among adults elsewhere twenty years later, an exact repetition has not falsified the original claim so much as located its boundaries. The difficulty with this argument is that it is easy to reach for after the fact, and it becomes untestable unless the conditions under which an effect is expected to appear are specified in advance. Its more rigorous advocates therefore treat context-dependence not as a defence but as a prediction that must be stated and then checked."],
  ["F","Practical reform has proceeded largely without waiting for this dispute to be settled. Pre-registration, in which a study's hypotheses and analysis plan are filed publicly before any data are collected, removes the possibility of adjusting the analysis until something significant appears. Registered reports go further, having journals accept a paper on the strength of its design before the results exist, which detaches publication from the outcome. Data and code sharing allows others to check an analysis without repeating the whole experiment. None of these is costless, and all of them slow individual projects down; their defenders argue that the relevant comparison is not with an ideal but with the cost of building on findings that do not hold."],
  ["G","What remains unsettled is a question of allocation rather than of principle. Repetition consumes people, money and time that could fund new investigation, and no field has an agreed answer to how much of its capacity should be spent confirming what it already believes it knows. Nor has the question of credit been resolved: a career is still built more readily on discovery than on verification, and until that changes, the work of checking will continue to depend on the goodwill of those who can afford to do it."]],
  groups:[
   {type:"mcq", range:"Questions 27–31",
    inst:"Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.",
    items:[
     {q:27,text:"What made the replication projects described in paragraph A unusual?",
      opts:["They were carried out by the original researchers.","They examined large samples of published studies.","They were restricted to a single discipline.","They were commissioned by journals."],
      ans:"B",p:"A",why:"“What distinguished these projects was scale” — whole samples of studies rather than one disputed finding."},
     {q:28,text:"According to paragraph B, a failure to replicate does not by itself demonstrate that",
      opts:["the original effect was small.","the published record is unreliable.","anyone behaved dishonestly.","the study was adequately documented."],
      ans:"C",p:"B",why:"The paragraph separates replication failure from fabrication, which it calls rare and a distinct problem."},
     {q:29,text:"Researchers who reject the word “crisis” argue that",
      opts:["disagreement between studies is how a field normally settles a question.","the replication projects used flawed methods throughout.","the problem is confined to the study of behaviour.","most published findings have now been confirmed."],
      ans:"A",p:"D",why:"They accept the figures but dispute the framing: correction is the ordinary mechanism, not a malfunction."},
     {q:30,text:"The writer suggests that the context-dependence argument becomes unsatisfactory when",
      opts:["it is applied to laboratory sciences.","it is used to defend very large effects.","the conditions for an effect are not stated beforehand.","the original researchers are not consulted."],
      ans:"C",p:"E",why:"It is “easy to reach for after the fact, and it becomes untestable unless the conditions are specified in advance”."},
     {q:31,text:"In the final paragraph, the writer identifies the outstanding difficulty as",
      opts:["whether pre-registration can be enforced.","how much of a field's resources verification deserves.","whether journals will accept registered reports.","which statistical threshold should replace the current one."],
      ans:"B",p:"G",why:"“a question of allocation rather than of principle” — how much capacity to spend confirming."}]},
   {type:"features", range:"Questions 32–36",
    inst:"Look at the following statements and the list of positions below. Match each statement with the correct position, <b>A–C</b>.<br><br><b>NB</b> You may use any letter more than once.",
    options:[["A","those who regard the shortfall as evidence of a structural problem"],
             ["B","those who regard disagreement between studies as normal"],
             ["C","those who argue that some effects depend on their setting"]],
    items:[
     {q:32,text:"The scale of the shortfall is greater than chance variation can account for.",ans:"A",p:"C",why:"The opening claim of paragraph C."},
     {q:33,text:"The term used to describe the situation sets a standard no science has ever met.",ans:"B",p:"D",why:"The word “crisis” imports a standard of first-time reliability."},
     {q:34,text:"An unsuccessful repetition may indicate the limits of a finding rather than its falsity.",ans:"C",p:"E",why:"An exact repetition “has not falsified the original claim so much as located its boundaries”."},
     {q:35,text:"Individual researchers are responding reasonably to the rewards available to them.",ans:"A",p:"C",why:"The closing sentence of paragraph C: the fault is in what the system rewards."},
     {q:36,text:"Repetitions are exposed to the same random variation as the studies they check.",ans:"B",p:"D",why:"The further caution added at the end of paragraph D."}]},
   {type:"summary", range:"Questions 37–40",
    inst:"Complete the summary below. <b>Drag</b> a word into each gap, or tap a word and then tap the gap.",
    bank:[["A","pre-registration"],["B","novelty"],["C","credit"],["D","fabrication"],
          ["E","incentives"],["F","replication"],["G","funding"],["H","sample size"]],
    text:"Reformers argue that the root of the problem lies not in dishonesty but in {37}. Because journals have long preferred {38} to confirmation, a researcher gains little from repeating existing work. Among the remedies proposed is {39}, under which the analysis plan is filed before any data are gathered. Reformers also want changes to the way {40} is awarded, so that careful checking counts as a genuine contribution.",
    items:[
     {q:37,ans:"E",p:"C",why:"Paragraph C locates the fault in what the system rewards, not in individuals."},
     {q:38,ans:"B",p:"C",why:"Journals “have historically preferred novel and striking results to confirmations”."},
     {q:39,ans:"A",p:"F",why:"Defined in paragraph F: hypotheses and analysis plan filed before data collection."},
     {q:40,ans:"C",p:"G",why:"Paragraph G: a career is built more readily on discovery than on verification."}]}]
 }],
 writing:{
  t1:{words:150, prompt:"The chart below shows apple production in four countries in 2004 and 2024, measured in millions of tonnes.<br><br>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.", caption:"Apple production, millions of tonnes"},
  t2:{words:250, prompt:"Many skills that once required several years of formal training can now be learned online in a matter of months. Some people see this as progress, while others believe it lowers professional standards.<br><br>Discuss both these views and give your own opinion."}
 }
};
