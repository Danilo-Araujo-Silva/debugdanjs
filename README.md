# DebugDan
DebugDan (or debudanjs) is a tool for dump a object using javascript.

The funciton **dump** looks like the function *[var_dump](http://php.net/manual/en/function.var-dump.php)* in PHP. This function provide all information enclosured in the variable informed.

#Instalation
##Including in head
    <script src="debugdan.js"></script>
    
   or
   
    <script type="text/javascript" src="debudan.js"></script>

##Using [requirejs](http://requirejs.org/)
    require(["debugdan"], function() {
      console.log("debugdan loaded.");
    });

# How to use
After debudan loads properly just call:

    dump(yourVariableORObject);

If you want not write the content of the variable at the console, but to another place, you can call
	toString(yourVariableOrObject);

Debugdan have other few options too:

    dump(variable, title, prefix);

 - variable: is the variable or the object you want to inspect.
 - title: is the title to identify your variable.
 - prefix: is the prefix you want to appear in all of dump lines.

##Examples
Dumping the body element:

Input:

    dump(jQuery('body'), 'BODY', 'debudan-prefix');

Output:

    debudan-prefix(object) BODY:
    debudan-prefix  (element) 0: [object HTMLBodyElement]
    debudan-prefix  (number) length: 1
    debudan-prefix  (object) prevObject:
    debudan-prefix    (document) 0: [object HTMLDocument]
    debudan-prefix    (document) context: [object HTMLDocument]
    debudan-prefix    (number) length: 1
    debudan-prefix    (string) jquery: 2.1.3
    debudan-prefix    (string) selector: 
    debudan-prefix    (function) push
    debudan-prefix    (function) sort
    debudan-prefix    (function) splice
    debudan-prefix  (document) context: [object HTMLDocument]
    debudan-prefix  (string) selector: body
    debudan-prefix  (string) jquery: 2.1.3
    debudan-prefix  (function) push
    debudan-prefix  (function) sort
    debudan-prefix  (function) splice

##Logcat
You can use debugdanjs with logcat.
First you can log all output of your application with the command below:

    adb logcat | grep `adb shell ps | grep com.domain.applicationname | cut -c10-15`

Where **com.domain.applicationname** needs to be replaced.

And you can log only the output of debugdanjs too, with:

    adb logcat | grep 'your-prefix'

or

    adb logcat | grep 'debugdan'

for default.

##Improvments needed

- Create minify
- Create a class instead of a function
- Create unit tests
- Create a full working example
