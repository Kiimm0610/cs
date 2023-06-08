const getEle = (id) => document.getElementById(id);

import { Service } from "../services/phoneService.js";

const service = new Service();

const renderList = (phoneList) => {
    let content = "";
    phoneList.forEach((ele) => {
        content += `
        <div class="col-lg-3 col-md-6">
            <div class="card text-black h-100">
                <div class="content-overlay"></div>
                <img
                    src="${ele.img}"
                    class="card-img"
                    alt="Phone Img"
                />
                <div class="content-details fadeIn-top">
                    <h3 class="pb-5">${ele.name}</h3>
                    <div
                        class="d-flex justify-content-start py-1"
                    >
                        <span class="text-light"><b>Screen:</b></span>
                        <span class="text-light">&nbsp ${
                            ele.screen
                        }</span>
                    </div>
                    <div
                        class="d-flex justify-content-start py-1"
                    >
                        <span class="text-light"><b>Back Camera:</b>${
                            ele.blackCamera
                        }</span>
                    </div>
                    <div
                        class="d-flex justify-content-start py-1"
                    >
                        <span class="text-light"><b>Front Camera:</b>${
                            ele.frontCamera
                        }</span>
                    </div>

                    <p class="pt-5">
                        <u>click here for more details</u>
                    </p>
                </div>
                <div class="card-body">
                    <div class="text-center">
                        <h5 class="card-title pt-3">
                            ${ele.name}
                        </h5>
                        <span class="text-muted mb-2">$${
                            ele.price
                        }</span>
                        <span class="text-danger"><s>$${
                            Number(ele.price) + 300
                        }</s></span>
                    </div>
                    <div class="mt-3 brand-box text-center">
                        <span>${ele.type}</span>
                    </div>
                    <div
                        class="d-flex justify-content-start pt-3"
                    >
                        <span><b>Description:</b>${
                            ele.desc
                        }</span>
                    </div>
                    <div class="d-flex justify-content-between pt-3">
                        <div class="text-warning">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <span class="text-success"><b>In Stock</b></span>
                    </div>
                    <button
                        type="button"
                        class="btn btn-block w-50"
                        onclick="btnAddToCart('${ele.id}')"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
        `;
    });
    getEle("phoneList").innerHTML = content;
};

window.onload = async()=>{
    const phoneList = await service.getPhones();
    renderList(phoneList);
}
