export function cascadeValType(valueStr) {
    let valueUpdated;
  
    // Try converting to float or partial float
    if (valueStr.includes('.')) {
      valueUpdated = parseFloat(valueStr)
      if (!isNaN(valueUpdated) && valueUpdated.toString() === valueStr) {
        return parseFloat(valueUpdated.toFixed(2))
      }
      return valueStr
    }
    
    // Try converting to int
    valueUpdated = parseInt(valueStr);
    if (!isNaN(valueUpdated) && valueUpdated.toString() === valueStr) {
      return valueUpdated;
    }
  
    // Return the original string if it cannot be converted to an integer or float
    return valueStr;
  }