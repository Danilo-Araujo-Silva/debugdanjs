//adb logcat | grep `adb shell ps | grep com.domain.applicationname | cut -c10-15`
function toString(config) {
  var out = "";
  
  if (typeOf(config.prefix) === 'null') {
    config.prefix = 'debugdan';
  }
  
  if (typeOf(config.level) === 'null') {
    out += "\n";
    config.level = 1;
  }
    
  if (typeOf(config.name) === 'null') {
    config.name = 'VARIABLE';
  }
  
  var prefix = config.prefix;
  var variable = config.variable;
  var variableName = config.name;
  var variableType = typeOf(variable);
  
  var level = config.level;
  
  if (variable instanceof Error) {
    out = prefix + ' (' + variableType + ')' + variableName + ': ' + variable.stack;
  } else if (variableType === 'object' || variableType === 'collection') {
    out += prefix + Array(level).join("  ") + '(' + variableType + ') ' + variableName + ':\n';
    for (var itemName in variable) {
      var item = variable[itemName];
      var itemType = typeOf(variable[itemName]);
      if (itemType === 'object') {
        out += arguments.callee(
          {
            'prefix':prefix,
            'name':itemName,
            'variable':item,
            'level':level + 1
          }
        );
      } else if (itemType === 'function') {
        var functionName = item.name;
        if (functionName) {
          out += prefix + Array(level + 1).join("  ") + '(' + itemType + ') ' + functionName + "\n";
        }
      } else {
        out += prefix + Array(level + 1).join("  ") + '(' + itemType+ ') ' + itemName + ": " + item + "\n";
      }
    }
  } else {
    out = prefix + ' (' + variableType + ')' + variableName + ': ' + variable;
  }
  
  return out;
}

function dump(variable, name, prefix) {
  try {
    if (typeOf(prefix) === 'null') {
      prefix = 'debugdan';
    }

    console.log(toString({'prefix':prefix, 'name':name, 'variable':variable}));
  } catch (error) {
    console.log(error);
  }
}
