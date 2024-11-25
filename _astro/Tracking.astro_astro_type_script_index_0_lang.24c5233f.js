const r = () => !!window.gtag
  , u = ({clickedElement: t, clickedElementData: o}) => {
    r() && window.gtag("event", "element_click", {
        clicked_element: t,
        clicked_element_data: o
    })
}
;
var e = (t => (t["navigation:home:link"] = "Navigation Home Link",
t["navigation:link"] = "Navigation Link",
t["navigation:theme-switcher"] = "Navigation Theme Switcher",
t["home:hero:cta-button"] = "Home Hero CTA Button",
t["about:projects-button"] = "About Projects Button",
t["about:resume-button"] = "About Resume Button",
t["project:check-it-button"] = "Project Check It Button",
t["contact:submit-button"] = "Contact Submit Button",
t["footer:social-link"] = "Footer Social Link",
t))(e || {});
document.addEventListener("click", t => {
    const o = t.target
      , n = o && o.closest("[data-track-click]");
    if (!n || !(n instanceof HTMLElement))
        return;
    const c = n.dataset.trackClick
      , a = n.dataset.trackClickData;
    if (c) {
        const i = e[c];
        u({
            clickedElement: i,
            clickedElementData: a
        })
    }
}
);
