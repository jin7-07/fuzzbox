// FuzzBox Command Generator Script

function SwitchMode() {
  const lswitch = document.getElementById("Lightswitch");
  if (lswitch.checked) {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    window.localStorage.setItem("mode", "light");
  } else {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("mode", "dark");
  }
}

function update_basic_command() {
  const url = document.getElementById("TargetURL")?.value || "";
  const wordlist = document.getElementById("Wordlist")?.value || "";
  let command = `ffuf -u ${url} -w ${wordlist}`;
  document.getElementById("BasicCommand").textContent = command;
}

function update_http_command() {
  const url = document.getElementById("HttpURL")?.value || "";
  const method = document.getElementById("HttpMethod")?.value || "GET";
  const header = document.getElementById("HttpHeader")?.value || "";
  const cookie = document.getElementById("HttpCookie")?.value || "";
  const data = document.getElementById("HttpData")?.value || "";

  let command = `ffuf -u ${url}`;
  if (method !== "GET") command += ` -X ${method}`;
  if (header) command += ` -H \"${header}\"`;
  if (cookie) command += ` -b \"${cookie}\"`;
  if (data) command += ` -d '${data}'`;
  document.getElementById("HttpCommand").textContent = command;
}

function update_matcher_command() {
  const url = document.getElementById("MatchURL")?.value || "";
  const wordlist = document.getElementById("MatchWordlist")?.value || "";
  const status = document.getElementById("MatchStatus")?.value || "";
  const size = document.getElementById("MatchSize")?.value || "";
  const words = document.getElementById("MatchWords")?.value || "";

  let command = `ffuf -u ${url} -w ${wordlist}`;
  if (status) command += ` -mc ${status}`;
  if (size) command += ` -ms ${size}`;
  if (words) command += ` -mw ${words}`;
  document.getElementById("MatchCommand").textContent = command;
}

function update_filter_command() {
  const url = document.getElementById("FilterURL")?.value || "";
  const wordlist = document.getElementById("FilterWordlist")?.value || "";
  const code = document.getElementById("FilterCode")?.value || "";
  const size = document.getElementById("FilterSize")?.value || "";
  const words = document.getElementById("FilterWords")?.value || "";

  let command = `ffuf -u ${url} -w ${wordlist}`;
  if (code) command += ` -fc ${code}`;
  if (size) command += ` -fs ${size}`;
  if (words) command += ` -fw ${words}`;
  document.getElementById("FilterCommand").textContent = command;
}

function update_output_command() {
  const url = document.getElementById("OutputURL")?.value || "";
  const wordlist = document.getElementById("OutputWordlist")?.value || "";
  const format = document.getElementById("OutputFormat")?.value || "json";
  let command = `ffuf -u ${url} -w ${wordlist} -o result.${format} -of ${format}`;
  document.getElementById("OutputCommand").textContent = command;
}

function copyCommand(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
}

function openTab(evt, tabName) {
  const tabContents = document.getElementsByClassName("Tabcontent");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  const tabLinks = document.getElementsByClassName("Tablinks");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
