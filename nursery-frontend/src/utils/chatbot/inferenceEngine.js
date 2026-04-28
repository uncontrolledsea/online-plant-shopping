import { rules } from './rules';
import { plants } from './knowledgeBase';

export function inferPlant(input) {
  let matchedRules = [];

  rules.forEach(rule => {
    if (rule.condition(input)) {
      matchedRules.push(rule);
    }
  });

  if (matchedRules.length === 0) {
    return {
      answer: "❓ No matching plant found. Try asking about watering needs, sunlight, indoor/outdoor, climate, or a plant name.",
      explanation: "No rules matched your query. Try keywords like: 'indoor', 'low water', 'full sun', 'beginner', 'fragrant', 'edible', 'air purifier', etc."
    };
  }

  let selected = matchedRules[0];

  return {
    answer: generateResponse(selected.result),
    explanation: selected.reason
  };
}

export function generateResponse(result) {
  if (Array.isArray(result)) {
    let names = result.map(r => r.toUpperCase()).join(", ");
    let guides = result.map(r => {
      let p = plants[r];
      if (!p) return `🌿 ${r.toUpperCase()}: No data available.`;
      return `<b>🌱 ${r.toUpperCase()}</b><br>
💧 <b>Water:</b> ${p.water}<br>
☀️ <b>Sun:</b> ${p.sunlight}<br>
🌍 <b>Soil:</b> ${p.soil}`;
    }).join("<br><br>");

    return `🌿 <b>Suggested Plants:</b> ${names}<br><br>${guides}`;
  }

  let p = plants[result];
  if (!p) return `🌿 ${result.toUpperCase()}: No care data found.`;

  return `🌱 <b>${result.toUpperCase()} CARE GUIDE</b><br>
💧 <b>Water:</b> ${p.water}<br>
☀️ <b>Sunlight:</b> ${p.sunlight}<br>
🌍 <b>Soil:</b> ${p.soil}<br>
🌡️ <b>Climate:</b> ${p.climate}<br>
💡 <b>Tips:</b> ${p.tips}`;
}
