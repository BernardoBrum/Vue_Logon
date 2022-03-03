export function weatherIcon(text) {
  let icon = ""

    if (text.includes("thunder") && text.includes("rain")) {
      icon = "storm";
    } else if (text.includes("thunder")) {
      icon = "thunder";
    } else if (text.includes("rain") || text.includes("drizzle")) {
      icon = "raining";
    } else if (text.includes("Fog") || text.includes("Mist")) {
      icon = "cloud";
    } else if (text.includes("cloudy") || text.includes("Overcast") || text.includes("Cloudy")) {
      icon = "cloudy";
    } else if (text.includes("Sunny") || text.includes("Clear")) {
      icon = "sun";
    }
    return icon;
  }
  