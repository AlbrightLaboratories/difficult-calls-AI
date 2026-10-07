---
layout: default
title: Attorney Join Form
description: Apply to join our legal team
---

# Attorney Join Form

We're always looking for talented attorneys to join our team. Please fill out the form below with your information.

<form action="https://formspree.io/f/your-form-id" method="POST">
  <div class="form-group">
    <label for="full-name">Full Name *</label>
    <input type="text" id="full-name" name="full-name" required>
  </div>

  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="tel" id="phone" name="phone">
  </div>

  <div class="form-group">
    <label for="bar-number">Bar Number *</label>
    <input type="text" id="bar-number" name="bar-number" required>
  </div>

  <div class="form-group">
    <label for="states-licensed">State(s) Licensed *</label>
    <input type="text" id="states-licensed" name="states-licensed" required>
  </div>

  <div class="form-group">
    <label for="years-experience">Years of Experience *</label>
    <input type="number" id="years-experience" name="years-experience" required>
  </div>

  <div class="form-group">
    <label>Areas of Practice *</label>
    <div class="checkbox-group">
      <label class="checkbox-label">
        <input type="checkbox" name="areas-of-practice" value="tax-law"> Tax Law
      </label>
      <label class="checkbox-label">
        <input type="checkbox" name="areas-of-practice" value="family-law"> Family Law
      </label>
      <label class="checkbox-label">
        <input type="checkbox" name="areas-of-practice" value="corporate-law"> Corporate Law
      </label>
      <label class="checkbox-label">
        <input type="checkbox" name="areas-of-practice" value="criminal-law"> Criminal Law
      </label>
      <label class="checkbox-label">
        <input type="checkbox" name="areas-of-practice" value="real-estate"> Real Estate
      </label>
      <label class="checkbox-label">
        <input type="checkbox" name="areas-of-practice" value="personal-injury"> Personal Injury
      </label>
    </div>
  </div>

  <div class="form-group">
    <label for="why-join">Why do you want to join Difficult Calls? *</label>
    <textarea id="why-join" name="why-join" rows="5" required></textarea>
  </div>

  <div class="form-group">
    <label for="resume">Resume Upload</label>
    <input type="file" id="resume" name="resume">
  </div>

  <button type="submit">Submit Application</button>
</form>