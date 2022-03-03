export function weatherIcon(text) {
  let icon = ""

    if (text.includes("thunder") && text.includes("rain")) {
      icon = "storm.png";
    } else if (text.includes("thunder")) {
      icon = "thunder.png";
    } else if (text.includes("rain") || text.includes("drizzle")) {
      icon = "raining.png";
    } else if (text.includes("Fog") || text.includes("Mist")) {
      icon = "cloud.png";
    } else if (text.includes("cloudy") || text.includes("Overcast") || text.includes("Cloudy")) {
      icon = "cloudy.png";
    } else if (text.includes("Sunny") || text.includes("Clear")) {
      icon = "sun.png";
    }
    return icon;
  }
  