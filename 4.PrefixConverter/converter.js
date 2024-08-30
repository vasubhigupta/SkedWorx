function precedence(operator) {
    if (operator === '+' || operator === '-') {
      return 1;
    } else if (operator === '*' || operator === '/') {
      return 2;
    }
    return 0;
  }
  
  function infixToPostfix(expression) {
    const outputQueue = [];
    const operatorStack = [];
  
    const tokens = expression.match(/\d+|\+|\-|\*|\/|\(|\)/g);
  
    tokens.forEach(token => {
      if (!isNaN(token)) {
        outputQueue.push(token); // If the token is a number, add it to the output queue
      } else if (token === '(') {
        operatorStack.push(token); // If the token is a left parenthesis, push it onto the stack
      } else if (token === ')') {
        // If the token is a right parenthesis, pop operators from the stack until a left parenthesis is encountered
        while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.pop(); // Pop the left parenthesis from the stack (and discard it)
      } else {
        // If the token is an operator
        while (operatorStack.length && precedence(operatorStack[operatorStack.length - 1]) >= precedence(token)) {
          outputQueue.push(operatorStack.pop()); // Pop operators from the stack with higher or equal precedence and add them to the output queue
        }
        operatorStack.push(token); // Push the current operator onto the stack
      }
    });
  
    while (operatorStack.length) {
      outputQueue.push(operatorStack.pop()); // Pop any remaining operators from the stack and add them to the output queue
    }
  
    return outputQueue.join(' ');
  }
  
  // Example usage:
  const infixExpression = "3 + 4 * 2 / ( 1 - 5 ) ^ 2";
  const postfixExpression = infixToPostfix(infixExpression);
  console.log("Postfix expression:", postfixExpression);
  
  