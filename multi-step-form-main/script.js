let html1 = [
  `<div id="content1">
      <div id="step1Info">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <label for="name">Name</label>
        <input type="text" id="name" class="info">
        <label for="email">Email Address</label>
        <input type="email" id="email" class="info">
        <label for="number">Phone Number</label>
        <input type="number" id="number" class="info">
      </div>
      <div id="next1a">
        <button id="btn1">Next Step</button>
      </div>
    </div>`,

  `<div id="content2">
      <div id="step2Info">
        <h1>Select your plan</h1>
        <p id="option">You have the option of monthly or yearly billing.</p>
        <div class="MyplansA">
          <div class="plansA">
            <img src="assets/images/icon-arcade.svg" alt="arcade">
            <div>
              <p class="heading">Arcade</p>
              <p class="txt">$9/mo</p>
            </div>
          </div>
          <div class="plansA">
            <img src="assets/images/icon-advanced.svg" alt="advanced">
            <div>
              <p class="heading">Advaqnced</p>
              <p class="txt">$12/mo</p>
            </div>
          </div>
          <div class="plansA">
            <img src="assets/images/icon-pro.svg" alt="pro">
            <div>
              <p class="heading">Pro</p>
              <p class="txt">$15/mo</p>
            </div>
          </div>
        </div>
        <div id="ways">
          <p class="way">Monthly</p>
          <div>
            <div id="planBtn">
              <div></div>
            </div>
          </div>
          <p class="way">Yearly</p>
        </div>
        
      </div>
      <div id="next1b">
        <button id="goBack">Go Back</button>
        <button id="btn1">Next Step</button>
      </div>
    </div>`,

  `<div id="content3">
      <div id="step3Info">
        <h1>Pick add-ons</h1>
        <p id="option">Add-ons help enhance your gaming experience.</p>
        <div class="MyplansB">
          <div class="plansB">
            <div class="heads">
              <div class="tickBox">
                <input type="checkbox" id="">
              </div>
              <div>
                <p class="heading">Online service</p>
                <p class="txt">Access to multiplayer games</p>
              </div>
            </div>
            <div>+1$/mo</div>
          </div>
          <div class="plansB">
            <div class="heads">
              <div class="tickBox">
                <input type="checkbox" id="">
              </div>
              <div>
                <p class="heading">Larger storage</p>
                <p class="txt">Extra 1TB of cloud save</p>
              </div>
            </div>
            <div>+2$/mo</div>
          </div>
          <div class="plansB">
            <div class="heads">
              <div class="tickBox">
                <input type="checkbox" id="">
              </div>
              <div>
                <p class="heading">Customizable profile</p>
                <p class="txt">Customize theme on your profile</p>
              </div>
            </div>
            <div>+2$/mo</div>
          </div>
        </div>
        <div id="ways">
          <p class="way">Monthly</p>
          <div>
            <div id="planBtn">
              <div></div>
            </div>
          </div>
          <p class="way">Yearly</p>
        </div>
        
      </div>
      <div id="next1b">
        <button id="goBack">Go Back</button>
        <button id="btn1">Next Step</button>
      </div>
    </div>`,
];

let html2 = [
  ` <div id="next2a">
    <button id="btn2">Next Step</button>
  </div>`,

  `<div id="next2b">
  <button id="goBack">Go Back</button>
  <button id="btn2">Next Step</button>
</div>`,

  `<div id="next2b">
  <button id="goBack">Go Back</button>
  <button id="btn2">Next Step</button>
</div>`,
];
