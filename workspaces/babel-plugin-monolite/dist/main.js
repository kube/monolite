!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = t()
  else if ('function' == typeof define && define.amd) define([], t)
  else {
    var n = t()
    for (var r in n)
      ('object' == typeof exports ? exports : e)[r] = n[r]
  }
})(global, function () {
  return (function (e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var i = (t[r] = { i: r, l: !1, exports: {} })
      return (
        e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
      )
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) ||
          Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: 'Module',
          }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule)
          return e
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', {
            enumerable: !0,
            value: e,
          }),
          2 & t && 'string' != typeof e)
        )
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t]
              }.bind(null, i)
            )
        return r
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 74))
    )
  })([
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isArrayExpression = function (e, t) {
          if (!e) return !1
          if ('ArrayExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isAssignmentExpression = function (e, t) {
          if (!e) return !1
          if ('AssignmentExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBinaryExpression = function (e, t) {
          if (!e) return !1
          if ('BinaryExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isInterpreterDirective = function (e, t) {
          if (!e) return !1
          if ('InterpreterDirective' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDirective = function (e, t) {
          if (!e) return !1
          if ('Directive' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDirectiveLiteral = function (e, t) {
          if (!e) return !1
          if ('DirectiveLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBlockStatement = function (e, t) {
          if (!e) return !1
          if ('BlockStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBreakStatement = function (e, t) {
          if (!e) return !1
          if ('BreakStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isCallExpression = function (e, t) {
          if (!e) return !1
          if ('CallExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isCatchClause = function (e, t) {
          if (!e) return !1
          if ('CatchClause' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isConditionalExpression = function (e, t) {
          if (!e) return !1
          if ('ConditionalExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isContinueStatement = function (e, t) {
          if (!e) return !1
          if ('ContinueStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDebuggerStatement = function (e, t) {
          if (!e) return !1
          if ('DebuggerStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDoWhileStatement = function (e, t) {
          if (!e) return !1
          if ('DoWhileStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEmptyStatement = function (e, t) {
          if (!e) return !1
          if ('EmptyStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExpressionStatement = function (e, t) {
          if (!e) return !1
          if ('ExpressionStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFile = function (e, t) {
          if (!e) return !1
          if ('File' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isForInStatement = function (e, t) {
          if (!e) return !1
          if ('ForInStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isForStatement = function (e, t) {
          if (!e) return !1
          if ('ForStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFunctionDeclaration = function (e, t) {
          if (!e) return !1
          if ('FunctionDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFunctionExpression = function (e, t) {
          if (!e) return !1
          if ('FunctionExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isIdentifier = function (e, t) {
          if (!e) return !1
          if ('Identifier' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isIfStatement = function (e, t) {
          if (!e) return !1
          if ('IfStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isLabeledStatement = function (e, t) {
          if (!e) return !1
          if ('LabeledStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isStringLiteral = function (e, t) {
          if (!e) return !1
          if ('StringLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isNumericLiteral = function (e, t) {
          if (!e) return !1
          if ('NumericLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isNullLiteral = function (e, t) {
          if (!e) return !1
          if ('NullLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBooleanLiteral = function (e, t) {
          if (!e) return !1
          if ('BooleanLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isRegExpLiteral = function (e, t) {
          if (!e) return !1
          if ('RegExpLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isLogicalExpression = function (e, t) {
          if (!e) return !1
          if ('LogicalExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isMemberExpression = function (e, t) {
          if (!e) return !1
          if ('MemberExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isNewExpression = function (e, t) {
          if (!e) return !1
          if ('NewExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isProgram = function (e, t) {
          if (!e) return !1
          if ('Program' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectExpression = function (e, t) {
          if (!e) return !1
          if ('ObjectExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectMethod = function (e, t) {
          if (!e) return !1
          if ('ObjectMethod' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectProperty = function (e, t) {
          if (!e) return !1
          if ('ObjectProperty' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isRestElement = function (e, t) {
          if (!e) return !1
          if ('RestElement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isReturnStatement = function (e, t) {
          if (!e) return !1
          if ('ReturnStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isSequenceExpression = function (e, t) {
          if (!e) return !1
          if ('SequenceExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isParenthesizedExpression = function (e, t) {
          if (!e) return !1
          if ('ParenthesizedExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isSwitchCase = function (e, t) {
          if (!e) return !1
          if ('SwitchCase' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isSwitchStatement = function (e, t) {
          if (!e) return !1
          if ('SwitchStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isThisExpression = function (e, t) {
          if (!e) return !1
          if ('ThisExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isThrowStatement = function (e, t) {
          if (!e) return !1
          if ('ThrowStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTryStatement = function (e, t) {
          if (!e) return !1
          if ('TryStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isUnaryExpression = function (e, t) {
          if (!e) return !1
          if ('UnaryExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isUpdateExpression = function (e, t) {
          if (!e) return !1
          if ('UpdateExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isVariableDeclaration = function (e, t) {
          if (!e) return !1
          if ('VariableDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isVariableDeclarator = function (e, t) {
          if (!e) return !1
          if ('VariableDeclarator' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isWhileStatement = function (e, t) {
          if (!e) return !1
          if ('WhileStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isWithStatement = function (e, t) {
          if (!e) return !1
          if ('WithStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isAssignmentPattern = function (e, t) {
          if (!e) return !1
          if ('AssignmentPattern' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isArrayPattern = function (e, t) {
          if (!e) return !1
          if ('ArrayPattern' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isArrowFunctionExpression = function (e, t) {
          if (!e) return !1
          if ('ArrowFunctionExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isClassBody = function (e, t) {
          if (!e) return !1
          if ('ClassBody' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isClassExpression = function (e, t) {
          if (!e) return !1
          if ('ClassExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isClassDeclaration = function (e, t) {
          if (!e) return !1
          if ('ClassDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExportAllDeclaration = function (e, t) {
          if (!e) return !1
          if ('ExportAllDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExportDefaultDeclaration = function (e, t) {
          if (!e) return !1
          if ('ExportDefaultDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExportNamedDeclaration = function (e, t) {
          if (!e) return !1
          if ('ExportNamedDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExportSpecifier = function (e, t) {
          if (!e) return !1
          if ('ExportSpecifier' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isForOfStatement = function (e, t) {
          if (!e) return !1
          if ('ForOfStatement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isImportDeclaration = function (e, t) {
          if (!e) return !1
          if ('ImportDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isImportDefaultSpecifier = function (e, t) {
          if (!e) return !1
          if ('ImportDefaultSpecifier' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isImportNamespaceSpecifier = function (e, t) {
          if (!e) return !1
          if ('ImportNamespaceSpecifier' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isImportSpecifier = function (e, t) {
          if (!e) return !1
          if ('ImportSpecifier' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isMetaProperty = function (e, t) {
          if (!e) return !1
          if ('MetaProperty' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isClassMethod = function (e, t) {
          if (!e) return !1
          if ('ClassMethod' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectPattern = function (e, t) {
          if (!e) return !1
          if ('ObjectPattern' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isSpreadElement = function (e, t) {
          if (!e) return !1
          if ('SpreadElement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isSuper = function (e, t) {
          if (!e) return !1
          if ('Super' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTaggedTemplateExpression = function (e, t) {
          if (!e) return !1
          if ('TaggedTemplateExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTemplateElement = function (e, t) {
          if (!e) return !1
          if ('TemplateElement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTemplateLiteral = function (e, t) {
          if (!e) return !1
          if ('TemplateLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isYieldExpression = function (e, t) {
          if (!e) return !1
          if ('YieldExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isAnyTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('AnyTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isArrayTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('ArrayTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBooleanTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('BooleanTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBooleanLiteralTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('BooleanLiteralTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isNullLiteralTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('NullLiteralTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isClassImplements = function (e, t) {
          if (!e) return !1
          if ('ClassImplements' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclareClass = function (e, t) {
          if (!e) return !1
          if ('DeclareClass' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclareFunction = function (e, t) {
          if (!e) return !1
          if ('DeclareFunction' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclareInterface = function (e, t) {
          if (!e) return !1
          if ('DeclareInterface' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclareModule = function (e, t) {
          if (!e) return !1
          if ('DeclareModule' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclareModuleExports = function (e, t) {
          if (!e) return !1
          if ('DeclareModuleExports' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclareTypeAlias = function (e, t) {
          if (!e) return !1
          if ('DeclareTypeAlias' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclareOpaqueType = function (e, t) {
          if (!e) return !1
          if ('DeclareOpaqueType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclareVariable = function (e, t) {
          if (!e) return !1
          if ('DeclareVariable' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclareExportDeclaration = function (e, t) {
          if (!e) return !1
          if ('DeclareExportDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclareExportAllDeclaration = function (e, t) {
          if (!e) return !1
          if ('DeclareExportAllDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclaredPredicate = function (e, t) {
          if (!e) return !1
          if ('DeclaredPredicate' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExistsTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('ExistsTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFunctionTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('FunctionTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFunctionTypeParam = function (e, t) {
          if (!e) return !1
          if ('FunctionTypeParam' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isGenericTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('GenericTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isInferredPredicate = function (e, t) {
          if (!e) return !1
          if ('InferredPredicate' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isInterfaceExtends = function (e, t) {
          if (!e) return !1
          if ('InterfaceExtends' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isInterfaceDeclaration = function (e, t) {
          if (!e) return !1
          if ('InterfaceDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isInterfaceTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('InterfaceTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isIntersectionTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('IntersectionTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isMixedTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('MixedTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEmptyTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('EmptyTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isNullableTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('NullableTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isNumberLiteralTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('NumberLiteralTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isNumberTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('NumberTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('ObjectTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectTypeInternalSlot = function (e, t) {
          if (!e) return !1
          if ('ObjectTypeInternalSlot' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectTypeCallProperty = function (e, t) {
          if (!e) return !1
          if ('ObjectTypeCallProperty' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectTypeIndexer = function (e, t) {
          if (!e) return !1
          if ('ObjectTypeIndexer' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectTypeProperty = function (e, t) {
          if (!e) return !1
          if ('ObjectTypeProperty' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectTypeSpreadProperty = function (e, t) {
          if (!e) return !1
          if ('ObjectTypeSpreadProperty' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isOpaqueType = function (e, t) {
          if (!e) return !1
          if ('OpaqueType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isQualifiedTypeIdentifier = function (e, t) {
          if (!e) return !1
          if ('QualifiedTypeIdentifier' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isStringLiteralTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('StringLiteralTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isStringTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('StringTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isSymbolTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('SymbolTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isThisTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('ThisTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTupleTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('TupleTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTypeofTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('TypeofTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTypeAlias = function (e, t) {
          if (!e) return !1
          if ('TypeAlias' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('TypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTypeCastExpression = function (e, t) {
          if (!e) return !1
          if ('TypeCastExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTypeParameter = function (e, t) {
          if (!e) return !1
          if ('TypeParameter' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTypeParameterDeclaration = function (e, t) {
          if (!e) return !1
          if ('TypeParameterDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTypeParameterInstantiation = function (e, t) {
          if (!e) return !1
          if ('TypeParameterInstantiation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isUnionTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('UnionTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isVariance = function (e, t) {
          if (!e) return !1
          if ('Variance' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isVoidTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('VoidTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumDeclaration = function (e, t) {
          if (!e) return !1
          if ('EnumDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumBooleanBody = function (e, t) {
          if (!e) return !1
          if ('EnumBooleanBody' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumNumberBody = function (e, t) {
          if (!e) return !1
          if ('EnumNumberBody' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumStringBody = function (e, t) {
          if (!e) return !1
          if ('EnumStringBody' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumSymbolBody = function (e, t) {
          if (!e) return !1
          if ('EnumSymbolBody' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumBooleanMember = function (e, t) {
          if (!e) return !1
          if ('EnumBooleanMember' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumNumberMember = function (e, t) {
          if (!e) return !1
          if ('EnumNumberMember' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumStringMember = function (e, t) {
          if (!e) return !1
          if ('EnumStringMember' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumDefaultedMember = function (e, t) {
          if (!e) return !1
          if ('EnumDefaultedMember' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXAttribute = function (e, t) {
          if (!e) return !1
          if ('JSXAttribute' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXClosingElement = function (e, t) {
          if (!e) return !1
          if ('JSXClosingElement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXElement = function (e, t) {
          if (!e) return !1
          if ('JSXElement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXEmptyExpression = function (e, t) {
          if (!e) return !1
          if ('JSXEmptyExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXExpressionContainer = function (e, t) {
          if (!e) return !1
          if ('JSXExpressionContainer' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXSpreadChild = function (e, t) {
          if (!e) return !1
          if ('JSXSpreadChild' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXIdentifier = function (e, t) {
          if (!e) return !1
          if ('JSXIdentifier' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXMemberExpression = function (e, t) {
          if (!e) return !1
          if ('JSXMemberExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXNamespacedName = function (e, t) {
          if (!e) return !1
          if ('JSXNamespacedName' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXOpeningElement = function (e, t) {
          if (!e) return !1
          if ('JSXOpeningElement' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXSpreadAttribute = function (e, t) {
          if (!e) return !1
          if ('JSXSpreadAttribute' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXText = function (e, t) {
          if (!e) return !1
          if ('JSXText' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXFragment = function (e, t) {
          if (!e) return !1
          if ('JSXFragment' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXOpeningFragment = function (e, t) {
          if (!e) return !1
          if ('JSXOpeningFragment' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSXClosingFragment = function (e, t) {
          if (!e) return !1
          if ('JSXClosingFragment' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isNoop = function (e, t) {
          if (!e) return !1
          if ('Noop' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isPlaceholder = function (e, t) {
          if (!e) return !1
          if ('Placeholder' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isV8IntrinsicIdentifier = function (e, t) {
          if (!e) return !1
          if ('V8IntrinsicIdentifier' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isArgumentPlaceholder = function (e, t) {
          if (!e) return !1
          if ('ArgumentPlaceholder' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isAwaitExpression = function (e, t) {
          if (!e) return !1
          if ('AwaitExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBindExpression = function (e, t) {
          if (!e) return !1
          if ('BindExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isClassProperty = function (e, t) {
          if (!e) return !1
          if ('ClassProperty' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isOptionalMemberExpression = function (e, t) {
          if (!e) return !1
          if ('OptionalMemberExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isPipelineTopicExpression = function (e, t) {
          if (!e) return !1
          if ('PipelineTopicExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isPipelineBareFunction = function (e, t) {
          if (!e) return !1
          if ('PipelineBareFunction' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isPipelinePrimaryTopicReference = function (e, t) {
          if (!e) return !1
          if ('PipelinePrimaryTopicReference' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isOptionalCallExpression = function (e, t) {
          if (!e) return !1
          if ('OptionalCallExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isClassPrivateProperty = function (e, t) {
          if (!e) return !1
          if ('ClassPrivateProperty' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isClassPrivateMethod = function (e, t) {
          if (!e) return !1
          if ('ClassPrivateMethod' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isImport = function (e, t) {
          if (!e) return !1
          if ('Import' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDecorator = function (e, t) {
          if (!e) return !1
          if ('Decorator' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDoExpression = function (e, t) {
          if (!e) return !1
          if ('DoExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExportDefaultSpecifier = function (e, t) {
          if (!e) return !1
          if ('ExportDefaultSpecifier' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExportNamespaceSpecifier = function (e, t) {
          if (!e) return !1
          if ('ExportNamespaceSpecifier' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isPrivateName = function (e, t) {
          if (!e) return !1
          if ('PrivateName' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBigIntLiteral = function (e, t) {
          if (!e) return !1
          if ('BigIntLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isRecordExpression = function (e, t) {
          if (!e) return !1
          if ('RecordExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTupleExpression = function (e, t) {
          if (!e) return !1
          if ('TupleExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSParameterProperty = function (e, t) {
          if (!e) return !1
          if ('TSParameterProperty' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSDeclareFunction = function (e, t) {
          if (!e) return !1
          if ('TSDeclareFunction' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSDeclareMethod = function (e, t) {
          if (!e) return !1
          if ('TSDeclareMethod' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSQualifiedName = function (e, t) {
          if (!e) return !1
          if ('TSQualifiedName' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSCallSignatureDeclaration = function (e, t) {
          if (!e) return !1
          if ('TSCallSignatureDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSConstructSignatureDeclaration = function (e, t) {
          if (!e) return !1
          if ('TSConstructSignatureDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSPropertySignature = function (e, t) {
          if (!e) return !1
          if ('TSPropertySignature' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSMethodSignature = function (e, t) {
          if (!e) return !1
          if ('TSMethodSignature' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSIndexSignature = function (e, t) {
          if (!e) return !1
          if ('TSIndexSignature' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSAnyKeyword = function (e, t) {
          if (!e) return !1
          if ('TSAnyKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSBooleanKeyword = function (e, t) {
          if (!e) return !1
          if ('TSBooleanKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSBigIntKeyword = function (e, t) {
          if (!e) return !1
          if ('TSBigIntKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSNeverKeyword = function (e, t) {
          if (!e) return !1
          if ('TSNeverKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSNullKeyword = function (e, t) {
          if (!e) return !1
          if ('TSNullKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSNumberKeyword = function (e, t) {
          if (!e) return !1
          if ('TSNumberKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSObjectKeyword = function (e, t) {
          if (!e) return !1
          if ('TSObjectKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSStringKeyword = function (e, t) {
          if (!e) return !1
          if ('TSStringKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSSymbolKeyword = function (e, t) {
          if (!e) return !1
          if ('TSSymbolKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSUndefinedKeyword = function (e, t) {
          if (!e) return !1
          if ('TSUndefinedKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSUnknownKeyword = function (e, t) {
          if (!e) return !1
          if ('TSUnknownKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSVoidKeyword = function (e, t) {
          if (!e) return !1
          if ('TSVoidKeyword' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSThisType = function (e, t) {
          if (!e) return !1
          if ('TSThisType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSFunctionType = function (e, t) {
          if (!e) return !1
          if ('TSFunctionType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSConstructorType = function (e, t) {
          if (!e) return !1
          if ('TSConstructorType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeReference = function (e, t) {
          if (!e) return !1
          if ('TSTypeReference' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypePredicate = function (e, t) {
          if (!e) return !1
          if ('TSTypePredicate' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeQuery = function (e, t) {
          if (!e) return !1
          if ('TSTypeQuery' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeLiteral = function (e, t) {
          if (!e) return !1
          if ('TSTypeLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSArrayType = function (e, t) {
          if (!e) return !1
          if ('TSArrayType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTupleType = function (e, t) {
          if (!e) return !1
          if ('TSTupleType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSOptionalType = function (e, t) {
          if (!e) return !1
          if ('TSOptionalType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSRestType = function (e, t) {
          if (!e) return !1
          if ('TSRestType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSUnionType = function (e, t) {
          if (!e) return !1
          if ('TSUnionType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSIntersectionType = function (e, t) {
          if (!e) return !1
          if ('TSIntersectionType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSConditionalType = function (e, t) {
          if (!e) return !1
          if ('TSConditionalType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSInferType = function (e, t) {
          if (!e) return !1
          if ('TSInferType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSParenthesizedType = function (e, t) {
          if (!e) return !1
          if ('TSParenthesizedType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeOperator = function (e, t) {
          if (!e) return !1
          if ('TSTypeOperator' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSIndexedAccessType = function (e, t) {
          if (!e) return !1
          if ('TSIndexedAccessType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSMappedType = function (e, t) {
          if (!e) return !1
          if ('TSMappedType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSLiteralType = function (e, t) {
          if (!e) return !1
          if ('TSLiteralType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSExpressionWithTypeArguments = function (e, t) {
          if (!e) return !1
          if ('TSExpressionWithTypeArguments' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSInterfaceDeclaration = function (e, t) {
          if (!e) return !1
          if ('TSInterfaceDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSInterfaceBody = function (e, t) {
          if (!e) return !1
          if ('TSInterfaceBody' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeAliasDeclaration = function (e, t) {
          if (!e) return !1
          if ('TSTypeAliasDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSAsExpression = function (e, t) {
          if (!e) return !1
          if ('TSAsExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeAssertion = function (e, t) {
          if (!e) return !1
          if ('TSTypeAssertion' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSEnumDeclaration = function (e, t) {
          if (!e) return !1
          if ('TSEnumDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSEnumMember = function (e, t) {
          if (!e) return !1
          if ('TSEnumMember' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSModuleDeclaration = function (e, t) {
          if (!e) return !1
          if ('TSModuleDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSModuleBlock = function (e, t) {
          if (!e) return !1
          if ('TSModuleBlock' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSImportType = function (e, t) {
          if (!e) return !1
          if ('TSImportType' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSImportEqualsDeclaration = function (e, t) {
          if (!e) return !1
          if ('TSImportEqualsDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSExternalModuleReference = function (e, t) {
          if (!e) return !1
          if ('TSExternalModuleReference' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSNonNullExpression = function (e, t) {
          if (!e) return !1
          if ('TSNonNullExpression' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSExportAssignment = function (e, t) {
          if (!e) return !1
          if ('TSExportAssignment' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSNamespaceExportDeclaration = function (e, t) {
          if (!e) return !1
          if ('TSNamespaceExportDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeAnnotation = function (e, t) {
          if (!e) return !1
          if ('TSTypeAnnotation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeParameterInstantiation = function (e, t) {
          if (!e) return !1
          if ('TSTypeParameterInstantiation' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeParameterDeclaration = function (e, t) {
          if (!e) return !1
          if ('TSTypeParameterDeclaration' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeParameter = function (e, t) {
          if (!e) return !1
          if ('TSTypeParameter' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExpression = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Expression' === n ||
            'ArrayExpression' === n ||
            'AssignmentExpression' === n ||
            'BinaryExpression' === n ||
            'CallExpression' === n ||
            'ConditionalExpression' === n ||
            'FunctionExpression' === n ||
            'Identifier' === n ||
            'StringLiteral' === n ||
            'NumericLiteral' === n ||
            'NullLiteral' === n ||
            'BooleanLiteral' === n ||
            'RegExpLiteral' === n ||
            'LogicalExpression' === n ||
            'MemberExpression' === n ||
            'NewExpression' === n ||
            'ObjectExpression' === n ||
            'SequenceExpression' === n ||
            'ParenthesizedExpression' === n ||
            'ThisExpression' === n ||
            'UnaryExpression' === n ||
            'UpdateExpression' === n ||
            'ArrowFunctionExpression' === n ||
            'ClassExpression' === n ||
            'MetaProperty' === n ||
            'Super' === n ||
            'TaggedTemplateExpression' === n ||
            'TemplateLiteral' === n ||
            'YieldExpression' === n ||
            'TypeCastExpression' === n ||
            'JSXElement' === n ||
            'JSXFragment' === n ||
            'AwaitExpression' === n ||
            'BindExpression' === n ||
            'OptionalMemberExpression' === n ||
            'PipelinePrimaryTopicReference' === n ||
            'OptionalCallExpression' === n ||
            'Import' === n ||
            'DoExpression' === n ||
            'BigIntLiteral' === n ||
            'RecordExpression' === n ||
            'TupleExpression' === n ||
            'TSAsExpression' === n ||
            'TSTypeAssertion' === n ||
            'TSNonNullExpression' === n ||
            ('Placeholder' === n &&
              ('Expression' === e.expectedNode ||
                'Identifier' === e.expectedNode ||
                'StringLiteral' === e.expectedNode))
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBinary = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Binary' === n ||
            'BinaryExpression' === n ||
            'LogicalExpression' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isScopable = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Scopable' === n ||
            'BlockStatement' === n ||
            'CatchClause' === n ||
            'DoWhileStatement' === n ||
            'ForInStatement' === n ||
            'ForStatement' === n ||
            'FunctionDeclaration' === n ||
            'FunctionExpression' === n ||
            'Program' === n ||
            'ObjectMethod' === n ||
            'SwitchStatement' === n ||
            'WhileStatement' === n ||
            'ArrowFunctionExpression' === n ||
            'ClassExpression' === n ||
            'ClassDeclaration' === n ||
            'ForOfStatement' === n ||
            'ClassMethod' === n ||
            'ClassPrivateMethod' === n ||
            'TSModuleBlock' === n ||
            ('Placeholder' === n &&
              'BlockStatement' === e.expectedNode)
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBlockParent = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'BlockParent' === n ||
            'BlockStatement' === n ||
            'CatchClause' === n ||
            'DoWhileStatement' === n ||
            'ForInStatement' === n ||
            'ForStatement' === n ||
            'FunctionDeclaration' === n ||
            'FunctionExpression' === n ||
            'Program' === n ||
            'ObjectMethod' === n ||
            'SwitchStatement' === n ||
            'WhileStatement' === n ||
            'ArrowFunctionExpression' === n ||
            'ForOfStatement' === n ||
            'ClassMethod' === n ||
            'ClassPrivateMethod' === n ||
            'TSModuleBlock' === n ||
            ('Placeholder' === n &&
              'BlockStatement' === e.expectedNode)
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isBlock = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Block' === n ||
            'BlockStatement' === n ||
            'Program' === n ||
            'TSModuleBlock' === n ||
            ('Placeholder' === n &&
              'BlockStatement' === e.expectedNode)
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isStatement = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Statement' === n ||
            'BlockStatement' === n ||
            'BreakStatement' === n ||
            'ContinueStatement' === n ||
            'DebuggerStatement' === n ||
            'DoWhileStatement' === n ||
            'EmptyStatement' === n ||
            'ExpressionStatement' === n ||
            'ForInStatement' === n ||
            'ForStatement' === n ||
            'FunctionDeclaration' === n ||
            'IfStatement' === n ||
            'LabeledStatement' === n ||
            'ReturnStatement' === n ||
            'SwitchStatement' === n ||
            'ThrowStatement' === n ||
            'TryStatement' === n ||
            'VariableDeclaration' === n ||
            'WhileStatement' === n ||
            'WithStatement' === n ||
            'ClassDeclaration' === n ||
            'ExportAllDeclaration' === n ||
            'ExportDefaultDeclaration' === n ||
            'ExportNamedDeclaration' === n ||
            'ForOfStatement' === n ||
            'ImportDeclaration' === n ||
            'DeclareClass' === n ||
            'DeclareFunction' === n ||
            'DeclareInterface' === n ||
            'DeclareModule' === n ||
            'DeclareModuleExports' === n ||
            'DeclareTypeAlias' === n ||
            'DeclareOpaqueType' === n ||
            'DeclareVariable' === n ||
            'DeclareExportDeclaration' === n ||
            'DeclareExportAllDeclaration' === n ||
            'InterfaceDeclaration' === n ||
            'OpaqueType' === n ||
            'TypeAlias' === n ||
            'EnumDeclaration' === n ||
            'TSDeclareFunction' === n ||
            'TSInterfaceDeclaration' === n ||
            'TSTypeAliasDeclaration' === n ||
            'TSEnumDeclaration' === n ||
            'TSModuleDeclaration' === n ||
            'TSImportEqualsDeclaration' === n ||
            'TSExportAssignment' === n ||
            'TSNamespaceExportDeclaration' === n ||
            ('Placeholder' === n &&
              ('Statement' === e.expectedNode ||
                'Declaration' === e.expectedNode ||
                'BlockStatement' === e.expectedNode))
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTerminatorless = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Terminatorless' === n ||
            'BreakStatement' === n ||
            'ContinueStatement' === n ||
            'ReturnStatement' === n ||
            'ThrowStatement' === n ||
            'YieldExpression' === n ||
            'AwaitExpression' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isCompletionStatement = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'CompletionStatement' === n ||
            'BreakStatement' === n ||
            'ContinueStatement' === n ||
            'ReturnStatement' === n ||
            'ThrowStatement' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isConditional = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Conditional' === n ||
            'ConditionalExpression' === n ||
            'IfStatement' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isLoop = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Loop' === n ||
            'DoWhileStatement' === n ||
            'ForInStatement' === n ||
            'ForStatement' === n ||
            'WhileStatement' === n ||
            'ForOfStatement' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isWhile = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'While' === n ||
            'DoWhileStatement' === n ||
            'WhileStatement' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExpressionWrapper = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'ExpressionWrapper' === n ||
            'ExpressionStatement' === n ||
            'ParenthesizedExpression' === n ||
            'TypeCastExpression' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFor = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'For' === n ||
            'ForInStatement' === n ||
            'ForStatement' === n ||
            'ForOfStatement' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isForXStatement = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'ForXStatement' === n ||
            'ForInStatement' === n ||
            'ForOfStatement' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFunction = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Function' === n ||
            'FunctionDeclaration' === n ||
            'FunctionExpression' === n ||
            'ObjectMethod' === n ||
            'ArrowFunctionExpression' === n ||
            'ClassMethod' === n ||
            'ClassPrivateMethod' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFunctionParent = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'FunctionParent' === n ||
            'FunctionDeclaration' === n ||
            'FunctionExpression' === n ||
            'ObjectMethod' === n ||
            'ArrowFunctionExpression' === n ||
            'ClassMethod' === n ||
            'ClassPrivateMethod' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isPureish = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Pureish' === n ||
            'FunctionDeclaration' === n ||
            'FunctionExpression' === n ||
            'StringLiteral' === n ||
            'NumericLiteral' === n ||
            'NullLiteral' === n ||
            'BooleanLiteral' === n ||
            'RegExpLiteral' === n ||
            'ArrowFunctionExpression' === n ||
            'BigIntLiteral' === n ||
            ('Placeholder' === n &&
              'StringLiteral' === e.expectedNode)
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isDeclaration = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Declaration' === n ||
            'FunctionDeclaration' === n ||
            'VariableDeclaration' === n ||
            'ClassDeclaration' === n ||
            'ExportAllDeclaration' === n ||
            'ExportDefaultDeclaration' === n ||
            'ExportNamedDeclaration' === n ||
            'ImportDeclaration' === n ||
            'DeclareClass' === n ||
            'DeclareFunction' === n ||
            'DeclareInterface' === n ||
            'DeclareModule' === n ||
            'DeclareModuleExports' === n ||
            'DeclareTypeAlias' === n ||
            'DeclareOpaqueType' === n ||
            'DeclareVariable' === n ||
            'DeclareExportDeclaration' === n ||
            'DeclareExportAllDeclaration' === n ||
            'InterfaceDeclaration' === n ||
            'OpaqueType' === n ||
            'TypeAlias' === n ||
            'EnumDeclaration' === n ||
            'TSDeclareFunction' === n ||
            'TSInterfaceDeclaration' === n ||
            'TSTypeAliasDeclaration' === n ||
            'TSEnumDeclaration' === n ||
            'TSModuleDeclaration' === n ||
            ('Placeholder' === n && 'Declaration' === e.expectedNode)
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isPatternLike = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'PatternLike' === n ||
            'Identifier' === n ||
            'RestElement' === n ||
            'AssignmentPattern' === n ||
            'ArrayPattern' === n ||
            'ObjectPattern' === n ||
            ('Placeholder' === n &&
              ('Pattern' === e.expectedNode ||
                'Identifier' === e.expectedNode))
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isLVal = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'LVal' === n ||
            'Identifier' === n ||
            'MemberExpression' === n ||
            'RestElement' === n ||
            'AssignmentPattern' === n ||
            'ArrayPattern' === n ||
            'ObjectPattern' === n ||
            'TSParameterProperty' === n ||
            ('Placeholder' === n &&
              ('Pattern' === e.expectedNode ||
                'Identifier' === e.expectedNode))
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSEntityName = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'TSEntityName' === n ||
            'Identifier' === n ||
            'TSQualifiedName' === n ||
            ('Placeholder' === n && 'Identifier' === e.expectedNode)
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isLiteral = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Literal' === n ||
            'StringLiteral' === n ||
            'NumericLiteral' === n ||
            'NullLiteral' === n ||
            'BooleanLiteral' === n ||
            'RegExpLiteral' === n ||
            'TemplateLiteral' === n ||
            'BigIntLiteral' === n ||
            ('Placeholder' === n &&
              'StringLiteral' === e.expectedNode)
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isImmutable = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Immutable' === n ||
            'StringLiteral' === n ||
            'NumericLiteral' === n ||
            'NullLiteral' === n ||
            'BooleanLiteral' === n ||
            'JSXAttribute' === n ||
            'JSXClosingElement' === n ||
            'JSXElement' === n ||
            'JSXExpressionContainer' === n ||
            'JSXSpreadChild' === n ||
            'JSXOpeningElement' === n ||
            'JSXText' === n ||
            'JSXFragment' === n ||
            'JSXOpeningFragment' === n ||
            'JSXClosingFragment' === n ||
            'BigIntLiteral' === n ||
            ('Placeholder' === n &&
              'StringLiteral' === e.expectedNode)
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isUserWhitespacable = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'UserWhitespacable' === n ||
            'ObjectMethod' === n ||
            'ObjectProperty' === n ||
            'ObjectTypeInternalSlot' === n ||
            'ObjectTypeCallProperty' === n ||
            'ObjectTypeIndexer' === n ||
            'ObjectTypeProperty' === n ||
            'ObjectTypeSpreadProperty' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isMethod = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Method' === n ||
            'ObjectMethod' === n ||
            'ClassMethod' === n ||
            'ClassPrivateMethod' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isObjectMember = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'ObjectMember' === n ||
            'ObjectMethod' === n ||
            'ObjectProperty' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isProperty = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Property' === n ||
            'ObjectProperty' === n ||
            'ClassProperty' === n ||
            'ClassPrivateProperty' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isUnaryLike = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'UnaryLike' === n ||
            'UnaryExpression' === n ||
            'SpreadElement' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isPattern = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Pattern' === n ||
            'AssignmentPattern' === n ||
            'ArrayPattern' === n ||
            'ObjectPattern' === n ||
            ('Placeholder' === n && 'Pattern' === e.expectedNode)
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isClass = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Class' === n ||
            'ClassExpression' === n ||
            'ClassDeclaration' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isModuleDeclaration = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'ModuleDeclaration' === n ||
            'ExportAllDeclaration' === n ||
            'ExportDefaultDeclaration' === n ||
            'ExportNamedDeclaration' === n ||
            'ImportDeclaration' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isExportDeclaration = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'ExportDeclaration' === n ||
            'ExportAllDeclaration' === n ||
            'ExportDefaultDeclaration' === n ||
            'ExportNamedDeclaration' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isModuleSpecifier = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'ModuleSpecifier' === n ||
            'ExportSpecifier' === n ||
            'ImportDefaultSpecifier' === n ||
            'ImportNamespaceSpecifier' === n ||
            'ImportSpecifier' === n ||
            'ExportDefaultSpecifier' === n ||
            'ExportNamespaceSpecifier' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFlow = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Flow' === n ||
            'AnyTypeAnnotation' === n ||
            'ArrayTypeAnnotation' === n ||
            'BooleanTypeAnnotation' === n ||
            'BooleanLiteralTypeAnnotation' === n ||
            'NullLiteralTypeAnnotation' === n ||
            'ClassImplements' === n ||
            'DeclareClass' === n ||
            'DeclareFunction' === n ||
            'DeclareInterface' === n ||
            'DeclareModule' === n ||
            'DeclareModuleExports' === n ||
            'DeclareTypeAlias' === n ||
            'DeclareOpaqueType' === n ||
            'DeclareVariable' === n ||
            'DeclareExportDeclaration' === n ||
            'DeclareExportAllDeclaration' === n ||
            'DeclaredPredicate' === n ||
            'ExistsTypeAnnotation' === n ||
            'FunctionTypeAnnotation' === n ||
            'FunctionTypeParam' === n ||
            'GenericTypeAnnotation' === n ||
            'InferredPredicate' === n ||
            'InterfaceExtends' === n ||
            'InterfaceDeclaration' === n ||
            'InterfaceTypeAnnotation' === n ||
            'IntersectionTypeAnnotation' === n ||
            'MixedTypeAnnotation' === n ||
            'EmptyTypeAnnotation' === n ||
            'NullableTypeAnnotation' === n ||
            'NumberLiteralTypeAnnotation' === n ||
            'NumberTypeAnnotation' === n ||
            'ObjectTypeAnnotation' === n ||
            'ObjectTypeInternalSlot' === n ||
            'ObjectTypeCallProperty' === n ||
            'ObjectTypeIndexer' === n ||
            'ObjectTypeProperty' === n ||
            'ObjectTypeSpreadProperty' === n ||
            'OpaqueType' === n ||
            'QualifiedTypeIdentifier' === n ||
            'StringLiteralTypeAnnotation' === n ||
            'StringTypeAnnotation' === n ||
            'SymbolTypeAnnotation' === n ||
            'ThisTypeAnnotation' === n ||
            'TupleTypeAnnotation' === n ||
            'TypeofTypeAnnotation' === n ||
            'TypeAlias' === n ||
            'TypeAnnotation' === n ||
            'TypeCastExpression' === n ||
            'TypeParameter' === n ||
            'TypeParameterDeclaration' === n ||
            'TypeParameterInstantiation' === n ||
            'UnionTypeAnnotation' === n ||
            'Variance' === n ||
            'VoidTypeAnnotation' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFlowType = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'FlowType' === n ||
            'AnyTypeAnnotation' === n ||
            'ArrayTypeAnnotation' === n ||
            'BooleanTypeAnnotation' === n ||
            'BooleanLiteralTypeAnnotation' === n ||
            'NullLiteralTypeAnnotation' === n ||
            'ExistsTypeAnnotation' === n ||
            'FunctionTypeAnnotation' === n ||
            'GenericTypeAnnotation' === n ||
            'InterfaceTypeAnnotation' === n ||
            'IntersectionTypeAnnotation' === n ||
            'MixedTypeAnnotation' === n ||
            'EmptyTypeAnnotation' === n ||
            'NullableTypeAnnotation' === n ||
            'NumberLiteralTypeAnnotation' === n ||
            'NumberTypeAnnotation' === n ||
            'ObjectTypeAnnotation' === n ||
            'StringLiteralTypeAnnotation' === n ||
            'StringTypeAnnotation' === n ||
            'SymbolTypeAnnotation' === n ||
            'ThisTypeAnnotation' === n ||
            'TupleTypeAnnotation' === n ||
            'TypeofTypeAnnotation' === n ||
            'UnionTypeAnnotation' === n ||
            'VoidTypeAnnotation' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFlowBaseAnnotation = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'FlowBaseAnnotation' === n ||
            'AnyTypeAnnotation' === n ||
            'BooleanTypeAnnotation' === n ||
            'NullLiteralTypeAnnotation' === n ||
            'MixedTypeAnnotation' === n ||
            'EmptyTypeAnnotation' === n ||
            'NumberTypeAnnotation' === n ||
            'StringTypeAnnotation' === n ||
            'SymbolTypeAnnotation' === n ||
            'ThisTypeAnnotation' === n ||
            'VoidTypeAnnotation' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFlowDeclaration = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'FlowDeclaration' === n ||
            'DeclareClass' === n ||
            'DeclareFunction' === n ||
            'DeclareInterface' === n ||
            'DeclareModule' === n ||
            'DeclareModuleExports' === n ||
            'DeclareTypeAlias' === n ||
            'DeclareOpaqueType' === n ||
            'DeclareVariable' === n ||
            'DeclareExportDeclaration' === n ||
            'DeclareExportAllDeclaration' === n ||
            'InterfaceDeclaration' === n ||
            'OpaqueType' === n ||
            'TypeAlias' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isFlowPredicate = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'FlowPredicate' === n ||
            'DeclaredPredicate' === n ||
            'InferredPredicate' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumBody = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'EnumBody' === n ||
            'EnumBooleanBody' === n ||
            'EnumNumberBody' === n ||
            'EnumStringBody' === n ||
            'EnumSymbolBody' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isEnumMember = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'EnumMember' === n ||
            'EnumBooleanMember' === n ||
            'EnumNumberMember' === n ||
            'EnumStringMember' === n ||
            'EnumDefaultedMember' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isJSX = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'JSX' === n ||
            'JSXAttribute' === n ||
            'JSXClosingElement' === n ||
            'JSXElement' === n ||
            'JSXEmptyExpression' === n ||
            'JSXExpressionContainer' === n ||
            'JSXSpreadChild' === n ||
            'JSXIdentifier' === n ||
            'JSXMemberExpression' === n ||
            'JSXNamespacedName' === n ||
            'JSXOpeningElement' === n ||
            'JSXSpreadAttribute' === n ||
            'JSXText' === n ||
            'JSXFragment' === n ||
            'JSXOpeningFragment' === n ||
            'JSXClosingFragment' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isPrivate = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'Private' === n ||
            'ClassPrivateProperty' === n ||
            'ClassPrivateMethod' === n ||
            'PrivateName' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSTypeElement = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'TSTypeElement' === n ||
            'TSCallSignatureDeclaration' === n ||
            'TSConstructSignatureDeclaration' === n ||
            'TSPropertySignature' === n ||
            'TSMethodSignature' === n ||
            'TSIndexSignature' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isTSType = function (e, t) {
          if (!e) return !1
          const n = e.type
          if (
            'TSType' === n ||
            'TSAnyKeyword' === n ||
            'TSBooleanKeyword' === n ||
            'TSBigIntKeyword' === n ||
            'TSNeverKeyword' === n ||
            'TSNullKeyword' === n ||
            'TSNumberKeyword' === n ||
            'TSObjectKeyword' === n ||
            'TSStringKeyword' === n ||
            'TSSymbolKeyword' === n ||
            'TSUndefinedKeyword' === n ||
            'TSUnknownKeyword' === n ||
            'TSVoidKeyword' === n ||
            'TSThisType' === n ||
            'TSFunctionType' === n ||
            'TSConstructorType' === n ||
            'TSTypeReference' === n ||
            'TSTypePredicate' === n ||
            'TSTypeQuery' === n ||
            'TSTypeLiteral' === n ||
            'TSArrayType' === n ||
            'TSTupleType' === n ||
            'TSOptionalType' === n ||
            'TSRestType' === n ||
            'TSUnionType' === n ||
            'TSIntersectionType' === n ||
            'TSConditionalType' === n ||
            'TSInferType' === n ||
            'TSParenthesizedType' === n ||
            'TSTypeOperator' === n ||
            'TSIndexedAccessType' === n ||
            'TSMappedType' === n ||
            'TSLiteralType' === n ||
            'TSExpressionWithTypeArguments' === n ||
            'TSImportType' === n
          )
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isNumberLiteral = function (e, t) {
          if (
            (console.trace(
              'The node type NumberLiteral has been renamed to NumericLiteral'
            ),
            !e)
          )
            return !1
          if ('NumberLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isRegexLiteral = function (e, t) {
          if (
            (console.trace(
              'The node type RegexLiteral has been renamed to RegExpLiteral'
            ),
            !e)
          )
            return !1
          if ('RegexLiteral' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isRestProperty = function (e, t) {
          if (
            (console.trace(
              'The node type RestProperty has been renamed to RestElement'
            ),
            !e)
          )
            return !1
          if ('RestProperty' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        }),
        (t.isSpreadProperty = function (e, t) {
          if (
            (console.trace(
              'The node type SpreadProperty has been renamed to SpreadElement'
            ),
            !e)
          )
            return !1
          if ('SpreadProperty' === e.type)
            return void 0 === t || (0, i.default)(e, t)
          return !1
        })
      var r,
        i = (r = n(21)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'VISITOR_KEYS', {
          enumerable: !0,
          get: function () {
            return a.VISITOR_KEYS
          },
        }),
        Object.defineProperty(t, 'ALIAS_KEYS', {
          enumerable: !0,
          get: function () {
            return a.ALIAS_KEYS
          },
        }),
        Object.defineProperty(t, 'FLIPPED_ALIAS_KEYS', {
          enumerable: !0,
          get: function () {
            return a.FLIPPED_ALIAS_KEYS
          },
        }),
        Object.defineProperty(t, 'NODE_FIELDS', {
          enumerable: !0,
          get: function () {
            return a.NODE_FIELDS
          },
        }),
        Object.defineProperty(t, 'BUILDER_KEYS', {
          enumerable: !0,
          get: function () {
            return a.BUILDER_KEYS
          },
        }),
        Object.defineProperty(t, 'DEPRECATED_KEYS', {
          enumerable: !0,
          get: function () {
            return a.DEPRECATED_KEYS
          },
        }),
        Object.defineProperty(t, 'NODE_PARENT_VALIDATIONS', {
          enumerable: !0,
          get: function () {
            return a.NODE_PARENT_VALIDATIONS
          },
        }),
        Object.defineProperty(t, 'PLACEHOLDERS', {
          enumerable: !0,
          get: function () {
            return o.PLACEHOLDERS
          },
        }),
        Object.defineProperty(t, 'PLACEHOLDERS_ALIAS', {
          enumerable: !0,
          get: function () {
            return o.PLACEHOLDERS_ALIAS
          },
        }),
        Object.defineProperty(t, 'PLACEHOLDERS_FLIPPED_ALIAS', {
          enumerable: !0,
          get: function () {
            return o.PLACEHOLDERS_FLIPPED_ALIAS
          },
        }),
        (t.TYPES = void 0)
      var r,
        i = (r = n(150)) && r.__esModule ? r : { default: r }
      n(32), n(35), n(153), n(154), n(155), n(156), n(157)
      var a = n(4),
        o = n(59)
      ;(0, i.default)(a.VISITOR_KEYS),
        (0, i.default)(a.ALIAS_KEYS),
        (0, i.default)(a.FLIPPED_ALIAS_KEYS),
        (0, i.default)(a.NODE_FIELDS),
        (0, i.default)(a.BUILDER_KEYS),
        (0, i.default)(a.DEPRECATED_KEYS),
        (0, i.default)(o.PLACEHOLDERS_ALIAS),
        (0, i.default)(o.PLACEHOLDERS_FLIPPED_ALIAS)
      const s = Object.keys(a.VISITOR_KEYS)
        .concat(Object.keys(a.FLIPPED_ALIAS_KEYS))
        .concat(Object.keys(a.DEPRECATED_KEYS))
      t.TYPES = s
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.arrayExpression = t.ArrayExpression = function (...e) {
          return (0, i.default)('ArrayExpression', ...e)
        }),
        (t.assignmentExpression = t.AssignmentExpression = function (
          ...e
        ) {
          return (0, i.default)('AssignmentExpression', ...e)
        }),
        (t.binaryExpression = t.BinaryExpression = function (...e) {
          return (0, i.default)('BinaryExpression', ...e)
        }),
        (t.interpreterDirective = t.InterpreterDirective = function (
          ...e
        ) {
          return (0, i.default)('InterpreterDirective', ...e)
        }),
        (t.directive = t.Directive = function (...e) {
          return (0, i.default)('Directive', ...e)
        }),
        (t.directiveLiteral = t.DirectiveLiteral = function (...e) {
          return (0, i.default)('DirectiveLiteral', ...e)
        }),
        (t.blockStatement = t.BlockStatement = function (...e) {
          return (0, i.default)('BlockStatement', ...e)
        }),
        (t.breakStatement = t.BreakStatement = function (...e) {
          return (0, i.default)('BreakStatement', ...e)
        }),
        (t.callExpression = t.CallExpression = function (...e) {
          return (0, i.default)('CallExpression', ...e)
        }),
        (t.catchClause = t.CatchClause = function (...e) {
          return (0, i.default)('CatchClause', ...e)
        }),
        (t.conditionalExpression = t.ConditionalExpression = function (
          ...e
        ) {
          return (0, i.default)('ConditionalExpression', ...e)
        }),
        (t.continueStatement = t.ContinueStatement = function (...e) {
          return (0, i.default)('ContinueStatement', ...e)
        }),
        (t.debuggerStatement = t.DebuggerStatement = function (...e) {
          return (0, i.default)('DebuggerStatement', ...e)
        }),
        (t.doWhileStatement = t.DoWhileStatement = function (...e) {
          return (0, i.default)('DoWhileStatement', ...e)
        }),
        (t.emptyStatement = t.EmptyStatement = function (...e) {
          return (0, i.default)('EmptyStatement', ...e)
        }),
        (t.expressionStatement = t.ExpressionStatement = function (
          ...e
        ) {
          return (0, i.default)('ExpressionStatement', ...e)
        }),
        (t.file = t.File = function (...e) {
          return (0, i.default)('File', ...e)
        }),
        (t.forInStatement = t.ForInStatement = function (...e) {
          return (0, i.default)('ForInStatement', ...e)
        }),
        (t.forStatement = t.ForStatement = function (...e) {
          return (0, i.default)('ForStatement', ...e)
        }),
        (t.functionDeclaration = t.FunctionDeclaration = function (
          ...e
        ) {
          return (0, i.default)('FunctionDeclaration', ...e)
        }),
        (t.functionExpression = t.FunctionExpression = function (
          ...e
        ) {
          return (0, i.default)('FunctionExpression', ...e)
        }),
        (t.identifier = t.Identifier = function (...e) {
          return (0, i.default)('Identifier', ...e)
        }),
        (t.ifStatement = t.IfStatement = function (...e) {
          return (0, i.default)('IfStatement', ...e)
        }),
        (t.labeledStatement = t.LabeledStatement = function (...e) {
          return (0, i.default)('LabeledStatement', ...e)
        }),
        (t.stringLiteral = t.StringLiteral = function (...e) {
          return (0, i.default)('StringLiteral', ...e)
        }),
        (t.numericLiteral = t.NumericLiteral = function (...e) {
          return (0, i.default)('NumericLiteral', ...e)
        }),
        (t.nullLiteral = t.NullLiteral = function (...e) {
          return (0, i.default)('NullLiteral', ...e)
        }),
        (t.booleanLiteral = t.BooleanLiteral = function (...e) {
          return (0, i.default)('BooleanLiteral', ...e)
        }),
        (t.regExpLiteral = t.RegExpLiteral = function (...e) {
          return (0, i.default)('RegExpLiteral', ...e)
        }),
        (t.logicalExpression = t.LogicalExpression = function (...e) {
          return (0, i.default)('LogicalExpression', ...e)
        }),
        (t.memberExpression = t.MemberExpression = function (...e) {
          return (0, i.default)('MemberExpression', ...e)
        }),
        (t.newExpression = t.NewExpression = function (...e) {
          return (0, i.default)('NewExpression', ...e)
        }),
        (t.program = t.Program = function (...e) {
          return (0, i.default)('Program', ...e)
        }),
        (t.objectExpression = t.ObjectExpression = function (...e) {
          return (0, i.default)('ObjectExpression', ...e)
        }),
        (t.objectMethod = t.ObjectMethod = function (...e) {
          return (0, i.default)('ObjectMethod', ...e)
        }),
        (t.objectProperty = t.ObjectProperty = function (...e) {
          return (0, i.default)('ObjectProperty', ...e)
        }),
        (t.restElement = t.RestElement = function (...e) {
          return (0, i.default)('RestElement', ...e)
        }),
        (t.returnStatement = t.ReturnStatement = function (...e) {
          return (0, i.default)('ReturnStatement', ...e)
        }),
        (t.sequenceExpression = t.SequenceExpression = function (
          ...e
        ) {
          return (0, i.default)('SequenceExpression', ...e)
        }),
        (t.parenthesizedExpression = t.ParenthesizedExpression = function (
          ...e
        ) {
          return (0, i.default)('ParenthesizedExpression', ...e)
        }),
        (t.switchCase = t.SwitchCase = function (...e) {
          return (0, i.default)('SwitchCase', ...e)
        }),
        (t.switchStatement = t.SwitchStatement = function (...e) {
          return (0, i.default)('SwitchStatement', ...e)
        }),
        (t.thisExpression = t.ThisExpression = function (...e) {
          return (0, i.default)('ThisExpression', ...e)
        }),
        (t.throwStatement = t.ThrowStatement = function (...e) {
          return (0, i.default)('ThrowStatement', ...e)
        }),
        (t.tryStatement = t.TryStatement = function (...e) {
          return (0, i.default)('TryStatement', ...e)
        }),
        (t.unaryExpression = t.UnaryExpression = function (...e) {
          return (0, i.default)('UnaryExpression', ...e)
        }),
        (t.updateExpression = t.UpdateExpression = function (...e) {
          return (0, i.default)('UpdateExpression', ...e)
        }),
        (t.variableDeclaration = t.VariableDeclaration = function (
          ...e
        ) {
          return (0, i.default)('VariableDeclaration', ...e)
        }),
        (t.variableDeclarator = t.VariableDeclarator = function (
          ...e
        ) {
          return (0, i.default)('VariableDeclarator', ...e)
        }),
        (t.whileStatement = t.WhileStatement = function (...e) {
          return (0, i.default)('WhileStatement', ...e)
        }),
        (t.withStatement = t.WithStatement = function (...e) {
          return (0, i.default)('WithStatement', ...e)
        }),
        (t.assignmentPattern = t.AssignmentPattern = function (...e) {
          return (0, i.default)('AssignmentPattern', ...e)
        }),
        (t.arrayPattern = t.ArrayPattern = function (...e) {
          return (0, i.default)('ArrayPattern', ...e)
        }),
        (t.arrowFunctionExpression = t.ArrowFunctionExpression = function (
          ...e
        ) {
          return (0, i.default)('ArrowFunctionExpression', ...e)
        }),
        (t.classBody = t.ClassBody = function (...e) {
          return (0, i.default)('ClassBody', ...e)
        }),
        (t.classExpression = t.ClassExpression = function (...e) {
          return (0, i.default)('ClassExpression', ...e)
        }),
        (t.classDeclaration = t.ClassDeclaration = function (...e) {
          return (0, i.default)('ClassDeclaration', ...e)
        }),
        (t.exportAllDeclaration = t.ExportAllDeclaration = function (
          ...e
        ) {
          return (0, i.default)('ExportAllDeclaration', ...e)
        }),
        (t.exportDefaultDeclaration = t.ExportDefaultDeclaration = function (
          ...e
        ) {
          return (0, i.default)('ExportDefaultDeclaration', ...e)
        }),
        (t.exportNamedDeclaration = t.ExportNamedDeclaration = function (
          ...e
        ) {
          return (0, i.default)('ExportNamedDeclaration', ...e)
        }),
        (t.exportSpecifier = t.ExportSpecifier = function (...e) {
          return (0, i.default)('ExportSpecifier', ...e)
        }),
        (t.forOfStatement = t.ForOfStatement = function (...e) {
          return (0, i.default)('ForOfStatement', ...e)
        }),
        (t.importDeclaration = t.ImportDeclaration = function (...e) {
          return (0, i.default)('ImportDeclaration', ...e)
        }),
        (t.importDefaultSpecifier = t.ImportDefaultSpecifier = function (
          ...e
        ) {
          return (0, i.default)('ImportDefaultSpecifier', ...e)
        }),
        (t.importNamespaceSpecifier = t.ImportNamespaceSpecifier = function (
          ...e
        ) {
          return (0, i.default)('ImportNamespaceSpecifier', ...e)
        }),
        (t.importSpecifier = t.ImportSpecifier = function (...e) {
          return (0, i.default)('ImportSpecifier', ...e)
        }),
        (t.metaProperty = t.MetaProperty = function (...e) {
          return (0, i.default)('MetaProperty', ...e)
        }),
        (t.classMethod = t.ClassMethod = function (...e) {
          return (0, i.default)('ClassMethod', ...e)
        }),
        (t.objectPattern = t.ObjectPattern = function (...e) {
          return (0, i.default)('ObjectPattern', ...e)
        }),
        (t.spreadElement = t.SpreadElement = function (...e) {
          return (0, i.default)('SpreadElement', ...e)
        }),
        (t.super = t.Super = function (...e) {
          return (0, i.default)('Super', ...e)
        }),
        (t.taggedTemplateExpression = t.TaggedTemplateExpression = function (
          ...e
        ) {
          return (0, i.default)('TaggedTemplateExpression', ...e)
        }),
        (t.templateElement = t.TemplateElement = function (...e) {
          return (0, i.default)('TemplateElement', ...e)
        }),
        (t.templateLiteral = t.TemplateLiteral = function (...e) {
          return (0, i.default)('TemplateLiteral', ...e)
        }),
        (t.yieldExpression = t.YieldExpression = function (...e) {
          return (0, i.default)('YieldExpression', ...e)
        }),
        (t.anyTypeAnnotation = t.AnyTypeAnnotation = function (...e) {
          return (0, i.default)('AnyTypeAnnotation', ...e)
        }),
        (t.arrayTypeAnnotation = t.ArrayTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('ArrayTypeAnnotation', ...e)
        }),
        (t.booleanTypeAnnotation = t.BooleanTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('BooleanTypeAnnotation', ...e)
        }),
        (t.booleanLiteralTypeAnnotation = t.BooleanLiteralTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('BooleanLiteralTypeAnnotation', ...e)
        }),
        (t.nullLiteralTypeAnnotation = t.NullLiteralTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('NullLiteralTypeAnnotation', ...e)
        }),
        (t.classImplements = t.ClassImplements = function (...e) {
          return (0, i.default)('ClassImplements', ...e)
        }),
        (t.declareClass = t.DeclareClass = function (...e) {
          return (0, i.default)('DeclareClass', ...e)
        }),
        (t.declareFunction = t.DeclareFunction = function (...e) {
          return (0, i.default)('DeclareFunction', ...e)
        }),
        (t.declareInterface = t.DeclareInterface = function (...e) {
          return (0, i.default)('DeclareInterface', ...e)
        }),
        (t.declareModule = t.DeclareModule = function (...e) {
          return (0, i.default)('DeclareModule', ...e)
        }),
        (t.declareModuleExports = t.DeclareModuleExports = function (
          ...e
        ) {
          return (0, i.default)('DeclareModuleExports', ...e)
        }),
        (t.declareTypeAlias = t.DeclareTypeAlias = function (...e) {
          return (0, i.default)('DeclareTypeAlias', ...e)
        }),
        (t.declareOpaqueType = t.DeclareOpaqueType = function (...e) {
          return (0, i.default)('DeclareOpaqueType', ...e)
        }),
        (t.declareVariable = t.DeclareVariable = function (...e) {
          return (0, i.default)('DeclareVariable', ...e)
        }),
        (t.declareExportDeclaration = t.DeclareExportDeclaration = function (
          ...e
        ) {
          return (0, i.default)('DeclareExportDeclaration', ...e)
        }),
        (t.declareExportAllDeclaration = t.DeclareExportAllDeclaration = function (
          ...e
        ) {
          return (0, i.default)('DeclareExportAllDeclaration', ...e)
        }),
        (t.declaredPredicate = t.DeclaredPredicate = function (...e) {
          return (0, i.default)('DeclaredPredicate', ...e)
        }),
        (t.existsTypeAnnotation = t.ExistsTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('ExistsTypeAnnotation', ...e)
        }),
        (t.functionTypeAnnotation = t.FunctionTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('FunctionTypeAnnotation', ...e)
        }),
        (t.functionTypeParam = t.FunctionTypeParam = function (...e) {
          return (0, i.default)('FunctionTypeParam', ...e)
        }),
        (t.genericTypeAnnotation = t.GenericTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('GenericTypeAnnotation', ...e)
        }),
        (t.inferredPredicate = t.InferredPredicate = function (...e) {
          return (0, i.default)('InferredPredicate', ...e)
        }),
        (t.interfaceExtends = t.InterfaceExtends = function (...e) {
          return (0, i.default)('InterfaceExtends', ...e)
        }),
        (t.interfaceDeclaration = t.InterfaceDeclaration = function (
          ...e
        ) {
          return (0, i.default)('InterfaceDeclaration', ...e)
        }),
        (t.interfaceTypeAnnotation = t.InterfaceTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('InterfaceTypeAnnotation', ...e)
        }),
        (t.intersectionTypeAnnotation = t.IntersectionTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('IntersectionTypeAnnotation', ...e)
        }),
        (t.mixedTypeAnnotation = t.MixedTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('MixedTypeAnnotation', ...e)
        }),
        (t.emptyTypeAnnotation = t.EmptyTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('EmptyTypeAnnotation', ...e)
        }),
        (t.nullableTypeAnnotation = t.NullableTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('NullableTypeAnnotation', ...e)
        }),
        (t.numberLiteralTypeAnnotation = t.NumberLiteralTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('NumberLiteralTypeAnnotation', ...e)
        }),
        (t.numberTypeAnnotation = t.NumberTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('NumberTypeAnnotation', ...e)
        }),
        (t.objectTypeAnnotation = t.ObjectTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('ObjectTypeAnnotation', ...e)
        }),
        (t.objectTypeInternalSlot = t.ObjectTypeInternalSlot = function (
          ...e
        ) {
          return (0, i.default)('ObjectTypeInternalSlot', ...e)
        }),
        (t.objectTypeCallProperty = t.ObjectTypeCallProperty = function (
          ...e
        ) {
          return (0, i.default)('ObjectTypeCallProperty', ...e)
        }),
        (t.objectTypeIndexer = t.ObjectTypeIndexer = function (...e) {
          return (0, i.default)('ObjectTypeIndexer', ...e)
        }),
        (t.objectTypeProperty = t.ObjectTypeProperty = function (
          ...e
        ) {
          return (0, i.default)('ObjectTypeProperty', ...e)
        }),
        (t.objectTypeSpreadProperty = t.ObjectTypeSpreadProperty = function (
          ...e
        ) {
          return (0, i.default)('ObjectTypeSpreadProperty', ...e)
        }),
        (t.opaqueType = t.OpaqueType = function (...e) {
          return (0, i.default)('OpaqueType', ...e)
        }),
        (t.qualifiedTypeIdentifier = t.QualifiedTypeIdentifier = function (
          ...e
        ) {
          return (0, i.default)('QualifiedTypeIdentifier', ...e)
        }),
        (t.stringLiteralTypeAnnotation = t.StringLiteralTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('StringLiteralTypeAnnotation', ...e)
        }),
        (t.stringTypeAnnotation = t.StringTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('StringTypeAnnotation', ...e)
        }),
        (t.symbolTypeAnnotation = t.SymbolTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('SymbolTypeAnnotation', ...e)
        }),
        (t.thisTypeAnnotation = t.ThisTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('ThisTypeAnnotation', ...e)
        }),
        (t.tupleTypeAnnotation = t.TupleTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('TupleTypeAnnotation', ...e)
        }),
        (t.typeofTypeAnnotation = t.TypeofTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('TypeofTypeAnnotation', ...e)
        }),
        (t.typeAlias = t.TypeAlias = function (...e) {
          return (0, i.default)('TypeAlias', ...e)
        }),
        (t.typeAnnotation = t.TypeAnnotation = function (...e) {
          return (0, i.default)('TypeAnnotation', ...e)
        }),
        (t.typeCastExpression = t.TypeCastExpression = function (
          ...e
        ) {
          return (0, i.default)('TypeCastExpression', ...e)
        }),
        (t.typeParameter = t.TypeParameter = function (...e) {
          return (0, i.default)('TypeParameter', ...e)
        }),
        (t.typeParameterDeclaration = t.TypeParameterDeclaration = function (
          ...e
        ) {
          return (0, i.default)('TypeParameterDeclaration', ...e)
        }),
        (t.typeParameterInstantiation = t.TypeParameterInstantiation = function (
          ...e
        ) {
          return (0, i.default)('TypeParameterInstantiation', ...e)
        }),
        (t.unionTypeAnnotation = t.UnionTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('UnionTypeAnnotation', ...e)
        }),
        (t.variance = t.Variance = function (...e) {
          return (0, i.default)('Variance', ...e)
        }),
        (t.voidTypeAnnotation = t.VoidTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('VoidTypeAnnotation', ...e)
        }),
        (t.enumDeclaration = t.EnumDeclaration = function (...e) {
          return (0, i.default)('EnumDeclaration', ...e)
        }),
        (t.enumBooleanBody = t.EnumBooleanBody = function (...e) {
          return (0, i.default)('EnumBooleanBody', ...e)
        }),
        (t.enumNumberBody = t.EnumNumberBody = function (...e) {
          return (0, i.default)('EnumNumberBody', ...e)
        }),
        (t.enumStringBody = t.EnumStringBody = function (...e) {
          return (0, i.default)('EnumStringBody', ...e)
        }),
        (t.enumSymbolBody = t.EnumSymbolBody = function (...e) {
          return (0, i.default)('EnumSymbolBody', ...e)
        }),
        (t.enumBooleanMember = t.EnumBooleanMember = function (...e) {
          return (0, i.default)('EnumBooleanMember', ...e)
        }),
        (t.enumNumberMember = t.EnumNumberMember = function (...e) {
          return (0, i.default)('EnumNumberMember', ...e)
        }),
        (t.enumStringMember = t.EnumStringMember = function (...e) {
          return (0, i.default)('EnumStringMember', ...e)
        }),
        (t.enumDefaultedMember = t.EnumDefaultedMember = function (
          ...e
        ) {
          return (0, i.default)('EnumDefaultedMember', ...e)
        }),
        (t.jSXAttribute = t.jsxAttribute = t.JSXAttribute = function (
          ...e
        ) {
          return (0, i.default)('JSXAttribute', ...e)
        }),
        (t.jSXClosingElement = t.jsxClosingElement = t.JSXClosingElement = function (
          ...e
        ) {
          return (0, i.default)('JSXClosingElement', ...e)
        }),
        (t.jSXElement = t.jsxElement = t.JSXElement = function (
          ...e
        ) {
          return (0, i.default)('JSXElement', ...e)
        }),
        (t.jSXEmptyExpression = t.jsxEmptyExpression = t.JSXEmptyExpression = function (
          ...e
        ) {
          return (0, i.default)('JSXEmptyExpression', ...e)
        }),
        (t.jSXExpressionContainer = t.jsxExpressionContainer = t.JSXExpressionContainer = function (
          ...e
        ) {
          return (0, i.default)('JSXExpressionContainer', ...e)
        }),
        (t.jSXSpreadChild = t.jsxSpreadChild = t.JSXSpreadChild = function (
          ...e
        ) {
          return (0, i.default)('JSXSpreadChild', ...e)
        }),
        (t.jSXIdentifier = t.jsxIdentifier = t.JSXIdentifier = function (
          ...e
        ) {
          return (0, i.default)('JSXIdentifier', ...e)
        }),
        (t.jSXMemberExpression = t.jsxMemberExpression = t.JSXMemberExpression = function (
          ...e
        ) {
          return (0, i.default)('JSXMemberExpression', ...e)
        }),
        (t.jSXNamespacedName = t.jsxNamespacedName = t.JSXNamespacedName = function (
          ...e
        ) {
          return (0, i.default)('JSXNamespacedName', ...e)
        }),
        (t.jSXOpeningElement = t.jsxOpeningElement = t.JSXOpeningElement = function (
          ...e
        ) {
          return (0, i.default)('JSXOpeningElement', ...e)
        }),
        (t.jSXSpreadAttribute = t.jsxSpreadAttribute = t.JSXSpreadAttribute = function (
          ...e
        ) {
          return (0, i.default)('JSXSpreadAttribute', ...e)
        }),
        (t.jSXText = t.jsxText = t.JSXText = function (...e) {
          return (0, i.default)('JSXText', ...e)
        }),
        (t.jSXFragment = t.jsxFragment = t.JSXFragment = function (
          ...e
        ) {
          return (0, i.default)('JSXFragment', ...e)
        }),
        (t.jSXOpeningFragment = t.jsxOpeningFragment = t.JSXOpeningFragment = function (
          ...e
        ) {
          return (0, i.default)('JSXOpeningFragment', ...e)
        }),
        (t.jSXClosingFragment = t.jsxClosingFragment = t.JSXClosingFragment = function (
          ...e
        ) {
          return (0, i.default)('JSXClosingFragment', ...e)
        }),
        (t.noop = t.Noop = function (...e) {
          return (0, i.default)('Noop', ...e)
        }),
        (t.placeholder = t.Placeholder = function (...e) {
          return (0, i.default)('Placeholder', ...e)
        }),
        (t.v8IntrinsicIdentifier = t.V8IntrinsicIdentifier = function (
          ...e
        ) {
          return (0, i.default)('V8IntrinsicIdentifier', ...e)
        }),
        (t.argumentPlaceholder = t.ArgumentPlaceholder = function (
          ...e
        ) {
          return (0, i.default)('ArgumentPlaceholder', ...e)
        }),
        (t.awaitExpression = t.AwaitExpression = function (...e) {
          return (0, i.default)('AwaitExpression', ...e)
        }),
        (t.bindExpression = t.BindExpression = function (...e) {
          return (0, i.default)('BindExpression', ...e)
        }),
        (t.classProperty = t.ClassProperty = function (...e) {
          return (0, i.default)('ClassProperty', ...e)
        }),
        (t.optionalMemberExpression = t.OptionalMemberExpression = function (
          ...e
        ) {
          return (0, i.default)('OptionalMemberExpression', ...e)
        }),
        (t.pipelineTopicExpression = t.PipelineTopicExpression = function (
          ...e
        ) {
          return (0, i.default)('PipelineTopicExpression', ...e)
        }),
        (t.pipelineBareFunction = t.PipelineBareFunction = function (
          ...e
        ) {
          return (0, i.default)('PipelineBareFunction', ...e)
        }),
        (t.pipelinePrimaryTopicReference = t.PipelinePrimaryTopicReference = function (
          ...e
        ) {
          return (0, i.default)('PipelinePrimaryTopicReference', ...e)
        }),
        (t.optionalCallExpression = t.OptionalCallExpression = function (
          ...e
        ) {
          return (0, i.default)('OptionalCallExpression', ...e)
        }),
        (t.classPrivateProperty = t.ClassPrivateProperty = function (
          ...e
        ) {
          return (0, i.default)('ClassPrivateProperty', ...e)
        }),
        (t.classPrivateMethod = t.ClassPrivateMethod = function (
          ...e
        ) {
          return (0, i.default)('ClassPrivateMethod', ...e)
        }),
        (t.import = t.Import = function (...e) {
          return (0, i.default)('Import', ...e)
        }),
        (t.decorator = t.Decorator = function (...e) {
          return (0, i.default)('Decorator', ...e)
        }),
        (t.doExpression = t.DoExpression = function (...e) {
          return (0, i.default)('DoExpression', ...e)
        }),
        (t.exportDefaultSpecifier = t.ExportDefaultSpecifier = function (
          ...e
        ) {
          return (0, i.default)('ExportDefaultSpecifier', ...e)
        }),
        (t.exportNamespaceSpecifier = t.ExportNamespaceSpecifier = function (
          ...e
        ) {
          return (0, i.default)('ExportNamespaceSpecifier', ...e)
        }),
        (t.privateName = t.PrivateName = function (...e) {
          return (0, i.default)('PrivateName', ...e)
        }),
        (t.bigIntLiteral = t.BigIntLiteral = function (...e) {
          return (0, i.default)('BigIntLiteral', ...e)
        }),
        (t.recordExpression = t.RecordExpression = function (...e) {
          return (0, i.default)('RecordExpression', ...e)
        }),
        (t.tupleExpression = t.TupleExpression = function (...e) {
          return (0, i.default)('TupleExpression', ...e)
        }),
        (t.tSParameterProperty = t.tsParameterProperty = t.TSParameterProperty = function (
          ...e
        ) {
          return (0, i.default)('TSParameterProperty', ...e)
        }),
        (t.tSDeclareFunction = t.tsDeclareFunction = t.TSDeclareFunction = function (
          ...e
        ) {
          return (0, i.default)('TSDeclareFunction', ...e)
        }),
        (t.tSDeclareMethod = t.tsDeclareMethod = t.TSDeclareMethod = function (
          ...e
        ) {
          return (0, i.default)('TSDeclareMethod', ...e)
        }),
        (t.tSQualifiedName = t.tsQualifiedName = t.TSQualifiedName = function (
          ...e
        ) {
          return (0, i.default)('TSQualifiedName', ...e)
        }),
        (t.tSCallSignatureDeclaration = t.tsCallSignatureDeclaration = t.TSCallSignatureDeclaration = function (
          ...e
        ) {
          return (0, i.default)('TSCallSignatureDeclaration', ...e)
        }),
        (t.tSConstructSignatureDeclaration = t.tsConstructSignatureDeclaration = t.TSConstructSignatureDeclaration = function (
          ...e
        ) {
          return (0, i.default)(
            'TSConstructSignatureDeclaration',
            ...e
          )
        }),
        (t.tSPropertySignature = t.tsPropertySignature = t.TSPropertySignature = function (
          ...e
        ) {
          return (0, i.default)('TSPropertySignature', ...e)
        }),
        (t.tSMethodSignature = t.tsMethodSignature = t.TSMethodSignature = function (
          ...e
        ) {
          return (0, i.default)('TSMethodSignature', ...e)
        }),
        (t.tSIndexSignature = t.tsIndexSignature = t.TSIndexSignature = function (
          ...e
        ) {
          return (0, i.default)('TSIndexSignature', ...e)
        }),
        (t.tSAnyKeyword = t.tsAnyKeyword = t.TSAnyKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSAnyKeyword', ...e)
        }),
        (t.tSBooleanKeyword = t.tsBooleanKeyword = t.TSBooleanKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSBooleanKeyword', ...e)
        }),
        (t.tSBigIntKeyword = t.tsBigIntKeyword = t.TSBigIntKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSBigIntKeyword', ...e)
        }),
        (t.tSNeverKeyword = t.tsNeverKeyword = t.TSNeverKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSNeverKeyword', ...e)
        }),
        (t.tSNullKeyword = t.tsNullKeyword = t.TSNullKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSNullKeyword', ...e)
        }),
        (t.tSNumberKeyword = t.tsNumberKeyword = t.TSNumberKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSNumberKeyword', ...e)
        }),
        (t.tSObjectKeyword = t.tsObjectKeyword = t.TSObjectKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSObjectKeyword', ...e)
        }),
        (t.tSStringKeyword = t.tsStringKeyword = t.TSStringKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSStringKeyword', ...e)
        }),
        (t.tSSymbolKeyword = t.tsSymbolKeyword = t.TSSymbolKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSSymbolKeyword', ...e)
        }),
        (t.tSUndefinedKeyword = t.tsUndefinedKeyword = t.TSUndefinedKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSUndefinedKeyword', ...e)
        }),
        (t.tSUnknownKeyword = t.tsUnknownKeyword = t.TSUnknownKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSUnknownKeyword', ...e)
        }),
        (t.tSVoidKeyword = t.tsVoidKeyword = t.TSVoidKeyword = function (
          ...e
        ) {
          return (0, i.default)('TSVoidKeyword', ...e)
        }),
        (t.tSThisType = t.tsThisType = t.TSThisType = function (
          ...e
        ) {
          return (0, i.default)('TSThisType', ...e)
        }),
        (t.tSFunctionType = t.tsFunctionType = t.TSFunctionType = function (
          ...e
        ) {
          return (0, i.default)('TSFunctionType', ...e)
        }),
        (t.tSConstructorType = t.tsConstructorType = t.TSConstructorType = function (
          ...e
        ) {
          return (0, i.default)('TSConstructorType', ...e)
        }),
        (t.tSTypeReference = t.tsTypeReference = t.TSTypeReference = function (
          ...e
        ) {
          return (0, i.default)('TSTypeReference', ...e)
        }),
        (t.tSTypePredicate = t.tsTypePredicate = t.TSTypePredicate = function (
          ...e
        ) {
          return (0, i.default)('TSTypePredicate', ...e)
        }),
        (t.tSTypeQuery = t.tsTypeQuery = t.TSTypeQuery = function (
          ...e
        ) {
          return (0, i.default)('TSTypeQuery', ...e)
        }),
        (t.tSTypeLiteral = t.tsTypeLiteral = t.TSTypeLiteral = function (
          ...e
        ) {
          return (0, i.default)('TSTypeLiteral', ...e)
        }),
        (t.tSArrayType = t.tsArrayType = t.TSArrayType = function (
          ...e
        ) {
          return (0, i.default)('TSArrayType', ...e)
        }),
        (t.tSTupleType = t.tsTupleType = t.TSTupleType = function (
          ...e
        ) {
          return (0, i.default)('TSTupleType', ...e)
        }),
        (t.tSOptionalType = t.tsOptionalType = t.TSOptionalType = function (
          ...e
        ) {
          return (0, i.default)('TSOptionalType', ...e)
        }),
        (t.tSRestType = t.tsRestType = t.TSRestType = function (
          ...e
        ) {
          return (0, i.default)('TSRestType', ...e)
        }),
        (t.tSUnionType = t.tsUnionType = t.TSUnionType = function (
          ...e
        ) {
          return (0, i.default)('TSUnionType', ...e)
        }),
        (t.tSIntersectionType = t.tsIntersectionType = t.TSIntersectionType = function (
          ...e
        ) {
          return (0, i.default)('TSIntersectionType', ...e)
        }),
        (t.tSConditionalType = t.tsConditionalType = t.TSConditionalType = function (
          ...e
        ) {
          return (0, i.default)('TSConditionalType', ...e)
        }),
        (t.tSInferType = t.tsInferType = t.TSInferType = function (
          ...e
        ) {
          return (0, i.default)('TSInferType', ...e)
        }),
        (t.tSParenthesizedType = t.tsParenthesizedType = t.TSParenthesizedType = function (
          ...e
        ) {
          return (0, i.default)('TSParenthesizedType', ...e)
        }),
        (t.tSTypeOperator = t.tsTypeOperator = t.TSTypeOperator = function (
          ...e
        ) {
          return (0, i.default)('TSTypeOperator', ...e)
        }),
        (t.tSIndexedAccessType = t.tsIndexedAccessType = t.TSIndexedAccessType = function (
          ...e
        ) {
          return (0, i.default)('TSIndexedAccessType', ...e)
        }),
        (t.tSMappedType = t.tsMappedType = t.TSMappedType = function (
          ...e
        ) {
          return (0, i.default)('TSMappedType', ...e)
        }),
        (t.tSLiteralType = t.tsLiteralType = t.TSLiteralType = function (
          ...e
        ) {
          return (0, i.default)('TSLiteralType', ...e)
        }),
        (t.tSExpressionWithTypeArguments = t.tsExpressionWithTypeArguments = t.TSExpressionWithTypeArguments = function (
          ...e
        ) {
          return (0, i.default)('TSExpressionWithTypeArguments', ...e)
        }),
        (t.tSInterfaceDeclaration = t.tsInterfaceDeclaration = t.TSInterfaceDeclaration = function (
          ...e
        ) {
          return (0, i.default)('TSInterfaceDeclaration', ...e)
        }),
        (t.tSInterfaceBody = t.tsInterfaceBody = t.TSInterfaceBody = function (
          ...e
        ) {
          return (0, i.default)('TSInterfaceBody', ...e)
        }),
        (t.tSTypeAliasDeclaration = t.tsTypeAliasDeclaration = t.TSTypeAliasDeclaration = function (
          ...e
        ) {
          return (0, i.default)('TSTypeAliasDeclaration', ...e)
        }),
        (t.tSAsExpression = t.tsAsExpression = t.TSAsExpression = function (
          ...e
        ) {
          return (0, i.default)('TSAsExpression', ...e)
        }),
        (t.tSTypeAssertion = t.tsTypeAssertion = t.TSTypeAssertion = function (
          ...e
        ) {
          return (0, i.default)('TSTypeAssertion', ...e)
        }),
        (t.tSEnumDeclaration = t.tsEnumDeclaration = t.TSEnumDeclaration = function (
          ...e
        ) {
          return (0, i.default)('TSEnumDeclaration', ...e)
        }),
        (t.tSEnumMember = t.tsEnumMember = t.TSEnumMember = function (
          ...e
        ) {
          return (0, i.default)('TSEnumMember', ...e)
        }),
        (t.tSModuleDeclaration = t.tsModuleDeclaration = t.TSModuleDeclaration = function (
          ...e
        ) {
          return (0, i.default)('TSModuleDeclaration', ...e)
        }),
        (t.tSModuleBlock = t.tsModuleBlock = t.TSModuleBlock = function (
          ...e
        ) {
          return (0, i.default)('TSModuleBlock', ...e)
        }),
        (t.tSImportType = t.tsImportType = t.TSImportType = function (
          ...e
        ) {
          return (0, i.default)('TSImportType', ...e)
        }),
        (t.tSImportEqualsDeclaration = t.tsImportEqualsDeclaration = t.TSImportEqualsDeclaration = function (
          ...e
        ) {
          return (0, i.default)('TSImportEqualsDeclaration', ...e)
        }),
        (t.tSExternalModuleReference = t.tsExternalModuleReference = t.TSExternalModuleReference = function (
          ...e
        ) {
          return (0, i.default)('TSExternalModuleReference', ...e)
        }),
        (t.tSNonNullExpression = t.tsNonNullExpression = t.TSNonNullExpression = function (
          ...e
        ) {
          return (0, i.default)('TSNonNullExpression', ...e)
        }),
        (t.tSExportAssignment = t.tsExportAssignment = t.TSExportAssignment = function (
          ...e
        ) {
          return (0, i.default)('TSExportAssignment', ...e)
        }),
        (t.tSNamespaceExportDeclaration = t.tsNamespaceExportDeclaration = t.TSNamespaceExportDeclaration = function (
          ...e
        ) {
          return (0, i.default)('TSNamespaceExportDeclaration', ...e)
        }),
        (t.tSTypeAnnotation = t.tsTypeAnnotation = t.TSTypeAnnotation = function (
          ...e
        ) {
          return (0, i.default)('TSTypeAnnotation', ...e)
        }),
        (t.tSTypeParameterInstantiation = t.tsTypeParameterInstantiation = t.TSTypeParameterInstantiation = function (
          ...e
        ) {
          return (0, i.default)('TSTypeParameterInstantiation', ...e)
        }),
        (t.tSTypeParameterDeclaration = t.tsTypeParameterDeclaration = t.TSTypeParameterDeclaration = function (
          ...e
        ) {
          return (0, i.default)('TSTypeParameterDeclaration', ...e)
        }),
        (t.tSTypeParameter = t.tsTypeParameter = t.TSTypeParameter = function (
          ...e
        ) {
          return (0, i.default)('TSTypeParameter', ...e)
        }),
        (t.numberLiteral = t.NumberLiteral = function e(...t) {
          return (
            console.trace(
              'The node type NumberLiteral has been renamed to NumericLiteral'
            ),
            e('NumberLiteral', ...t)
          )
        }),
        (t.regexLiteral = t.RegexLiteral = function e(...t) {
          return (
            console.trace(
              'The node type RegexLiteral has been renamed to RegExpLiteral'
            ),
            e('RegexLiteral', ...t)
          )
        }),
        (t.restProperty = t.RestProperty = function e(...t) {
          return (
            console.trace(
              'The node type RestProperty has been renamed to RestElement'
            ),
            e('RestProperty', ...t)
          )
        }),
        (t.spreadProperty = t.SpreadProperty = function e(...t) {
          return (
            console.trace(
              'The node type SpreadProperty has been renamed to SpreadElement'
            ),
            e('SpreadProperty', ...t)
          )
        })
      var r,
        i = (r = n(80)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      var r = n(41),
        i =
          'object' == typeof self &&
          self &&
          self.Object === Object &&
          self,
        a = r || i || Function('return this')()
      e.exports = a
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.validate = y),
        (t.typeIs = T),
        (t.validateType = function (e) {
          return y(T(e))
        }),
        (t.validateOptional = function (e) {
          return { validate: e, optional: !0 }
        }),
        (t.validateOptionalType = function (e) {
          return { validate: T(e), optional: !0 }
        }),
        (t.arrayOf = S),
        (t.arrayOfType = m),
        (t.validateArrayOfType = function (e) {
          return y(m(e))
        }),
        (t.assertEach = E),
        (t.assertOneOf = function (...e) {
          function t(t, n, r) {
            if (e.indexOf(r) < 0)
              throw new TypeError(
                `Property ${n} expected value to be one of ${JSON.stringify(
                  e
                )} but got ${JSON.stringify(r)}`
              )
          }
          return (t.oneOf = e), t
        }),
        (t.assertNodeType = v),
        (t.assertNodeOrValueType = function (...e) {
          function t(t, n, r) {
            for (const o of e)
              if (d(r) === o || (0, i.default)(o, r))
                return void (0, a.validateChild)(t, n, r)
            throw new TypeError(
              `Property ${n} of ${
                t.type
              } expected node to be of a type ${JSON.stringify(
                e
              )} but instead got ${JSON.stringify(r && r.type)}`
            )
          }
          return (t.oneOfNodeOrValueTypes = e), t
        }),
        (t.assertValueType = b),
        (t.assertShape = function (e) {
          function t(t, n, r) {
            const i = []
            for (const n of Object.keys(e))
              try {
                ;(0, a.validateField)(t, n, r[n], e[n])
              } catch (e) {
                if (e instanceof TypeError) {
                  i.push(e.message)
                  continue
                }
                throw e
              }
            if (i.length)
              throw new TypeError(
                `Property ${n} of ${
                  t.type
                } expected to have the following:\n${i.join('\n')}`
              )
          }
          return (t.shapeOf = e), t
        }),
        (t.assertOptionalChainStart = function () {
          return function (e) {
            var t
            let n = e
            for (; e; ) {
              const { type: e } = n
              if ('OptionalCallExpression' !== e) {
                if ('OptionalMemberExpression' !== e) break
                if (n.optional) return
                n = n.object
              } else {
                if (n.optional) return
                n = n.callee
              }
            }
            throw new TypeError(
              `Non-optional ${
                e.type
              } must chain from an optional OptionalMemberExpression or OptionalCallExpression. Found chain from ${
                null == (t = n) ? void 0 : t.type
              }`
            )
          }
        }),
        (t.chain = P),
        (t.default = function (e, t = {}) {
          const n = (t.inherits && O[t.inherits]) || {}
          let r = t.fields
          if (!r && ((r = {}), n.fields)) {
            const e = Object.getOwnPropertyNames(n.fields)
            for (const t of e) {
              const e = n.fields[t]
              r[t] = {
                default: e.default,
                optional: e.optional,
                validate: e.validate,
              }
            }
          }
          const i = t.visitor || n.visitor || [],
            a = t.aliases || n.aliases || [],
            y = t.builder || n.builder || t.visitor || []
          for (const n of Object.keys(t))
            if (-1 === x.indexOf(n))
              throw new Error(`Unknown type option "${n}" on ${e}`)
          t.deprecatedAlias && (f[t.deprecatedAlias] = e)
          for (const e of i.concat(y)) r[e] = r[e] || {}
          for (const t of Object.keys(r)) {
            const n = r[t]
            void 0 !== n.default &&
              -1 === y.indexOf(t) &&
              (n.optional = !0),
              void 0 === n.default
                ? (n.default = null)
                : n.validate ||
                  null == n.default ||
                  (n.validate = b(d(n.default)))
            for (const r of Object.keys(n))
              if (-1 === A.indexOf(r))
                throw new Error(
                  `Unknown field key "${r}" on ${e}.${t}`
                )
          }
          ;(o[e] = t.visitor = i),
            (p[e] = t.builder = y),
            (l[e] = t.fields = r),
            (s[e] = t.aliases = a),
            a.forEach((t) => {
              ;(u[t] = u[t] || []), u[t].push(e)
            }),
            t.validate && (c[e] = t.validate)
          O[e] = t
        }),
        (t.NODE_PARENT_VALIDATIONS = t.DEPRECATED_KEYS = t.BUILDER_KEYS = t.NODE_FIELDS = t.FLIPPED_ALIAS_KEYS = t.ALIAS_KEYS = t.VISITOR_KEYS = void 0)
      var r,
        i = (r = n(11)) && r.__esModule ? r : { default: r },
        a = n(34)
      const o = {}
      t.VISITOR_KEYS = o
      const s = {}
      t.ALIAS_KEYS = s
      const u = {}
      t.FLIPPED_ALIAS_KEYS = u
      const l = {}
      t.NODE_FIELDS = l
      const p = {}
      t.BUILDER_KEYS = p
      const f = {}
      t.DEPRECATED_KEYS = f
      const c = {}
      function d(e) {
        return Array.isArray(e)
          ? 'array'
          : null === e
          ? 'null'
          : typeof e
      }
      function y(e) {
        return { validate: e }
      }
      function T(e) {
        return 'string' == typeof e ? v(e) : v(...e)
      }
      function S(e) {
        return P(b('array'), E(e))
      }
      function m(e) {
        return S(T(e))
      }
      function E(e) {
        function t(t, n, r) {
          if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
              const o = `${n}[${i}]`,
                s = r[i]
              e(t, o, s),
                process.env.BABEL_TYPES_8_BREAKING &&
                  (0, a.validateChild)(t, o, s)
            }
        }
        return (t.each = e), t
      }
      function v(...e) {
        function t(t, n, r) {
          for (const o of e)
            if ((0, i.default)(o, r))
              return void (0, a.validateChild)(t, n, r)
          throw new TypeError(
            `Property ${n} of ${
              t.type
            } expected node to be of a type ${JSON.stringify(
              e
            )} but instead got ${JSON.stringify(r && r.type)}`
          )
        }
        return (t.oneOfNodeTypes = e), t
      }
      function b(e) {
        function t(t, n, r) {
          if (!(d(r) === e))
            throw new TypeError(
              `Property ${n} expected type of ${e} but got ${d(r)}`
            )
        }
        return (t.type = e), t
      }
      function P(...e) {
        function t(...t) {
          for (const n of e) n(...t)
        }
        return (t.chainOf = e), t
      }
      t.NODE_PARENT_VALIDATIONS = c
      const x = [
          'aliases',
          'builder',
          'deprecatedAlias',
          'fields',
          'inherits',
          'visitor',
          'validate',
        ],
        A = ['default', 'optional', 'validate']
      const O = {}
    },
    function (e, t, n) {
      var r = n(94),
        i = n(99)
      e.exports = function (e, t) {
        var n = i(e, t)
        return r(n) ? n : void 0
      }
    },
    function (e, t) {
      e.exports = function (e) {
        return null != e && 'object' == typeof e
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.NOT_LOCAL_BINDING = t.BLOCK_SCOPED_SYMBOL = t.INHERIT_KEYS = t.UNARY_OPERATORS = t.STRING_UNARY_OPERATORS = t.NUMBER_UNARY_OPERATORS = t.BOOLEAN_UNARY_OPERATORS = t.ASSIGNMENT_OPERATORS = t.BINARY_OPERATORS = t.NUMBER_BINARY_OPERATORS = t.BOOLEAN_BINARY_OPERATORS = t.COMPARISON_BINARY_OPERATORS = t.EQUALITY_BINARY_OPERATORS = t.BOOLEAN_NUMBER_BINARY_OPERATORS = t.UPDATE_OPERATORS = t.LOGICAL_OPERATORS = t.COMMENT_KEYS = t.FOR_INIT_KEYS = t.FLATTENABLE_KEYS = t.STATEMENT_OR_BLOCK_KEYS = void 0)
      t.STATEMENT_OR_BLOCK_KEYS = ['consequent', 'body', 'alternate']
      t.FLATTENABLE_KEYS = ['body', 'expressions']
      t.FOR_INIT_KEYS = ['left', 'init']
      t.COMMENT_KEYS = [
        'leadingComments',
        'trailingComments',
        'innerComments',
      ]
      t.LOGICAL_OPERATORS = ['||', '&&', '??']
      t.UPDATE_OPERATORS = ['++', '--']
      const r = ['>', '<', '>=', '<=']
      t.BOOLEAN_NUMBER_BINARY_OPERATORS = r
      const i = ['==', '===', '!=', '!==']
      t.EQUALITY_BINARY_OPERATORS = i
      const a = [...i, 'in', 'instanceof']
      t.COMPARISON_BINARY_OPERATORS = a
      const o = [...a, ...r]
      t.BOOLEAN_BINARY_OPERATORS = o
      const s = [
        '-',
        '/',
        '%',
        '*',
        '**',
        '&',
        '|',
        '>>',
        '>>>',
        '<<',
        '^',
      ]
      t.NUMBER_BINARY_OPERATORS = s
      const u = ['+', ...s, ...o]
      t.BINARY_OPERATORS = u
      const l = ['=', '+=', ...s.map((e) => e + '=')]
      t.ASSIGNMENT_OPERATORS = l
      const p = ['delete', '!']
      t.BOOLEAN_UNARY_OPERATORS = p
      const f = ['+', '-', '~']
      t.NUMBER_UNARY_OPERATORS = f
      const c = ['typeof']
      t.STRING_UNARY_OPERATORS = c
      const d = ['void', 'throw', ...p, ...f, ...c]
      t.UNARY_OPERATORS = d
      t.INHERIT_KEYS = {
        optional: ['typeAnnotation', 'typeParameters', 'returnType'],
        force: ['start', 'loc', 'end'],
      }
      const y = Symbol.for('var used to be block scoped')
      t.BLOCK_SCOPED_SYMBOL = y
      const T = Symbol.for('should not be considered a local binding')
      t.NOT_LOCAL_BINDING = T
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = s)
      var r = n(1)
      const i = Function.call.bind(Object.prototype.hasOwnProperty)
      function a(e, t, n) {
        return e && 'string' == typeof e.type ? s(e, t, n) : e
      }
      function o(e, t, n) {
        return Array.isArray(e)
          ? e.map((e) => a(e, t, n))
          : a(e, t, n)
      }
      function s(e, t = !0, n = !1) {
        if (!e) return e
        const { type: a } = e,
          s = { type: a }
        if ('Identifier' === a)
          (s.name = e.name),
            i(e, 'optional') &&
              'boolean' == typeof e.optional &&
              (s.optional = e.optional),
            i(e, 'typeAnnotation') &&
              (s.typeAnnotation = t
                ? o(e.typeAnnotation, !0, n)
                : e.typeAnnotation)
        else {
          if (!i(r.NODE_FIELDS, a))
            throw new Error(`Unknown node type: "${a}"`)
          for (const l of Object.keys(r.NODE_FIELDS[a]))
            i(e, l) &&
              (s[l] = t
                ? 'File' === a && 'comments' === l
                  ? u(e.comments, t, n)
                  : o(e[l], !0, n)
                : e[l])
        }
        return (
          i(e, 'loc') && (s.loc = n ? null : e.loc),
          i(e, 'leadingComments') &&
            (s.leadingComments = u(e.leadingComments, t, n)),
          i(e, 'innerComments') &&
            (s.innerComments = u(e.innerComments, t, n)),
          i(e, 'trailingComments') &&
            (s.trailingComments = u(e.trailingComments, t, n)),
          i(e, 'extra') && (s.extra = Object.assign({}, e.extra)),
          s
        )
      }
      function u(e, t, n) {
        return t && n
          ? (function (e) {
              return e.map(({ type: e, value: t }) => ({
                type: e,
                value: t,
                loc: null,
              }))
            })(e)
          : e
      }
    },
    function (e, t, n) {
      var r = n(23),
        i = n(95),
        a = n(96),
        o = r ? r.toStringTag : void 0
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : o && o in Object(e)
          ? i(e)
          : a(e)
      }
    },
    function (e, t) {
      e.exports = function (e) {
        var t = typeof e
        return null != e && ('object' == t || 'function' == t)
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n) {
          if (!t) return !1
          if (!(0, i.default)(t.type, e))
            return (
              !n &&
              'Placeholder' === t.type &&
              e in o.FLIPPED_ALIAS_KEYS &&
              (0, a.default)(t.expectedNode, e)
            )
          return void 0 === n || (0, r.default)(t, n)
        })
      var r = s(n(21)),
        i = s(n(33)),
        a = s(n(57)),
        o = n(1)
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t = !0) {
          if ('string' != typeof e) return !1
          if (t) {
            if ((0, r.isKeyword)(e) || (0, r.isStrictReservedWord)(e))
              return !1
            if ('await' === e) return !1
          }
          return (0, r.isIdentifierName)(e)
        })
      var r = n(58)
    },
    function (e, t, n) {
      var r = n(84),
        i = n(85),
        a = n(86),
        o = n(87),
        s = n(88)
      function u(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++t < n; ) {
          var r = e[t]
          this.set(r[0], r[1])
        }
      }
      ;(u.prototype.clear = r),
        (u.prototype.delete = i),
        (u.prototype.get = a),
        (u.prototype.has = o),
        (u.prototype.set = s),
        (e.exports = u)
    },
    function (e, t, n) {
      var r = n(39)
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n
        return -1
      }
    },
    function (e, t, n) {
      var r = n(5)(Object, 'create')
      e.exports = r
    },
    function (e, t, n) {
      var r = n(108)
      e.exports = function (e, t) {
        var n = e.__data__
        return r(t)
          ? n['string' == typeof t ? 'string' : 'hash']
          : n.map
      }
    },
    function (e, t, n) {
      var r = n(44),
        i = n(45)
      e.exports = function (e, t, n, a) {
        var o = !n
        n || (n = {})
        for (var s = -1, u = t.length; ++s < u; ) {
          var l = t[s],
            p = a ? a(n[l], e[l], l, n, e) : void 0
          void 0 === p && (p = e[l]), o ? i(n, l, p) : r(n, l, p)
        }
        return n
      }
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return e(t)
        }
      }
    },
    function (e, t, n) {
      ;(function (e) {
        var r = n(41),
          i = t && !t.nodeType && t,
          a = i && 'object' == typeof e && e && !e.nodeType && e,
          o = a && a.exports === i && r.process,
          s = (function () {
            try {
              var e = a && a.require && a.require('util').types
              return e || (o && o.binding && o.binding('util'))
            } catch (e) {}
          })()
        e.exports = s
      }.call(this, n(26)(e)))
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = i)
      var r = n(0)
      function i(e, t, n) {
        let a = [].concat(e)
        const o = Object.create(null)
        for (; a.length; ) {
          const e = a.shift()
          if (!e) continue
          const s = i.keys[e.type]
          if ((0, r.isIdentifier)(e))
            if (t) {
              ;(o[e.name] = o[e.name] || []).push(e)
            } else o[e.name] = e
          else if ((0, r.isExportDeclaration)(e))
            (0, r.isDeclaration)(e.declaration) &&
              a.push(e.declaration)
          else {
            if (n) {
              if ((0, r.isFunctionDeclaration)(e)) {
                a.push(e.id)
                continue
              }
              if ((0, r.isFunctionExpression)(e)) continue
            }
            if (s)
              for (let t = 0; t < s.length; t++) {
                const n = s[t]
                e[n] && (a = a.concat(e[n]))
              }
          }
        }
        return o
      }
      i.keys = {
        DeclareClass: ['id'],
        DeclareFunction: ['id'],
        DeclareModule: ['id'],
        DeclareVariable: ['id'],
        DeclareInterface: ['id'],
        DeclareTypeAlias: ['id'],
        DeclareOpaqueType: ['id'],
        InterfaceDeclaration: ['id'],
        TypeAlias: ['id'],
        OpaqueType: ['id'],
        CatchClause: ['param'],
        LabeledStatement: ['label'],
        UnaryExpression: ['argument'],
        AssignmentExpression: ['left'],
        ImportSpecifier: ['local'],
        ImportNamespaceSpecifier: ['local'],
        ImportDefaultSpecifier: ['local'],
        ImportDeclaration: ['specifiers'],
        ExportSpecifier: ['exported'],
        ExportNamespaceSpecifier: ['exported'],
        ExportDefaultSpecifier: ['exported'],
        FunctionDeclaration: ['id', 'params'],
        FunctionExpression: ['id', 'params'],
        ArrowFunctionExpression: ['params'],
        ObjectMethod: ['params'],
        ClassMethod: ['params'],
        ForInStatement: ['left'],
        ForOfStatement: ['left'],
        ClassDeclaration: ['id'],
        ClassExpression: ['id'],
        RestElement: ['argument'],
        UpdateExpression: ['argument'],
        ObjectProperty: ['value'],
        AssignmentPattern: ['left'],
        ArrayPattern: ['elements'],
        ObjectPattern: ['properties'],
        VariableDeclaration: ['declarations'],
        VariableDeclarator: ['id'],
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          const n = Object.keys(t)
          for (const r of n) if (e[r] !== t[r]) return !1
          return !0
        })
    },
    function (e, t, n) {
      var r = n(5)(n(3), 'Map')
      e.exports = r
    },
    function (e, t, n) {
      var r = n(3).Symbol
      e.exports = r
    },
    function (e, t, n) {
      var r = n(46),
        i = n(122),
        a = n(50)
      e.exports = function (e) {
        return a(e) ? r(e) : i(e)
      }
    },
    function (e, t) {
      var n = Array.isArray
      e.exports = n
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        )
      }
    },
    function (e, t) {
      var n = Object.prototype
      e.exports = function (e) {
        var t = e && e.constructor
        return e === (('function' == typeof t && t.prototype) || n)
      }
    },
    function (e, t, n) {
      var r = n(130),
        i = n(52),
        a = Object.prototype.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        s = o
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  r(o(e), function (t) {
                    return a.call(e, t)
                  }))
            }
          : i
      e.exports = s
    },
    function (e, t, n) {
      var r = n(49)(Object.getPrototypeOf, Object)
      e.exports = r
    },
    function (e, t, n) {
      var r = n(134),
        i = n(22),
        a = n(135),
        o = n(56),
        s = n(136),
        u = n(9),
        l = n(42),
        p = l(r),
        f = l(i),
        c = l(a),
        d = l(o),
        y = l(s),
        T = u
      ;((r && '[object DataView]' != T(new r(new ArrayBuffer(1)))) ||
        (i && '[object Map]' != T(new i())) ||
        (a && '[object Promise]' != T(a.resolve())) ||
        (o && '[object Set]' != T(new o())) ||
        (s && '[object WeakMap]' != T(new s()))) &&
        (T = function (e) {
          var t = u(e),
            n = '[object Object]' == t ? e.constructor : void 0,
            r = n ? l(n) : ''
          if (r)
            switch (r) {
              case p:
                return '[object DataView]'
              case f:
                return '[object Map]'
              case c:
                return '[object Promise]'
              case d:
                return '[object Set]'
              case y:
                return '[object WeakMap]'
            }
          return t
        }),
        (e.exports = T)
    },
    function (e, t, n) {
      var r = n(139)
      e.exports = function (e) {
        var t = new e.constructor(e.byteLength)
        return new r(t).set(new r(e)), t
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.patternLikeCommon = t.functionDeclarationCommon = t.functionTypeAnnotationCommon = t.functionCommon = void 0)
      var r = l(n(11)),
        i = l(n(12)),
        a = n(58),
        o = n(7),
        s = (function (e) {
          if (e && e.__esModule) return e
          if (
            null === e ||
            ('object' != typeof e && 'function' != typeof e)
          )
            return { default: e }
          var t = u()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r =
              Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, i) : null
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n(4))
      function u() {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (u = function () {
            return e
          }),
          e
        )
      }
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      ;(0, s.default)('ArrayExpression', {
        fields: {
          elements: {
            validate: (0, s.chain)(
              (0, s.assertValueType)('array'),
              (0, s.assertEach)(
                (0, s.assertNodeOrValueType)(
                  'null',
                  'Expression',
                  'SpreadElement'
                )
              )
            ),
            default: process.env.BABEL_TYPES_8_BREAKING ? void 0 : [],
          },
        },
        visitor: ['elements'],
        aliases: ['Expression'],
      }),
        (0, s.default)('AssignmentExpression', {
          fields: {
            operator: {
              validate: (function () {
                if (!process.env.BABEL_TYPES_8_BREAKING)
                  return (0, s.assertValueType)('string')
                const e = (0, s.assertOneOf)(
                    ...o.ASSIGNMENT_OPERATORS
                  ),
                  t = (0, s.assertOneOf)('=')
                return function (n, i, a) {
                  ;((0, r.default)('Pattern', n.left) ? t : e)(
                    n,
                    i,
                    a
                  )
                }
              })(),
            },
            left: {
              validate: process.env.BABEL_TYPES_8_BREAKING
                ? (0, s.assertNodeType)(
                    'Identifier',
                    'MemberExpression',
                    'ArrayPattern',
                    'ObjectPattern'
                  )
                : (0, s.assertNodeType)('LVal'),
            },
            right: { validate: (0, s.assertNodeType)('Expression') },
          },
          builder: ['operator', 'left', 'right'],
          visitor: ['left', 'right'],
          aliases: ['Expression'],
        }),
        (0, s.default)('BinaryExpression', {
          builder: ['operator', 'left', 'right'],
          fields: {
            operator: {
              validate: (0, s.assertOneOf)(...o.BINARY_OPERATORS),
            },
            left: { validate: (0, s.assertNodeType)('Expression') },
            right: { validate: (0, s.assertNodeType)('Expression') },
          },
          visitor: ['left', 'right'],
          aliases: ['Binary', 'Expression'],
        }),
        (0, s.default)('InterpreterDirective', {
          builder: ['value'],
          fields: {
            value: { validate: (0, s.assertValueType)('string') },
          },
        }),
        (0, s.default)('Directive', {
          visitor: ['value'],
          fields: {
            value: {
              validate: (0, s.assertNodeType)('DirectiveLiteral'),
            },
          },
        }),
        (0, s.default)('DirectiveLiteral', {
          builder: ['value'],
          fields: {
            value: { validate: (0, s.assertValueType)('string') },
          },
        }),
        (0, s.default)('BlockStatement', {
          builder: ['body', 'directives'],
          visitor: ['directives', 'body'],
          fields: {
            directives: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)((0, s.assertNodeType)('Directive'))
              ),
              default: [],
            },
            body: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)((0, s.assertNodeType)('Statement'))
              ),
            },
          },
          aliases: ['Scopable', 'BlockParent', 'Block', 'Statement'],
        }),
        (0, s.default)('BreakStatement', {
          visitor: ['label'],
          fields: {
            label: {
              validate: (0, s.assertNodeType)('Identifier'),
              optional: !0,
            },
          },
          aliases: [
            'Statement',
            'Terminatorless',
            'CompletionStatement',
          ],
        }),
        (0, s.default)('CallExpression', {
          visitor: [
            'callee',
            'arguments',
            'typeParameters',
            'typeArguments',
          ],
          builder: ['callee', 'arguments'],
          aliases: ['Expression'],
          fields: Object.assign(
            {
              callee: {
                validate: (0, s.assertNodeType)(
                  'Expression',
                  'V8IntrinsicIdentifier'
                ),
              },
              arguments: {
                validate: (0, s.chain)(
                  (0, s.assertValueType)('array'),
                  (0, s.assertEach)(
                    (0, s.assertNodeType)(
                      'Expression',
                      'SpreadElement',
                      'JSXNamespacedName',
                      'ArgumentPlaceholder'
                    )
                  )
                ),
              },
            },
            process.env.BABEL_TYPES_8_BREAKING
              ? {}
              : {
                  optional: {
                    validate: (0, s.assertOneOf)(!0, !1),
                    optional: !0,
                  },
                },
            {
              typeArguments: {
                validate: (0, s.assertNodeType)(
                  'TypeParameterInstantiation'
                ),
                optional: !0,
              },
              typeParameters: {
                validate: (0, s.assertNodeType)(
                  'TSTypeParameterInstantiation'
                ),
                optional: !0,
              },
            }
          ),
        }),
        (0, s.default)('CatchClause', {
          visitor: ['param', 'body'],
          fields: {
            param: {
              validate: (0, s.assertNodeType)(
                'Identifier',
                'ArrayPattern',
                'ObjectPattern'
              ),
              optional: !0,
            },
            body: {
              validate: (0, s.assertNodeType)('BlockStatement'),
            },
          },
          aliases: ['Scopable', 'BlockParent'],
        }),
        (0, s.default)('ConditionalExpression', {
          visitor: ['test', 'consequent', 'alternate'],
          fields: {
            test: { validate: (0, s.assertNodeType)('Expression') },
            consequent: {
              validate: (0, s.assertNodeType)('Expression'),
            },
            alternate: {
              validate: (0, s.assertNodeType)('Expression'),
            },
          },
          aliases: ['Expression', 'Conditional'],
        }),
        (0, s.default)('ContinueStatement', {
          visitor: ['label'],
          fields: {
            label: {
              validate: (0, s.assertNodeType)('Identifier'),
              optional: !0,
            },
          },
          aliases: [
            'Statement',
            'Terminatorless',
            'CompletionStatement',
          ],
        }),
        (0, s.default)('DebuggerStatement', {
          aliases: ['Statement'],
        }),
        (0, s.default)('DoWhileStatement', {
          visitor: ['test', 'body'],
          fields: {
            test: { validate: (0, s.assertNodeType)('Expression') },
            body: { validate: (0, s.assertNodeType)('Statement') },
          },
          aliases: [
            'Statement',
            'BlockParent',
            'Loop',
            'While',
            'Scopable',
          ],
        }),
        (0, s.default)('EmptyStatement', { aliases: ['Statement'] }),
        (0, s.default)('ExpressionStatement', {
          visitor: ['expression'],
          fields: {
            expression: {
              validate: (0, s.assertNodeType)('Expression'),
            },
          },
          aliases: ['Statement', 'ExpressionWrapper'],
        }),
        (0, s.default)('File', {
          builder: ['program', 'comments', 'tokens'],
          visitor: ['program'],
          fields: {
            program: { validate: (0, s.assertNodeType)('Program') },
          },
        }),
        (0, s.default)('ForInStatement', {
          visitor: ['left', 'right', 'body'],
          aliases: [
            'Scopable',
            'Statement',
            'For',
            'BlockParent',
            'Loop',
            'ForXStatement',
          ],
          fields: {
            left: {
              validate: process.env.BABEL_TYPES_8_BREAKING
                ? (0, s.assertNodeType)(
                    'VariableDeclaration',
                    'Identifier',
                    'MemberExpression',
                    'ArrayPattern',
                    'ObjectPattern'
                  )
                : (0, s.assertNodeType)(
                    'VariableDeclaration',
                    'LVal'
                  ),
            },
            right: { validate: (0, s.assertNodeType)('Expression') },
            body: { validate: (0, s.assertNodeType)('Statement') },
          },
        }),
        (0, s.default)('ForStatement', {
          visitor: ['init', 'test', 'update', 'body'],
          aliases: [
            'Scopable',
            'Statement',
            'For',
            'BlockParent',
            'Loop',
          ],
          fields: {
            init: {
              validate: (0, s.assertNodeType)(
                'VariableDeclaration',
                'Expression'
              ),
              optional: !0,
            },
            test: {
              validate: (0, s.assertNodeType)('Expression'),
              optional: !0,
            },
            update: {
              validate: (0, s.assertNodeType)('Expression'),
              optional: !0,
            },
            body: { validate: (0, s.assertNodeType)('Statement') },
          },
        })
      const p = {
        params: {
          validate: (0, s.chain)(
            (0, s.assertValueType)('array'),
            (0, s.assertEach)(
              (0, s.assertNodeType)(
                'Identifier',
                'Pattern',
                'RestElement',
                'TSParameterProperty'
              )
            )
          ),
        },
        generator: { default: !1 },
        async: { default: !1 },
      }
      t.functionCommon = p
      const f = {
        returnType: {
          validate: (0, s.assertNodeType)(
            'TypeAnnotation',
            'TSTypeAnnotation',
            'Noop'
          ),
          optional: !0,
        },
        typeParameters: {
          validate: (0, s.assertNodeType)(
            'TypeParameterDeclaration',
            'TSTypeParameterDeclaration',
            'Noop'
          ),
          optional: !0,
        },
      }
      t.functionTypeAnnotationCommon = f
      const c = Object.assign({}, p, {
        declare: {
          validate: (0, s.assertValueType)('boolean'),
          optional: !0,
        },
        id: {
          validate: (0, s.assertNodeType)('Identifier'),
          optional: !0,
        },
      })
      ;(t.functionDeclarationCommon = c),
        (0, s.default)('FunctionDeclaration', {
          builder: ['id', 'params', 'body', 'generator', 'async'],
          visitor: [
            'id',
            'params',
            'body',
            'returnType',
            'typeParameters',
          ],
          fields: Object.assign({}, c, {}, f, {
            body: {
              validate: (0, s.assertNodeType)('BlockStatement'),
            },
          }),
          aliases: [
            'Scopable',
            'Function',
            'BlockParent',
            'FunctionParent',
            'Statement',
            'Pureish',
            'Declaration',
          ],
          validate: (function () {
            if (!process.env.BABEL_TYPES_8_BREAKING) return () => {}
            const e = (0, s.assertNodeType)('Identifier')
            return function (t, n, i) {
              ;(0, r.default)('ExportDefaultDeclaration', t) ||
                e(i, 'id', i.id)
            }
          })(),
        }),
        (0, s.default)('FunctionExpression', {
          inherits: 'FunctionDeclaration',
          aliases: [
            'Scopable',
            'Function',
            'BlockParent',
            'FunctionParent',
            'Expression',
            'Pureish',
          ],
          fields: Object.assign({}, p, {}, f, {
            id: {
              validate: (0, s.assertNodeType)('Identifier'),
              optional: !0,
            },
            body: {
              validate: (0, s.assertNodeType)('BlockStatement'),
            },
          }),
        })
      const d = {
        typeAnnotation: {
          validate: (0, s.assertNodeType)(
            'TypeAnnotation',
            'TSTypeAnnotation',
            'Noop'
          ),
          optional: !0,
        },
        decorators: {
          validate: (0, s.chain)(
            (0, s.assertValueType)('array'),
            (0, s.assertEach)((0, s.assertNodeType)('Decorator'))
          ),
        },
      }
      ;(t.patternLikeCommon = d),
        (0, s.default)('Identifier', {
          builder: ['name'],
          visitor: ['typeAnnotation', 'decorators'],
          aliases: [
            'Expression',
            'PatternLike',
            'LVal',
            'TSEntityName',
          ],
          fields: Object.assign({}, d, {
            name: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('string'),
                function (e, t, n) {
                  if (
                    process.env.BABEL_TYPES_8_BREAKING &&
                    !(0, i.default)(n, !1)
                  )
                    throw new TypeError(
                      `"${n}" is not a valid identifier name`
                    )
                }
              ),
            },
            optional: {
              validate: (0, s.assertValueType)('boolean'),
              optional: !0,
            },
          }),
          validate(e, t, n) {
            if (!process.env.BABEL_TYPES_8_BREAKING) return
            const i = /\.(\w+)$/.exec(t)
            if (!i) return
            const [, o] = i,
              s = { computed: !1 }
            if ('property' === o) {
              if ((0, r.default)('MemberExpression', e, s)) return
              if ((0, r.default)('OptionalMemberExpression', e, s))
                return
            } else if ('key' === o) {
              if ((0, r.default)('Property', e, s)) return
              if ((0, r.default)('Method', e, s)) return
            } else if ('exported' === o) {
              if ((0, r.default)('ExportSpecifier', e)) return
            } else if ('imported' === o) {
              if (
                (0, r.default)('ImportSpecifier', e, { imported: n })
              )
                return
            } else if (
              'meta' === o &&
              (0, r.default)('MetaProperty', e, { meta: n })
            )
              return
            if (
              ((0, a.isKeyword)(n.name) ||
                (0, a.isReservedWord)(n.name)) &&
              'this' !== n.name
            )
              throw new TypeError(
                `"${n.name}" is not a valid identifier`
              )
          },
        }),
        (0, s.default)('IfStatement', {
          visitor: ['test', 'consequent', 'alternate'],
          aliases: ['Statement', 'Conditional'],
          fields: {
            test: { validate: (0, s.assertNodeType)('Expression') },
            consequent: {
              validate: (0, s.assertNodeType)('Statement'),
            },
            alternate: {
              optional: !0,
              validate: (0, s.assertNodeType)('Statement'),
            },
          },
        }),
        (0, s.default)('LabeledStatement', {
          visitor: ['label', 'body'],
          aliases: ['Statement'],
          fields: {
            label: { validate: (0, s.assertNodeType)('Identifier') },
            body: { validate: (0, s.assertNodeType)('Statement') },
          },
        }),
        (0, s.default)('StringLiteral', {
          builder: ['value'],
          fields: {
            value: { validate: (0, s.assertValueType)('string') },
          },
          aliases: ['Expression', 'Pureish', 'Literal', 'Immutable'],
        }),
        (0, s.default)('NumericLiteral', {
          builder: ['value'],
          deprecatedAlias: 'NumberLiteral',
          fields: {
            value: { validate: (0, s.assertValueType)('number') },
          },
          aliases: ['Expression', 'Pureish', 'Literal', 'Immutable'],
        }),
        (0, s.default)('NullLiteral', {
          aliases: ['Expression', 'Pureish', 'Literal', 'Immutable'],
        }),
        (0, s.default)('BooleanLiteral', {
          builder: ['value'],
          fields: {
            value: { validate: (0, s.assertValueType)('boolean') },
          },
          aliases: ['Expression', 'Pureish', 'Literal', 'Immutable'],
        }),
        (0, s.default)('RegExpLiteral', {
          builder: ['pattern', 'flags'],
          deprecatedAlias: 'RegexLiteral',
          aliases: ['Expression', 'Pureish', 'Literal'],
          fields: {
            pattern: { validate: (0, s.assertValueType)('string') },
            flags: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('string'),
                function (e, t, n) {
                  if (!process.env.BABEL_TYPES_8_BREAKING) return
                  const r = /[^gimsuy]/.exec(n)
                  if (r)
                    throw new TypeError(
                      `"${r[0]}" is not a valid RegExp flag`
                    )
                }
              ),
              default: '',
            },
          },
        }),
        (0, s.default)('LogicalExpression', {
          builder: ['operator', 'left', 'right'],
          visitor: ['left', 'right'],
          aliases: ['Binary', 'Expression'],
          fields: {
            operator: {
              validate: (0, s.assertOneOf)(...o.LOGICAL_OPERATORS),
            },
            left: { validate: (0, s.assertNodeType)('Expression') },
            right: { validate: (0, s.assertNodeType)('Expression') },
          },
        }),
        (0, s.default)('MemberExpression', {
          builder: ['object', 'property', 'computed', 'optional'],
          visitor: ['object', 'property'],
          aliases: ['Expression', 'LVal'],
          fields: Object.assign(
            {
              object: {
                validate: (0, s.assertNodeType)('Expression'),
              },
              property: {
                validate: (function () {
                  const e = (0, s.assertNodeType)(
                      'Identifier',
                      'PrivateName'
                    ),
                    t = (0, s.assertNodeType)('Expression')
                  return function (n, r, i) {
                    ;(n.computed ? t : e)(n, r, i)
                  }
                })(),
              },
              computed: { default: !1 },
            },
            process.env.BABEL_TYPES_8_BREAKING
              ? {}
              : {
                  optional: {
                    validate: (0, s.assertOneOf)(!0, !1),
                    optional: !0,
                  },
                }
          ),
        }),
        (0, s.default)('NewExpression', {
          inherits: 'CallExpression',
        }),
        (0, s.default)('Program', {
          visitor: ['directives', 'body'],
          builder: [
            'body',
            'directives',
            'sourceType',
            'interpreter',
          ],
          fields: {
            sourceFile: {
              validate: (0, s.assertValueType)('string'),
            },
            sourceType: {
              validate: (0, s.assertOneOf)('script', 'module'),
              default: 'script',
            },
            interpreter: {
              validate: (0, s.assertNodeType)('InterpreterDirective'),
              default: null,
              optional: !0,
            },
            directives: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)((0, s.assertNodeType)('Directive'))
              ),
              default: [],
            },
            body: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)((0, s.assertNodeType)('Statement'))
              ),
            },
          },
          aliases: ['Scopable', 'BlockParent', 'Block'],
        }),
        (0, s.default)('ObjectExpression', {
          visitor: ['properties'],
          aliases: ['Expression'],
          fields: {
            properties: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)(
                  (0, s.assertNodeType)(
                    'ObjectMethod',
                    'ObjectProperty',
                    'SpreadElement'
                  )
                )
              ),
            },
          },
        }),
        (0, s.default)('ObjectMethod', {
          builder: [
            'kind',
            'key',
            'params',
            'body',
            'computed',
            'generator',
            'async',
          ],
          fields: Object.assign({}, p, {}, f, {
            kind: Object.assign(
              {
                validate: (0, s.assertOneOf)('method', 'get', 'set'),
              },
              process.env.BABEL_TYPES_8_BREAKING
                ? {}
                : { default: 'method' }
            ),
            computed: { default: !1 },
            key: {
              validate: (function () {
                const e = (0, s.assertNodeType)(
                    'Identifier',
                    'StringLiteral',
                    'NumericLiteral'
                  ),
                  t = (0, s.assertNodeType)('Expression')
                return function (n, r, i) {
                  ;(n.computed ? t : e)(n, r, i)
                }
              })(),
            },
            decorators: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)((0, s.assertNodeType)('Decorator'))
              ),
              optional: !0,
            },
            body: {
              validate: (0, s.assertNodeType)('BlockStatement'),
            },
          }),
          visitor: [
            'key',
            'params',
            'body',
            'decorators',
            'returnType',
            'typeParameters',
          ],
          aliases: [
            'UserWhitespacable',
            'Function',
            'Scopable',
            'BlockParent',
            'FunctionParent',
            'Method',
            'ObjectMember',
          ],
        }),
        (0, s.default)('ObjectProperty', {
          builder: [
            'key',
            'value',
            'computed',
            'shorthand',
            ...(process.env.BABEL_TYPES_8_BREAKING
              ? []
              : ['decorators']),
          ],
          fields: {
            computed: { default: !1 },
            key: {
              validate: (function () {
                const e = (0, s.assertNodeType)(
                    'Identifier',
                    'StringLiteral',
                    'NumericLiteral'
                  ),
                  t = (0, s.assertNodeType)('Expression')
                return function (n, r, i) {
                  ;(n.computed ? t : e)(n, r, i)
                }
              })(),
            },
            value: {
              validate: (0, s.assertNodeType)(
                'Expression',
                'PatternLike'
              ),
            },
            shorthand: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('boolean'),
                function (e, t, n) {
                  if (
                    process.env.BABEL_TYPES_8_BREAKING &&
                    n &&
                    e.computed
                  )
                    throw new TypeError(
                      'Property shorthand of ObjectProperty cannot be true if computed is true'
                    )
                },
                function (e, t, n) {
                  if (
                    process.env.BABEL_TYPES_8_BREAKING &&
                    n &&
                    !(0, r.default)('Identifier', e.key)
                  )
                    throw new TypeError(
                      'Property shorthand of ObjectProperty cannot be true if key is not an Identifier'
                    )
                }
              ),
              default: !1,
            },
            decorators: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)((0, s.assertNodeType)('Decorator'))
              ),
              optional: !0,
            },
          },
          visitor: ['key', 'value', 'decorators'],
          aliases: ['UserWhitespacable', 'Property', 'ObjectMember'],
          validate: (function () {
            const e = (0, s.assertNodeType)('Identifier', 'Pattern'),
              t = (0, s.assertNodeType)('Expression')
            return function (n, i, a) {
              if (!process.env.BABEL_TYPES_8_BREAKING) return
              ;((0, r.default)('ObjectPattern', n) ? e : t)(
                a,
                'value',
                a.value
              )
            }
          })(),
        }),
        (0, s.default)('RestElement', {
          visitor: ['argument', 'typeAnnotation'],
          builder: ['argument'],
          aliases: ['LVal', 'PatternLike'],
          deprecatedAlias: 'RestProperty',
          fields: Object.assign({}, d, {
            argument: {
              validate: process.env.BABEL_TYPES_8_BREAKING
                ? (0, s.assertNodeType)(
                    'Identifier',
                    'Pattern',
                    'MemberExpression'
                  )
                : (0, s.assertNodeType)('LVal'),
            },
          }),
          validate(e, t) {
            if (!process.env.BABEL_TYPES_8_BREAKING) return
            const n = /(\w+)\[(\d+)\]/.exec(t)
            if (!n)
              throw new Error('Internal Babel error: malformed key.')
            const [, r, i] = n
            if (e[r].length > i + 1)
              throw new TypeError(
                `RestElement must be last element of ${r}`
              )
          },
        }),
        (0, s.default)('ReturnStatement', {
          visitor: ['argument'],
          aliases: [
            'Statement',
            'Terminatorless',
            'CompletionStatement',
          ],
          fields: {
            argument: {
              validate: (0, s.assertNodeType)('Expression'),
              optional: !0,
            },
          },
        }),
        (0, s.default)('SequenceExpression', {
          visitor: ['expressions'],
          fields: {
            expressions: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)((0, s.assertNodeType)('Expression'))
              ),
            },
          },
          aliases: ['Expression'],
        }),
        (0, s.default)('ParenthesizedExpression', {
          visitor: ['expression'],
          aliases: ['Expression', 'ExpressionWrapper'],
          fields: {
            expression: {
              validate: (0, s.assertNodeType)('Expression'),
            },
          },
        }),
        (0, s.default)('SwitchCase', {
          visitor: ['test', 'consequent'],
          fields: {
            test: {
              validate: (0, s.assertNodeType)('Expression'),
              optional: !0,
            },
            consequent: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)((0, s.assertNodeType)('Statement'))
              ),
            },
          },
        }),
        (0, s.default)('SwitchStatement', {
          visitor: ['discriminant', 'cases'],
          aliases: ['Statement', 'BlockParent', 'Scopable'],
          fields: {
            discriminant: {
              validate: (0, s.assertNodeType)('Expression'),
            },
            cases: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)((0, s.assertNodeType)('SwitchCase'))
              ),
            },
          },
        }),
        (0, s.default)('ThisExpression', { aliases: ['Expression'] }),
        (0, s.default)('ThrowStatement', {
          visitor: ['argument'],
          aliases: [
            'Statement',
            'Terminatorless',
            'CompletionStatement',
          ],
          fields: {
            argument: {
              validate: (0, s.assertNodeType)('Expression'),
            },
          },
        }),
        (0, s.default)('TryStatement', {
          visitor: ['block', 'handler', 'finalizer'],
          aliases: ['Statement'],
          fields: {
            block: {
              validate: (0, s.chain)(
                (0, s.assertNodeType)('BlockStatement'),
                function (e) {
                  if (
                    process.env.BABEL_TYPES_8_BREAKING &&
                    !e.handler &&
                    !e.finalizer
                  )
                    throw new TypeError(
                      'TryStatement expects either a handler or finalizer, or both'
                    )
                }
              ),
            },
            handler: {
              optional: !0,
              validate: (0, s.assertNodeType)('CatchClause'),
            },
            finalizer: {
              optional: !0,
              validate: (0, s.assertNodeType)('BlockStatement'),
            },
          },
        }),
        (0, s.default)('UnaryExpression', {
          builder: ['operator', 'argument', 'prefix'],
          fields: {
            prefix: { default: !0 },
            argument: {
              validate: (0, s.assertNodeType)('Expression'),
            },
            operator: {
              validate: (0, s.assertOneOf)(...o.UNARY_OPERATORS),
            },
          },
          visitor: ['argument'],
          aliases: ['UnaryLike', 'Expression'],
        }),
        (0, s.default)('UpdateExpression', {
          builder: ['operator', 'argument', 'prefix'],
          fields: {
            prefix: { default: !1 },
            argument: {
              validate: process.env.BABEL_TYPES_8_BREAKING
                ? (0, s.assertNodeType)(
                    'Identifier',
                    'MemberExpression'
                  )
                : (0, s.assertNodeType)('Expression'),
            },
            operator: {
              validate: (0, s.assertOneOf)(...o.UPDATE_OPERATORS),
            },
          },
          visitor: ['argument'],
          aliases: ['Expression'],
        }),
        (0, s.default)('VariableDeclaration', {
          builder: ['kind', 'declarations'],
          visitor: ['declarations'],
          aliases: ['Statement', 'Declaration'],
          fields: {
            declare: {
              validate: (0, s.assertValueType)('boolean'),
              optional: !0,
            },
            kind: {
              validate: (0, s.assertOneOf)('var', 'let', 'const'),
            },
            declarations: {
              validate: (0, s.chain)(
                (0, s.assertValueType)('array'),
                (0, s.assertEach)(
                  (0, s.assertNodeType)('VariableDeclarator')
                )
              ),
            },
          },
          validate(e, t, n) {
            if (
              process.env.BABEL_TYPES_8_BREAKING &&
              (0, r.default)('ForXStatement', e, { left: n }) &&
              1 !== n.declarations.length
            )
              throw new TypeError(
                `Exactly one VariableDeclarator is required in the VariableDeclaration of a ${e.type}`
              )
          },
        }),
        (0, s.default)('VariableDeclarator', {
          visitor: ['id', 'init'],
          fields: {
            id: {
              validate: (function () {
                if (!process.env.BABEL_TYPES_8_BREAKING)
                  return (0, s.assertNodeType)('LVal')
                const e = (0, s.assertNodeType)(
                    'Identifier',
                    'ArrayPattern',
                    'ObjectPattern'
                  ),
                  t = (0, s.assertNodeType)('Identifier')
                return function (n, r, i) {
                  ;(n.init ? e : t)(n, r, i)
                }
              })(),
            },
            definite: {
              optional: !0,
              validate: (0, s.assertValueType)('boolean'),
            },
            init: {
              optional: !0,
              validate: (0, s.assertNodeType)('Expression'),
            },
          },
        }),
        (0, s.default)('WhileStatement', {
          visitor: ['test', 'body'],
          aliases: [
            'Statement',
            'BlockParent',
            'Loop',
            'While',
            'Scopable',
          ],
          fields: {
            test: { validate: (0, s.assertNodeType)('Expression') },
            body: { validate: (0, s.assertNodeType)('Statement') },
          },
        }),
        (0, s.default)('WithStatement', {
          visitor: ['object', 'body'],
          aliases: ['Statement'],
          fields: {
            object: { validate: (0, s.assertNodeType)('Expression') },
            body: { validate: (0, s.assertNodeType)('Statement') },
          },
        })
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          if (e === t) return !0
          if (r.ALIAS_KEYS[t]) return !1
          const n = r.FLIPPED_ALIAS_KEYS[t]
          if (n) {
            if (n[0] === e) return !0
            for (const t of n) if (e === t) return !0
          }
          return !1
        })
      var r = n(1)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n) {
          if (!e) return
          const o = r.NODE_FIELDS[e.type]
          if (!o) return
          const s = o[t]
          i(e, t, n, s), a(e, t, n)
        }),
        (t.validateField = i),
        (t.validateChild = a)
      var r = n(1)
      function i(e, t, n, r) {
        r &&
          r.validate &&
          ((r.optional && null == n) || r.validate(e, t, n))
      }
      function a(e, t, n) {
        if (null == n) return
        const i = r.NODE_PARENT_VALIDATIONS[n.type]
        i && i(e, t, n)
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.classMethodOrDeclareMethodCommon = t.classMethodOrPropertyCommon = void 0)
      var r,
        i = (function (e) {
          if (e && e.__esModule) return e
          if (
            null === e ||
            ('object' != typeof e && 'function' != typeof e)
          )
            return { default: e }
          var t = s()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r =
              Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, i) : null
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n(4)),
        a = n(32),
        o = (r = n(11)) && r.__esModule ? r : { default: r }
      function s() {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (s = function () {
            return e
          }),
          e
        )
      }
      ;(0, i.default)('AssignmentPattern', {
        visitor: ['left', 'right', 'decorators'],
        builder: ['left', 'right'],
        aliases: ['Pattern', 'PatternLike', 'LVal'],
        fields: Object.assign({}, a.patternLikeCommon, {
          left: {
            validate: (0, i.assertNodeType)(
              'Identifier',
              'ObjectPattern',
              'ArrayPattern',
              'MemberExpression'
            ),
          },
          right: { validate: (0, i.assertNodeType)('Expression') },
          decorators: {
            validate: (0, i.chain)(
              (0, i.assertValueType)('array'),
              (0, i.assertEach)((0, i.assertNodeType)('Decorator'))
            ),
            optional: !0,
          },
        }),
      }),
        (0, i.default)('ArrayPattern', {
          visitor: ['elements', 'typeAnnotation'],
          builder: ['elements'],
          aliases: ['Pattern', 'PatternLike', 'LVal'],
          fields: Object.assign({}, a.patternLikeCommon, {
            elements: {
              validate: (0, i.chain)(
                (0, i.assertValueType)('array'),
                (0, i.assertEach)(
                  (0, i.assertNodeOrValueType)('null', 'PatternLike')
                )
              ),
            },
            decorators: {
              validate: (0, i.chain)(
                (0, i.assertValueType)('array'),
                (0, i.assertEach)((0, i.assertNodeType)('Decorator'))
              ),
              optional: !0,
            },
          }),
        }),
        (0, i.default)('ArrowFunctionExpression', {
          builder: ['params', 'body', 'async'],
          visitor: ['params', 'body', 'returnType', 'typeParameters'],
          aliases: [
            'Scopable',
            'Function',
            'BlockParent',
            'FunctionParent',
            'Expression',
            'Pureish',
          ],
          fields: Object.assign(
            {},
            a.functionCommon,
            {},
            a.functionTypeAnnotationCommon,
            {
              expression: {
                validate: (0, i.assertValueType)('boolean'),
              },
              body: {
                validate: (0, i.assertNodeType)(
                  'BlockStatement',
                  'Expression'
                ),
              },
            }
          ),
        }),
        (0, i.default)('ClassBody', {
          visitor: ['body'],
          fields: {
            body: {
              validate: (0, i.chain)(
                (0, i.assertValueType)('array'),
                (0, i.assertEach)(
                  (0, i.assertNodeType)(
                    'ClassMethod',
                    'ClassPrivateMethod',
                    'ClassProperty',
                    'ClassPrivateProperty',
                    'TSDeclareMethod',
                    'TSIndexSignature'
                  )
                )
              ),
            },
          },
        }),
        (0, i.default)('ClassExpression', {
          builder: ['id', 'superClass', 'body', 'decorators'],
          visitor: [
            'id',
            'body',
            'superClass',
            'mixins',
            'typeParameters',
            'superTypeParameters',
            'implements',
            'decorators',
          ],
          aliases: ['Scopable', 'Class', 'Expression'],
          fields: {
            id: {
              validate: (0, i.assertNodeType)('Identifier'),
              optional: !0,
            },
            typeParameters: {
              validate: (0, i.assertNodeType)(
                'TypeParameterDeclaration',
                'TSTypeParameterDeclaration',
                'Noop'
              ),
              optional: !0,
            },
            body: { validate: (0, i.assertNodeType)('ClassBody') },
            superClass: {
              optional: !0,
              validate: (0, i.assertNodeType)('Expression'),
            },
            superTypeParameters: {
              validate: (0, i.assertNodeType)(
                'TypeParameterInstantiation',
                'TSTypeParameterInstantiation'
              ),
              optional: !0,
            },
            implements: {
              validate: (0, i.chain)(
                (0, i.assertValueType)('array'),
                (0, i.assertEach)(
                  (0, i.assertNodeType)(
                    'TSExpressionWithTypeArguments',
                    'ClassImplements'
                  )
                )
              ),
              optional: !0,
            },
            decorators: {
              validate: (0, i.chain)(
                (0, i.assertValueType)('array'),
                (0, i.assertEach)((0, i.assertNodeType)('Decorator'))
              ),
              optional: !0,
            },
          },
        }),
        (0, i.default)('ClassDeclaration', {
          inherits: 'ClassExpression',
          aliases: ['Scopable', 'Class', 'Statement', 'Declaration'],
          fields: {
            declare: {
              validate: (0, i.assertValueType)('boolean'),
              optional: !0,
            },
            abstract: {
              validate: (0, i.assertValueType)('boolean'),
              optional: !0,
            },
          },
          validate: (function () {
            const e = (0, i.assertNodeType)('Identifier')
            return function (t, n, r) {
              process.env.BABEL_TYPES_8_BREAKING &&
                ((0, o.default)('ExportDefaultDeclaration', t) ||
                  e(r, 'id', r.id))
            }
          })(),
        }),
        (0, i.default)('ExportAllDeclaration', {
          visitor: ['source'],
          aliases: [
            'Statement',
            'Declaration',
            'ModuleDeclaration',
            'ExportDeclaration',
          ],
          fields: {
            source: {
              validate: (0, i.assertNodeType)('StringLiteral'),
            },
          },
        }),
        (0, i.default)('ExportDefaultDeclaration', {
          visitor: ['declaration'],
          aliases: [
            'Statement',
            'Declaration',
            'ModuleDeclaration',
            'ExportDeclaration',
          ],
          fields: {
            declaration: {
              validate: (0, i.assertNodeType)(
                'FunctionDeclaration',
                'TSDeclareFunction',
                'ClassDeclaration',
                'Expression'
              ),
            },
          },
        }),
        (0, i.default)('ExportNamedDeclaration', {
          visitor: ['declaration', 'specifiers', 'source'],
          aliases: [
            'Statement',
            'Declaration',
            'ModuleDeclaration',
            'ExportDeclaration',
          ],
          fields: {
            declaration: {
              optional: !0,
              validate: (0, i.chain)(
                (0, i.assertNodeType)('Declaration'),
                function (e, t, n) {
                  if (
                    process.env.BABEL_TYPES_8_BREAKING &&
                    n &&
                    e.specifiers.length
                  )
                    throw new TypeError(
                      'Only declaration or specifiers is allowed on ExportNamedDeclaration'
                    )
                },
                function (e, t, n) {
                  if (
                    process.env.BABEL_TYPES_8_BREAKING &&
                    n &&
                    e.source
                  )
                    throw new TypeError(
                      'Cannot export a declaration from a source'
                    )
                }
              ),
            },
            specifiers: {
              default: [],
              validate: (0, i.chain)(
                (0, i.assertValueType)('array'),
                (0, i.assertEach)(
                  (function () {
                    const e = (0, i.assertNodeType)(
                        'ExportSpecifier',
                        'ExportDefaultSpecifier',
                        'ExportNamespaceSpecifier'
                      ),
                      t = (0, i.assertNodeType)('ExportSpecifier')
                    return process.env.BABEL_TYPES_8_BREAKING
                      ? function (n, r, i) {
                          ;(n.source ? e : t)(n, r, i)
                        }
                      : e
                  })()
                )
              ),
            },
            source: {
              validate: (0, i.assertNodeType)('StringLiteral'),
              optional: !0,
            },
            exportKind: (0, i.validateOptional)(
              (0, i.assertOneOf)('type', 'value')
            ),
          },
        }),
        (0, i.default)('ExportSpecifier', {
          visitor: ['local', 'exported'],
          aliases: ['ModuleSpecifier'],
          fields: {
            local: { validate: (0, i.assertNodeType)('Identifier') },
            exported: {
              validate: (0, i.assertNodeType)('Identifier'),
            },
          },
        }),
        (0, i.default)('ForOfStatement', {
          visitor: ['left', 'right', 'body'],
          builder: ['left', 'right', 'body', 'await'],
          aliases: [
            'Scopable',
            'Statement',
            'For',
            'BlockParent',
            'Loop',
            'ForXStatement',
          ],
          fields: {
            left: {
              validate: (function () {
                if (!process.env.BABEL_TYPES_8_BREAKING)
                  return (0, i.assertNodeType)(
                    'VariableDeclaration',
                    'LVal'
                  )
                const e = (0, i.assertNodeType)(
                    'VariableDeclaration'
                  ),
                  t = (0, i.assertNodeType)(
                    'Identifier',
                    'MemberExpression',
                    'ArrayPattern',
                    'ObjectPattern'
                  )
                return function (n, r, i) {
                  ;(0, o.default)('VariableDeclaration', i)
                    ? e(n, r, i)
                    : t(n, r, i)
                }
              })(),
            },
            right: { validate: (0, i.assertNodeType)('Expression') },
            body: { validate: (0, i.assertNodeType)('Statement') },
            await: { default: !1 },
          },
        }),
        (0, i.default)('ImportDeclaration', {
          visitor: ['specifiers', 'source'],
          aliases: ['Statement', 'Declaration', 'ModuleDeclaration'],
          fields: {
            specifiers: {
              validate: (0, i.chain)(
                (0, i.assertValueType)('array'),
                (0, i.assertEach)(
                  (0, i.assertNodeType)(
                    'ImportSpecifier',
                    'ImportDefaultSpecifier',
                    'ImportNamespaceSpecifier'
                  )
                )
              ),
            },
            source: {
              validate: (0, i.assertNodeType)('StringLiteral'),
            },
            importKind: {
              validate: (0, i.assertOneOf)('type', 'typeof', 'value'),
              optional: !0,
            },
          },
        }),
        (0, i.default)('ImportDefaultSpecifier', {
          visitor: ['local'],
          aliases: ['ModuleSpecifier'],
          fields: {
            local: { validate: (0, i.assertNodeType)('Identifier') },
          },
        }),
        (0, i.default)('ImportNamespaceSpecifier', {
          visitor: ['local'],
          aliases: ['ModuleSpecifier'],
          fields: {
            local: { validate: (0, i.assertNodeType)('Identifier') },
          },
        }),
        (0, i.default)('ImportSpecifier', {
          visitor: ['local', 'imported'],
          aliases: ['ModuleSpecifier'],
          fields: {
            local: { validate: (0, i.assertNodeType)('Identifier') },
            imported: {
              validate: (0, i.assertNodeType)('Identifier'),
            },
            importKind: {
              validate: (0, i.assertOneOf)('type', 'typeof'),
              optional: !0,
            },
          },
        }),
        (0, i.default)('MetaProperty', {
          visitor: ['meta', 'property'],
          aliases: ['Expression'],
          fields: {
            meta: {
              validate: (0, i.chain)(
                (0, i.assertNodeType)('Identifier'),
                function (e, t, n) {
                  if (!process.env.BABEL_TYPES_8_BREAKING) return
                  let r
                  switch (n.name) {
                    case 'function':
                      r = 'sent'
                      break
                    case 'new':
                      r = 'target'
                      break
                    case 'import':
                      r = 'meta'
                  }
                  if (
                    !(0, o.default)('Identifier', e.property, {
                      name: r,
                    })
                  )
                    throw new TypeError('Unrecognised MetaProperty')
                }
              ),
            },
            property: {
              validate: (0, i.assertNodeType)('Identifier'),
            },
          },
        })
      const u = {
        abstract: {
          validate: (0, i.assertValueType)('boolean'),
          optional: !0,
        },
        accessibility: {
          validate: (0, i.assertOneOf)(
            'public',
            'private',
            'protected'
          ),
          optional: !0,
        },
        static: { default: !1 },
        computed: { default: !1 },
        optional: {
          validate: (0, i.assertValueType)('boolean'),
          optional: !0,
        },
        key: {
          validate: (0, i.chain)(
            (function () {
              const e = (0, i.assertNodeType)(
                  'Identifier',
                  'StringLiteral',
                  'NumericLiteral'
                ),
                t = (0, i.assertNodeType)('Expression')
              return function (n, r, i) {
                ;(n.computed ? t : e)(n, r, i)
              }
            })(),
            (0, i.assertNodeType)(
              'Identifier',
              'StringLiteral',
              'NumericLiteral',
              'Expression'
            )
          ),
        },
      }
      t.classMethodOrPropertyCommon = u
      const l = Object.assign({}, a.functionCommon, {}, u, {
        kind: {
          validate: (0, i.assertOneOf)(
            'get',
            'set',
            'method',
            'constructor'
          ),
          default: 'method',
        },
        access: {
          validate: (0, i.chain)(
            (0, i.assertValueType)('string'),
            (0, i.assertOneOf)('public', 'private', 'protected')
          ),
          optional: !0,
        },
        decorators: {
          validate: (0, i.chain)(
            (0, i.assertValueType)('array'),
            (0, i.assertEach)((0, i.assertNodeType)('Decorator'))
          ),
          optional: !0,
        },
      })
      ;(t.classMethodOrDeclareMethodCommon = l),
        (0, i.default)('ClassMethod', {
          aliases: [
            'Function',
            'Scopable',
            'BlockParent',
            'FunctionParent',
            'Method',
          ],
          builder: [
            'kind',
            'key',
            'params',
            'body',
            'computed',
            'static',
            'generator',
            'async',
          ],
          visitor: [
            'key',
            'params',
            'body',
            'decorators',
            'returnType',
            'typeParameters',
          ],
          fields: Object.assign(
            {},
            l,
            {},
            a.functionTypeAnnotationCommon,
            {
              body: {
                validate: (0, i.assertNodeType)('BlockStatement'),
              },
            }
          ),
        }),
        (0, i.default)('ObjectPattern', {
          visitor: ['properties', 'typeAnnotation', 'decorators'],
          builder: ['properties'],
          aliases: ['Pattern', 'PatternLike', 'LVal'],
          fields: Object.assign({}, a.patternLikeCommon, {
            properties: {
              validate: (0, i.chain)(
                (0, i.assertValueType)('array'),
                (0, i.assertEach)(
                  (0, i.assertNodeType)(
                    'RestElement',
                    'ObjectProperty'
                  )
                )
              ),
            },
          }),
        }),
        (0, i.default)('SpreadElement', {
          visitor: ['argument'],
          aliases: ['UnaryLike'],
          deprecatedAlias: 'SpreadProperty',
          fields: {
            argument: {
              validate: (0, i.assertNodeType)('Expression'),
            },
          },
        }),
        (0, i.default)('Super', { aliases: ['Expression'] }),
        (0, i.default)('TaggedTemplateExpression', {
          visitor: ['tag', 'quasi'],
          aliases: ['Expression'],
          fields: {
            tag: { validate: (0, i.assertNodeType)('Expression') },
            quasi: {
              validate: (0, i.assertNodeType)('TemplateLiteral'),
            },
            typeParameters: {
              validate: (0, i.assertNodeType)(
                'TypeParameterInstantiation',
                'TSTypeParameterInstantiation'
              ),
              optional: !0,
            },
          },
        }),
        (0, i.default)('TemplateElement', {
          builder: ['value', 'tail'],
          fields: {
            value: {
              validate: (0, i.assertShape)({
                raw: { validate: (0, i.assertValueType)('string') },
                cooked: {
                  validate: (0, i.assertValueType)('string'),
                  optional: !0,
                },
              }),
            },
            tail: { default: !1 },
          },
        }),
        (0, i.default)('TemplateLiteral', {
          visitor: ['quasis', 'expressions'],
          aliases: ['Expression', 'Literal'],
          fields: {
            quasis: {
              validate: (0, i.chain)(
                (0, i.assertValueType)('array'),
                (0, i.assertEach)(
                  (0, i.assertNodeType)('TemplateElement')
                )
              ),
            },
            expressions: {
              validate: (0, i.chain)(
                (0, i.assertValueType)('array'),
                (0, i.assertEach)(
                  (0, i.assertNodeType)('Expression')
                ),
                function (e, t, n) {
                  if (e.quasis.length !== n.length + 1)
                    throw new TypeError(
                      `Number of ${
                        e.type
                      } quasis should be exactly one more than the number of expressions.\nExpected ${
                        n.length + 1
                      } quasis but got ${e.quasis.length}`
                    )
                }
              ),
            },
          },
        }),
        (0, i.default)('YieldExpression', {
          builder: ['argument', 'delegate'],
          visitor: ['argument'],
          aliases: ['Expression', 'Terminatorless'],
          fields: {
            delegate: {
              validate: (0, i.chain)(
                (0, i.assertValueType)('boolean'),
                function (e, t, n) {
                  if (
                    process.env.BABEL_TYPES_8_BREAKING &&
                    n &&
                    !e.argument
                  )
                    throw new TypeError(
                      'Property delegate of YieldExpression cannot be true if there is no argument'
                    )
                }
              ),
              default: !1,
            },
            argument: {
              optional: !0,
              validate: (0, i.assertNodeType)('Expression'),
            },
          },
        })
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n) {
          t &&
            n &&
            (t[e] = (0, i.default)(
              [].concat(t[e], n[e]).filter(Boolean)
            ))
        })
      var r,
        i = (r = n(167)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          const n = e.split('.')
          return (e) => (0, i.default)(e, n, t)
        })
      var r,
        i = (r = n(38)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n) {
          if (!(0, r.isMemberExpression)(e)) return !1
          const i = Array.isArray(t) ? t : t.split('.'),
            a = []
          let o
          for (o = e; (0, r.isMemberExpression)(o); o = o.object)
            a.push(o.property)
          if ((a.push(o), a.length < i.length)) return !1
          if (!n && a.length > i.length) return !1
          for (let e = 0, t = a.length - 1; e < i.length; e++, t--) {
            const n = a[t]
            let o
            if ((0, r.isIdentifier)(n)) o = n.name
            else {
              if (!(0, r.isStringLiteral)(n)) return !1
              o = n.value
            }
            if (i[e] !== o) return !1
          }
          return !0
        })
      var r = n(0)
    },
    function (e, t) {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t)
      }
    },
    function (e, t, n) {
      var r = n(9),
        i = n(10)
      e.exports = function (e) {
        if (!i(e)) return !1
        var t = r(e)
        return (
          '[object Function]' == t ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        )
      }
    },
    function (e, t) {
      var n =
        'object' == typeof global &&
        global &&
        global.Object === Object &&
        global
      e.exports = n
    },
    function (e, t) {
      var n = Function.prototype.toString
      e.exports = function (e) {
        if (null != e) {
          try {
            return n.call(e)
          } catch (e) {}
          try {
            return e + ''
          } catch (e) {}
        }
        return ''
      }
    },
    function (e, t, n) {
      var r = n(100),
        i = n(107),
        a = n(109),
        o = n(110),
        s = n(111)
      function u(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++t < n; ) {
          var r = e[t]
          this.set(r[0], r[1])
        }
      }
      ;(u.prototype.clear = r),
        (u.prototype.delete = i),
        (u.prototype.get = a),
        (u.prototype.has = o),
        (u.prototype.set = s),
        (e.exports = u)
    },
    function (e, t, n) {
      var r = n(45),
        i = n(39),
        a = Object.prototype.hasOwnProperty
      e.exports = function (e, t, n) {
        var o = e[t]
        ;(a.call(e, t) && i(o, n) && (void 0 !== n || t in e)) ||
          r(e, t, n)
      }
    },
    function (e, t, n) {
      var r = n(113)
      e.exports = function (e, t, n) {
        '__proto__' == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n)
      }
    },
    function (e, t, n) {
      var r = n(115),
        i = n(116),
        a = n(25),
        o = n(47),
        s = n(119),
        u = n(120),
        l = Object.prototype.hasOwnProperty
      e.exports = function (e, t) {
        var n = a(e),
          p = !n && i(e),
          f = !n && !p && o(e),
          c = !n && !p && !f && u(e),
          d = n || p || f || c,
          y = d ? r(e.length, String) : [],
          T = y.length
        for (var S in e)
          (!t && !l.call(e, S)) ||
            (d &&
              ('length' == S ||
                (f && ('offset' == S || 'parent' == S)) ||
                (c &&
                  ('buffer' == S ||
                    'byteLength' == S ||
                    'byteOffset' == S)) ||
                s(S, T))) ||
            y.push(S)
        return y
      }
    },
    function (e, t, n) {
      ;(function (e) {
        var r = n(3),
          i = n(118),
          a = t && !t.nodeType && t,
          o = a && 'object' == typeof e && e && !e.nodeType && e,
          s = o && o.exports === a ? r.Buffer : void 0,
          u = (s ? s.isBuffer : void 0) || i
        e.exports = u
      }.call(this, n(26)(e)))
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          'number' == typeof e &&
          e > -1 &&
          e % 1 == 0 &&
          e <= 9007199254740991
        )
      }
    },
    function (e, t) {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n))
        }
      }
    },
    function (e, t, n) {
      var r = n(40),
        i = n(48)
      e.exports = function (e) {
        return null != e && i(e.length) && !r(e)
      }
    },
    function (e, t, n) {
      var r = n(46),
        i = n(125),
        a = n(50)
      e.exports = function (e) {
        return a(e) ? r(e, !0) : i(e)
      }
    },
    function (e, t) {
      e.exports = function () {
        return []
      }
    },
    function (e, t, n) {
      var r = n(54),
        i = n(29),
        a = n(28),
        o = n(52),
        s = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e; ) r(t, a(e)), (e = i(e))
              return t
            }
          : o
      e.exports = s
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r; )
          e[i + n] = t[n]
        return e
      }
    },
    function (e, t, n) {
      var r = n(54),
        i = n(25)
      e.exports = function (e, t, n) {
        var a = t(e)
        return i(e) ? a : r(a, n(e))
      }
    },
    function (e, t, n) {
      var r = n(5)(n(3), 'Set')
      e.exports = r
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          if (e === t) return !0
          const n = r.PLACEHOLDERS_ALIAS[e]
          if (n) for (const e of n) if (t === e) return !0
          return !1
        })
      var r = n(1)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isIdentifierName', {
          enumerable: !0,
          get: function () {
            return r.isIdentifierName
          },
        }),
        Object.defineProperty(t, 'isIdentifierChar', {
          enumerable: !0,
          get: function () {
            return r.isIdentifierChar
          },
        }),
        Object.defineProperty(t, 'isIdentifierStart', {
          enumerable: !0,
          get: function () {
            return r.isIdentifierStart
          },
        }),
        Object.defineProperty(t, 'isReservedWord', {
          enumerable: !0,
          get: function () {
            return i.isReservedWord
          },
        }),
        Object.defineProperty(t, 'isStrictBindOnlyReservedWord', {
          enumerable: !0,
          get: function () {
            return i.isStrictBindOnlyReservedWord
          },
        }),
        Object.defineProperty(t, 'isStrictBindReservedWord', {
          enumerable: !0,
          get: function () {
            return i.isStrictBindReservedWord
          },
        }),
        Object.defineProperty(t, 'isStrictReservedWord', {
          enumerable: !0,
          get: function () {
            return i.isStrictReservedWord
          },
        }),
        Object.defineProperty(t, 'isKeyword', {
          enumerable: !0,
          get: function () {
            return i.isKeyword
          },
        })
      var r = n(151),
        i = n(152)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.PLACEHOLDERS_FLIPPED_ALIAS = t.PLACEHOLDERS_ALIAS = t.PLACEHOLDERS = void 0)
      var r = n(4)
      const i = [
        'Identifier',
        'StringLiteral',
        'Expression',
        'Statement',
        'Declaration',
        'BlockStatement',
        'ClassBody',
        'Pattern',
      ]
      t.PLACEHOLDERS = i
      const a = {
        Declaration: ['Statement'],
        Pattern: ['PatternLike', 'LVal'],
      }
      t.PLACEHOLDERS_ALIAS = a
      for (const e of i) {
        const t = r.ALIAS_KEYS[e]
        t && t.length && (a[e] = t)
      }
      const o = {}
      ;(t.PLACEHOLDERS_FLIPPED_ALIAS = o),
        Object.keys(a).forEach((e) => {
          a[e].forEach((t) => {
            Object.hasOwnProperty.call(o, t) || (o[t] = []),
              o[t].push(e)
          })
        })
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return !(!e || !r.VISITOR_KEYS[e.type])
        })
      var r = n(1)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function e(t) {
          const n = {},
            i = {},
            a = [],
            o = []
          for (let s = 0; s < t.length; s++) {
            const u = t[s]
            if (u && !(o.indexOf(u) >= 0)) {
              if ((0, r.isAnyTypeAnnotation)(u)) return [u]
              if ((0, r.isFlowBaseAnnotation)(u)) i[u.type] = u
              else if ((0, r.isUnionTypeAnnotation)(u))
                a.indexOf(u.types) < 0 &&
                  ((t = t.concat(u.types)), a.push(u.types))
              else if ((0, r.isGenericTypeAnnotation)(u)) {
                const t = u.id.name
                if (n[t]) {
                  let r = n[t]
                  r.typeParameters
                    ? u.typeParameters &&
                      (r.typeParameters.params = e(
                        r.typeParameters.params.concat(
                          u.typeParameters.params
                        )
                      ))
                    : (r = u.typeParameters)
                } else n[t] = u
              } else o.push(u)
            }
          }
          for (const e of Object.keys(i)) o.push(i[e])
          for (const e of Object.keys(n)) o.push(n[e])
          return o
        })
      var r = n(0)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n) {
          if (!n || !e) return e
          const r = `${t}Comments`
          e[r]
            ? (e[r] =
                'leading' === t ? n.concat(e[r]) : e[r].concat(n))
            : (e[r] = n)
          return e
        })
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          ;(0, i.default)('innerComments', e, t)
        })
      var r,
        i = (r = n(36)) && r.__esModule ? r : { default: r }
    },
    function (e, t) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size)
        return (
          e.forEach(function (e) {
            n[++t] = e
          }),
          n
        )
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          ;(0, i.default)('leadingComments', e, t)
        })
      var r,
        i = (r = n(36)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          return (
            (0, r.default)(e, t),
            (0, i.default)(e, t),
            (0, a.default)(e, t),
            e
          )
        })
      var r = o(n(67)),
        i = o(n(65)),
        a = o(n(63))
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          ;(0, i.default)('trailingComments', e, t)
        })
      var r,
        i = (r = n(36)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          if ((0, r.isBlockStatement)(e)) return e
          let n = []
          ;(0, r.isEmptyStatement)(e)
            ? (n = [])
            : ((0, r.isStatement)(e) ||
                (e = (0, r.isFunction)(t)
                  ? (0, i.returnStatement)(e)
                  : (0, i.expressionStatement)(e)),
              (n = [e]))
          return (0, i.blockStatement)(n)
        })
      var r = n(0),
        i = n(2)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          ;(e = (e = (e = (e += '').replace(
            /[^a-zA-Z0-9$_]/g,
            '-'
          )).replace(/^[-0-9]+/, '')).replace(
            /[-\s]+(.)?/g,
            function (e, t) {
              return t ? t.toUpperCase() : ''
            }
          )),
            (0, i.default)(e) || (e = `_${e}`)
          return e || '_'
        })
      var r,
        i = (r = n(12)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          return (0, r.default)(e, i.default, t), e
        })
      var r = a(n(71)),
        i = a(n(72))
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function e(t, n, i) {
          if (!t) return
          const a = r.VISITOR_KEYS[t.type]
          if (!a) return
          n(t, (i = i || {}))
          for (const r of a) {
            const a = t[r]
            if (Array.isArray(a)) for (const t of a) e(t, n, i)
            else e(a, n, i)
          }
        })
      var r = n(1)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t = {}) {
          const n = t.preserveComments ? i : a
          for (const t of n) null != e[t] && (e[t] = void 0)
          for (const t of Object.keys(e))
            '_' === t[0] && null != e[t] && (e[t] = void 0)
          const r = Object.getOwnPropertySymbols(e)
          for (const t of r) e[t] = null
        })
      var r = n(7)
      const i = ['tokens', 'start', 'end', 'loc', 'raw', 'rawValue'],
        a = r.COMMENT_KEYS.concat(['comments']).concat(i)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (
            (0, r.isVariableDeclaration)(e) &&
            ('var' !== e.kind || e[i.BLOCK_SCOPED_SYMBOL])
          )
        })
      var r = n(0),
        i = n(7)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      const r = n(75),
        i = (e) => {
          const t =
            'MemberExpression' === e.object.type ? i(e.object) : []
          return (
            r.isIdentifier(e.property)
              ? t.push(
                  !0 === e.computed
                    ? e.property
                    : r.stringLiteral(e.property.name)
                )
              : r.isLiteral(e.property) && t.push(e.property),
            t
          )
        },
        a = (e) => {
          const t = e.node.params,
            n = t[0]
          if (1 !== t.length)
            throw e.buildCodeFrameError(
              'Monolite: Accessor should take exactly one root argument.'
            )
          if ('Identifier' !== n.type)
            throw e.buildCodeFrameError(
              'Monolite: Invalid accessor root argument.'
            )
          const i = n.name
          let a = e.get('body')
          for (; a; ) {
            if (!r.isMemberExpression(a.node)) {
              if (r.isIdentifier(a.node)) {
                if (a.node.name !== i)
                  throw a.buildCodeFrameError(
                    'Monolite: Accessor function should return a subproperty of root'
                  )
                break
              }
              throw a.buildCodeFrameError(
                'Monolite: Accessor function should return a subproperty of root'
              )
            }
            a = a.get('object')
          }
        },
        o = (e) => {
          if ('MemberExpression' === e.parentPath.type) {
            const t = e.parentPath,
              n = t.parentPath
            if (
              t.node.property &&
              'Identifier' === t.node.property.type &&
              'set' === t.node.property.name &&
              n &&
              'CallExpression' === n.type
            ) {
              const [e, t] = n.node.arguments
              e &&
                'ArrowFunctionExpression' === e.type &&
                'MemberExpression' === e.body.type &&
                (a(n.get('arguments.0')),
                n.replaceWith(
                  r.callExpression(n.node.callee, [
                    r.arrayExpression(i(e.body)),
                    t,
                  ])
                )),
                o(n)
            }
          }
        }
      t.default = () => ({
        visitor: {
          CallExpression(e) {
            if (
              !((e) => {
                if ('Identifier' !== e.node.callee.type) return !1
                if ('set' !== e.node.callee.name) return !1
                const t = e.scope.getBinding('set')
                return void 0 !== t && 'module' === t.kind
              })(e)
            )
              return
            const [, t] = e.node.arguments
            void 0 === t
              ? o(e)
              : ((e) => {
                  const [t, n, o] = e.node.arguments
                  'ArrowFunctionExpression' === n.type &&
                    1 === n.params.length &&
                    'ArrowFunctionExpression' === n.type &&
                    'MemberExpression' === n.body.type &&
                    (a(e.get('arguments.1')),
                    e.replaceWith(
                      r.callExpression(e.node.callee, [
                        t,
                        r.arrayExpression(i(n.body)),
                        o,
                      ])
                    ))
                })(e)
          },
        },
      })
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r = {
        react: !0,
        assertNode: !0,
        createTypeAnnotationBasedOnTypeof: !0,
        createUnionTypeAnnotation: !0,
        cloneNode: !0,
        clone: !0,
        cloneDeep: !0,
        cloneDeepWithoutLoc: !0,
        cloneWithoutLoc: !0,
        addComment: !0,
        addComments: !0,
        inheritInnerComments: !0,
        inheritLeadingComments: !0,
        inheritsComments: !0,
        inheritTrailingComments: !0,
        removeComments: !0,
        ensureBlock: !0,
        toBindingIdentifierName: !0,
        toBlock: !0,
        toComputedKey: !0,
        toExpression: !0,
        toIdentifier: !0,
        toKeyAlias: !0,
        toSequenceExpression: !0,
        toStatement: !0,
        valueToNode: !0,
        appendToMemberExpression: !0,
        inherits: !0,
        prependToMemberExpression: !0,
        removeProperties: !0,
        removePropertiesDeep: !0,
        removeTypeDuplicates: !0,
        getBindingIdentifiers: !0,
        getOuterBindingIdentifiers: !0,
        traverse: !0,
        traverseFast: !0,
        shallowEqual: !0,
        is: !0,
        isBinding: !0,
        isBlockScoped: !0,
        isImmutable: !0,
        isLet: !0,
        isNode: !0,
        isNodesEquivalent: !0,
        isPlaceholderType: !0,
        isReferenced: !0,
        isScope: !0,
        isSpecifierDefault: !0,
        isType: !0,
        isValidES3Identifier: !0,
        isValidIdentifier: !0,
        isVar: !0,
        matchesPattern: !0,
        validate: !0,
        buildMatchMemberExpression: !0,
      }
      Object.defineProperty(t, 'assertNode', {
        enumerable: !0,
        get: function () {
          return s.default
        },
      }),
        Object.defineProperty(
          t,
          'createTypeAnnotationBasedOnTypeof',
          {
            enumerable: !0,
            get: function () {
              return l.default
            },
          }
        ),
        Object.defineProperty(t, 'createUnionTypeAnnotation', {
          enumerable: !0,
          get: function () {
            return p.default
          },
        }),
        Object.defineProperty(t, 'cloneNode', {
          enumerable: !0,
          get: function () {
            return c.default
          },
        }),
        Object.defineProperty(t, 'clone', {
          enumerable: !0,
          get: function () {
            return d.default
          },
        }),
        Object.defineProperty(t, 'cloneDeep', {
          enumerable: !0,
          get: function () {
            return y.default
          },
        }),
        Object.defineProperty(t, 'cloneDeepWithoutLoc', {
          enumerable: !0,
          get: function () {
            return T.default
          },
        }),
        Object.defineProperty(t, 'cloneWithoutLoc', {
          enumerable: !0,
          get: function () {
            return S.default
          },
        }),
        Object.defineProperty(t, 'addComment', {
          enumerable: !0,
          get: function () {
            return m.default
          },
        }),
        Object.defineProperty(t, 'addComments', {
          enumerable: !0,
          get: function () {
            return E.default
          },
        }),
        Object.defineProperty(t, 'inheritInnerComments', {
          enumerable: !0,
          get: function () {
            return v.default
          },
        }),
        Object.defineProperty(t, 'inheritLeadingComments', {
          enumerable: !0,
          get: function () {
            return b.default
          },
        }),
        Object.defineProperty(t, 'inheritsComments', {
          enumerable: !0,
          get: function () {
            return P.default
          },
        }),
        Object.defineProperty(t, 'inheritTrailingComments', {
          enumerable: !0,
          get: function () {
            return x.default
          },
        }),
        Object.defineProperty(t, 'removeComments', {
          enumerable: !0,
          get: function () {
            return A.default
          },
        }),
        Object.defineProperty(t, 'ensureBlock', {
          enumerable: !0,
          get: function () {
            return h.default
          },
        }),
        Object.defineProperty(t, 'toBindingIdentifierName', {
          enumerable: !0,
          get: function () {
            return I.default
          },
        }),
        Object.defineProperty(t, 'toBlock', {
          enumerable: !0,
          get: function () {
            return _.default
          },
        }),
        Object.defineProperty(t, 'toComputedKey', {
          enumerable: !0,
          get: function () {
            return D.default
          },
        }),
        Object.defineProperty(t, 'toExpression', {
          enumerable: !0,
          get: function () {
            return N.default
          },
        }),
        Object.defineProperty(t, 'toIdentifier', {
          enumerable: !0,
          get: function () {
            return j.default
          },
        }),
        Object.defineProperty(t, 'toKeyAlias', {
          enumerable: !0,
          get: function () {
            return L.default
          },
        }),
        Object.defineProperty(t, 'toSequenceExpression', {
          enumerable: !0,
          get: function () {
            return M.default
          },
        }),
        Object.defineProperty(t, 'toStatement', {
          enumerable: !0,
          get: function () {
            return w.default
          },
        }),
        Object.defineProperty(t, 'valueToNode', {
          enumerable: !0,
          get: function () {
            return F.default
          },
        }),
        Object.defineProperty(t, 'appendToMemberExpression', {
          enumerable: !0,
          get: function () {
            return B.default
          },
        }),
        Object.defineProperty(t, 'inherits', {
          enumerable: !0,
          get: function () {
            return R.default
          },
        }),
        Object.defineProperty(t, 'prependToMemberExpression', {
          enumerable: !0,
          get: function () {
            return K.default
          },
        }),
        Object.defineProperty(t, 'removeProperties', {
          enumerable: !0,
          get: function () {
            return Y.default
          },
        }),
        Object.defineProperty(t, 'removePropertiesDeep', {
          enumerable: !0,
          get: function () {
            return k.default
          },
        }),
        Object.defineProperty(t, 'removeTypeDuplicates', {
          enumerable: !0,
          get: function () {
            return V.default
          },
        }),
        Object.defineProperty(t, 'getBindingIdentifiers', {
          enumerable: !0,
          get: function () {
            return X.default
          },
        }),
        Object.defineProperty(t, 'getOuterBindingIdentifiers', {
          enumerable: !0,
          get: function () {
            return J.default
          },
        }),
        Object.defineProperty(t, 'traverse', {
          enumerable: !0,
          get: function () {
            return U.default
          },
        }),
        Object.defineProperty(t, 'traverseFast', {
          enumerable: !0,
          get: function () {
            return W.default
          },
        }),
        Object.defineProperty(t, 'shallowEqual', {
          enumerable: !0,
          get: function () {
            return q.default
          },
        }),
        Object.defineProperty(t, 'is', {
          enumerable: !0,
          get: function () {
            return $.default
          },
        }),
        Object.defineProperty(t, 'isBinding', {
          enumerable: !0,
          get: function () {
            return G.default
          },
        }),
        Object.defineProperty(t, 'isBlockScoped', {
          enumerable: !0,
          get: function () {
            return z.default
          },
        }),
        Object.defineProperty(t, 'isImmutable', {
          enumerable: !0,
          get: function () {
            return Q.default
          },
        }),
        Object.defineProperty(t, 'isLet', {
          enumerable: !0,
          get: function () {
            return H.default
          },
        }),
        Object.defineProperty(t, 'isNode', {
          enumerable: !0,
          get: function () {
            return Z.default
          },
        }),
        Object.defineProperty(t, 'isNodesEquivalent', {
          enumerable: !0,
          get: function () {
            return ee.default
          },
        }),
        Object.defineProperty(t, 'isPlaceholderType', {
          enumerable: !0,
          get: function () {
            return te.default
          },
        }),
        Object.defineProperty(t, 'isReferenced', {
          enumerable: !0,
          get: function () {
            return ne.default
          },
        }),
        Object.defineProperty(t, 'isScope', {
          enumerable: !0,
          get: function () {
            return re.default
          },
        }),
        Object.defineProperty(t, 'isSpecifierDefault', {
          enumerable: !0,
          get: function () {
            return ie.default
          },
        }),
        Object.defineProperty(t, 'isType', {
          enumerable: !0,
          get: function () {
            return ae.default
          },
        }),
        Object.defineProperty(t, 'isValidES3Identifier', {
          enumerable: !0,
          get: function () {
            return oe.default
          },
        }),
        Object.defineProperty(t, 'isValidIdentifier', {
          enumerable: !0,
          get: function () {
            return se.default
          },
        }),
        Object.defineProperty(t, 'isVar', {
          enumerable: !0,
          get: function () {
            return ue.default
          },
        }),
        Object.defineProperty(t, 'matchesPattern', {
          enumerable: !0,
          get: function () {
            return le.default
          },
        }),
        Object.defineProperty(t, 'validate', {
          enumerable: !0,
          get: function () {
            return pe.default
          },
        }),
        Object.defineProperty(t, 'buildMatchMemberExpression', {
          enumerable: !0,
          get: function () {
            return fe.default
          },
        }),
        (t.react = void 0)
      var i = de(n(76)),
        a = de(n(77)),
        o = de(n(78)),
        s = de(n(158)),
        u = n(159)
      Object.keys(u).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e]
              },
            }))
      })
      var l = de(n(160)),
        p = de(n(161)),
        f = n(2)
      Object.keys(f).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return f[e]
              },
            }))
      })
      var c = de(n(8)),
        d = de(n(162)),
        y = de(n(163)),
        T = de(n(164)),
        S = de(n(165)),
        m = de(n(166)),
        E = de(n(62)),
        v = de(n(63)),
        b = de(n(65)),
        P = de(n(66)),
        x = de(n(67)),
        A = de(n(181)),
        O = n(182)
      Object.keys(O).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return O[e]
              },
            }))
      })
      var g = n(7)
      Object.keys(g).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return g[e]
              },
            }))
      })
      var h = de(n(183)),
        I = de(n(184)),
        _ = de(n(68)),
        D = de(n(185)),
        N = de(n(186)),
        j = de(n(69)),
        L = de(n(187)),
        M = de(n(188)),
        w = de(n(190)),
        F = de(n(191)),
        C = n(1)
      Object.keys(C).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return C[e]
              },
            }))
      })
      var B = de(n(195)),
        R = de(n(196)),
        K = de(n(197)),
        Y = de(n(72)),
        k = de(n(70)),
        V = de(n(61)),
        X = de(n(20)),
        J = de(n(198)),
        U = de(n(199)),
        W = de(n(71)),
        q = de(n(21)),
        $ = de(n(11)),
        G = de(n(200)),
        z = de(n(201)),
        Q = de(n(202)),
        H = de(n(73)),
        Z = de(n(60)),
        ee = de(n(203)),
        te = de(n(57)),
        ne = de(n(204)),
        re = de(n(205)),
        ie = de(n(206)),
        ae = de(n(33)),
        oe = de(n(207)),
        se = de(n(12)),
        ue = de(n(208)),
        le = de(n(38)),
        pe = de(n(34)),
        fe = de(n(37)),
        ce = n(0)
      function de(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.keys(ce).forEach(function (e) {
        'default' !== e &&
          '__esModule' !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return ce[e]
              },
            }))
      })
      const ye = {
        isReactComponent: i.default,
        isCompatTag: a.default,
        buildChildren: o.default,
      }
      t.react = ye
    },
    function (e, t, n) {
      'use strict'
      var r
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var i = (0,
      ((r = n(37)) && r.__esModule ? r : { default: r }).default)(
        'React.Component'
      )
      t.default = i
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return !!e && /^[a-z]/.test(e)
        })
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          const t = []
          for (let n = 0; n < e.children.length; n++) {
            let r = e.children[n]
            ;(0, i.isJSXText)(r)
              ? (0, a.default)(r, t)
              : ((0, i.isJSXExpressionContainer)(r) &&
                  (r = r.expression),
                (0, i.isJSXEmptyExpression)(r) || t.push(r))
          }
          return t
        })
      var r,
        i = n(0),
        a = (r = n(79)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          const n = e.value.split(/\r\n|\n|\r/)
          let i = 0
          for (let e = 0; e < n.length; e++)
            n[e].match(/[^ \t]/) && (i = e)
          let a = ''
          for (let e = 0; e < n.length; e++) {
            const t = n[e],
              r = 0 === e,
              o = e === n.length - 1,
              s = e === i
            let u = t.replace(/\t/g, ' ')
            r || (u = u.replace(/^[ ]+/, '')),
              o || (u = u.replace(/[ ]+$/, '')),
              u && (s || (u += ' '), (a += u))
          }
          a && t.push((0, r.stringLiteral)(a))
        })
      var r = n(2)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, ...t) {
          const n = i.BUILDER_KEYS[e],
            o = t.length
          if (o > n.length)
            throw new Error(
              `${e}: Too many arguments passed. Received ${o} but can receive no more than ${n.length}`
            )
          const s = { type: e }
          let u = 0
          n.forEach((n) => {
            const a = i.NODE_FIELDS[e][n]
            let l
            u < o && (l = t[u]),
              void 0 === l && (l = (0, r.default)(a.default)),
              (s[n] = l),
              u++
          })
          for (const e of Object.keys(s)) (0, a.default)(s, e, s[e])
          return s
        })
      var r = o(n(81)),
        i = n(1),
        a = o(n(34))
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    function (e, t, n) {
      var r = n(82)
      e.exports = function (e) {
        return r(e, 4)
      }
    },
    function (e, t, n) {
      var r = n(83),
        i = n(112),
        a = n(44),
        o = n(114),
        s = n(124),
        u = n(127),
        l = n(128),
        p = n(129),
        f = n(131),
        c = n(132),
        d = n(133),
        y = n(30),
        T = n(137),
        S = n(138),
        m = n(144),
        E = n(25),
        v = n(47),
        b = n(146),
        P = n(10),
        x = n(148),
        A = n(24),
        O = {}
      ;(O['[object Arguments]'] = O['[object Array]'] = O[
        '[object ArrayBuffer]'
      ] = O['[object DataView]'] = O['[object Boolean]'] = O[
        '[object Date]'
      ] = O['[object Float32Array]'] = O['[object Float64Array]'] = O[
        '[object Int8Array]'
      ] = O['[object Int16Array]'] = O['[object Int32Array]'] = O[
        '[object Map]'
      ] = O['[object Number]'] = O['[object Object]'] = O[
        '[object RegExp]'
      ] = O['[object Set]'] = O['[object String]'] = O[
        '[object Symbol]'
      ] = O['[object Uint8Array]'] = O[
        '[object Uint8ClampedArray]'
      ] = O['[object Uint16Array]'] = O['[object Uint32Array]'] = !0),
        (O['[object Error]'] = O['[object Function]'] = O[
          '[object WeakMap]'
        ] = !1),
        (e.exports = function e(t, n, g, h, I, _) {
          var D,
            N = 1 & n,
            j = 2 & n,
            L = 4 & n
          if ((g && (D = I ? g(t, h, I, _) : g(t)), void 0 !== D))
            return D
          if (!P(t)) return t
          var M = E(t)
          if (M) {
            if (((D = T(t)), !N)) return l(t, D)
          } else {
            var w = y(t),
              F =
                '[object Function]' == w ||
                '[object GeneratorFunction]' == w
            if (v(t)) return u(t, N)
            if (
              '[object Object]' == w ||
              '[object Arguments]' == w ||
              (F && !I)
            ) {
              if (((D = j || F ? {} : m(t)), !N))
                return j ? f(t, s(D, t)) : p(t, o(D, t))
            } else {
              if (!O[w]) return I ? t : {}
              D = S(t, w, N)
            }
          }
          _ || (_ = new r())
          var C = _.get(t)
          if (C) return C
          _.set(t, D),
            x(t)
              ? t.forEach(function (r) {
                  D.add(e(r, n, g, r, t, _))
                })
              : b(t) &&
                t.forEach(function (r, i) {
                  D.set(i, e(r, n, g, i, t, _))
                })
          var B = L ? (j ? d : c) : j ? keysIn : A,
            R = M ? void 0 : B(t)
          return (
            i(R || t, function (r, i) {
              R && (r = t[(i = r)]), a(D, i, e(r, n, g, i, t, _))
            }),
            D
          )
        })
    },
    function (e, t, n) {
      var r = n(13),
        i = n(89),
        a = n(90),
        o = n(91),
        s = n(92),
        u = n(93)
      function l(e) {
        var t = (this.__data__ = new r(e))
        this.size = t.size
      }
      ;(l.prototype.clear = i),
        (l.prototype.delete = a),
        (l.prototype.get = o),
        (l.prototype.has = s),
        (l.prototype.set = u),
        (e.exports = l)
    },
    function (e, t) {
      e.exports = function () {
        ;(this.__data__ = []), (this.size = 0)
      }
    },
    function (e, t, n) {
      var r = n(14),
        i = Array.prototype.splice
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e)
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : i.call(t, n, 1),
          --this.size,
          !0)
        )
      }
    },
    function (e, t, n) {
      var r = n(14)
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e)
        return n < 0 ? void 0 : t[n][1]
      }
    },
    function (e, t, n) {
      var r = n(14)
      e.exports = function (e) {
        return r(this.__data__, e) > -1
      }
    },
    function (e, t, n) {
      var r = n(14)
      e.exports = function (e, t) {
        var n = this.__data__,
          i = r(n, e)
        return (
          i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this
        )
      }
    },
    function (e, t, n) {
      var r = n(13)
      e.exports = function () {
        ;(this.__data__ = new r()), (this.size = 0)
      }
    },
    function (e, t) {
      e.exports = function (e) {
        var t = this.__data__,
          n = t.delete(e)
        return (this.size = t.size), n
      }
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.get(e)
      }
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e)
      }
    },
    function (e, t, n) {
      var r = n(13),
        i = n(22),
        a = n(43)
      e.exports = function (e, t) {
        var n = this.__data__
        if (n instanceof r) {
          var o = n.__data__
          if (!i || o.length < 199)
            return o.push([e, t]), (this.size = ++n.size), this
          n = this.__data__ = new a(o)
        }
        return n.set(e, t), (this.size = n.size), this
      }
    },
    function (e, t, n) {
      var r = n(40),
        i = n(97),
        a = n(10),
        o = n(42),
        s = /^\[object .+?Constructor\]$/,
        u = Function.prototype,
        l = Object.prototype,
        p = u.toString,
        f = l.hasOwnProperty,
        c = RegExp(
          '^' +
            p
              .call(f)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        )
      e.exports = function (e) {
        return !(!a(e) || i(e)) && (r(e) ? c : s).test(o(e))
      }
    },
    function (e, t, n) {
      var r = n(23),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = r ? r.toStringTag : void 0
      e.exports = function (e) {
        var t = a.call(e, s),
          n = e[s]
        try {
          e[s] = void 0
          var r = !0
        } catch (e) {}
        var i = o.call(e)
        return r && (t ? (e[s] = n) : delete e[s]), i
      }
    },
    function (e, t) {
      var n = Object.prototype.toString
      e.exports = function (e) {
        return n.call(e)
      }
    },
    function (e, t, n) {
      var r,
        i = n(98),
        a = (r = /[^.]+$/.exec(
          (i && i.keys && i.keys.IE_PROTO) || ''
        ))
          ? 'Symbol(src)_1.' + r
          : ''
      e.exports = function (e) {
        return !!a && a in e
      }
    },
    function (e, t, n) {
      var r = n(3)['__core-js_shared__']
      e.exports = r
    },
    function (e, t) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t]
      }
    },
    function (e, t, n) {
      var r = n(101),
        i = n(13),
        a = n(22)
      e.exports = function () {
        ;(this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (a || i)(),
            string: new r(),
          })
      }
    },
    function (e, t, n) {
      var r = n(102),
        i = n(103),
        a = n(104),
        o = n(105),
        s = n(106)
      function u(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.clear(); ++t < n; ) {
          var r = e[t]
          this.set(r[0], r[1])
        }
      }
      ;(u.prototype.clear = r),
        (u.prototype.delete = i),
        (u.prototype.get = a),
        (u.prototype.has = o),
        (u.prototype.set = s),
        (e.exports = u)
    },
    function (e, t, n) {
      var r = n(15)
      e.exports = function () {
        ;(this.__data__ = r ? r(null) : {}), (this.size = 0)
      }
    },
    function (e, t) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e]
        return (this.size -= t ? 1 : 0), t
      }
    },
    function (e, t, n) {
      var r = n(15),
        i = Object.prototype.hasOwnProperty
      e.exports = function (e) {
        var t = this.__data__
        if (r) {
          var n = t[e]
          return '__lodash_hash_undefined__' === n ? void 0 : n
        }
        return i.call(t, e) ? t[e] : void 0
      }
    },
    function (e, t, n) {
      var r = n(15),
        i = Object.prototype.hasOwnProperty
      e.exports = function (e) {
        var t = this.__data__
        return r ? void 0 !== t[e] : i.call(t, e)
      }
    },
    function (e, t, n) {
      var r = n(15)
      e.exports = function (e, t) {
        var n = this.__data__
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] =
            r && void 0 === t ? '__lodash_hash_undefined__' : t),
          this
        )
      }
    },
    function (e, t, n) {
      var r = n(16)
      e.exports = function (e) {
        var t = r(this, e).delete(e)
        return (this.size -= t ? 1 : 0), t
      }
    },
    function (e, t) {
      e.exports = function (e) {
        var t = typeof e
        return 'string' == t ||
          'number' == t ||
          'symbol' == t ||
          'boolean' == t
          ? '__proto__' !== e
          : null === e
      }
    },
    function (e, t, n) {
      var r = n(16)
      e.exports = function (e) {
        return r(this, e).get(e)
      }
    },
    function (e, t, n) {
      var r = n(16)
      e.exports = function (e) {
        return r(this, e).has(e)
      }
    },
    function (e, t, n) {
      var r = n(16)
      e.exports = function (e, t) {
        var n = r(this, e),
          i = n.size
        return n.set(e, t), (this.size += n.size == i ? 0 : 1), this
      }
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length;
          ++n < r && !1 !== t(e[n], n, e);

        );
        return e
      }
    },
    function (e, t, n) {
      var r = n(5),
        i = (function () {
          try {
            var e = r(Object, 'defineProperty')
            return e({}, '', {}), e
          } catch (e) {}
        })()
      e.exports = i
    },
    function (e, t, n) {
      var r = n(17),
        i = n(24)
      e.exports = function (e, t) {
        return e && r(t, i(t), e)
      }
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n)
        return r
      }
    },
    function (e, t, n) {
      var r = n(117),
        i = n(6),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        u = r(
          (function () {
            return arguments
          })()
        )
          ? r
          : function (e) {
              return (
                i(e) && o.call(e, 'callee') && !s.call(e, 'callee')
              )
            }
      e.exports = u
    },
    function (e, t, n) {
      var r = n(9),
        i = n(6)
      e.exports = function (e) {
        return i(e) && '[object Arguments]' == r(e)
      }
    },
    function (e, t) {
      e.exports = function () {
        return !1
      }
    },
    function (e, t) {
      var n = /^(?:0|[1-9]\d*)$/
      e.exports = function (e, t) {
        var r = typeof e
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ('number' == r || ('symbol' != r && n.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        )
      }
    },
    function (e, t, n) {
      var r = n(121),
        i = n(18),
        a = n(19),
        o = a && a.isTypedArray,
        s = o ? i(o) : r
      e.exports = s
    },
    function (e, t, n) {
      var r = n(9),
        i = n(48),
        a = n(6),
        o = {}
      ;(o['[object Float32Array]'] = o['[object Float64Array]'] = o[
        '[object Int8Array]'
      ] = o['[object Int16Array]'] = o['[object Int32Array]'] = o[
        '[object Uint8Array]'
      ] = o['[object Uint8ClampedArray]'] = o[
        '[object Uint16Array]'
      ] = o['[object Uint32Array]'] = !0),
        (o['[object Arguments]'] = o['[object Array]'] = o[
          '[object ArrayBuffer]'
        ] = o['[object Boolean]'] = o['[object DataView]'] = o[
          '[object Date]'
        ] = o['[object Error]'] = o['[object Function]'] = o[
          '[object Map]'
        ] = o['[object Number]'] = o['[object Object]'] = o[
          '[object RegExp]'
        ] = o['[object Set]'] = o['[object String]'] = o[
          '[object WeakMap]'
        ] = !1),
        (e.exports = function (e) {
          return a(e) && i(e.length) && !!o[r(e)]
        })
    },
    function (e, t, n) {
      var r = n(27),
        i = n(123),
        a = Object.prototype.hasOwnProperty
      e.exports = function (e) {
        if (!r(e)) return i(e)
        var t = []
        for (var n in Object(e))
          a.call(e, n) && 'constructor' != n && t.push(n)
        return t
      }
    },
    function (e, t, n) {
      var r = n(49)(Object.keys, Object)
      e.exports = r
    },
    function (e, t, n) {
      var r = n(17),
        i = n(51)
      e.exports = function (e, t) {
        return e && r(t, i(t), e)
      }
    },
    function (e, t, n) {
      var r = n(10),
        i = n(27),
        a = n(126),
        o = Object.prototype.hasOwnProperty
      e.exports = function (e) {
        if (!r(e)) return a(e)
        var t = i(e),
          n = []
        for (var s in e)
          ('constructor' != s || (!t && o.call(e, s))) && n.push(s)
        return n
      }
    },
    function (e, t) {
      e.exports = function (e) {
        var t = []
        if (null != e) for (var n in Object(e)) t.push(n)
        return t
      }
    },
    function (e, t, n) {
      ;(function (e) {
        var r = n(3),
          i = t && !t.nodeType && t,
          a = i && 'object' == typeof e && e && !e.nodeType && e,
          o = a && a.exports === i ? r.Buffer : void 0,
          s = o ? o.allocUnsafe : void 0
        e.exports = function (e, t) {
          if (t) return e.slice()
          var n = e.length,
            r = s ? s(n) : new e.constructor(n)
          return e.copy(r), r
        }
      }.call(this, n(26)(e)))
    },
    function (e, t) {
      e.exports = function (e, t) {
        var n = -1,
          r = e.length
        for (t || (t = Array(r)); ++n < r; ) t[n] = e[n]
        return t
      }
    },
    function (e, t, n) {
      var r = n(17),
        i = n(28)
      e.exports = function (e, t) {
        return r(e, i(e), t)
      }
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, i = 0, a = [];
          ++n < r;

        ) {
          var o = e[n]
          t(o, n, e) && (a[i++] = o)
        }
        return a
      }
    },
    function (e, t, n) {
      var r = n(17),
        i = n(53)
      e.exports = function (e, t) {
        return r(e, i(e), t)
      }
    },
    function (e, t, n) {
      var r = n(55),
        i = n(28),
        a = n(24)
      e.exports = function (e) {
        return r(e, a, i)
      }
    },
    function (e, t, n) {
      var r = n(55),
        i = n(53),
        a = n(51)
      e.exports = function (e) {
        return r(e, a, i)
      }
    },
    function (e, t, n) {
      var r = n(5)(n(3), 'DataView')
      e.exports = r
    },
    function (e, t, n) {
      var r = n(5)(n(3), 'Promise')
      e.exports = r
    },
    function (e, t, n) {
      var r = n(5)(n(3), 'WeakMap')
      e.exports = r
    },
    function (e, t) {
      var n = Object.prototype.hasOwnProperty
      e.exports = function (e) {
        var t = e.length,
          r = new e.constructor(t)
        return (
          t &&
            'string' == typeof e[0] &&
            n.call(e, 'index') &&
            ((r.index = e.index), (r.input = e.input)),
          r
        )
      }
    },
    function (e, t, n) {
      var r = n(31),
        i = n(140),
        a = n(141),
        o = n(142),
        s = n(143)
      e.exports = function (e, t, n) {
        var u = e.constructor
        switch (t) {
          case '[object ArrayBuffer]':
            return r(e)
          case '[object Boolean]':
          case '[object Date]':
            return new u(+e)
          case '[object DataView]':
            return i(e, n)
          case '[object Float32Array]':
          case '[object Float64Array]':
          case '[object Int8Array]':
          case '[object Int16Array]':
          case '[object Int32Array]':
          case '[object Uint8Array]':
          case '[object Uint8ClampedArray]':
          case '[object Uint16Array]':
          case '[object Uint32Array]':
            return s(e, n)
          case '[object Map]':
            return new u()
          case '[object Number]':
          case '[object String]':
            return new u(e)
          case '[object RegExp]':
            return a(e)
          case '[object Set]':
            return new u()
          case '[object Symbol]':
            return o(e)
        }
      }
    },
    function (e, t, n) {
      var r = n(3).Uint8Array
      e.exports = r
    },
    function (e, t, n) {
      var r = n(31)
      e.exports = function (e, t) {
        var n = t ? r(e.buffer) : e.buffer
        return new e.constructor(n, e.byteOffset, e.byteLength)
      }
    },
    function (e, t) {
      var n = /\w*$/
      e.exports = function (e) {
        var t = new e.constructor(e.source, n.exec(e))
        return (t.lastIndex = e.lastIndex), t
      }
    },
    function (e, t, n) {
      var r = n(23),
        i = r ? r.prototype : void 0,
        a = i ? i.valueOf : void 0
      e.exports = function (e) {
        return a ? Object(a.call(e)) : {}
      }
    },
    function (e, t, n) {
      var r = n(31)
      e.exports = function (e, t) {
        var n = t ? r(e.buffer) : e.buffer
        return new e.constructor(n, e.byteOffset, e.length)
      }
    },
    function (e, t, n) {
      var r = n(145),
        i = n(29),
        a = n(27)
      e.exports = function (e) {
        return 'function' != typeof e.constructor || a(e)
          ? {}
          : r(i(e))
      }
    },
    function (e, t, n) {
      var r = n(10),
        i = Object.create,
        a = (function () {
          function e() {}
          return function (t) {
            if (!r(t)) return {}
            if (i) return i(t)
            e.prototype = t
            var n = new e()
            return (e.prototype = void 0), n
          }
        })()
      e.exports = a
    },
    function (e, t, n) {
      var r = n(147),
        i = n(18),
        a = n(19),
        o = a && a.isMap,
        s = o ? i(o) : r
      e.exports = s
    },
    function (e, t, n) {
      var r = n(30),
        i = n(6)
      e.exports = function (e) {
        return i(e) && '[object Map]' == r(e)
      }
    },
    function (e, t, n) {
      var r = n(149),
        i = n(18),
        a = n(19),
        o = a && a.isSet,
        s = o ? i(o) : r
      e.exports = s
    },
    function (e, t, n) {
      var r = n(30),
        i = n(6)
      e.exports = function (e) {
        return i(e) && '[object Set]' == r(e)
      }
    },
    function (e, t, n) {
      'use strict'
      let r = null
      function i(e) {
        if (null !== r && (r.property, 1)) {
          const e = r
          return (r = i.prototype = null), e
        }
        return (
          (r = i.prototype = null == e ? Object.create(null) : e),
          new i()
        )
      }
      i(),
        (e.exports = function (e) {
          return i(e)
        })
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isIdentifierStart = p),
        (t.isIdentifierChar = f),
        (t.isIdentifierName = function (e) {
          let t = !0
          for (let n = 0, r = Array.from(e); n < r.length; n++) {
            const e = r[n].codePointAt(0)
            if (t) {
              if (!p(e)) return !1
              t = !1
            } else if (!f(e)) return !1
          }
          return !0
        })
      let r =
          'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
        i =
          '‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿'
      const a = new RegExp('[' + r + ']'),
        o = new RegExp('[' + r + i + ']')
      r = i = null
      const s = [
          0,
          11,
          2,
          25,
          2,
          18,
          2,
          1,
          2,
          14,
          3,
          13,
          35,
          122,
          70,
          52,
          268,
          28,
          4,
          48,
          48,
          31,
          14,
          29,
          6,
          37,
          11,
          29,
          3,
          35,
          5,
          7,
          2,
          4,
          43,
          157,
          19,
          35,
          5,
          35,
          5,
          39,
          9,
          51,
          157,
          310,
          10,
          21,
          11,
          7,
          153,
          5,
          3,
          0,
          2,
          43,
          2,
          1,
          4,
          0,
          3,
          22,
          11,
          22,
          10,
          30,
          66,
          18,
          2,
          1,
          11,
          21,
          11,
          25,
          71,
          55,
          7,
          1,
          65,
          0,
          16,
          3,
          2,
          2,
          2,
          28,
          43,
          28,
          4,
          28,
          36,
          7,
          2,
          27,
          28,
          53,
          11,
          21,
          11,
          18,
          14,
          17,
          111,
          72,
          56,
          50,
          14,
          50,
          14,
          35,
          349,
          41,
          7,
          1,
          79,
          28,
          11,
          0,
          9,
          21,
          107,
          20,
          28,
          22,
          13,
          52,
          76,
          44,
          33,
          24,
          27,
          35,
          30,
          0,
          3,
          0,
          9,
          34,
          4,
          0,
          13,
          47,
          15,
          3,
          22,
          0,
          2,
          0,
          36,
          17,
          2,
          24,
          85,
          6,
          2,
          0,
          2,
          3,
          2,
          14,
          2,
          9,
          8,
          46,
          39,
          7,
          3,
          1,
          3,
          21,
          2,
          6,
          2,
          1,
          2,
          4,
          4,
          0,
          19,
          0,
          13,
          4,
          159,
          52,
          19,
          3,
          21,
          2,
          31,
          47,
          21,
          1,
          2,
          0,
          185,
          46,
          42,
          3,
          37,
          47,
          21,
          0,
          60,
          42,
          14,
          0,
          72,
          26,
          230,
          43,
          117,
          63,
          32,
          7,
          3,
          0,
          3,
          7,
          2,
          1,
          2,
          23,
          16,
          0,
          2,
          0,
          95,
          7,
          3,
          38,
          17,
          0,
          2,
          0,
          29,
          0,
          11,
          39,
          8,
          0,
          22,
          0,
          12,
          45,
          20,
          0,
          35,
          56,
          264,
          8,
          2,
          36,
          18,
          0,
          50,
          29,
          113,
          6,
          2,
          1,
          2,
          37,
          22,
          0,
          26,
          5,
          2,
          1,
          2,
          31,
          15,
          0,
          328,
          18,
          190,
          0,
          80,
          921,
          103,
          110,
          18,
          195,
          2749,
          1070,
          4050,
          582,
          8634,
          568,
          8,
          30,
          114,
          29,
          19,
          47,
          17,
          3,
          32,
          20,
          6,
          18,
          689,
          63,
          129,
          74,
          6,
          0,
          67,
          12,
          65,
          1,
          2,
          0,
          29,
          6135,
          9,
          1237,
          43,
          8,
          8952,
          286,
          50,
          2,
          18,
          3,
          9,
          395,
          2309,
          106,
          6,
          12,
          4,
          8,
          8,
          9,
          5991,
          84,
          2,
          70,
          2,
          1,
          3,
          0,
          3,
          1,
          3,
          3,
          2,
          11,
          2,
          0,
          2,
          6,
          2,
          64,
          2,
          3,
          3,
          7,
          2,
          6,
          2,
          27,
          2,
          3,
          2,
          4,
          2,
          0,
          4,
          6,
          2,
          339,
          3,
          24,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          7,
          2357,
          44,
          11,
          6,
          17,
          0,
          370,
          43,
          1301,
          196,
          60,
          67,
          8,
          0,
          1205,
          3,
          2,
          26,
          2,
          1,
          2,
          0,
          3,
          0,
          2,
          9,
          2,
          3,
          2,
          0,
          2,
          0,
          7,
          0,
          5,
          0,
          2,
          0,
          2,
          0,
          2,
          2,
          2,
          1,
          2,
          0,
          3,
          0,
          2,
          0,
          2,
          0,
          2,
          0,
          2,
          0,
          2,
          1,
          2,
          0,
          3,
          3,
          2,
          6,
          2,
          3,
          2,
          3,
          2,
          0,
          2,
          9,
          2,
          16,
          6,
          2,
          2,
          4,
          2,
          16,
          4421,
          42717,
          35,
          4148,
          12,
          221,
          3,
          5761,
          15,
          7472,
          3104,
          541,
          1507,
          4938,
        ],
        u = [
          509,
          0,
          227,
          0,
          150,
          4,
          294,
          9,
          1368,
          2,
          2,
          1,
          6,
          3,
          41,
          2,
          5,
          0,
          166,
          1,
          574,
          3,
          9,
          9,
          370,
          1,
          154,
          10,
          176,
          2,
          54,
          14,
          32,
          9,
          16,
          3,
          46,
          10,
          54,
          9,
          7,
          2,
          37,
          13,
          2,
          9,
          6,
          1,
          45,
          0,
          13,
          2,
          49,
          13,
          9,
          3,
          2,
          11,
          83,
          11,
          7,
          0,
          161,
          11,
          6,
          9,
          7,
          3,
          56,
          1,
          2,
          6,
          3,
          1,
          3,
          2,
          10,
          0,
          11,
          1,
          3,
          6,
          4,
          4,
          193,
          17,
          10,
          9,
          5,
          0,
          82,
          19,
          13,
          9,
          214,
          6,
          3,
          8,
          28,
          1,
          83,
          16,
          16,
          9,
          82,
          12,
          9,
          9,
          84,
          14,
          5,
          9,
          243,
          14,
          166,
          9,
          71,
          5,
          2,
          1,
          3,
          3,
          2,
          0,
          2,
          1,
          13,
          9,
          120,
          6,
          3,
          6,
          4,
          0,
          29,
          9,
          41,
          6,
          2,
          3,
          9,
          0,
          10,
          10,
          47,
          15,
          406,
          7,
          2,
          7,
          17,
          9,
          57,
          21,
          2,
          13,
          123,
          5,
          4,
          0,
          2,
          1,
          2,
          6,
          2,
          0,
          9,
          9,
          49,
          4,
          2,
          1,
          2,
          4,
          9,
          9,
          330,
          3,
          19306,
          9,
          135,
          4,
          60,
          6,
          26,
          9,
          1014,
          0,
          2,
          54,
          8,
          3,
          82,
          0,
          12,
          1,
          19628,
          1,
          5319,
          4,
          4,
          5,
          9,
          7,
          3,
          6,
          31,
          3,
          149,
          2,
          1418,
          49,
          513,
          54,
          5,
          49,
          9,
          0,
          15,
          0,
          23,
          4,
          2,
          14,
          1361,
          6,
          2,
          16,
          3,
          6,
          2,
          1,
          2,
          4,
          262,
          6,
          10,
          9,
          419,
          13,
          1495,
          6,
          110,
          6,
          6,
          9,
          4759,
          9,
          787719,
          239,
        ]
      function l(e, t) {
        let n = 65536
        for (let r = 0, i = t.length; r < i; r += 2) {
          if (((n += t[r]), n > e)) return !1
          if (((n += t[r + 1]), n >= e)) return !0
        }
        return !1
      }
      function p(e) {
        return e < 65
          ? 36 === e
          : e <= 90 ||
              (e < 97
                ? 95 === e
                : e <= 122 ||
                  (e <= 65535
                    ? e >= 170 && a.test(String.fromCharCode(e))
                    : l(e, s)))
      }
      function f(e) {
        return e < 48
          ? 36 === e
          : e < 58 ||
              (!(e < 65) &&
                (e <= 90 ||
                  (e < 97
                    ? 95 === e
                    : e <= 122 ||
                      (e <= 65535
                        ? e >= 170 && o.test(String.fromCharCode(e))
                        : l(e, s) || l(e, u)))))
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isReservedWord = u),
        (t.isStrictReservedWord = l),
        (t.isStrictBindOnlyReservedWord = p),
        (t.isStrictBindReservedWord = function (e, t) {
          return l(e, t) || p(e)
        }),
        (t.isKeyword = function (e) {
          return a.has(e)
        })
      const r = [
          'implements',
          'interface',
          'let',
          'package',
          'private',
          'protected',
          'public',
          'static',
          'yield',
        ],
        i = ['eval', 'arguments'],
        a = new Set([
          'break',
          'case',
          'catch',
          'continue',
          'debugger',
          'default',
          'do',
          'else',
          'finally',
          'for',
          'function',
          'if',
          'return',
          'switch',
          'throw',
          'try',
          'var',
          'const',
          'while',
          'with',
          'new',
          'this',
          'super',
          'class',
          'extends',
          'export',
          'import',
          'null',
          'true',
          'false',
          'in',
          'instanceof',
          'typeof',
          'void',
          'delete',
        ]),
        o = new Set(r),
        s = new Set(i)
      function u(e, t) {
        return (t && 'await' === e) || 'enum' === e
      }
      function l(e, t) {
        return u(e, t) || o.has(e)
      }
      function p(e) {
        return s.has(e)
      }
    },
    function (e, t, n) {
      'use strict'
      var r = (function (e) {
        if (e && e.__esModule) return e
        if (
          null === e ||
          ('object' != typeof e && 'function' != typeof e)
        )
          return { default: e }
        var t = i()
        if (t && t.has(e)) return t.get(e)
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var o = r ? Object.getOwnPropertyDescriptor(e, a) : null
            o && (o.get || o.set)
              ? Object.defineProperty(n, a, o)
              : (n[a] = e[a])
          }
        ;(n.default = e), t && t.set(e, n)
        return n
      })(n(4))
      function i() {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (i = function () {
            return e
          }),
          e
        )
      }
      const a = (e, t = 'TypeParameterDeclaration') => {
        ;(0, r.default)(e, {
          builder: ['id', 'typeParameters', 'extends', 'body'],
          visitor: [
            'id',
            'typeParameters',
            'extends',
            'mixins',
            'implements',
            'body',
          ],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: {
            id: (0, r.validateType)('Identifier'),
            typeParameters: (0, r.validateOptionalType)(t),
            extends: (0, r.validateOptional)(
              (0, r.arrayOfType)('InterfaceExtends')
            ),
            mixins: (0, r.validateOptional)(
              (0, r.arrayOfType)('InterfaceExtends')
            ),
            implements: (0, r.validateOptional)(
              (0, r.arrayOfType)('ClassImplements')
            ),
            body: (0, r.validateType)('ObjectTypeAnnotation'),
          },
        })
      }
      ;(0, r.default)('AnyTypeAnnotation', {
        aliases: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
      }),
        (0, r.default)('ArrayTypeAnnotation', {
          visitor: ['elementType'],
          aliases: ['Flow', 'FlowType'],
          fields: { elementType: (0, r.validateType)('FlowType') },
        }),
        (0, r.default)('BooleanTypeAnnotation', {
          aliases: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
        }),
        (0, r.default)('BooleanLiteralTypeAnnotation', {
          builder: ['value'],
          aliases: ['Flow', 'FlowType'],
          fields: {
            value: (0, r.validate)((0, r.assertValueType)('boolean')),
          },
        }),
        (0, r.default)('NullLiteralTypeAnnotation', {
          aliases: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
        }),
        (0, r.default)('ClassImplements', {
          visitor: ['id', 'typeParameters'],
          aliases: ['Flow'],
          fields: {
            id: (0, r.validateType)('Identifier'),
            typeParameters: (0, r.validateOptionalType)(
              'TypeParameterInstantiation'
            ),
          },
        }),
        a('DeclareClass'),
        (0, r.default)('DeclareFunction', {
          visitor: ['id'],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: {
            id: (0, r.validateType)('Identifier'),
            predicate: (0, r.validateOptionalType)(
              'DeclaredPredicate'
            ),
          },
        }),
        a('DeclareInterface'),
        (0, r.default)('DeclareModule', {
          builder: ['id', 'body', 'kind'],
          visitor: ['id', 'body'],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: {
            id: (0, r.validateType)(['Identifier', 'StringLiteral']),
            body: (0, r.validateType)('BlockStatement'),
            kind: (0, r.validateOptional)(
              (0, r.assertOneOf)('CommonJS', 'ES')
            ),
          },
        }),
        (0, r.default)('DeclareModuleExports', {
          visitor: ['typeAnnotation'],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: {
            typeAnnotation: (0, r.validateType)('TypeAnnotation'),
          },
        }),
        (0, r.default)('DeclareTypeAlias', {
          visitor: ['id', 'typeParameters', 'right'],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: {
            id: (0, r.validateType)('Identifier'),
            typeParameters: (0, r.validateOptionalType)(
              'TypeParameterDeclaration'
            ),
            right: (0, r.validateType)('FlowType'),
          },
        }),
        (0, r.default)('DeclareOpaqueType', {
          visitor: ['id', 'typeParameters', 'supertype'],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: {
            id: (0, r.validateType)('Identifier'),
            typeParameters: (0, r.validateOptionalType)(
              'TypeParameterDeclaration'
            ),
            supertype: (0, r.validateOptionalType)('FlowType'),
          },
        }),
        (0, r.default)('DeclareVariable', {
          visitor: ['id'],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: { id: (0, r.validateType)('Identifier') },
        }),
        (0, r.default)('DeclareExportDeclaration', {
          visitor: ['declaration', 'specifiers', 'source'],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: {
            declaration: (0, r.validateOptionalType)('Flow'),
            specifiers: (0, r.validateOptional)(
              (0, r.arrayOfType)([
                'ExportSpecifier',
                'ExportNamespaceSpecifier',
              ])
            ),
            source: (0, r.validateOptionalType)('StringLiteral'),
            default: (0, r.validateOptional)(
              (0, r.assertValueType)('boolean')
            ),
          },
        }),
        (0, r.default)('DeclareExportAllDeclaration', {
          visitor: ['source'],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: {
            source: (0, r.validateType)('StringLiteral'),
            exportKind: (0, r.validateOptional)(
              (0, r.assertOneOf)('type', 'value')
            ),
          },
        }),
        (0, r.default)('DeclaredPredicate', {
          visitor: ['value'],
          aliases: ['Flow', 'FlowPredicate'],
          fields: { value: (0, r.validateType)('Flow') },
        }),
        (0, r.default)('ExistsTypeAnnotation', {
          aliases: ['Flow', 'FlowType'],
        }),
        (0, r.default)('FunctionTypeAnnotation', {
          visitor: ['typeParameters', 'params', 'rest', 'returnType'],
          aliases: ['Flow', 'FlowType'],
          fields: {
            typeParameters: (0, r.validateOptionalType)(
              'TypeParameterDeclaration'
            ),
            params: (0, r.validate)(
              (0, r.arrayOfType)('FunctionTypeParam')
            ),
            rest: (0, r.validateOptionalType)('FunctionTypeParam'),
            returnType: (0, r.validateType)('FlowType'),
          },
        }),
        (0, r.default)('FunctionTypeParam', {
          visitor: ['name', 'typeAnnotation'],
          aliases: ['Flow'],
          fields: {
            name: (0, r.validateOptionalType)('Identifier'),
            typeAnnotation: (0, r.validateType)('FlowType'),
            optional: (0, r.validateOptional)(
              (0, r.assertValueType)('boolean')
            ),
          },
        }),
        (0, r.default)('GenericTypeAnnotation', {
          visitor: ['id', 'typeParameters'],
          aliases: ['Flow', 'FlowType'],
          fields: {
            id: (0, r.validateType)([
              'Identifier',
              'QualifiedTypeIdentifier',
            ]),
            typeParameters: (0, r.validateOptionalType)(
              'TypeParameterInstantiation'
            ),
          },
        }),
        (0, r.default)('InferredPredicate', {
          aliases: ['Flow', 'FlowPredicate'],
        }),
        (0, r.default)('InterfaceExtends', {
          visitor: ['id', 'typeParameters'],
          aliases: ['Flow'],
          fields: {
            id: (0, r.validateType)([
              'Identifier',
              'QualifiedTypeIdentifier',
            ]),
            typeParameters: (0, r.validateOptionalType)(
              'TypeParameterInstantiation'
            ),
          },
        }),
        a('InterfaceDeclaration'),
        (0, r.default)('InterfaceTypeAnnotation', {
          visitor: ['extends', 'body'],
          aliases: ['Flow', 'FlowType'],
          fields: {
            extends: (0, r.validateOptional)(
              (0, r.arrayOfType)('InterfaceExtends')
            ),
            body: (0, r.validateType)('ObjectTypeAnnotation'),
          },
        }),
        (0, r.default)('IntersectionTypeAnnotation', {
          visitor: ['types'],
          aliases: ['Flow', 'FlowType'],
          fields: {
            types: (0, r.validate)((0, r.arrayOfType)('FlowType')),
          },
        }),
        (0, r.default)('MixedTypeAnnotation', {
          aliases: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
        }),
        (0, r.default)('EmptyTypeAnnotation', {
          aliases: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
        }),
        (0, r.default)('NullableTypeAnnotation', {
          visitor: ['typeAnnotation'],
          aliases: ['Flow', 'FlowType'],
          fields: { typeAnnotation: (0, r.validateType)('FlowType') },
        }),
        (0, r.default)('NumberLiteralTypeAnnotation', {
          builder: ['value'],
          aliases: ['Flow', 'FlowType'],
          fields: {
            value: (0, r.validate)((0, r.assertValueType)('number')),
          },
        }),
        (0, r.default)('NumberTypeAnnotation', {
          aliases: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
        }),
        (0, r.default)('ObjectTypeAnnotation', {
          visitor: [
            'properties',
            'indexers',
            'callProperties',
            'internalSlots',
          ],
          aliases: ['Flow', 'FlowType'],
          builder: [
            'properties',
            'indexers',
            'callProperties',
            'internalSlots',
            'exact',
          ],
          fields: {
            properties: (0, r.validate)(
              (0, r.arrayOfType)([
                'ObjectTypeProperty',
                'ObjectTypeSpreadProperty',
              ])
            ),
            indexers: (0, r.validateOptional)(
              (0, r.arrayOfType)('ObjectTypeIndexer')
            ),
            callProperties: (0, r.validateOptional)(
              (0, r.arrayOfType)('ObjectTypeCallProperty')
            ),
            internalSlots: (0, r.validateOptional)(
              (0, r.arrayOfType)('ObjectTypeInternalSlot')
            ),
            exact: {
              validate: (0, r.assertValueType)('boolean'),
              default: !1,
            },
            inexact: (0, r.validateOptional)(
              (0, r.assertValueType)('boolean')
            ),
          },
        }),
        (0, r.default)('ObjectTypeInternalSlot', {
          visitor: ['id', 'value', 'optional', 'static', 'method'],
          aliases: ['Flow', 'UserWhitespacable'],
          fields: {
            id: (0, r.validateType)('Identifier'),
            value: (0, r.validateType)('FlowType'),
            optional: (0, r.validate)(
              (0, r.assertValueType)('boolean')
            ),
            static: (0, r.validate)(
              (0, r.assertValueType)('boolean')
            ),
            method: (0, r.validate)(
              (0, r.assertValueType)('boolean')
            ),
          },
        }),
        (0, r.default)('ObjectTypeCallProperty', {
          visitor: ['value'],
          aliases: ['Flow', 'UserWhitespacable'],
          fields: {
            value: (0, r.validateType)('FlowType'),
            static: (0, r.validate)(
              (0, r.assertValueType)('boolean')
            ),
          },
        }),
        (0, r.default)('ObjectTypeIndexer', {
          visitor: ['id', 'key', 'value', 'variance'],
          aliases: ['Flow', 'UserWhitespacable'],
          fields: {
            id: (0, r.validateOptionalType)('Identifier'),
            key: (0, r.validateType)('FlowType'),
            value: (0, r.validateType)('FlowType'),
            static: (0, r.validate)(
              (0, r.assertValueType)('boolean')
            ),
            variance: (0, r.validateOptionalType)('Variance'),
          },
        }),
        (0, r.default)('ObjectTypeProperty', {
          visitor: ['key', 'value', 'variance'],
          aliases: ['Flow', 'UserWhitespacable'],
          fields: {
            key: (0, r.validateType)(['Identifier', 'StringLiteral']),
            value: (0, r.validateType)('FlowType'),
            kind: (0, r.validate)(
              (0, r.assertOneOf)('init', 'get', 'set')
            ),
            static: (0, r.validate)(
              (0, r.assertValueType)('boolean')
            ),
            proto: (0, r.validate)((0, r.assertValueType)('boolean')),
            optional: (0, r.validate)(
              (0, r.assertValueType)('boolean')
            ),
            variance: (0, r.validateOptionalType)('Variance'),
          },
        }),
        (0, r.default)('ObjectTypeSpreadProperty', {
          visitor: ['argument'],
          aliases: ['Flow', 'UserWhitespacable'],
          fields: { argument: (0, r.validateType)('FlowType') },
        }),
        (0, r.default)('OpaqueType', {
          visitor: ['id', 'typeParameters', 'supertype', 'impltype'],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: {
            id: (0, r.validateType)('Identifier'),
            typeParameters: (0, r.validateOptionalType)(
              'TypeParameterDeclaration'
            ),
            supertype: (0, r.validateOptionalType)('FlowType'),
            impltype: (0, r.validateType)('FlowType'),
          },
        }),
        (0, r.default)('QualifiedTypeIdentifier', {
          visitor: ['id', 'qualification'],
          aliases: ['Flow'],
          fields: {
            id: (0, r.validateType)('Identifier'),
            qualification: (0, r.validateType)([
              'Identifier',
              'QualifiedTypeIdentifier',
            ]),
          },
        }),
        (0, r.default)('StringLiteralTypeAnnotation', {
          builder: ['value'],
          aliases: ['Flow', 'FlowType'],
          fields: {
            value: (0, r.validate)((0, r.assertValueType)('string')),
          },
        }),
        (0, r.default)('StringTypeAnnotation', {
          aliases: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
        }),
        (0, r.default)('SymbolTypeAnnotation', {
          aliases: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
        }),
        (0, r.default)('ThisTypeAnnotation', {
          aliases: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
        }),
        (0, r.default)('TupleTypeAnnotation', {
          visitor: ['types'],
          aliases: ['Flow', 'FlowType'],
          fields: {
            types: (0, r.validate)((0, r.arrayOfType)('FlowType')),
          },
        }),
        (0, r.default)('TypeofTypeAnnotation', {
          visitor: ['argument'],
          aliases: ['Flow', 'FlowType'],
          fields: { argument: (0, r.validateType)('FlowType') },
        }),
        (0, r.default)('TypeAlias', {
          visitor: ['id', 'typeParameters', 'right'],
          aliases: [
            'Flow',
            'FlowDeclaration',
            'Statement',
            'Declaration',
          ],
          fields: {
            id: (0, r.validateType)('Identifier'),
            typeParameters: (0, r.validateOptionalType)(
              'TypeParameterDeclaration'
            ),
            right: (0, r.validateType)('FlowType'),
          },
        }),
        (0, r.default)('TypeAnnotation', {
          aliases: ['Flow'],
          visitor: ['typeAnnotation'],
          fields: { typeAnnotation: (0, r.validateType)('FlowType') },
        }),
        (0, r.default)('TypeCastExpression', {
          visitor: ['expression', 'typeAnnotation'],
          aliases: ['Flow', 'ExpressionWrapper', 'Expression'],
          fields: {
            expression: (0, r.validateType)('Expression'),
            typeAnnotation: (0, r.validateType)('TypeAnnotation'),
          },
        }),
        (0, r.default)('TypeParameter', {
          aliases: ['Flow'],
          visitor: ['bound', 'default', 'variance'],
          fields: {
            name: (0, r.validate)((0, r.assertValueType)('string')),
            bound: (0, r.validateOptionalType)('TypeAnnotation'),
            default: (0, r.validateOptionalType)('FlowType'),
            variance: (0, r.validateOptionalType)('Variance'),
          },
        }),
        (0, r.default)('TypeParameterDeclaration', {
          aliases: ['Flow'],
          visitor: ['params'],
          fields: {
            params: (0, r.validate)(
              (0, r.arrayOfType)('TypeParameter')
            ),
          },
        }),
        (0, r.default)('TypeParameterInstantiation', {
          aliases: ['Flow'],
          visitor: ['params'],
          fields: {
            params: (0, r.validate)((0, r.arrayOfType)('FlowType')),
          },
        }),
        (0, r.default)('UnionTypeAnnotation', {
          visitor: ['types'],
          aliases: ['Flow', 'FlowType'],
          fields: {
            types: (0, r.validate)((0, r.arrayOfType)('FlowType')),
          },
        }),
        (0, r.default)('Variance', {
          aliases: ['Flow'],
          builder: ['kind'],
          fields: {
            kind: (0, r.validate)(
              (0, r.assertOneOf)('minus', 'plus')
            ),
          },
        }),
        (0, r.default)('VoidTypeAnnotation', {
          aliases: ['Flow', 'FlowType', 'FlowBaseAnnotation'],
        }),
        (0, r.default)('EnumDeclaration', {
          aliases: ['Statement', 'Declaration'],
          visitor: ['id', 'body'],
          fields: {
            id: (0, r.validateType)('Identifier'),
            body: (0, r.validateType)([
              'EnumBooleanBody',
              'EnumNumberBody',
              'EnumStringBody',
              'EnumSymbolBody',
            ]),
          },
        }),
        (0, r.default)('EnumBooleanBody', {
          aliases: ['EnumBody'],
          visitor: ['members'],
          fields: {
            explicit: (0, r.validate)(
              (0, r.assertValueType)('boolean')
            ),
            members: (0, r.validateArrayOfType)('EnumBooleanMember'),
          },
        }),
        (0, r.default)('EnumNumberBody', {
          aliases: ['EnumBody'],
          visitor: ['members'],
          fields: {
            explicit: (0, r.validate)(
              (0, r.assertValueType)('boolean')
            ),
            members: (0, r.validateArrayOfType)('EnumNumberMember'),
          },
        }),
        (0, r.default)('EnumStringBody', {
          aliases: ['EnumBody'],
          visitor: ['members'],
          fields: {
            explicit: (0, r.validate)(
              (0, r.assertValueType)('boolean')
            ),
            members: (0, r.validateArrayOfType)([
              'EnumStringMember',
              'EnumDefaultedMember',
            ]),
          },
        }),
        (0, r.default)('EnumSymbolBody', {
          aliases: ['EnumBody'],
          visitor: ['members'],
          fields: {
            members: (0, r.validateArrayOfType)(
              'EnumDefaultedMember'
            ),
          },
        }),
        (0, r.default)('EnumBooleanMember', {
          aliases: ['EnumMember'],
          visitor: ['id'],
          fields: {
            id: (0, r.validateType)('Identifier'),
            init: (0, r.validateType)('BooleanLiteral'),
          },
        }),
        (0, r.default)('EnumNumberMember', {
          aliases: ['EnumMember'],
          visitor: ['id', 'init'],
          fields: {
            id: (0, r.validateType)('Identifier'),
            init: (0, r.validateType)('NumericLiteral'),
          },
        }),
        (0, r.default)('EnumStringMember', {
          aliases: ['EnumMember'],
          visitor: ['id', 'init'],
          fields: {
            id: (0, r.validateType)('Identifier'),
            init: (0, r.validateType)('StringLiteral'),
          },
        }),
        (0, r.default)('EnumDefaultedMember', {
          aliases: ['EnumMember'],
          visitor: ['id'],
          fields: { id: (0, r.validateType)('Identifier') },
        })
    },
    function (e, t, n) {
      'use strict'
      var r = (function (e) {
        if (e && e.__esModule) return e
        if (
          null === e ||
          ('object' != typeof e && 'function' != typeof e)
        )
          return { default: e }
        var t = i()
        if (t && t.has(e)) return t.get(e)
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var o = r ? Object.getOwnPropertyDescriptor(e, a) : null
            o && (o.get || o.set)
              ? Object.defineProperty(n, a, o)
              : (n[a] = e[a])
          }
        ;(n.default = e), t && t.set(e, n)
        return n
      })(n(4))
      function i() {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (i = function () {
            return e
          }),
          e
        )
      }
      ;(0, r.default)('JSXAttribute', {
        visitor: ['name', 'value'],
        aliases: ['JSX', 'Immutable'],
        fields: {
          name: {
            validate: (0, r.assertNodeType)(
              'JSXIdentifier',
              'JSXNamespacedName'
            ),
          },
          value: {
            optional: !0,
            validate: (0, r.assertNodeType)(
              'JSXElement',
              'JSXFragment',
              'StringLiteral',
              'JSXExpressionContainer'
            ),
          },
        },
      }),
        (0, r.default)('JSXClosingElement', {
          visitor: ['name'],
          aliases: ['JSX', 'Immutable'],
          fields: {
            name: {
              validate: (0, r.assertNodeType)(
                'JSXIdentifier',
                'JSXMemberExpression',
                'JSXNamespacedName'
              ),
            },
          },
        }),
        (0, r.default)('JSXElement', {
          builder: [
            'openingElement',
            'closingElement',
            'children',
            'selfClosing',
          ],
          visitor: ['openingElement', 'children', 'closingElement'],
          aliases: ['JSX', 'Immutable', 'Expression'],
          fields: {
            openingElement: {
              validate: (0, r.assertNodeType)('JSXOpeningElement'),
            },
            closingElement: {
              optional: !0,
              validate: (0, r.assertNodeType)('JSXClosingElement'),
            },
            children: {
              validate: (0, r.chain)(
                (0, r.assertValueType)('array'),
                (0, r.assertEach)(
                  (0, r.assertNodeType)(
                    'JSXText',
                    'JSXExpressionContainer',
                    'JSXSpreadChild',
                    'JSXElement',
                    'JSXFragment'
                  )
                )
              ),
            },
          },
        }),
        (0, r.default)('JSXEmptyExpression', { aliases: ['JSX'] }),
        (0, r.default)('JSXExpressionContainer', {
          visitor: ['expression'],
          aliases: ['JSX', 'Immutable'],
          fields: {
            expression: {
              validate: (0, r.assertNodeType)(
                'Expression',
                'JSXEmptyExpression'
              ),
            },
          },
        }),
        (0, r.default)('JSXSpreadChild', {
          visitor: ['expression'],
          aliases: ['JSX', 'Immutable'],
          fields: {
            expression: {
              validate: (0, r.assertNodeType)('Expression'),
            },
          },
        }),
        (0, r.default)('JSXIdentifier', {
          builder: ['name'],
          aliases: ['JSX'],
          fields: {
            name: { validate: (0, r.assertValueType)('string') },
          },
        }),
        (0, r.default)('JSXMemberExpression', {
          visitor: ['object', 'property'],
          aliases: ['JSX'],
          fields: {
            object: {
              validate: (0, r.assertNodeType)(
                'JSXMemberExpression',
                'JSXIdentifier'
              ),
            },
            property: {
              validate: (0, r.assertNodeType)('JSXIdentifier'),
            },
          },
        }),
        (0, r.default)('JSXNamespacedName', {
          visitor: ['namespace', 'name'],
          aliases: ['JSX'],
          fields: {
            namespace: {
              validate: (0, r.assertNodeType)('JSXIdentifier'),
            },
            name: {
              validate: (0, r.assertNodeType)('JSXIdentifier'),
            },
          },
        }),
        (0, r.default)('JSXOpeningElement', {
          builder: ['name', 'attributes', 'selfClosing'],
          visitor: ['name', 'attributes'],
          aliases: ['JSX', 'Immutable'],
          fields: {
            name: {
              validate: (0, r.assertNodeType)(
                'JSXIdentifier',
                'JSXMemberExpression',
                'JSXNamespacedName'
              ),
            },
            selfClosing: { default: !1 },
            attributes: {
              validate: (0, r.chain)(
                (0, r.assertValueType)('array'),
                (0, r.assertEach)(
                  (0, r.assertNodeType)(
                    'JSXAttribute',
                    'JSXSpreadAttribute'
                  )
                )
              ),
            },
            typeParameters: {
              validate: (0, r.assertNodeType)(
                'TypeParameterInstantiation',
                'TSTypeParameterInstantiation'
              ),
              optional: !0,
            },
          },
        }),
        (0, r.default)('JSXSpreadAttribute', {
          visitor: ['argument'],
          aliases: ['JSX'],
          fields: {
            argument: {
              validate: (0, r.assertNodeType)('Expression'),
            },
          },
        }),
        (0, r.default)('JSXText', {
          aliases: ['JSX', 'Immutable'],
          builder: ['value'],
          fields: {
            value: { validate: (0, r.assertValueType)('string') },
          },
        }),
        (0, r.default)('JSXFragment', {
          builder: ['openingFragment', 'closingFragment', 'children'],
          visitor: ['openingFragment', 'children', 'closingFragment'],
          aliases: ['JSX', 'Immutable', 'Expression'],
          fields: {
            openingFragment: {
              validate: (0, r.assertNodeType)('JSXOpeningFragment'),
            },
            closingFragment: {
              validate: (0, r.assertNodeType)('JSXClosingFragment'),
            },
            children: {
              validate: (0, r.chain)(
                (0, r.assertValueType)('array'),
                (0, r.assertEach)(
                  (0, r.assertNodeType)(
                    'JSXText',
                    'JSXExpressionContainer',
                    'JSXSpreadChild',
                    'JSXElement',
                    'JSXFragment'
                  )
                )
              ),
            },
          },
        }),
        (0, r.default)('JSXOpeningFragment', {
          aliases: ['JSX', 'Immutable'],
        }),
        (0, r.default)('JSXClosingFragment', {
          aliases: ['JSX', 'Immutable'],
        })
    },
    function (e, t, n) {
      'use strict'
      var r = (function (e) {
          if (e && e.__esModule) return e
          if (
            null === e ||
            ('object' != typeof e && 'function' != typeof e)
          )
            return { default: e }
          var t = a()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r =
              Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, i) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n(4)),
        i = n(59)
      function a() {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (a = function () {
            return e
          }),
          e
        )
      }
      ;(0, r.default)('Noop', { visitor: [] }),
        (0, r.default)('Placeholder', {
          visitor: [],
          builder: ['expectedNode', 'name'],
          fields: {
            name: { validate: (0, r.assertNodeType)('Identifier') },
            expectedNode: {
              validate: (0, r.assertOneOf)(...i.PLACEHOLDERS),
            },
          },
        }),
        (0, r.default)('V8IntrinsicIdentifier', {
          builder: ['name'],
          fields: {
            name: { validate: (0, r.assertValueType)('string') },
          },
        })
    },
    function (e, t, n) {
      'use strict'
      var r = (function (e) {
          if (e && e.__esModule) return e
          if (
            null === e ||
            ('object' != typeof e && 'function' != typeof e)
          )
            return { default: e }
          var t = a()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r =
              Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = r ? Object.getOwnPropertyDescriptor(e, i) : null
              o && (o.get || o.set)
                ? Object.defineProperty(n, i, o)
                : (n[i] = e[i])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n(4)),
        i = n(35)
      function a() {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (a = function () {
            return e
          }),
          e
        )
      }
      ;(0, r.default)('ArgumentPlaceholder', {}),
        (0, r.default)('AwaitExpression', {
          builder: ['argument'],
          visitor: ['argument'],
          aliases: ['Expression', 'Terminatorless'],
          fields: {
            argument: {
              validate: (0, r.assertNodeType)('Expression'),
            },
          },
        }),
        (0, r.default)('BindExpression', {
          visitor: ['object', 'callee'],
          aliases: ['Expression'],
          fields: process.env.BABEL_TYPES_8_BREAKING
            ? {
                object: {
                  validate: (0, r.assertNodeType)('Expression'),
                },
                callee: {
                  validate: (0, r.assertNodeType)('Expression'),
                },
              }
            : {},
        }),
        (0, r.default)('ClassProperty', {
          visitor: ['key', 'value', 'typeAnnotation', 'decorators'],
          builder: [
            'key',
            'value',
            'typeAnnotation',
            'decorators',
            'computed',
            'static',
          ],
          aliases: ['Property'],
          fields: Object.assign({}, i.classMethodOrPropertyCommon, {
            value: {
              validate: (0, r.assertNodeType)('Expression'),
              optional: !0,
            },
            definite: {
              validate: (0, r.assertValueType)('boolean'),
              optional: !0,
            },
            typeAnnotation: {
              validate: (0, r.assertNodeType)(
                'TypeAnnotation',
                'TSTypeAnnotation',
                'Noop'
              ),
              optional: !0,
            },
            decorators: {
              validate: (0, r.chain)(
                (0, r.assertValueType)('array'),
                (0, r.assertEach)((0, r.assertNodeType)('Decorator'))
              ),
              optional: !0,
            },
            readonly: {
              validate: (0, r.assertValueType)('boolean'),
              optional: !0,
            },
            declare: {
              validate: (0, r.assertValueType)('boolean'),
              optional: !0,
            },
          }),
        }),
        (0, r.default)('OptionalMemberExpression', {
          builder: ['object', 'property', 'computed', 'optional'],
          visitor: ['object', 'property'],
          aliases: ['Expression'],
          fields: {
            object: { validate: (0, r.assertNodeType)('Expression') },
            property: {
              validate: (function () {
                const e = (0, r.assertNodeType)('Identifier'),
                  t = (0, r.assertNodeType)('Expression')
                return function (n, r, i) {
                  ;(n.computed ? t : e)(n, r, i)
                }
              })(),
            },
            computed: { default: !1 },
            optional: {
              validate: process.env.BABEL_TYPES_8_BREAKING
                ? (0, r.chain)(
                    (0, r.assertValueType)('boolean'),
                    (0, r.assertOptionalChainStart)()
                  )
                : (0, r.assertValueType)('boolean'),
            },
          },
        }),
        (0, r.default)('PipelineTopicExpression', {
          builder: ['expression'],
          visitor: ['expression'],
          fields: {
            expression: {
              validate: (0, r.assertNodeType)('Expression'),
            },
          },
        }),
        (0, r.default)('PipelineBareFunction', {
          builder: ['callee'],
          visitor: ['callee'],
          fields: {
            callee: { validate: (0, r.assertNodeType)('Expression') },
          },
        }),
        (0, r.default)('PipelinePrimaryTopicReference', {
          aliases: ['Expression'],
        }),
        (0, r.default)('OptionalCallExpression', {
          visitor: [
            'callee',
            'arguments',
            'typeParameters',
            'typeArguments',
          ],
          builder: ['callee', 'arguments', 'optional'],
          aliases: ['Expression'],
          fields: {
            callee: { validate: (0, r.assertNodeType)('Expression') },
            arguments: {
              validate: (0, r.chain)(
                (0, r.assertValueType)('array'),
                (0, r.assertEach)(
                  (0, r.assertNodeType)(
                    'Expression',
                    'SpreadElement',
                    'JSXNamespacedName'
                  )
                )
              ),
            },
            optional: {
              validate: process.env.BABEL_TYPES_8_BREAKING
                ? (0, r.chain)(
                    (0, r.assertValueType)('boolean'),
                    (0, r.assertOptionalChainStart)()
                  )
                : (0, r.assertValueType)('boolean'),
            },
            typeArguments: {
              validate: (0, r.assertNodeType)(
                'TypeParameterInstantiation'
              ),
              optional: !0,
            },
            typeParameters: {
              validate: (0, r.assertNodeType)(
                'TSTypeParameterInstantiation'
              ),
              optional: !0,
            },
          },
        }),
        (0, r.default)('ClassPrivateProperty', {
          visitor: ['key', 'value', 'decorators'],
          builder: ['key', 'value', 'decorators'],
          aliases: ['Property', 'Private'],
          fields: {
            key: { validate: (0, r.assertNodeType)('PrivateName') },
            value: {
              validate: (0, r.assertNodeType)('Expression'),
              optional: !0,
            },
            decorators: {
              validate: (0, r.chain)(
                (0, r.assertValueType)('array'),
                (0, r.assertEach)((0, r.assertNodeType)('Decorator'))
              ),
              optional: !0,
            },
          },
        }),
        (0, r.default)('ClassPrivateMethod', {
          builder: ['kind', 'key', 'params', 'body', 'static'],
          visitor: [
            'key',
            'params',
            'body',
            'decorators',
            'returnType',
            'typeParameters',
          ],
          aliases: [
            'Function',
            'Scopable',
            'BlockParent',
            'FunctionParent',
            'Method',
            'Private',
          ],
          fields: Object.assign(
            {},
            i.classMethodOrDeclareMethodCommon,
            {
              key: { validate: (0, r.assertNodeType)('PrivateName') },
              body: {
                validate: (0, r.assertNodeType)('BlockStatement'),
              },
            }
          ),
        }),
        (0, r.default)('Import', { aliases: ['Expression'] }),
        (0, r.default)('Decorator', {
          visitor: ['expression'],
          fields: {
            expression: {
              validate: (0, r.assertNodeType)('Expression'),
            },
          },
        }),
        (0, r.default)('DoExpression', {
          visitor: ['body'],
          aliases: ['Expression'],
          fields: {
            body: {
              validate: (0, r.assertNodeType)('BlockStatement'),
            },
          },
        }),
        (0, r.default)('ExportDefaultSpecifier', {
          visitor: ['exported'],
          aliases: ['ModuleSpecifier'],
          fields: {
            exported: {
              validate: (0, r.assertNodeType)('Identifier'),
            },
          },
        }),
        (0, r.default)('ExportNamespaceSpecifier', {
          visitor: ['exported'],
          aliases: ['ModuleSpecifier'],
          fields: {
            exported: {
              validate: (0, r.assertNodeType)('Identifier'),
            },
          },
        }),
        (0, r.default)('PrivateName', {
          visitor: ['id'],
          aliases: ['Private'],
          fields: {
            id: { validate: (0, r.assertNodeType)('Identifier') },
          },
        }),
        (0, r.default)('BigIntLiteral', {
          builder: ['value'],
          fields: {
            value: { validate: (0, r.assertValueType)('string') },
          },
          aliases: ['Expression', 'Pureish', 'Literal', 'Immutable'],
        }),
        (0, r.default)('RecordExpression', {
          visitor: ['properties'],
          aliases: ['Expression'],
          fields: {
            properties: {
              validate: (0, r.chain)(
                (0, r.assertValueType)('array'),
                (0, r.assertEach)(
                  (0, r.assertNodeType)(
                    'ObjectProperty',
                    'ObjectMethod',
                    'SpreadElement'
                  )
                )
              ),
            },
          },
        }),
        (0, r.default)('TupleExpression', {
          fields: {
            elements: {
              validate: (0, r.chain)(
                (0, r.assertValueType)('array'),
                (0, r.assertEach)(
                  (0, r.assertNodeOrValueType)(
                    'null',
                    'Expression',
                    'SpreadElement'
                  )
                )
              ),
              default: [],
            },
          },
          visitor: ['elements'],
          aliases: ['Expression'],
        })
    },
    function (e, t, n) {
      'use strict'
      var r = (function (e) {
          if (e && e.__esModule) return e
          if (
            null === e ||
            ('object' != typeof e && 'function' != typeof e)
          )
            return { default: e }
          var t = o()
          if (t && t.has(e)) return t.get(e)
          var n = {},
            r =
              Object.defineProperty && Object.getOwnPropertyDescriptor
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, i) : null
              a && (a.get || a.set)
                ? Object.defineProperty(n, i, a)
                : (n[i] = e[i])
            }
          ;(n.default = e), t && t.set(e, n)
          return n
        })(n(4)),
        i = n(32),
        a = n(35)
      function o() {
        if ('function' != typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (o = function () {
            return e
          }),
          e
        )
      }
      const s = (0, r.assertValueType)('boolean'),
        u = {
          returnType: {
            validate: (0, r.assertNodeType)(
              'TSTypeAnnotation',
              'Noop'
            ),
            optional: !0,
          },
          typeParameters: {
            validate: (0, r.assertNodeType)(
              'TSTypeParameterDeclaration',
              'Noop'
            ),
            optional: !0,
          },
        }
      ;(0, r.default)('TSParameterProperty', {
        aliases: ['LVal'],
        visitor: ['parameter'],
        fields: {
          accessibility: {
            validate: (0, r.assertOneOf)(
              'public',
              'private',
              'protected'
            ),
            optional: !0,
          },
          readonly: {
            validate: (0, r.assertValueType)('boolean'),
            optional: !0,
          },
          parameter: {
            validate: (0, r.assertNodeType)(
              'Identifier',
              'AssignmentPattern'
            ),
          },
        },
      }),
        (0, r.default)('TSDeclareFunction', {
          aliases: ['Statement', 'Declaration'],
          visitor: ['id', 'typeParameters', 'params', 'returnType'],
          fields: Object.assign(
            {},
            i.functionDeclarationCommon,
            {},
            u
          ),
        }),
        (0, r.default)('TSDeclareMethod', {
          visitor: [
            'decorators',
            'key',
            'typeParameters',
            'params',
            'returnType',
          ],
          fields: Object.assign(
            {},
            a.classMethodOrDeclareMethodCommon,
            {},
            u
          ),
        }),
        (0, r.default)('TSQualifiedName', {
          aliases: ['TSEntityName'],
          visitor: ['left', 'right'],
          fields: {
            left: (0, r.validateType)('TSEntityName'),
            right: (0, r.validateType)('Identifier'),
          },
        })
      const l = {
          typeParameters: (0, r.validateOptionalType)(
            'TSTypeParameterDeclaration'
          ),
          parameters: (0, r.validateArrayOfType)([
            'Identifier',
            'RestElement',
          ]),
          typeAnnotation: (0, r.validateOptionalType)(
            'TSTypeAnnotation'
          ),
        },
        p = {
          aliases: ['TSTypeElement'],
          visitor: ['typeParameters', 'parameters', 'typeAnnotation'],
          fields: l,
        }
      ;(0, r.default)('TSCallSignatureDeclaration', p),
        (0, r.default)('TSConstructSignatureDeclaration', p)
      const f = {
        key: (0, r.validateType)('Expression'),
        computed: (0, r.validate)(s),
        optional: (0, r.validateOptional)(s),
      }
      ;(0, r.default)('TSPropertySignature', {
        aliases: ['TSTypeElement'],
        visitor: ['key', 'typeAnnotation', 'initializer'],
        fields: Object.assign({}, f, {
          readonly: (0, r.validateOptional)(s),
          typeAnnotation: (0, r.validateOptionalType)(
            'TSTypeAnnotation'
          ),
          initializer: (0, r.validateOptionalType)('Expression'),
        }),
      }),
        (0, r.default)('TSMethodSignature', {
          aliases: ['TSTypeElement'],
          visitor: [
            'key',
            'typeParameters',
            'parameters',
            'typeAnnotation',
          ],
          fields: Object.assign({}, l, {}, f),
        }),
        (0, r.default)('TSIndexSignature', {
          aliases: ['TSTypeElement'],
          visitor: ['parameters', 'typeAnnotation'],
          fields: {
            readonly: (0, r.validateOptional)(s),
            parameters: (0, r.validateArrayOfType)('Identifier'),
            typeAnnotation: (0, r.validateOptionalType)(
              'TSTypeAnnotation'
            ),
          },
        })
      const c = [
        'TSAnyKeyword',
        'TSBooleanKeyword',
        'TSBigIntKeyword',
        'TSNeverKeyword',
        'TSNullKeyword',
        'TSNumberKeyword',
        'TSObjectKeyword',
        'TSStringKeyword',
        'TSSymbolKeyword',
        'TSUndefinedKeyword',
        'TSUnknownKeyword',
        'TSVoidKeyword',
      ]
      for (const e of c)
        (0, r.default)(e, {
          aliases: ['TSType'],
          visitor: [],
          fields: {},
        })
      ;(0, r.default)('TSThisType', {
        aliases: ['TSType'],
        visitor: [],
        fields: {},
      })
      const d = {
        aliases: ['TSType'],
        visitor: ['typeParameters', 'parameters', 'typeAnnotation'],
        fields: l,
      }
      ;(0, r.default)('TSFunctionType', d),
        (0, r.default)('TSConstructorType', d),
        (0, r.default)('TSTypeReference', {
          aliases: ['TSType'],
          visitor: ['typeName', 'typeParameters'],
          fields: {
            typeName: (0, r.validateType)('TSEntityName'),
            typeParameters: (0, r.validateOptionalType)(
              'TSTypeParameterInstantiation'
            ),
          },
        }),
        (0, r.default)('TSTypePredicate', {
          aliases: ['TSType'],
          visitor: ['parameterName', 'typeAnnotation'],
          builder: ['parameterName', 'typeAnnotation', 'asserts'],
          fields: {
            parameterName: (0, r.validateType)([
              'Identifier',
              'TSThisType',
            ]),
            typeAnnotation: (0, r.validateOptionalType)(
              'TSTypeAnnotation'
            ),
            asserts: (0, r.validateOptional)(s),
          },
        }),
        (0, r.default)('TSTypeQuery', {
          aliases: ['TSType'],
          visitor: ['exprName'],
          fields: {
            exprName: (0, r.validateType)([
              'TSEntityName',
              'TSImportType',
            ]),
          },
        }),
        (0, r.default)('TSTypeLiteral', {
          aliases: ['TSType'],
          visitor: ['members'],
          fields: {
            members: (0, r.validateArrayOfType)('TSTypeElement'),
          },
        }),
        (0, r.default)('TSArrayType', {
          aliases: ['TSType'],
          visitor: ['elementType'],
          fields: { elementType: (0, r.validateType)('TSType') },
        }),
        (0, r.default)('TSTupleType', {
          aliases: ['TSType'],
          visitor: ['elementTypes'],
          fields: {
            elementTypes: (0, r.validateArrayOfType)('TSType'),
          },
        }),
        (0, r.default)('TSOptionalType', {
          aliases: ['TSType'],
          visitor: ['typeAnnotation'],
          fields: { typeAnnotation: (0, r.validateType)('TSType') },
        }),
        (0, r.default)('TSRestType', {
          aliases: ['TSType'],
          visitor: ['typeAnnotation'],
          fields: { typeAnnotation: (0, r.validateType)('TSType') },
        })
      const y = {
        aliases: ['TSType'],
        visitor: ['types'],
        fields: { types: (0, r.validateArrayOfType)('TSType') },
      }
      ;(0, r.default)('TSUnionType', y),
        (0, r.default)('TSIntersectionType', y),
        (0, r.default)('TSConditionalType', {
          aliases: ['TSType'],
          visitor: [
            'checkType',
            'extendsType',
            'trueType',
            'falseType',
          ],
          fields: {
            checkType: (0, r.validateType)('TSType'),
            extendsType: (0, r.validateType)('TSType'),
            trueType: (0, r.validateType)('TSType'),
            falseType: (0, r.validateType)('TSType'),
          },
        }),
        (0, r.default)('TSInferType', {
          aliases: ['TSType'],
          visitor: ['typeParameter'],
          fields: {
            typeParameter: (0, r.validateType)('TSTypeParameter'),
          },
        }),
        (0, r.default)('TSParenthesizedType', {
          aliases: ['TSType'],
          visitor: ['typeAnnotation'],
          fields: { typeAnnotation: (0, r.validateType)('TSType') },
        }),
        (0, r.default)('TSTypeOperator', {
          aliases: ['TSType'],
          visitor: ['typeAnnotation'],
          fields: {
            operator: (0, r.validate)(
              (0, r.assertValueType)('string')
            ),
            typeAnnotation: (0, r.validateType)('TSType'),
          },
        }),
        (0, r.default)('TSIndexedAccessType', {
          aliases: ['TSType'],
          visitor: ['objectType', 'indexType'],
          fields: {
            objectType: (0, r.validateType)('TSType'),
            indexType: (0, r.validateType)('TSType'),
          },
        }),
        (0, r.default)('TSMappedType', {
          aliases: ['TSType'],
          visitor: ['typeParameter', 'typeAnnotation'],
          fields: {
            readonly: (0, r.validateOptional)(s),
            typeParameter: (0, r.validateType)('TSTypeParameter'),
            optional: (0, r.validateOptional)(s),
            typeAnnotation: (0, r.validateOptionalType)('TSType'),
          },
        }),
        (0, r.default)('TSLiteralType', {
          aliases: ['TSType'],
          visitor: ['literal'],
          fields: {
            literal: (0, r.validateType)([
              'NumericLiteral',
              'StringLiteral',
              'BooleanLiteral',
            ]),
          },
        }),
        (0, r.default)('TSExpressionWithTypeArguments', {
          aliases: ['TSType'],
          visitor: ['expression', 'typeParameters'],
          fields: {
            expression: (0, r.validateType)('TSEntityName'),
            typeParameters: (0, r.validateOptionalType)(
              'TSTypeParameterInstantiation'
            ),
          },
        }),
        (0, r.default)('TSInterfaceDeclaration', {
          aliases: ['Statement', 'Declaration'],
          visitor: ['id', 'typeParameters', 'extends', 'body'],
          fields: {
            declare: (0, r.validateOptional)(s),
            id: (0, r.validateType)('Identifier'),
            typeParameters: (0, r.validateOptionalType)(
              'TSTypeParameterDeclaration'
            ),
            extends: (0, r.validateOptional)(
              (0, r.arrayOfType)('TSExpressionWithTypeArguments')
            ),
            body: (0, r.validateType)('TSInterfaceBody'),
          },
        }),
        (0, r.default)('TSInterfaceBody', {
          visitor: ['body'],
          fields: {
            body: (0, r.validateArrayOfType)('TSTypeElement'),
          },
        }),
        (0, r.default)('TSTypeAliasDeclaration', {
          aliases: ['Statement', 'Declaration'],
          visitor: ['id', 'typeParameters', 'typeAnnotation'],
          fields: {
            declare: (0, r.validateOptional)(s),
            id: (0, r.validateType)('Identifier'),
            typeParameters: (0, r.validateOptionalType)(
              'TSTypeParameterDeclaration'
            ),
            typeAnnotation: (0, r.validateType)('TSType'),
          },
        }),
        (0, r.default)('TSAsExpression', {
          aliases: ['Expression'],
          visitor: ['expression', 'typeAnnotation'],
          fields: {
            expression: (0, r.validateType)('Expression'),
            typeAnnotation: (0, r.validateType)('TSType'),
          },
        }),
        (0, r.default)('TSTypeAssertion', {
          aliases: ['Expression'],
          visitor: ['typeAnnotation', 'expression'],
          fields: {
            typeAnnotation: (0, r.validateType)('TSType'),
            expression: (0, r.validateType)('Expression'),
          },
        }),
        (0, r.default)('TSEnumDeclaration', {
          aliases: ['Statement', 'Declaration'],
          visitor: ['id', 'members'],
          fields: {
            declare: (0, r.validateOptional)(s),
            const: (0, r.validateOptional)(s),
            id: (0, r.validateType)('Identifier'),
            members: (0, r.validateArrayOfType)('TSEnumMember'),
            initializer: (0, r.validateOptionalType)('Expression'),
          },
        }),
        (0, r.default)('TSEnumMember', {
          visitor: ['id', 'initializer'],
          fields: {
            id: (0, r.validateType)(['Identifier', 'StringLiteral']),
            initializer: (0, r.validateOptionalType)('Expression'),
          },
        }),
        (0, r.default)('TSModuleDeclaration', {
          aliases: ['Statement', 'Declaration'],
          visitor: ['id', 'body'],
          fields: {
            declare: (0, r.validateOptional)(s),
            global: (0, r.validateOptional)(s),
            id: (0, r.validateType)(['Identifier', 'StringLiteral']),
            body: (0, r.validateType)([
              'TSModuleBlock',
              'TSModuleDeclaration',
            ]),
          },
        }),
        (0, r.default)('TSModuleBlock', {
          aliases: ['Scopable', 'Block', 'BlockParent'],
          visitor: ['body'],
          fields: { body: (0, r.validateArrayOfType)('Statement') },
        }),
        (0, r.default)('TSImportType', {
          aliases: ['TSType'],
          visitor: ['argument', 'qualifier', 'typeParameters'],
          fields: {
            argument: (0, r.validateType)('StringLiteral'),
            qualifier: (0, r.validateOptionalType)('TSEntityName'),
            typeParameters: (0, r.validateOptionalType)(
              'TSTypeParameterInstantiation'
            ),
          },
        }),
        (0, r.default)('TSImportEqualsDeclaration', {
          aliases: ['Statement'],
          visitor: ['id', 'moduleReference'],
          fields: {
            isExport: (0, r.validate)(s),
            id: (0, r.validateType)('Identifier'),
            moduleReference: (0, r.validateType)([
              'TSEntityName',
              'TSExternalModuleReference',
            ]),
          },
        }),
        (0, r.default)('TSExternalModuleReference', {
          visitor: ['expression'],
          fields: {
            expression: (0, r.validateType)('StringLiteral'),
          },
        }),
        (0, r.default)('TSNonNullExpression', {
          aliases: ['Expression'],
          visitor: ['expression'],
          fields: { expression: (0, r.validateType)('Expression') },
        }),
        (0, r.default)('TSExportAssignment', {
          aliases: ['Statement'],
          visitor: ['expression'],
          fields: { expression: (0, r.validateType)('Expression') },
        }),
        (0, r.default)('TSNamespaceExportDeclaration', {
          aliases: ['Statement'],
          visitor: ['id'],
          fields: { id: (0, r.validateType)('Identifier') },
        }),
        (0, r.default)('TSTypeAnnotation', {
          visitor: ['typeAnnotation'],
          fields: {
            typeAnnotation: {
              validate: (0, r.assertNodeType)('TSType'),
            },
          },
        }),
        (0, r.default)('TSTypeParameterInstantiation', {
          visitor: ['params'],
          fields: {
            params: {
              validate: (0, r.chain)(
                (0, r.assertValueType)('array'),
                (0, r.assertEach)((0, r.assertNodeType)('TSType'))
              ),
            },
          },
        }),
        (0, r.default)('TSTypeParameterDeclaration', {
          visitor: ['params'],
          fields: {
            params: {
              validate: (0, r.chain)(
                (0, r.assertValueType)('array'),
                (0, r.assertEach)(
                  (0, r.assertNodeType)('TSTypeParameter')
                )
              ),
            },
          },
        }),
        (0, r.default)('TSTypeParameter', {
          builder: ['constraint', 'default', 'name'],
          visitor: ['constraint', 'default'],
          fields: {
            name: { validate: (0, r.assertValueType)('string') },
            constraint: {
              validate: (0, r.assertNodeType)('TSType'),
              optional: !0,
            },
            default: {
              validate: (0, r.assertNodeType)('TSType'),
              optional: !0,
            },
          },
        })
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          if (!(0, i.default)(e)) {
            const t = (e && e.type) || JSON.stringify(e)
            throw new TypeError(`Not a valid node of type "${t}"`)
          }
        })
      var r,
        i = (r = n(60)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.assertArrayExpression = function (e, t = {}) {
          a('ArrayExpression', e, t)
        }),
        (t.assertAssignmentExpression = function (e, t = {}) {
          a('AssignmentExpression', e, t)
        }),
        (t.assertBinaryExpression = function (e, t = {}) {
          a('BinaryExpression', e, t)
        }),
        (t.assertInterpreterDirective = function (e, t = {}) {
          a('InterpreterDirective', e, t)
        }),
        (t.assertDirective = function (e, t = {}) {
          a('Directive', e, t)
        }),
        (t.assertDirectiveLiteral = function (e, t = {}) {
          a('DirectiveLiteral', e, t)
        }),
        (t.assertBlockStatement = function (e, t = {}) {
          a('BlockStatement', e, t)
        }),
        (t.assertBreakStatement = function (e, t = {}) {
          a('BreakStatement', e, t)
        }),
        (t.assertCallExpression = function (e, t = {}) {
          a('CallExpression', e, t)
        }),
        (t.assertCatchClause = function (e, t = {}) {
          a('CatchClause', e, t)
        }),
        (t.assertConditionalExpression = function (e, t = {}) {
          a('ConditionalExpression', e, t)
        }),
        (t.assertContinueStatement = function (e, t = {}) {
          a('ContinueStatement', e, t)
        }),
        (t.assertDebuggerStatement = function (e, t = {}) {
          a('DebuggerStatement', e, t)
        }),
        (t.assertDoWhileStatement = function (e, t = {}) {
          a('DoWhileStatement', e, t)
        }),
        (t.assertEmptyStatement = function (e, t = {}) {
          a('EmptyStatement', e, t)
        }),
        (t.assertExpressionStatement = function (e, t = {}) {
          a('ExpressionStatement', e, t)
        }),
        (t.assertFile = function (e, t = {}) {
          a('File', e, t)
        }),
        (t.assertForInStatement = function (e, t = {}) {
          a('ForInStatement', e, t)
        }),
        (t.assertForStatement = function (e, t = {}) {
          a('ForStatement', e, t)
        }),
        (t.assertFunctionDeclaration = function (e, t = {}) {
          a('FunctionDeclaration', e, t)
        }),
        (t.assertFunctionExpression = function (e, t = {}) {
          a('FunctionExpression', e, t)
        }),
        (t.assertIdentifier = function (e, t = {}) {
          a('Identifier', e, t)
        }),
        (t.assertIfStatement = function (e, t = {}) {
          a('IfStatement', e, t)
        }),
        (t.assertLabeledStatement = function (e, t = {}) {
          a('LabeledStatement', e, t)
        }),
        (t.assertStringLiteral = function (e, t = {}) {
          a('StringLiteral', e, t)
        }),
        (t.assertNumericLiteral = function (e, t = {}) {
          a('NumericLiteral', e, t)
        }),
        (t.assertNullLiteral = function (e, t = {}) {
          a('NullLiteral', e, t)
        }),
        (t.assertBooleanLiteral = function (e, t = {}) {
          a('BooleanLiteral', e, t)
        }),
        (t.assertRegExpLiteral = function (e, t = {}) {
          a('RegExpLiteral', e, t)
        }),
        (t.assertLogicalExpression = function (e, t = {}) {
          a('LogicalExpression', e, t)
        }),
        (t.assertMemberExpression = function (e, t = {}) {
          a('MemberExpression', e, t)
        }),
        (t.assertNewExpression = function (e, t = {}) {
          a('NewExpression', e, t)
        }),
        (t.assertProgram = function (e, t = {}) {
          a('Program', e, t)
        }),
        (t.assertObjectExpression = function (e, t = {}) {
          a('ObjectExpression', e, t)
        }),
        (t.assertObjectMethod = function (e, t = {}) {
          a('ObjectMethod', e, t)
        }),
        (t.assertObjectProperty = function (e, t = {}) {
          a('ObjectProperty', e, t)
        }),
        (t.assertRestElement = function (e, t = {}) {
          a('RestElement', e, t)
        }),
        (t.assertReturnStatement = function (e, t = {}) {
          a('ReturnStatement', e, t)
        }),
        (t.assertSequenceExpression = function (e, t = {}) {
          a('SequenceExpression', e, t)
        }),
        (t.assertParenthesizedExpression = function (e, t = {}) {
          a('ParenthesizedExpression', e, t)
        }),
        (t.assertSwitchCase = function (e, t = {}) {
          a('SwitchCase', e, t)
        }),
        (t.assertSwitchStatement = function (e, t = {}) {
          a('SwitchStatement', e, t)
        }),
        (t.assertThisExpression = function (e, t = {}) {
          a('ThisExpression', e, t)
        }),
        (t.assertThrowStatement = function (e, t = {}) {
          a('ThrowStatement', e, t)
        }),
        (t.assertTryStatement = function (e, t = {}) {
          a('TryStatement', e, t)
        }),
        (t.assertUnaryExpression = function (e, t = {}) {
          a('UnaryExpression', e, t)
        }),
        (t.assertUpdateExpression = function (e, t = {}) {
          a('UpdateExpression', e, t)
        }),
        (t.assertVariableDeclaration = function (e, t = {}) {
          a('VariableDeclaration', e, t)
        }),
        (t.assertVariableDeclarator = function (e, t = {}) {
          a('VariableDeclarator', e, t)
        }),
        (t.assertWhileStatement = function (e, t = {}) {
          a('WhileStatement', e, t)
        }),
        (t.assertWithStatement = function (e, t = {}) {
          a('WithStatement', e, t)
        }),
        (t.assertAssignmentPattern = function (e, t = {}) {
          a('AssignmentPattern', e, t)
        }),
        (t.assertArrayPattern = function (e, t = {}) {
          a('ArrayPattern', e, t)
        }),
        (t.assertArrowFunctionExpression = function (e, t = {}) {
          a('ArrowFunctionExpression', e, t)
        }),
        (t.assertClassBody = function (e, t = {}) {
          a('ClassBody', e, t)
        }),
        (t.assertClassExpression = function (e, t = {}) {
          a('ClassExpression', e, t)
        }),
        (t.assertClassDeclaration = function (e, t = {}) {
          a('ClassDeclaration', e, t)
        }),
        (t.assertExportAllDeclaration = function (e, t = {}) {
          a('ExportAllDeclaration', e, t)
        }),
        (t.assertExportDefaultDeclaration = function (e, t = {}) {
          a('ExportDefaultDeclaration', e, t)
        }),
        (t.assertExportNamedDeclaration = function (e, t = {}) {
          a('ExportNamedDeclaration', e, t)
        }),
        (t.assertExportSpecifier = function (e, t = {}) {
          a('ExportSpecifier', e, t)
        }),
        (t.assertForOfStatement = function (e, t = {}) {
          a('ForOfStatement', e, t)
        }),
        (t.assertImportDeclaration = function (e, t = {}) {
          a('ImportDeclaration', e, t)
        }),
        (t.assertImportDefaultSpecifier = function (e, t = {}) {
          a('ImportDefaultSpecifier', e, t)
        }),
        (t.assertImportNamespaceSpecifier = function (e, t = {}) {
          a('ImportNamespaceSpecifier', e, t)
        }),
        (t.assertImportSpecifier = function (e, t = {}) {
          a('ImportSpecifier', e, t)
        }),
        (t.assertMetaProperty = function (e, t = {}) {
          a('MetaProperty', e, t)
        }),
        (t.assertClassMethod = function (e, t = {}) {
          a('ClassMethod', e, t)
        }),
        (t.assertObjectPattern = function (e, t = {}) {
          a('ObjectPattern', e, t)
        }),
        (t.assertSpreadElement = function (e, t = {}) {
          a('SpreadElement', e, t)
        }),
        (t.assertSuper = function (e, t = {}) {
          a('Super', e, t)
        }),
        (t.assertTaggedTemplateExpression = function (e, t = {}) {
          a('TaggedTemplateExpression', e, t)
        }),
        (t.assertTemplateElement = function (e, t = {}) {
          a('TemplateElement', e, t)
        }),
        (t.assertTemplateLiteral = function (e, t = {}) {
          a('TemplateLiteral', e, t)
        }),
        (t.assertYieldExpression = function (e, t = {}) {
          a('YieldExpression', e, t)
        }),
        (t.assertAnyTypeAnnotation = function (e, t = {}) {
          a('AnyTypeAnnotation', e, t)
        }),
        (t.assertArrayTypeAnnotation = function (e, t = {}) {
          a('ArrayTypeAnnotation', e, t)
        }),
        (t.assertBooleanTypeAnnotation = function (e, t = {}) {
          a('BooleanTypeAnnotation', e, t)
        }),
        (t.assertBooleanLiteralTypeAnnotation = function (e, t = {}) {
          a('BooleanLiteralTypeAnnotation', e, t)
        }),
        (t.assertNullLiteralTypeAnnotation = function (e, t = {}) {
          a('NullLiteralTypeAnnotation', e, t)
        }),
        (t.assertClassImplements = function (e, t = {}) {
          a('ClassImplements', e, t)
        }),
        (t.assertDeclareClass = function (e, t = {}) {
          a('DeclareClass', e, t)
        }),
        (t.assertDeclareFunction = function (e, t = {}) {
          a('DeclareFunction', e, t)
        }),
        (t.assertDeclareInterface = function (e, t = {}) {
          a('DeclareInterface', e, t)
        }),
        (t.assertDeclareModule = function (e, t = {}) {
          a('DeclareModule', e, t)
        }),
        (t.assertDeclareModuleExports = function (e, t = {}) {
          a('DeclareModuleExports', e, t)
        }),
        (t.assertDeclareTypeAlias = function (e, t = {}) {
          a('DeclareTypeAlias', e, t)
        }),
        (t.assertDeclareOpaqueType = function (e, t = {}) {
          a('DeclareOpaqueType', e, t)
        }),
        (t.assertDeclareVariable = function (e, t = {}) {
          a('DeclareVariable', e, t)
        }),
        (t.assertDeclareExportDeclaration = function (e, t = {}) {
          a('DeclareExportDeclaration', e, t)
        }),
        (t.assertDeclareExportAllDeclaration = function (e, t = {}) {
          a('DeclareExportAllDeclaration', e, t)
        }),
        (t.assertDeclaredPredicate = function (e, t = {}) {
          a('DeclaredPredicate', e, t)
        }),
        (t.assertExistsTypeAnnotation = function (e, t = {}) {
          a('ExistsTypeAnnotation', e, t)
        }),
        (t.assertFunctionTypeAnnotation = function (e, t = {}) {
          a('FunctionTypeAnnotation', e, t)
        }),
        (t.assertFunctionTypeParam = function (e, t = {}) {
          a('FunctionTypeParam', e, t)
        }),
        (t.assertGenericTypeAnnotation = function (e, t = {}) {
          a('GenericTypeAnnotation', e, t)
        }),
        (t.assertInferredPredicate = function (e, t = {}) {
          a('InferredPredicate', e, t)
        }),
        (t.assertInterfaceExtends = function (e, t = {}) {
          a('InterfaceExtends', e, t)
        }),
        (t.assertInterfaceDeclaration = function (e, t = {}) {
          a('InterfaceDeclaration', e, t)
        }),
        (t.assertInterfaceTypeAnnotation = function (e, t = {}) {
          a('InterfaceTypeAnnotation', e, t)
        }),
        (t.assertIntersectionTypeAnnotation = function (e, t = {}) {
          a('IntersectionTypeAnnotation', e, t)
        }),
        (t.assertMixedTypeAnnotation = function (e, t = {}) {
          a('MixedTypeAnnotation', e, t)
        }),
        (t.assertEmptyTypeAnnotation = function (e, t = {}) {
          a('EmptyTypeAnnotation', e, t)
        }),
        (t.assertNullableTypeAnnotation = function (e, t = {}) {
          a('NullableTypeAnnotation', e, t)
        }),
        (t.assertNumberLiteralTypeAnnotation = function (e, t = {}) {
          a('NumberLiteralTypeAnnotation', e, t)
        }),
        (t.assertNumberTypeAnnotation = function (e, t = {}) {
          a('NumberTypeAnnotation', e, t)
        }),
        (t.assertObjectTypeAnnotation = function (e, t = {}) {
          a('ObjectTypeAnnotation', e, t)
        }),
        (t.assertObjectTypeInternalSlot = function (e, t = {}) {
          a('ObjectTypeInternalSlot', e, t)
        }),
        (t.assertObjectTypeCallProperty = function (e, t = {}) {
          a('ObjectTypeCallProperty', e, t)
        }),
        (t.assertObjectTypeIndexer = function (e, t = {}) {
          a('ObjectTypeIndexer', e, t)
        }),
        (t.assertObjectTypeProperty = function (e, t = {}) {
          a('ObjectTypeProperty', e, t)
        }),
        (t.assertObjectTypeSpreadProperty = function (e, t = {}) {
          a('ObjectTypeSpreadProperty', e, t)
        }),
        (t.assertOpaqueType = function (e, t = {}) {
          a('OpaqueType', e, t)
        }),
        (t.assertQualifiedTypeIdentifier = function (e, t = {}) {
          a('QualifiedTypeIdentifier', e, t)
        }),
        (t.assertStringLiteralTypeAnnotation = function (e, t = {}) {
          a('StringLiteralTypeAnnotation', e, t)
        }),
        (t.assertStringTypeAnnotation = function (e, t = {}) {
          a('StringTypeAnnotation', e, t)
        }),
        (t.assertSymbolTypeAnnotation = function (e, t = {}) {
          a('SymbolTypeAnnotation', e, t)
        }),
        (t.assertThisTypeAnnotation = function (e, t = {}) {
          a('ThisTypeAnnotation', e, t)
        }),
        (t.assertTupleTypeAnnotation = function (e, t = {}) {
          a('TupleTypeAnnotation', e, t)
        }),
        (t.assertTypeofTypeAnnotation = function (e, t = {}) {
          a('TypeofTypeAnnotation', e, t)
        }),
        (t.assertTypeAlias = function (e, t = {}) {
          a('TypeAlias', e, t)
        }),
        (t.assertTypeAnnotation = function (e, t = {}) {
          a('TypeAnnotation', e, t)
        }),
        (t.assertTypeCastExpression = function (e, t = {}) {
          a('TypeCastExpression', e, t)
        }),
        (t.assertTypeParameter = function (e, t = {}) {
          a('TypeParameter', e, t)
        }),
        (t.assertTypeParameterDeclaration = function (e, t = {}) {
          a('TypeParameterDeclaration', e, t)
        }),
        (t.assertTypeParameterInstantiation = function (e, t = {}) {
          a('TypeParameterInstantiation', e, t)
        }),
        (t.assertUnionTypeAnnotation = function (e, t = {}) {
          a('UnionTypeAnnotation', e, t)
        }),
        (t.assertVariance = function (e, t = {}) {
          a('Variance', e, t)
        }),
        (t.assertVoidTypeAnnotation = function (e, t = {}) {
          a('VoidTypeAnnotation', e, t)
        }),
        (t.assertEnumDeclaration = function (e, t = {}) {
          a('EnumDeclaration', e, t)
        }),
        (t.assertEnumBooleanBody = function (e, t = {}) {
          a('EnumBooleanBody', e, t)
        }),
        (t.assertEnumNumberBody = function (e, t = {}) {
          a('EnumNumberBody', e, t)
        }),
        (t.assertEnumStringBody = function (e, t = {}) {
          a('EnumStringBody', e, t)
        }),
        (t.assertEnumSymbolBody = function (e, t = {}) {
          a('EnumSymbolBody', e, t)
        }),
        (t.assertEnumBooleanMember = function (e, t = {}) {
          a('EnumBooleanMember', e, t)
        }),
        (t.assertEnumNumberMember = function (e, t = {}) {
          a('EnumNumberMember', e, t)
        }),
        (t.assertEnumStringMember = function (e, t = {}) {
          a('EnumStringMember', e, t)
        }),
        (t.assertEnumDefaultedMember = function (e, t = {}) {
          a('EnumDefaultedMember', e, t)
        }),
        (t.assertJSXAttribute = function (e, t = {}) {
          a('JSXAttribute', e, t)
        }),
        (t.assertJSXClosingElement = function (e, t = {}) {
          a('JSXClosingElement', e, t)
        }),
        (t.assertJSXElement = function (e, t = {}) {
          a('JSXElement', e, t)
        }),
        (t.assertJSXEmptyExpression = function (e, t = {}) {
          a('JSXEmptyExpression', e, t)
        }),
        (t.assertJSXExpressionContainer = function (e, t = {}) {
          a('JSXExpressionContainer', e, t)
        }),
        (t.assertJSXSpreadChild = function (e, t = {}) {
          a('JSXSpreadChild', e, t)
        }),
        (t.assertJSXIdentifier = function (e, t = {}) {
          a('JSXIdentifier', e, t)
        }),
        (t.assertJSXMemberExpression = function (e, t = {}) {
          a('JSXMemberExpression', e, t)
        }),
        (t.assertJSXNamespacedName = function (e, t = {}) {
          a('JSXNamespacedName', e, t)
        }),
        (t.assertJSXOpeningElement = function (e, t = {}) {
          a('JSXOpeningElement', e, t)
        }),
        (t.assertJSXSpreadAttribute = function (e, t = {}) {
          a('JSXSpreadAttribute', e, t)
        }),
        (t.assertJSXText = function (e, t = {}) {
          a('JSXText', e, t)
        }),
        (t.assertJSXFragment = function (e, t = {}) {
          a('JSXFragment', e, t)
        }),
        (t.assertJSXOpeningFragment = function (e, t = {}) {
          a('JSXOpeningFragment', e, t)
        }),
        (t.assertJSXClosingFragment = function (e, t = {}) {
          a('JSXClosingFragment', e, t)
        }),
        (t.assertNoop = function (e, t = {}) {
          a('Noop', e, t)
        }),
        (t.assertPlaceholder = function (e, t = {}) {
          a('Placeholder', e, t)
        }),
        (t.assertV8IntrinsicIdentifier = function (e, t = {}) {
          a('V8IntrinsicIdentifier', e, t)
        }),
        (t.assertArgumentPlaceholder = function (e, t = {}) {
          a('ArgumentPlaceholder', e, t)
        }),
        (t.assertAwaitExpression = function (e, t = {}) {
          a('AwaitExpression', e, t)
        }),
        (t.assertBindExpression = function (e, t = {}) {
          a('BindExpression', e, t)
        }),
        (t.assertClassProperty = function (e, t = {}) {
          a('ClassProperty', e, t)
        }),
        (t.assertOptionalMemberExpression = function (e, t = {}) {
          a('OptionalMemberExpression', e, t)
        }),
        (t.assertPipelineTopicExpression = function (e, t = {}) {
          a('PipelineTopicExpression', e, t)
        }),
        (t.assertPipelineBareFunction = function (e, t = {}) {
          a('PipelineBareFunction', e, t)
        }),
        (t.assertPipelinePrimaryTopicReference = function (
          e,
          t = {}
        ) {
          a('PipelinePrimaryTopicReference', e, t)
        }),
        (t.assertOptionalCallExpression = function (e, t = {}) {
          a('OptionalCallExpression', e, t)
        }),
        (t.assertClassPrivateProperty = function (e, t = {}) {
          a('ClassPrivateProperty', e, t)
        }),
        (t.assertClassPrivateMethod = function (e, t = {}) {
          a('ClassPrivateMethod', e, t)
        }),
        (t.assertImport = function (e, t = {}) {
          a('Import', e, t)
        }),
        (t.assertDecorator = function (e, t = {}) {
          a('Decorator', e, t)
        }),
        (t.assertDoExpression = function (e, t = {}) {
          a('DoExpression', e, t)
        }),
        (t.assertExportDefaultSpecifier = function (e, t = {}) {
          a('ExportDefaultSpecifier', e, t)
        }),
        (t.assertExportNamespaceSpecifier = function (e, t = {}) {
          a('ExportNamespaceSpecifier', e, t)
        }),
        (t.assertPrivateName = function (e, t = {}) {
          a('PrivateName', e, t)
        }),
        (t.assertBigIntLiteral = function (e, t = {}) {
          a('BigIntLiteral', e, t)
        }),
        (t.assertRecordExpression = function (e, t = {}) {
          a('RecordExpression', e, t)
        }),
        (t.assertTupleExpression = function (e, t = {}) {
          a('TupleExpression', e, t)
        }),
        (t.assertTSParameterProperty = function (e, t = {}) {
          a('TSParameterProperty', e, t)
        }),
        (t.assertTSDeclareFunction = function (e, t = {}) {
          a('TSDeclareFunction', e, t)
        }),
        (t.assertTSDeclareMethod = function (e, t = {}) {
          a('TSDeclareMethod', e, t)
        }),
        (t.assertTSQualifiedName = function (e, t = {}) {
          a('TSQualifiedName', e, t)
        }),
        (t.assertTSCallSignatureDeclaration = function (e, t = {}) {
          a('TSCallSignatureDeclaration', e, t)
        }),
        (t.assertTSConstructSignatureDeclaration = function (
          e,
          t = {}
        ) {
          a('TSConstructSignatureDeclaration', e, t)
        }),
        (t.assertTSPropertySignature = function (e, t = {}) {
          a('TSPropertySignature', e, t)
        }),
        (t.assertTSMethodSignature = function (e, t = {}) {
          a('TSMethodSignature', e, t)
        }),
        (t.assertTSIndexSignature = function (e, t = {}) {
          a('TSIndexSignature', e, t)
        }),
        (t.assertTSAnyKeyword = function (e, t = {}) {
          a('TSAnyKeyword', e, t)
        }),
        (t.assertTSBooleanKeyword = function (e, t = {}) {
          a('TSBooleanKeyword', e, t)
        }),
        (t.assertTSBigIntKeyword = function (e, t = {}) {
          a('TSBigIntKeyword', e, t)
        }),
        (t.assertTSNeverKeyword = function (e, t = {}) {
          a('TSNeverKeyword', e, t)
        }),
        (t.assertTSNullKeyword = function (e, t = {}) {
          a('TSNullKeyword', e, t)
        }),
        (t.assertTSNumberKeyword = function (e, t = {}) {
          a('TSNumberKeyword', e, t)
        }),
        (t.assertTSObjectKeyword = function (e, t = {}) {
          a('TSObjectKeyword', e, t)
        }),
        (t.assertTSStringKeyword = function (e, t = {}) {
          a('TSStringKeyword', e, t)
        }),
        (t.assertTSSymbolKeyword = function (e, t = {}) {
          a('TSSymbolKeyword', e, t)
        }),
        (t.assertTSUndefinedKeyword = function (e, t = {}) {
          a('TSUndefinedKeyword', e, t)
        }),
        (t.assertTSUnknownKeyword = function (e, t = {}) {
          a('TSUnknownKeyword', e, t)
        }),
        (t.assertTSVoidKeyword = function (e, t = {}) {
          a('TSVoidKeyword', e, t)
        }),
        (t.assertTSThisType = function (e, t = {}) {
          a('TSThisType', e, t)
        }),
        (t.assertTSFunctionType = function (e, t = {}) {
          a('TSFunctionType', e, t)
        }),
        (t.assertTSConstructorType = function (e, t = {}) {
          a('TSConstructorType', e, t)
        }),
        (t.assertTSTypeReference = function (e, t = {}) {
          a('TSTypeReference', e, t)
        }),
        (t.assertTSTypePredicate = function (e, t = {}) {
          a('TSTypePredicate', e, t)
        }),
        (t.assertTSTypeQuery = function (e, t = {}) {
          a('TSTypeQuery', e, t)
        }),
        (t.assertTSTypeLiteral = function (e, t = {}) {
          a('TSTypeLiteral', e, t)
        }),
        (t.assertTSArrayType = function (e, t = {}) {
          a('TSArrayType', e, t)
        }),
        (t.assertTSTupleType = function (e, t = {}) {
          a('TSTupleType', e, t)
        }),
        (t.assertTSOptionalType = function (e, t = {}) {
          a('TSOptionalType', e, t)
        }),
        (t.assertTSRestType = function (e, t = {}) {
          a('TSRestType', e, t)
        }),
        (t.assertTSUnionType = function (e, t = {}) {
          a('TSUnionType', e, t)
        }),
        (t.assertTSIntersectionType = function (e, t = {}) {
          a('TSIntersectionType', e, t)
        }),
        (t.assertTSConditionalType = function (e, t = {}) {
          a('TSConditionalType', e, t)
        }),
        (t.assertTSInferType = function (e, t = {}) {
          a('TSInferType', e, t)
        }),
        (t.assertTSParenthesizedType = function (e, t = {}) {
          a('TSParenthesizedType', e, t)
        }),
        (t.assertTSTypeOperator = function (e, t = {}) {
          a('TSTypeOperator', e, t)
        }),
        (t.assertTSIndexedAccessType = function (e, t = {}) {
          a('TSIndexedAccessType', e, t)
        }),
        (t.assertTSMappedType = function (e, t = {}) {
          a('TSMappedType', e, t)
        }),
        (t.assertTSLiteralType = function (e, t = {}) {
          a('TSLiteralType', e, t)
        }),
        (t.assertTSExpressionWithTypeArguments = function (
          e,
          t = {}
        ) {
          a('TSExpressionWithTypeArguments', e, t)
        }),
        (t.assertTSInterfaceDeclaration = function (e, t = {}) {
          a('TSInterfaceDeclaration', e, t)
        }),
        (t.assertTSInterfaceBody = function (e, t = {}) {
          a('TSInterfaceBody', e, t)
        }),
        (t.assertTSTypeAliasDeclaration = function (e, t = {}) {
          a('TSTypeAliasDeclaration', e, t)
        }),
        (t.assertTSAsExpression = function (e, t = {}) {
          a('TSAsExpression', e, t)
        }),
        (t.assertTSTypeAssertion = function (e, t = {}) {
          a('TSTypeAssertion', e, t)
        }),
        (t.assertTSEnumDeclaration = function (e, t = {}) {
          a('TSEnumDeclaration', e, t)
        }),
        (t.assertTSEnumMember = function (e, t = {}) {
          a('TSEnumMember', e, t)
        }),
        (t.assertTSModuleDeclaration = function (e, t = {}) {
          a('TSModuleDeclaration', e, t)
        }),
        (t.assertTSModuleBlock = function (e, t = {}) {
          a('TSModuleBlock', e, t)
        }),
        (t.assertTSImportType = function (e, t = {}) {
          a('TSImportType', e, t)
        }),
        (t.assertTSImportEqualsDeclaration = function (e, t = {}) {
          a('TSImportEqualsDeclaration', e, t)
        }),
        (t.assertTSExternalModuleReference = function (e, t = {}) {
          a('TSExternalModuleReference', e, t)
        }),
        (t.assertTSNonNullExpression = function (e, t = {}) {
          a('TSNonNullExpression', e, t)
        }),
        (t.assertTSExportAssignment = function (e, t = {}) {
          a('TSExportAssignment', e, t)
        }),
        (t.assertTSNamespaceExportDeclaration = function (e, t = {}) {
          a('TSNamespaceExportDeclaration', e, t)
        }),
        (t.assertTSTypeAnnotation = function (e, t = {}) {
          a('TSTypeAnnotation', e, t)
        }),
        (t.assertTSTypeParameterInstantiation = function (e, t = {}) {
          a('TSTypeParameterInstantiation', e, t)
        }),
        (t.assertTSTypeParameterDeclaration = function (e, t = {}) {
          a('TSTypeParameterDeclaration', e, t)
        }),
        (t.assertTSTypeParameter = function (e, t = {}) {
          a('TSTypeParameter', e, t)
        }),
        (t.assertExpression = function (e, t = {}) {
          a('Expression', e, t)
        }),
        (t.assertBinary = function (e, t = {}) {
          a('Binary', e, t)
        }),
        (t.assertScopable = function (e, t = {}) {
          a('Scopable', e, t)
        }),
        (t.assertBlockParent = function (e, t = {}) {
          a('BlockParent', e, t)
        }),
        (t.assertBlock = function (e, t = {}) {
          a('Block', e, t)
        }),
        (t.assertStatement = function (e, t = {}) {
          a('Statement', e, t)
        }),
        (t.assertTerminatorless = function (e, t = {}) {
          a('Terminatorless', e, t)
        }),
        (t.assertCompletionStatement = function (e, t = {}) {
          a('CompletionStatement', e, t)
        }),
        (t.assertConditional = function (e, t = {}) {
          a('Conditional', e, t)
        }),
        (t.assertLoop = function (e, t = {}) {
          a('Loop', e, t)
        }),
        (t.assertWhile = function (e, t = {}) {
          a('While', e, t)
        }),
        (t.assertExpressionWrapper = function (e, t = {}) {
          a('ExpressionWrapper', e, t)
        }),
        (t.assertFor = function (e, t = {}) {
          a('For', e, t)
        }),
        (t.assertForXStatement = function (e, t = {}) {
          a('ForXStatement', e, t)
        }),
        (t.assertFunction = function (e, t = {}) {
          a('Function', e, t)
        }),
        (t.assertFunctionParent = function (e, t = {}) {
          a('FunctionParent', e, t)
        }),
        (t.assertPureish = function (e, t = {}) {
          a('Pureish', e, t)
        }),
        (t.assertDeclaration = function (e, t = {}) {
          a('Declaration', e, t)
        }),
        (t.assertPatternLike = function (e, t = {}) {
          a('PatternLike', e, t)
        }),
        (t.assertLVal = function (e, t = {}) {
          a('LVal', e, t)
        }),
        (t.assertTSEntityName = function (e, t = {}) {
          a('TSEntityName', e, t)
        }),
        (t.assertLiteral = function (e, t = {}) {
          a('Literal', e, t)
        }),
        (t.assertImmutable = function (e, t = {}) {
          a('Immutable', e, t)
        }),
        (t.assertUserWhitespacable = function (e, t = {}) {
          a('UserWhitespacable', e, t)
        }),
        (t.assertMethod = function (e, t = {}) {
          a('Method', e, t)
        }),
        (t.assertObjectMember = function (e, t = {}) {
          a('ObjectMember', e, t)
        }),
        (t.assertProperty = function (e, t = {}) {
          a('Property', e, t)
        }),
        (t.assertUnaryLike = function (e, t = {}) {
          a('UnaryLike', e, t)
        }),
        (t.assertPattern = function (e, t = {}) {
          a('Pattern', e, t)
        }),
        (t.assertClass = function (e, t = {}) {
          a('Class', e, t)
        }),
        (t.assertModuleDeclaration = function (e, t = {}) {
          a('ModuleDeclaration', e, t)
        }),
        (t.assertExportDeclaration = function (e, t = {}) {
          a('ExportDeclaration', e, t)
        }),
        (t.assertModuleSpecifier = function (e, t = {}) {
          a('ModuleSpecifier', e, t)
        }),
        (t.assertFlow = function (e, t = {}) {
          a('Flow', e, t)
        }),
        (t.assertFlowType = function (e, t = {}) {
          a('FlowType', e, t)
        }),
        (t.assertFlowBaseAnnotation = function (e, t = {}) {
          a('FlowBaseAnnotation', e, t)
        }),
        (t.assertFlowDeclaration = function (e, t = {}) {
          a('FlowDeclaration', e, t)
        }),
        (t.assertFlowPredicate = function (e, t = {}) {
          a('FlowPredicate', e, t)
        }),
        (t.assertEnumBody = function (e, t = {}) {
          a('EnumBody', e, t)
        }),
        (t.assertEnumMember = function (e, t = {}) {
          a('EnumMember', e, t)
        }),
        (t.assertJSX = function (e, t = {}) {
          a('JSX', e, t)
        }),
        (t.assertPrivate = function (e, t = {}) {
          a('Private', e, t)
        }),
        (t.assertTSTypeElement = function (e, t = {}) {
          a('TSTypeElement', e, t)
        }),
        (t.assertTSType = function (e, t = {}) {
          a('TSType', e, t)
        }),
        (t.assertNumberLiteral = function (e, t) {
          console.trace(
            'The node type NumberLiteral has been renamed to NumericLiteral'
          ),
            a('NumberLiteral', e, t)
        }),
        (t.assertRegexLiteral = function (e, t) {
          console.trace(
            'The node type RegexLiteral has been renamed to RegExpLiteral'
          ),
            a('RegexLiteral', e, t)
        }),
        (t.assertRestProperty = function (e, t) {
          console.trace(
            'The node type RestProperty has been renamed to RestElement'
          ),
            a('RestProperty', e, t)
        }),
        (t.assertSpreadProperty = function (e, t) {
          console.trace(
            'The node type SpreadProperty has been renamed to SpreadElement'
          ),
            a('SpreadProperty', e, t)
        })
      var r,
        i = (r = n(11)) && r.__esModule ? r : { default: r }
      function a(e, t, n) {
        if (!(0, i.default)(e, t, n))
          throw new Error(
            `Expected type "${e}" with option ${JSON.stringify(
              n
            )}, ` + `but instead got "${t.type}".`
          )
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          if ('string' === e) return (0, r.stringTypeAnnotation)()
          if ('number' === e) return (0, r.numberTypeAnnotation)()
          if ('undefined' === e) return (0, r.voidTypeAnnotation)()
          if ('boolean' === e) return (0, r.booleanTypeAnnotation)()
          if ('function' === e)
            return (0, r.genericTypeAnnotation)(
              (0, r.identifier)('Function')
            )
          if ('object' === e)
            return (0, r.genericTypeAnnotation)(
              (0, r.identifier)('Object')
            )
          if ('symbol' === e)
            return (0, r.genericTypeAnnotation)(
              (0, r.identifier)('Symbol')
            )
          throw new Error('Invalid typeof value')
        })
      var r = n(2)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          const t = (0, a.default)(e)
          return 1 === t.length ? t[0] : (0, i.unionTypeAnnotation)(t)
        })
      var r,
        i = n(2),
        a = (r = n(61)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (0, i.default)(e, !1)
        })
      var r,
        i = (r = n(8)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (0, i.default)(e)
        })
      var r,
        i = (r = n(8)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (0, i.default)(e, !0, !0)
        })
      var r,
        i = (r = n(8)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (0, i.default)(e, !1, !0)
        })
      var r,
        i = (r = n(8)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n, r) {
          return (0, i.default)(e, t, [
            { type: r ? 'CommentLine' : 'CommentBlock', value: n },
          ])
        })
      var r,
        i = (r = n(62)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      var r = n(168)
      e.exports = function (e) {
        return e && e.length ? r(e) : []
      }
    },
    function (e, t, n) {
      var r = n(169),
        i = n(172),
        a = n(177),
        o = n(178),
        s = n(179),
        u = n(64)
      e.exports = function (e, t, n) {
        var l = -1,
          p = i,
          f = e.length,
          c = !0,
          d = [],
          y = d
        if (n) (c = !1), (p = a)
        else if (f >= 200) {
          var T = t ? null : s(e)
          if (T) return u(T)
          ;(c = !1), (p = o), (y = new r())
        } else y = t ? [] : d
        e: for (; ++l < f; ) {
          var S = e[l],
            m = t ? t(S) : S
          if (((S = n || 0 !== S ? S : 0), c && m == m)) {
            for (var E = y.length; E--; ) if (y[E] === m) continue e
            t && y.push(m), d.push(S)
          } else p(y, m, n) || (y !== d && y.push(m), d.push(S))
        }
        return d
      }
    },
    function (e, t, n) {
      var r = n(43),
        i = n(170),
        a = n(171)
      function o(e) {
        var t = -1,
          n = null == e ? 0 : e.length
        for (this.__data__ = new r(); ++t < n; ) this.add(e[t])
      }
      ;(o.prototype.add = o.prototype.push = i),
        (o.prototype.has = a),
        (e.exports = o)
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.set(e, '__lodash_hash_undefined__'), this
      }
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e)
      }
    },
    function (e, t, n) {
      var r = n(173)
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1
      }
    },
    function (e, t, n) {
      var r = n(174),
        i = n(175),
        a = n(176)
      e.exports = function (e, t, n) {
        return t == t ? a(e, t, n) : r(e, i, n)
      }
    },
    function (e, t) {
      e.exports = function (e, t, n, r) {
        for (
          var i = e.length, a = n + (r ? 1 : -1);
          r ? a-- : ++a < i;

        )
          if (t(e[a], a, e)) return a
        return -1
      }
    },
    function (e, t) {
      e.exports = function (e) {
        return e != e
      }
    },
    function (e, t) {
      e.exports = function (e, t, n) {
        for (var r = n - 1, i = e.length; ++r < i; )
          if (e[r] === t) return r
        return -1
      }
    },
    function (e, t) {
      e.exports = function (e, t, n) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
          if (n(t, e[r])) return !0
        return !1
      }
    },
    function (e, t) {
      e.exports = function (e, t) {
        return e.has(t)
      }
    },
    function (e, t, n) {
      var r = n(56),
        i = n(180),
        a = n(64),
        o =
          r && 1 / a(new r([, -0]))[1] == 1 / 0
            ? function (e) {
                return new r(e)
              }
            : i
      e.exports = o
    },
    function (e, t) {
      e.exports = function () {}
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (
            r.COMMENT_KEYS.forEach((t) => {
              e[t] = null
            }),
            e
          )
        })
      var r = n(7)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.TSTYPE_TYPES = t.TSTYPEELEMENT_TYPES = t.PRIVATE_TYPES = t.JSX_TYPES = t.ENUMMEMBER_TYPES = t.ENUMBODY_TYPES = t.FLOWPREDICATE_TYPES = t.FLOWDECLARATION_TYPES = t.FLOWBASEANNOTATION_TYPES = t.FLOWTYPE_TYPES = t.FLOW_TYPES = t.MODULESPECIFIER_TYPES = t.EXPORTDECLARATION_TYPES = t.MODULEDECLARATION_TYPES = t.CLASS_TYPES = t.PATTERN_TYPES = t.UNARYLIKE_TYPES = t.PROPERTY_TYPES = t.OBJECTMEMBER_TYPES = t.METHOD_TYPES = t.USERWHITESPACABLE_TYPES = t.IMMUTABLE_TYPES = t.LITERAL_TYPES = t.TSENTITYNAME_TYPES = t.LVAL_TYPES = t.PATTERNLIKE_TYPES = t.DECLARATION_TYPES = t.PUREISH_TYPES = t.FUNCTIONPARENT_TYPES = t.FUNCTION_TYPES = t.FORXSTATEMENT_TYPES = t.FOR_TYPES = t.EXPRESSIONWRAPPER_TYPES = t.WHILE_TYPES = t.LOOP_TYPES = t.CONDITIONAL_TYPES = t.COMPLETIONSTATEMENT_TYPES = t.TERMINATORLESS_TYPES = t.STATEMENT_TYPES = t.BLOCK_TYPES = t.BLOCKPARENT_TYPES = t.SCOPABLE_TYPES = t.BINARY_TYPES = t.EXPRESSION_TYPES = void 0)
      var r = n(1)
      const i = r.FLIPPED_ALIAS_KEYS.Expression
      t.EXPRESSION_TYPES = i
      const a = r.FLIPPED_ALIAS_KEYS.Binary
      t.BINARY_TYPES = a
      const o = r.FLIPPED_ALIAS_KEYS.Scopable
      t.SCOPABLE_TYPES = o
      const s = r.FLIPPED_ALIAS_KEYS.BlockParent
      t.BLOCKPARENT_TYPES = s
      const u = r.FLIPPED_ALIAS_KEYS.Block
      t.BLOCK_TYPES = u
      const l = r.FLIPPED_ALIAS_KEYS.Statement
      t.STATEMENT_TYPES = l
      const p = r.FLIPPED_ALIAS_KEYS.Terminatorless
      t.TERMINATORLESS_TYPES = p
      const f = r.FLIPPED_ALIAS_KEYS.CompletionStatement
      t.COMPLETIONSTATEMENT_TYPES = f
      const c = r.FLIPPED_ALIAS_KEYS.Conditional
      t.CONDITIONAL_TYPES = c
      const d = r.FLIPPED_ALIAS_KEYS.Loop
      t.LOOP_TYPES = d
      const y = r.FLIPPED_ALIAS_KEYS.While
      t.WHILE_TYPES = y
      const T = r.FLIPPED_ALIAS_KEYS.ExpressionWrapper
      t.EXPRESSIONWRAPPER_TYPES = T
      const S = r.FLIPPED_ALIAS_KEYS.For
      t.FOR_TYPES = S
      const m = r.FLIPPED_ALIAS_KEYS.ForXStatement
      t.FORXSTATEMENT_TYPES = m
      const E = r.FLIPPED_ALIAS_KEYS.Function
      t.FUNCTION_TYPES = E
      const v = r.FLIPPED_ALIAS_KEYS.FunctionParent
      t.FUNCTIONPARENT_TYPES = v
      const b = r.FLIPPED_ALIAS_KEYS.Pureish
      t.PUREISH_TYPES = b
      const P = r.FLIPPED_ALIAS_KEYS.Declaration
      t.DECLARATION_TYPES = P
      const x = r.FLIPPED_ALIAS_KEYS.PatternLike
      t.PATTERNLIKE_TYPES = x
      const A = r.FLIPPED_ALIAS_KEYS.LVal
      t.LVAL_TYPES = A
      const O = r.FLIPPED_ALIAS_KEYS.TSEntityName
      t.TSENTITYNAME_TYPES = O
      const g = r.FLIPPED_ALIAS_KEYS.Literal
      t.LITERAL_TYPES = g
      const h = r.FLIPPED_ALIAS_KEYS.Immutable
      t.IMMUTABLE_TYPES = h
      const I = r.FLIPPED_ALIAS_KEYS.UserWhitespacable
      t.USERWHITESPACABLE_TYPES = I
      const _ = r.FLIPPED_ALIAS_KEYS.Method
      t.METHOD_TYPES = _
      const D = r.FLIPPED_ALIAS_KEYS.ObjectMember
      t.OBJECTMEMBER_TYPES = D
      const N = r.FLIPPED_ALIAS_KEYS.Property
      t.PROPERTY_TYPES = N
      const j = r.FLIPPED_ALIAS_KEYS.UnaryLike
      t.UNARYLIKE_TYPES = j
      const L = r.FLIPPED_ALIAS_KEYS.Pattern
      t.PATTERN_TYPES = L
      const M = r.FLIPPED_ALIAS_KEYS.Class
      t.CLASS_TYPES = M
      const w = r.FLIPPED_ALIAS_KEYS.ModuleDeclaration
      t.MODULEDECLARATION_TYPES = w
      const F = r.FLIPPED_ALIAS_KEYS.ExportDeclaration
      t.EXPORTDECLARATION_TYPES = F
      const C = r.FLIPPED_ALIAS_KEYS.ModuleSpecifier
      t.MODULESPECIFIER_TYPES = C
      const B = r.FLIPPED_ALIAS_KEYS.Flow
      t.FLOW_TYPES = B
      const R = r.FLIPPED_ALIAS_KEYS.FlowType
      t.FLOWTYPE_TYPES = R
      const K = r.FLIPPED_ALIAS_KEYS.FlowBaseAnnotation
      t.FLOWBASEANNOTATION_TYPES = K
      const Y = r.FLIPPED_ALIAS_KEYS.FlowDeclaration
      t.FLOWDECLARATION_TYPES = Y
      const k = r.FLIPPED_ALIAS_KEYS.FlowPredicate
      t.FLOWPREDICATE_TYPES = k
      const V = r.FLIPPED_ALIAS_KEYS.EnumBody
      t.ENUMBODY_TYPES = V
      const X = r.FLIPPED_ALIAS_KEYS.EnumMember
      t.ENUMMEMBER_TYPES = X
      const J = r.FLIPPED_ALIAS_KEYS.JSX
      t.JSX_TYPES = J
      const U = r.FLIPPED_ALIAS_KEYS.Private
      t.PRIVATE_TYPES = U
      const W = r.FLIPPED_ALIAS_KEYS.TSTypeElement
      t.TSTYPEELEMENT_TYPES = W
      const q = r.FLIPPED_ALIAS_KEYS.TSType
      t.TSTYPE_TYPES = q
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t = 'body') {
          return (e[t] = (0, i.default)(e[t], e))
        })
      var r,
        i = (r = n(68)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          ;('eval' !== (e = (0, i.default)(e)) &&
            'arguments' !== e) ||
            (e = '_' + e)
          return e
        })
      var r,
        i = (r = n(69)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t = e.key || e.property) {
          !e.computed &&
            (0, r.isIdentifier)(t) &&
            (t = (0, i.stringLiteral)(t.name))
          return t
        })
      var r = n(0),
        i = n(2)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          ;(0, r.isExpressionStatement)(e) && (e = e.expression)
          if ((0, r.isExpression)(e)) return e
          ;(0, r.isClass)(e)
            ? (e.type = 'ClassExpression')
            : (0, r.isFunction)(e) && (e.type = 'FunctionExpression')
          if (!(0, r.isExpression)(e))
            throw new Error(`cannot turn ${e.type} to an expression`)
          return e
        })
      var r = n(0)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = s)
      var r = n(0),
        i = o(n(8)),
        a = o(n(70))
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e, t = e.key) {
        let n
        return 'method' === e.kind
          ? s.increment() + ''
          : ((n = (0, r.isIdentifier)(t)
              ? t.name
              : (0, r.isStringLiteral)(t)
              ? JSON.stringify(t.value)
              : JSON.stringify((0, a.default)((0, i.default)(t)))),
            e.computed && (n = `[${n}]`),
            e.static && (n = `static:${n}`),
            n)
      }
      ;(s.uid = 0),
        (s.increment = function () {
          return s.uid >= Number.MAX_SAFE_INTEGER
            ? (s.uid = 0)
            : s.uid++
        })
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          if (!e || !e.length) return
          const n = [],
            r = (0, i.default)(e, t, n)
          if (!r) return
          for (const e of n) t.push(e)
          return r
        })
      var r,
        i = (r = n(189)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function e(t, n, s) {
          const u = []
          let l = !0
          for (const p of t)
            if (((l = !1), (0, i.isExpression)(p))) u.push(p)
            else if ((0, i.isExpressionStatement)(p))
              u.push(p.expression)
            else if ((0, i.isVariableDeclaration)(p)) {
              if ('var' !== p.kind) return
              for (const e of p.declarations) {
                const t = (0, r.default)(e)
                for (const e of Object.keys(t))
                  s.push({ kind: p.kind, id: (0, o.default)(t[e]) })
                e.init &&
                  u.push(
                    (0, a.assignmentExpression)('=', e.id, e.init)
                  )
              }
              l = !0
            } else if ((0, i.isIfStatement)(p)) {
              const t = p.consequent
                  ? e([p.consequent], n, s)
                  : n.buildUndefinedNode(),
                r = p.alternate
                  ? e([p.alternate], n, s)
                  : n.buildUndefinedNode()
              if (!t || !r) return
              u.push((0, a.conditionalExpression)(p.test, t, r))
            } else if ((0, i.isBlockStatement)(p)) {
              const t = e(p.body, n, s)
              if (!t) return
              u.push(t)
            } else {
              if (!(0, i.isEmptyStatement)(p)) return
              l = !0
            }
          l && u.push(n.buildUndefinedNode())
          return 1 === u.length ? u[0] : (0, a.sequenceExpression)(u)
        })
      var r = s(n(20)),
        i = n(0),
        a = n(2),
        o = s(n(8))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          if ((0, r.isStatement)(e)) return e
          let n,
            a = !1
          if ((0, r.isClass)(e)) (a = !0), (n = 'ClassDeclaration')
          else if ((0, r.isFunction)(e))
            (a = !0), (n = 'FunctionDeclaration')
          else if ((0, r.isAssignmentExpression)(e))
            return (0, i.expressionStatement)(e)
          a && !e.id && (n = !1)
          if (!n) {
            if (t) return !1
            throw new Error(`cannot turn ${e.type} to a statement`)
          }
          return (e.type = n), e
        })
      var r = n(0),
        i = n(2)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function e(t) {
          if (void 0 === t) return (0, o.identifier)('undefined')
          if (!0 === t || !1 === t) return (0, o.booleanLiteral)(t)
          if (null === t) return (0, o.nullLiteral)()
          if ('string' == typeof t) return (0, o.stringLiteral)(t)
          if ('number' == typeof t) {
            let e
            if (Number.isFinite(t))
              e = (0, o.numericLiteral)(Math.abs(t))
            else {
              let n
              ;(n = Number.isNaN(t)
                ? (0, o.numericLiteral)(0)
                : (0, o.numericLiteral)(1)),
                (e = (0, o.binaryExpression)(
                  '/',
                  n,
                  (0, o.numericLiteral)(0)
                ))
            }
            return (
              (t < 0 || Object.is(t, -0)) &&
                (e = (0, o.unaryExpression)('-', e)),
              e
            )
          }
          if ((0, i.default)(t)) {
            const e = t.source,
              n = t.toString().match(/\/([a-z]+|)$/)[1]
            return (0, o.regExpLiteral)(e, n)
          }
          if (Array.isArray(t))
            return (0, o.arrayExpression)(t.map(e))
          if ((0, r.default)(t)) {
            const n = []
            for (const r of Object.keys(t)) {
              let i
              ;(i = (0, a.default)(r)
                ? (0, o.identifier)(r)
                : (0, o.stringLiteral)(r)),
                n.push((0, o.objectProperty)(i, e(t[r])))
            }
            return (0, o.objectExpression)(n)
          }
          throw new Error(
            "don't know how to turn this value into a node"
          )
        })
      var r = s(n(192)),
        i = s(n(193)),
        a = s(n(12)),
        o = n(2)
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
    },
    function (e, t, n) {
      var r = n(9),
        i = n(29),
        a = n(6),
        o = Function.prototype,
        s = Object.prototype,
        u = o.toString,
        l = s.hasOwnProperty,
        p = u.call(Object)
      e.exports = function (e) {
        if (!a(e) || '[object Object]' != r(e)) return !1
        var t = i(e)
        if (null === t) return !0
        var n = l.call(t, 'constructor') && t.constructor
        return (
          'function' == typeof n && n instanceof n && u.call(n) == p
        )
      }
    },
    function (e, t, n) {
      var r = n(194),
        i = n(18),
        a = n(19),
        o = a && a.isRegExp,
        s = o ? i(o) : r
      e.exports = s
    },
    function (e, t, n) {
      var r = n(9),
        i = n(6)
      e.exports = function (e) {
        return i(e) && '[object RegExp]' == r(e)
      }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n = !1) {
          return (
            (e.object = (0, r.memberExpression)(
              e.object,
              e.property,
              e.computed
            )),
            (e.property = t),
            (e.computed = !!n),
            e
          )
        })
      var r = n(2)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          if (!e || !t) return e
          for (const n of i.INHERIT_KEYS.optional)
            null == e[n] && (e[n] = t[n])
          for (const n of Object.keys(t))
            '_' === n[0] && '__clone' !== n && (e[n] = t[n])
          for (const n of i.INHERIT_KEYS.force) e[n] = t[n]
          return (0, a.default)(e, t), e
        })
      var r,
        i = n(7),
        a = (r = n(66)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          return (e.object = (0, r.memberExpression)(t, e.object)), e
        })
      var r = n(2)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          return (0, i.default)(e, t, !0)
        })
      var r,
        i = (r = n(20)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n) {
          'function' == typeof t && (t = { enter: t })
          const { enter: i, exit: a } = t
          !(function e(t, n, i, a, o) {
            const s = r.VISITOR_KEYS[t.type]
            if (!s) return
            n && n(t, o, a)
            for (const r of s) {
              const s = t[r]
              if (Array.isArray(s))
                for (let u = 0; u < s.length; u++) {
                  const l = s[u]
                  l &&
                    (o.push({ node: t, key: r, index: u }),
                    e(l, n, i, a, o),
                    o.pop())
                }
              else
                s &&
                  (o.push({ node: t, key: r }),
                  e(s, n, i, a, o),
                  o.pop())
            }
            i && i(t, o, a)
          })(e, i, a, n, [])
        })
      var r = n(1)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n) {
          if (
            n &&
            'Identifier' === e.type &&
            'ObjectProperty' === t.type &&
            'ObjectExpression' === n.type
          )
            return !1
          const r = i.default.keys[t.type]
          if (r)
            for (let n = 0; n < r.length; n++) {
              const i = r[n],
                a = t[i]
              if (Array.isArray(a)) {
                if (a.indexOf(e) >= 0) return !0
              } else if (a === e) return !0
            }
          return !1
        })
      var r,
        i = (r = n(20)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (
            (0, i.isFunctionDeclaration)(e) ||
            (0, i.isClassDeclaration)(e) ||
            (0, a.default)(e)
          )
        })
      var r,
        i = n(0),
        a = (r = n(73)) && r.__esModule ? r : { default: r }
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          if ((0, i.default)(e.type, 'Immutable')) return !0
          if ((0, a.isIdentifier)(e)) return 'undefined' === e.name
          return !1
        })
      var r,
        i = (r = n(33)) && r.__esModule ? r : { default: r },
        a = n(0)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function e(t, n) {
          if (
            'object' != typeof t ||
            'object' != typeof n ||
            null == t ||
            null == n
          )
            return t === n
          if (t.type !== n.type) return !1
          const i = Object.keys(r.NODE_FIELDS[t.type] || t.type),
            a = r.VISITOR_KEYS[t.type]
          for (const r of i) {
            if (typeof t[r] != typeof n[r]) return !1
            if (null != t[r] || null != n[r]) {
              if (null == t[r] || null == n[r]) return !1
              if (Array.isArray(t[r])) {
                if (!Array.isArray(n[r])) return !1
                if (t[r].length !== n[r].length) return !1
                for (let i = 0; i < t[r].length; i++)
                  if (!e(t[r][i], n[r][i])) return !1
              } else if (
                'object' != typeof t[r] ||
                (a && a.includes(r))
              ) {
                if (!e(t[r], n[r])) return !1
              } else
                for (const e of Object.keys(t[r]))
                  if (t[r][e] !== n[r][e]) return !1
            }
          }
          return !0
        })
      var r = n(1)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t, n) {
          switch (t.type) {
            case 'MemberExpression':
            case 'JSXMemberExpression':
            case 'OptionalMemberExpression':
              return t.property === e ? !!t.computed : t.object === e
            case 'VariableDeclarator':
              return t.init === e
            case 'ArrowFunctionExpression':
              return t.body === e
            case 'ExportSpecifier':
              return !t.source && t.local === e
            case 'PrivateName':
              return !1
            case 'ClassMethod':
            case 'ClassPrivateMethod':
            case 'ObjectMethod':
              if (t.params.includes(e)) return !1
            case 'ObjectProperty':
            case 'ClassProperty':
            case 'ClassPrivateProperty':
              return t.key === e
                ? !!t.computed
                : t.value !== e || !n || 'ObjectPattern' !== n.type
            case 'ClassDeclaration':
            case 'ClassExpression':
              return t.superClass === e
            case 'AssignmentExpression':
            case 'AssignmentPattern':
              return t.right === e
            case 'LabeledStatement':
            case 'CatchClause':
            case 'RestElement':
              return !1
            case 'BreakStatement':
            case 'ContinueStatement':
              return !1
            case 'FunctionDeclaration':
            case 'FunctionExpression':
              return !1
            case 'ExportNamespaceSpecifier':
            case 'ExportDefaultSpecifier':
              return !1
            case 'ImportDefaultSpecifier':
            case 'ImportNamespaceSpecifier':
            case 'ImportSpecifier':
            case 'JSXAttribute':
              return !1
            case 'ObjectPattern':
            case 'ArrayPattern':
            case 'MetaProperty':
              return !1
            case 'ObjectTypeProperty':
              return t.key !== e
            case 'TSEnumMember':
              return t.id !== e
            case 'TSPropertySignature':
              return t.key !== e || !!t.computed
          }
          return !0
        })
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          if (
            (0, r.isBlockStatement)(e) &&
            (0, r.isFunction)(t, { body: e })
          )
            return !1
          if (
            (0, r.isBlockStatement)(e) &&
            (0, r.isCatchClause)(t, { body: e })
          )
            return !1
          if ((0, r.isPattern)(e) && (0, r.isFunction)(t)) return !0
          return (0, r.isScopable)(e)
        })
      var r = n(0)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (
            (0, r.isImportDefaultSpecifier)(e) ||
            (0, r.isIdentifier)(e.imported || e.exported, {
              name: 'default',
            })
          )
        })
      var r = n(0)
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (0, i.default)(e) && !a.has(e)
        })
      var r,
        i = (r = n(12)) && r.__esModule ? r : { default: r }
      const a = new Set([
        'abstract',
        'boolean',
        'byte',
        'char',
        'double',
        'enum',
        'final',
        'float',
        'goto',
        'implements',
        'int',
        'interface',
        'long',
        'native',
        'package',
        'private',
        'protected',
        'public',
        'short',
        'static',
        'synchronized',
        'throws',
        'transient',
        'volatile',
      ])
    },
    function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return (
            (0, r.isVariableDeclaration)(e, { kind: 'var' }) &&
            !e[i.BLOCK_SCOPED_SYMBOL]
          )
        })
      var r = n(0),
        i = n(7)
    },
  ])
})
