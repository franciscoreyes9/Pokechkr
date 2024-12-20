import React from "react";
import "../styles/gymleaders.scss";
import GymLeader from "../components/GymLeader";
import {Link} from "react-router-dom";
import arrowIcon from "../assets/images/ui/button-arrow.png";
import ArrowButton from "../components/ArrowButton";

const GymLeaders = () => {
    return (
        <div className="gymLeaders">
            <div className="first-home-container">
                <div className="tagContainer">
                    <button className="btn btn-tag">Gym Leaders</button>
                    <button className="btn btn-new">New</button>
                </div>
                <h1>Gym Leaders</h1>
                <p className="hero">
                    As in Ruby and Sapphire, Pokémon Emerald challenges you to battle through 8 gyms, each specializing
                    in a particular type. However, Emerald introduces some changes to make the experience more dynamic
                    and
                    strategic. After conquering all 8 gyms, you'll face the powerful Elite Four and, ultimately, the
                    Champion in a final test of your skills.
                </p>
                <hr/>
                <h2>Gym leaders</h2>
                <div className="leader-grid">
                    <div className="leader-grid-item">
                        <GymLeader key={"roxanne"} gymLeaderData={"roxanne"}/>
                    </div>
                    <div className="leader-grid-item">
                        <GymLeader key={"brawly"} gymLeaderData={"brawly"}/>
                    </div>
                    <div className="leader-grid-item">
                        <GymLeader key={"wattson"} gymLeaderData={"wattson"}/>
                    </div>
                    <div className="leader-grid-item">
                        <GymLeader key={"flannery"} gymLeaderData={"flannery"}/>
                    </div>
                    <div className="leader-grid-item">
                        <GymLeader key={"norman"} gymLeaderData={"norman"}/>
                    </div>
                    <div className="leader-grid-item">
                        <GymLeader key={"winona"} gymLeaderData={"winona"}/>
                    </div>
                    <div className="leader-grid-item">
                        <GymLeader key={"tate-liza"} gymLeaderData={"tate & liza"}/>
                    </div>
                    <div className="leader-grid-item">
                        <GymLeader key={"juan"} gymLeaderData={"juan"}/>
                    </div>
                </div>
                <h2>Elite Four</h2>
                <div className="leader-grid">
                    <div className="leader-grid-item">
                        <GymLeader key={"sidney"} gymLeaderData={"sidney"}/>
                    </div>
                    <div className="leader-grid-item">
                        <GymLeader key={"phoebe"} gymLeaderData={"phoebe"}/>
                    </div>
                    <div className="leader-grid-item">
                        <GymLeader key={"glacia"} gymLeaderData={"glacia"}/>
                    </div>
                    <div className="leader-grid-item">
                        <GymLeader key={"drake"} gymLeaderData={"drake"}/>
                    </div>
                </div>
                <h2>League Champion</h2>
                <GymLeader key={"wallace"} gymLeaderData={"wallace"}/>
                <hr/>
                <ArrowButton
                    text="Navigate to Pokéchkr Team Builder"
                    to="team-builder"
                />
            </div>
        </div>
    );
}

export default GymLeaders;