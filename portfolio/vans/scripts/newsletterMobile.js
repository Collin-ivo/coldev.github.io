
    const newsletterMobile = new Vue({
      el: '.js-vue-menu-subscribe',
      delimiters: ['${', '}'],
      data: {
        inputs: [
          {
            id: 'emailField',
            label: 'emailLabel',
            labelText: 'E-mail',
            placeholder: 'vasya@gmail.com',
            name: 'PersonEmail',
            type: 'email',
            value: '',
            labelStyle: 'visibility:hidden',
            inputStyle: ''
          }
        ],
        styles: {
          ok: false,
          err: false
        },
        formControl: {
          "emailField": '0',
          "legalFlag": '1'
        },
        gender: ''
      },
      methods: {
        checkValue(index) {
          const field = this.inputs[index];
          const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
          let fieldType = "";
          if (field.id.match("email")) {
            fieldType = "email";
          }
          switch (fieldType) {
            case "email":
              if (emailRegex.test(field.value)) {
                this.styles.ok = true;
                this.styles.err = false;
                this.formControl[field.id] = "1";
              } else {
                this.styles.ok = false;
                this.styles.err = true;
                this.formControl[field.id] = "0";
              }
              break;
          }
        },
        legalCheck() {
          if (this.formControl["legalFlag"] === '0') {
            this.formControl["legalFlag"] = '1';
          } else {
            this.formControl["legalFlag"] = '0';
          }
        },
        labelVisible(index) {
          let label = this.inputs[index];
          label.labelStyle = 'visibility: visible';
        },
        setMan() {
          document.getElementById('Gender__c').value = "Male";
          this.gender = 'Male';
          this.sendForm();
        },
        setWoman() {
          document.getElementById('Gender__c').value = "Female";
          this.gender = 'Female';
          this.sendForm();
        },
        sendForm() {
          const formData = {
            email: this.inputs[0].value,
            gender: this.gender
          };

          const rootElem = document.querySelector('.js-vue-menu-subscribe');
          const okMessage = rootElem.querySelector('.js-text-ok');
          const stdMessage = rootElem.querySelector('.js-text');

          rootElem.querySelector(".menu-subscribe__form").style.display = "none";
          rootElem.querySelector(".menu-subscribe__buttons").style.display = "none";
          rootElem.querySelector(".menu-subscribe__legal.js-legal").style.display = "none";

          window.API.onSendPopupSubscribe(formData, function() {

            okMessage.classList.remove('hide');
            okMessage.classList.add('show');
            stdMessage.classList.remove('show');
            stdMessage.classList.add('hide');

          });
        }
      }
    });
