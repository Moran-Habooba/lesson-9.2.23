let temp = Number(prompt(" מה הטמפרטורה בחוץ?"));

// if (temp <= 0) {
//   alert("שלג קל צפוי לרדת🌨️");
//   console.log("temp");
// } else {
//   if (temp > 0 && temp <= 20) {
//     alert("היום יהיה קר במיוחד🥶");
//   } else {
//     if (temp < 40) {
//       alert("היום יהיה חם מאוד🥵");
//     } else {
//       alert("תפוס מזגן דחוף 🔥🔥🔥");
//     }
//   }
// }

inputTemp();
function inputTemp(num) {
  if (temp <= 0) {
    alert("שלג קל צפוי לרדת🌨️");
  } else {
    if (temp > 0 && temp <= 20) {
      alert("היום יהיה קר במיוחד🥶");
    } else {
      if (temp < 40) {
        alert("היום יהיה חם מאוד🥵");
      } else {
        alert("תפוס מזגן דחוף 🔥🔥🔥");
      }
    }
  }
}
