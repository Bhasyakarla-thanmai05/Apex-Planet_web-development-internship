function showTip() {
  const tips = [
    "Always wash your face before bed.",
    "Use sunscreen every day—even indoors!",
    "Drink enough water to keep skin hydrated.",
    "Moisturize immediately after cleansing.",
    "Avoid harsh scrubs that can damage your skin.",
    "Use products that suit your skin type.",
    "Exfoliate only 1-2 times per week."
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tipDisplay").innerText = randomTip;
}
