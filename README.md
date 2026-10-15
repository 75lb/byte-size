## byte-size

* [byte-size](#module_byte-size) <sup><mark title="PACKAGE">Package</mark></sup>
    * [`byteSize (bytes, [options])`](#exp_module_byte-size--byteSize) : `object` <sup><mark>Default Export</mark></sup>
        * [`.defaultOptions(options)`](#module_byte-size--byteSize.defaultOptions)

### byteSize(bytes, [options]) ⇒ <code>object</code> ⏏
Returns an object with the spec `{ value: string, unit: string, long: string }`. The returned object defines a `toString` method meaning it can be used in any string context.

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>number</code> | The bytes value to convert. |
| [options] | <code>object</code> | Optional config. |
| [options.precision] | <code>number</code> | Number of decimal places. Defaults to `1`. |
| [options.units] | <code>string</code> | Specify `'metric'`, `'iec'`, `'metric_octet'`, `'iec_octet'` or the name of a property from the custom units table in `options.customUnits`. Defaults to `metric`. |
| [options.customUnits] | <code>object</code> | An object containing one or more custom unit lookup tables. |
| [options.toStringFn] | <code>function</code> | A `toString` function to override the default. |
| [options.locale] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | *Node >=13 or modern browser only - on earlier platforms this option is ignored*. The locale to use for number formatting (e.g. `'de-DE'`). Defaults to your system locale. Passed directed into [Intl.NumberFormat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). |

<a name="module_byte-size--byteSize.defaultOptions"></a>

#### byteSize.defaultOptions(options)
Set the default `byteSize` options for the duration of the process.

**Kind**: static method of [<code>byteSize</code>](#exp_module_byte-size--byteSize)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | A `byteSize` options object. |

