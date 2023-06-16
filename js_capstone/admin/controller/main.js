const getEle = (id) => document.getElementById(id);
const resetForm = (formId) => getEle(formId).reset();


import { Services } from "../services/phoneService.js";
import { CustomModal, Helper } from './helper.js';
import { Validation } from './validation.js';
import { Phone } from '../model/ManageCart.js';



const service = new Services();
const helper = new Helper();
const validation = new Validation();

const renderList = async () => {
    const phoneList = await service.getPhones();
    let content = '';
    phoneList.forEach((ele) => {
        content += ` <tr>
      <td>${ele.id}</td>
      <td>${ele.name}</td>
      <td>${ele.price}</td>
      <td style="text-align: center"><img src=${ele.img} alt="phone-img" width="150" height="150"></td>
      <td>${ele.desc}</td>
      <td>
        <button 
            class="btn btn-success" data-bs-toggle="modal"
            data-bs-target="#exampleModal" onclick ="btnEdit('${ele.id}')" id='btnEdit'>Edit
        </button>
        <button class="btn btn-danger " onclick ="btnDelete('${ele.id}')" id='btnDelete'>Delete</i>
    </button
      </td>
      </tr>`;
    });
    getEle('tablePhone').innerHTML = content;
};

window.onload = async () => renderList();

getEle('addPhoneForm').onclick = () => {
    helper.clearTB();
    getEle('btnUpdate').style.display = 'none';
    getEle('btnAddPhone').style.display = 'inline-block';
};

getEle('btnAddPhone').onclick = async () => {
    const phoneList = await service.getPhones();
    if (!validation.isValid(phoneList)) return;
    const inputs = helper.getInputValue();
    let phone = new Phone('', ...inputs);
    await service.addPhone(phone);
    renderList();
    resetForm('formPhone');
    document.getElementById("btnClose")[2].click();
};

window.btnEdit = async (id) => {
    helper.clearTB();
    getEle('btnUpdate').style.display = 'inline-block';
    getEle('btnAddPhone').style.display = 'none';

    let data = await service.getPhoneById(id);
    let arrObjValue = Object.keys(data).map((k) => data[k]);
    arrObjValue.pop();
    helper.fill(arrObjValue);

    getEle('btnUpdate').onclick = async () => {
        const phoneList = await service.getPhones();
        if (!validation.isValid(phoneList, true)) return;

        const inputs = helper.getInputValue();
        let phone = new Phone(id, ...inputs);
        await service.updatePhone(phone);
        renderList();
        CustomModal.alertSuccess('Update phone successfully');
    };
};

window.btnDelete = async (id) => {
    getEle('btnDelete').onclick = async () => {
        await service.deletePhone(id);
        renderList();

    }


};

