import React from "react";
import Layout from "../../layouts/Layout";
import click_icon from "../../../src/assets/image/click_icon.png";
import "./ListingTasks.scss";
import Navigation from "../../layouts/Navigation";
import HeaderWedged from "../../layouts/Header/HeaderWedged";
function ListingTasks() {
    return (
        <>
            <div className="afterLoginPAgeWrap">
                <HeaderWedged />
                <Layout>
                    <section className="listingTasksMain">
                        <div className="icon_section">
                            <div className="right_icon">
                                <a href="#">
                                    <img src={click_icon} alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="listing_task_table">
                            <div className="table_heading_section">
                                <h4>LISTING TASKS</h4>
                                <ul>
                                    <li className="open">OPEN</li>
                                    <li>CLOSED</li>
                                    <li>PENDING</li>
                                </ul>
                            </div>

                            <div className="listing_task_tableSection">
                                <table className="table borderless">
                                    <tbody>
                                        <tr className="active">
                                            <td>
                                                <span></span>KATIE M.
                                            </td>
                                            <td>NECESSARY TASK</td>
                                            <td>LISTING INFO</td>
                                            <td>START DATE</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span></span>KATIE M.
                                            </td>
                                            <td>NECESSARY TASK</td>
                                            <td>LISTING INFO</td>
                                            <td>START DATE</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span></span>KATIE M.
                                            </td>
                                            <td>NECESSARY TASK</td>
                                            <td>LISTING INFO</td>
                                            <td>START DATE</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span></span>KATIE M.
                                            </td>
                                            <td>NECESSARY TASK</td>
                                            <td>LISTING INFO</td>
                                            <td>START DATE</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span></span>KATIE M.
                                            </td>
                                            <td>NECESSARY TASK</td>
                                            <td>LISTING INFO</td>
                                            <td>START DATE</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span></span>KATIE M.
                                            </td>
                                            <td>NECESSARY TASK</td>
                                            <td>LISTING INFO</td>
                                            <td>START DATE</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="listing_task_txt">
                                <p>
                                    “MAN SUFFERS ONLY BECAUSE HE TAKES SERIOUSLY
                                    WHAT THE GODS MADE FOR FUN.”
                                </p>
                                <h5>― ALAN WILSON WATTS</h5>
                            </div>
                        </div>
                    </section>
                </Layout>
            </div>
        </>
    );
}

export default ListingTasks;
