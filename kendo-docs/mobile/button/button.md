---
title: Button
page_title: Documentation Guide for Mobile Button Widget
description: How to initialize Kendo UI Mobile Button widget, customize its appearance and set a button icon.
position: 3
---

# Button

The mobile Button widget navigates to mobile View or executes a custom callback when tapped.

## Getting Started

The Kendo mobile Application will automatically initialize a mobile Button widget for every element with `role` data attribute set to `button` present in the views/layouts' markup.
Alternatively, it can be initialized using jQuery plugin syntax in the containing mobile View **init event handler**.
The button element may be either `A` or `BUTTON`.

### Initialize Kendo mobile Button based on role data attribute

    <a href="#foo" data-role="button">Foo</a>

### Initialize Kendo mobile Button using jQuery

    var button = $("#button").kendoMobileButton();

## Customizing Mobile Button Appearance

The Kendo mobile Button color can be customized by setting its `background-color` CSS property inline or by using a CSS selector with specificity of 20+.
You can target platforms separately using their respective root CSS classes.

### Green Button

    <a href="#foo" data-role="button" style="background-color: green">Foo</a>

### Green Kendo mobile Button in iOS and a red one in Android

    <style>
        .km-ios .checkout { background-color: green; }
        .km-android .checkout { background-color: red; }
    </style>

    <a href="#foo" data-role="button" class="checkout">Foo</a>

## Button icons

A Button icon can be set in two ways - either by adding an `img` element inside the Button element,
or by setting an `icon` data attribute to the Button element.

KendoUI Mobile ships with several ready to use icons:

<ul class="icon-block">
    <li><span class="km-icon km-about"></span><br/>about</li>
    <li><span class="km-icon km-action"></span><br/>action</li>
    <li><span class="km-icon km-add"></span><br/>add</li>
    <li><span class="km-icon km-bookmarks"></span><br/>bookmarks</li>
    <li><span class="km-icon km-camera"></span><br/>camera</li>
    <li><span class="km-icon km-cart"></span><br/>cart</li>
    <li><span class="km-icon km-compose"></span><br/>compose</li>
    <li><span class="km-icon km-contacts"></span><br/>contacts</li>
    <li><span class="km-icon km-delete"></span><br/>delete</li>
    <li><span class="km-icon km-details"></span><br/>details</li>
    <li><span class="km-icon km-downloads"></span><br/>downloads</li>
    <li><span class="km-icon km-fastforward"></span><br/>fastforward</li>
    <li><span class="km-icon km-favorites"></span><br/>favorites</li>
    <li><span class="km-icon km-featured"></span><br/>featured</li>
    <li><span class="km-icon km-globe"></span><br/>globe</li>
    <li><span class="km-icon km-history"></span><br/>history</li>
    <li><span class="km-icon km-home"></span><br/>home</li>
    <li><span class="km-icon km-info"></span><br/>info</li>
    <li><span class="km-icon km-more"></span><br/>more</li>
    <li><span class="km-icon km-mostrecent"></span><br/>mostrecent</li>
    <li><span class="km-icon km-mostviewed"></span><br/>mostviewed</li>
    <li><span class="km-icon km-organize"></span><br/>organize</li>
    <li><span class="km-icon km-pause"></span><br/>pause</li>
    <li><span class="km-icon km-play"></span><br/>play</li>
    <li><span class="km-icon km-recents"></span><br/>recents</li>
    <li><span class="km-icon km-refresh"></span><br/>refresh</li>
    <li><span class="km-icon km-reply"></span><br/>reply</li>
    <li><span class="km-icon km-rewind"></span><br/>rewind</li>
    <li><span class="km-icon km-search"></span><br/>search</li>
    <li><span class="km-icon km-settings"></span><br/>settings</li>
    <li><span class="km-icon km-share"></span><br/>share</li>
    <li><span class="km-icon km-sounds"></span><br/>sounds</li>
    <li><span class="km-icon km-stop"></span><br/>stop</li>
    <li><span class="km-icon km-toprated"></span><br/>toprated</li>
    <li><span class="km-icon km-trash"></span><br/>trash</li>
    <li><span class="km-icon km-volume"></span><br/>volume</li>
    <li><span class="km-icon km-wifi"></span><br/>wifi</li>
</ul>

Additional icons may be added by defining the respective CSS class.
If the `icon` data attribute is set to `custom`, the button will receive `km-custom` CSS class.

> **Important:** Check the [Icons](./icons) article for more information and how you can use custom icons in Kendo UI Mobile.
