---
title: Supported Browsers
page_title: Suported Browsers
previous_url: /technical-requirements.html, /getting-started/technical-requirements
description: browser, platform support and prerequisites for best performance when working with Kendo UI.
position: 2
---

<style scoped>
    .stripes
    {
        border: 1px solid #E15613;
        border-collapse: collapse;
    }
    .stripes th
    {
        background: #E15613;
        color: #fff;
    }
    .stripes tr:nth-child(2n+1) td
    {
        background: #fed;
    }

    .stripes th,
    .stripes td
    {
        padding: 3px 5px;
        text-align: left;
    }
</style>

# Supported Desktop Browsers

<table class="devices-platforms stripes" style="margin-top: 1.2em;">
   <tbody>
        <tr>
            <th class="browsers" style="width: 120px"></th>
            <th class="browsers" style="width: 220px">Kendo UI Core</th>
            <th class="browsers" style="width: 220px">Kendo UI Professional</th>
        </tr>
        <tr>
           <td><span class="ie"></span>Internet Explorer</td>
           <td>7+<br/>10+ (for mobile widgets)</td>
           <td>7+<br/>10+ (for mobile widgets)</td>
        </tr>
        <tr>
            <td><span class="firefox"></span>Firefox</td>
            <td><a href="http://www.mozilla.org/en-US/firefox/organizations/">ESR</a> +<br/>*not supported by mobile widgets</td>
            <td><a href="http://www.mozilla.org/en-US/firefox/organizations/">ESR</a> +<br/>*not supported by mobile widgets</td>
        </tr>
        <tr>
            <td><span class="chrome"></span>Chrome</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr>
            <td><span class="opera"></span>Opera</td>
            <td>15.0 +</td>
            <td>15.0 +</td>
        </tr>
        <tr>
            <td><span class="safari"></span>Safari 5+ (OS X)</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
    </tbody>
</table>

**NOTES:**

* Browsers in beta stage are not supported;
* [Quirks mode](http://www.quirksmode.org/css/quirksmode.html) is not supported. Always specify a [DOCTYPE](http://reference.sitepoint.com/html/doctypes).
Recommended DOCTYPES include `HTML5`, `XHTML 1.1`, `XHTML 1.0 Strict` and `HTML4 Strict`. The `HTML4 Transitional` DOCTYPE triggers quirks mode and should not be used.
`XHTML 1.0 Transitional` works well in most cases, but may cause issues with vertical positioning of icons.
The correct syntax for [all DOCTYPES](http://www.w3.org/QA/2002/04/valid-dtd-list.html) is provided on the W3C website.
* **Internet Explorer compatibility modes are not supported**. These modes can exhibit different behavior and rendering bugs, compared to the browser versions they emulate.
It is highly recommended to use IE's [Edge mode](http://blogs.msdn.com/b/ie/archive/2010/06/16/ie-s-compatibility-features-for-site-developers.aspx) via META tag or HTTP header.

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

* Kendo UI uses progressive enhancement for its CSS styling. As a result, old and obsolete browsers may ignore CSS3 styles, such as rounded corners and linear gradients.

## Internet Explorer as an Embedded Browser in a Desktop Application

Internet Explorer behaves differently when being embedded inside a desktop (WinForms) application. It reports to support pointer events, but actually doesn't.
As a result, some events, on which Kendo UI relies, are not fired. In order to avoid this problem, the following Javascript code must be executed
**before the Kendo UI scripts are registered**:

    window.MSPointerEvent = null;
    window.PointerEvent = null;

# Supported Operating Systems

<table class="devices-platforms stripes" style="margin-top: 1.2em;">
    <tr>
        <th class="platform">Platform</th>
        <th class="platform-version">Version</th>
    </tr>
    <tr>
        <td style="width: 150px;"><span class="windows"></span>Windows</td>
        <td>XP +, Server 2003 +</td>
    </tr>
    <tr>
        <td><span class="mac"></span> OS X</td>
        <td>OS X 10.5+</td>
    </tr>
    <tr>
        <td><span class="android"></span> Android</td>
        <td>2.3 +</td>
    </tr>
    <tr>
        <td><span class="ios"></span> iOS</td>
        <td>6.0 +</td>
    </tr>
    <tr>
        <td><span class="blackberry"></span>BlackBerry</td>
        <td>10.0+</td>
    </tr>
    <tr>
        <td><span class="winphone"></span>Windows Phone</td>
        <td>8.0+</td>
    </tr>
     <tr>
        <td><span class="chrome"></span>Chrome for Android</td>
        <td>Yes</td>
    </tr>
</table>

**NOTES:**

* In Android 2.3 dataviz widgets support only Canvas rendering mode;
* Hybrid mouse and touch devices are supported (for instance IE10, Chrome and Firefox on Windows 8).

# Other prerequisites:

* JavaScript must be enabled on all browsers

For best performance:

* 'Disable script debugging' in the browser's config options must be checked;
* Caching on Internet Explorer must be activated.
