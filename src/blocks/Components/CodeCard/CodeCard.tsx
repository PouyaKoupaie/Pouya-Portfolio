
export default function CodeCard() {
  return (
    <>
      <pre className="whoami-code">
        <span className="code-line">
          <span className="keyword">function</span>{" "}
          <span className="function-name">age</span>
          <span className="punctuation">(</span>
          <span className="param">date: Date</span>
          <span className="punctuation">)</span>{" "}
          <span className="punctuation">{"{"}</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="keyword">return</span>{" "}
          <span className="keyword">new</span> Date
          <span className="punctuation">()</span>
          <span className="punctuation">.</span>
          <span className="function-name">getFullYear</span>
          <span className="punctuation">()</span>{" "}
          <span className="operator">-</span>{" "}
          <span className="console">date</span>
          <span className="punctuation">.</span>
          <span className="function-name">getFullYear</span>
          <span className="punctuation">()</span>
          <span className="punctuation">;</span>
        </span>
        <span className="code-line">
          <span className="punctuation">{"}"}</span>
        </span>
        <span className="code-line">
          <span className="keyword">const</span>{" "}
          <span className="var">name</span> <span className="operator">=</span>{" "}
          <span className="string">"Pouya"</span>
          <span className="punctuation">;</span>
        </span>
        <span className="code-line">
          <span className="keyword">const</span>{" "}
          <span className="var">birthDate</span>{" "}
          <span className="operator">=</span>{" "}
          <span className="keyword">new</span>{" "}
          <span className="class">Date</span>
          <span className="punctuation">(</span>
          <span className="string">"2003-09-23"</span>
          <span className="punctuation">)</span>
          <span className="punctuation">;</span>
        </span>
        <span className="code-line">
          <span className="keyword">const</span>{" "}
          <span className="var">languages</span>{" "}
          <span className="operator">=</span>{" "}
          <span className="punctuation">[</span>
          <span className="string">"Persian"</span>
          <span className="punctuation">,</span>{" "}
          <span className="string">"English"</span>
          <span className="punctuation">]</span>
          <span className="punctuation">;</span>
        </span>
        <span className="code-line">
          <span className="keyword">const</span>{" "}
          <span className="var">skills</span>{" "}
          <span className="operator">=</span>{" "}
          <span className="punctuation">[</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="string">
            "TypeScript{" "}
            <svg
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.2-45.2 8-53.4 24.7-53.4 55.4v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
                fill="currentColor"
              />
            </svg>
            "
          </span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="string">
            "JavaScript{" "}
            <svg
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                fill="currentColor"
              />
            </svg>
            "
          </span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          <span className="punctuation">]</span>
          <span className="punctuation">;</span>
        </span>
        <span className="code-line">
          <span className="console">console</span>
          <span className="punctuation">.</span>
          <span className="function-name">log</span>
          <span className="punctuation">(</span>
          <span className="punctuation">{"{"}</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="var">name</span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="var">birthDate</span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="var">age</span>
          <span className="punctuation">:</span>{" "}
          <span className="function-name">age</span>
          <span className="punctuation">(</span>
          <span className="var">birthDate</span>
          <span className="punctuation">)</span>
          <span className="punctuation">,</span>{" "}
          <span className="comment">// 22</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="var">languages</span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="var">skills</span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          <span className="punctuation">{"}"}</span>
          <span className="punctuation">)</span>
          <span className="punctuation">;</span>
        </span>
      </pre>
    </>
  );
}
