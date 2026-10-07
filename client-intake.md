---
layout: default
title: Client Intake Form
description: Submit your case information to our legal team
---

# Client Intake Form

Please fill out the form below with your contact details and case information. Our legal team will review your submission and get back to you shortly.

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
    <label for="case-type">Case Type *</label>
    <select id="case-type" name="case-type" required>
      <option value="">Select a case type</option>
      <option value="tax-issues">Tax Issues</option>
      <option value="child-support">Child Support</option>
      <option value="government-agency">Government Agency</option>
      <option value="debt-collection">Debt Collection</option>
      <option value="legal-follow-up">Legal Follow-up</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div class="form-group">
    <label for="description">Brief Description *</label>
    <textarea id="description" name="description" rows="5" required></textarea>
  </div>

  <div class="form-group">
    <label>Preferred Contact Method *</label>
    <div class="radio-group">
      <label class="radio-label">
        <input type="radio" name="contact-method" value="phone" required> Phone
      </label>
      <label class="radio-label">
        <input type="radio" name="contact-method" value="email"> Email
      </label>
      <label class="radio-label">
        <input type="radio" name="contact-method" value="text"> Text
      </label>
    </div>
  </div>

  <div class="form-group">
    <label for="best-time">Best Time to Contact</label>
    <input type="text" id="best-time" name="best-time">
  </div>

  <button type="submit">Submit Application</button>
</form>