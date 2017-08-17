<template>
    <input class="form-control input-inline mr10 w-200" ref="input" :placeholder="placeholder"
           v-bind:value="value"
           v-on:input="updateValue($event.target.value)"
           v-on:focus="selectAll" v-on:blur="formatValue">
</template>
<script>
    export default {
        props: {
            value: {
                type: null,
                default: 0
            },
            placeholder: {
                type: null,
                default: ""
            }
        },
        mounted: function () {
            this.formatValue()
        },
        methods: {
            updateValue: function (value) {
                var result = currencyValidator.parse(value, this.value)
                if (result.warning) {
                    this.$refs.input.value = result.value
                }
                this.$emit('input', result.value)
            },
            formatValue: function () {
                this.$refs.input.value = currencyValidator.format(this.value)
            },
            selectAll: function (event) {
                // 解决Safari错误
                // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
                setTimeout(function () {
                    event.target.select()
                }, 0)
            }
        }
    }

    var currencyValidator = {
        format: function (number) {
            console.log(number)
            return ((number * 100) / 100).toFixed(2)
            // return isNaN(number) || number==null || number=='' ? '' : parseFloat(number.toFixed(0));
        },
        parse: function (newString, oldNumber) {
            var CleanParse = function (value) {
                return { value: value }
            }
            var CurrencyWarning = function (warning, value) {
                return {
                    warning: warning,
                    value: value,
                    attempt: newString
                }
            }
            var NotAValidDollarAmountWarning = function (value) {
                return new CurrencyWarning(newString + ' 不是一个有效的金额', value)
            }
            var AutomaticConversionWarning = function (value) {
                return new CurrencyWarning(newString + ' 自动转换为 ' + value, value)
            }

            var newNumber = Number(newString)
            var indexOfDot = newString.indexOf('.')
            var indexOfE = newString.indexOf('e')

            if (isNaN(newNumber)) {
                if (
                        indexOfDot === -1 &&
                        indexOfE > 0 &&
                        indexOfE === newString.length - 1 &&
                        Number(newString.slice(0, indexOfE)) !== 0
                ) {
                    return new CleanParse(oldNumber)
                } else {
                    return new NotAValidDollarAmountWarning(oldNumber)
                }
            }

            var newCurrencyString = currencyValidator.format(newNumber)
            var newCurrencyNumber = Number(newCurrencyString)

            if (newCurrencyNumber === newNumber) {
                if (indexOfE !== -1 && indexOfE === newString.length - 2) {
                    return new AutomaticConversionWarning(newNumber)
                } else {
                    return new CleanParse(newNumber)
                }
            } else {
                return new NotAValidDollarAmountWarning(
                        newNumber > newCurrencyNumber
                                ? newCurrencyNumber
                                : oldNumber
                )
            }
        }
    }
</script>
<style lang="sass">
  
</style>

