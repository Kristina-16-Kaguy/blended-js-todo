(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=s=>{const r=localStorage.getItem(s);return r?JSON.parse(r):null};function a(s){s.map(r=>`<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>t${r.title}</h3>
        <p>${r.description}</p>
      </li>`).join("")}let c=[];const u="tasks";function f(){c=l(u)??[],a(c)}f();
//# sourceMappingURL=index.js.map
