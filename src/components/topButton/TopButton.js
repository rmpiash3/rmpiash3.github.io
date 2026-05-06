import React from "react";
import "./TopButton.css";

export default function TopButton() {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    const topButton = document.getElementById("topButton");
    if (!topButton) {
      return;
    }

    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      topButton.style.visibility = "visible";
    } else {
      topButton.style.visibility = "hidden";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <button onClick={GoUpEvent} id="topButton" title="Go up" type="button">
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
