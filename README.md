# BasicNode
Modules are reusable components which are bundled together with a name - modulename.(Similar to library)
There are 3 types of Modules
  1) Modules which are created by us
  2) Third party Modules
  3) Core modules.</br>
  We shall reuse all above modules with help of require keyword</br>
  module is a keyword which is available by default.</br>
  npm is a package manager, similar to maven. Used to package and import third party modules.</br>
  All info about modules will be present in node_modules folder.</br>
process variable is available by default like modules</br>  
triggering node app==>  node app add 1 2 (node =arg1, app=arg2 and so on..)</br>
JSON.stringify()->converts json obj to stringif</br>
JSON.parse()->coverts string to json object</br>
<h4>debug mode</h4><br>
start in debug mode -->node inspect filename  (goes to content line by line)
n -> next line; c-> continue till end;
to go to specific place in code, add statement debugger in js file. on c, ctrl flows through and directly stops in  debugger line.
repl-> gives current value of objects.(while in debug mode), can change value of method calls
and verify if working fine.
<h2>debug in browser</h2>
node --inspect-brk --> will help to debug the app in chrome devtools.
can create break points by click on license
same debugger stmt also works</br>
chrome://inspect is the url to connect to browser dev tool
