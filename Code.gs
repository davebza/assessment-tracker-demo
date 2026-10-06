function doGet(){return HtmlService.createHtmlOutputFromFile('Index').setTitle('Assessment Tracker Demo');}
function getAssessmentModel(){return {learner:{id:'L001',name:'Alex Chen'},assessments:[
{id:'A01',name:'Creative Writing',weight:.33,score:72},
{id:'A02',name:'Literature Essay',weight:.67,score:64}
]};}
function calculateWeightedScore(parts){return Math.round(parts.reduce(function(t,p){return t+(Number(p.score)||0)*(Number(p.weight)||0);},0));}