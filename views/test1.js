var l = [];
var attempted = 0;
var unattempted = 0;
var review = 0;

function updatedetails() {
    document.getElementById("val1").innerHTML = `${attempted}`;
    document.getElementById("val2").innerHTML = `${unattempted}`;
    document.getElementById("val3").innerHTML = `${review}`;
    document.getElementById("val4").innerHTML = `${160 - attempted - unattempted} `;

}

function clearfunc() {
    
    if (map.has(currquestion)) {
        var tanswer = map.get(currquestion);
        if (tanswer == qb[currquestion].Ans)
            score -= 1;
        map.delete(currquestion);
        attempted -= 1;
    }
    clearcheckbox();
}

function markedforreview() {
    if (document.getElementById("flexSwitchCheckChecked").checked) {
        document.getElementById((currquestion + 1).toString()).style.background = "blue";
        review += 1;
    }
    else {
        document.getElementById((currquestion + 1).toString()).style.background = "white";
        review -= 1;
    }
}

var qb = [
    { Q: "./QP1/question (1).jpg", A: "./QP1/question (2).jpg", B: "./QP1/question (3).jpg", C: "./QP1/question (4).jpg", D: "./QP1/question (5).jpg", Ans: "A" },
    { Q: "./QP1/question (6).jpg", A: "./QP1/question (7).jpg", B: "./QP1/question (8).jpg", C: "./QP1/question (9).jpg", D: "./QP1/question (10).jpg", Ans: "A" },
    { Q: "./QP1/question (11).jpg", A: "./QP1/question (12).jpg", B: "./QP1/question (13).jpg", C: "./QP1/question (14).jpg", D: "./QP1/question (15).jpg", Ans: "C" },
    { Q: "./QP1/question (16).jpg", A: "./QP1/question (17).jpg", B: "./QP1/question (18).jpg", C: "./QP1/question (19).jpg", D: "./QP1/question (20).jpg", Ans: "B" },
    { Q: "./QP1/question (21).jpg", A: "./QP1/question (22).jpg", B: "./QP1/question (23).jpg", C: "./QP1/question (24).jpg", D: "./QP1/question (25).jpg", Ans: "A" },
    { Q: "./QP1/question (26).jpg", A: "./QP1/question (27).jpg", B: "./QP1/question (28).jpg", C: "./QP1/question (29).jpg", D: "./QP1/question (30).jpg", Ans: "D" },
    { Q: "./QP1/question (31).jpg", A: "./QP1/question (32).jpg", B: "./QP1/question (33).jpg", C: "./QP1/question (34).jpg", D: "./QP1/question (35).jpg", Ans: "C" },
    { Q: "./QP1/question (36).jpg", A: "./QP1/question (37).jpg", B: "./QP1/question (38).jpg", C: "./QP1/question (39).jpg", D: "./QP1/question (40).jpg", Ans: "A" },
    { Q: "./QP1/question (41).jpg", A: "./QP1/question (42).jpg", B: "./QP1/question (43).jpg", C: "./QP1/question (44).jpg", D: "./QP1/question (45).jpg", Ans: "D" },
    { Q: "./QP1/question (46).jpg", A: "./QP1/question (47).jpg", B: "./QP1/question (48).jpg", C: "./QP1/question (49).jpg", D: "./QP1/question (50).jpg", Ans: "A" },
    { Q: "./QP1/question (51).jpg", A: "./QP1/question (52).jpg", B: "./QP1/question (53).jpg", C: "./QP1/question (54).jpg", D: "./QP1/question (55).jpg", Ans: "B" },
    { Q: "./QP1/question (56).jpg", A: "./QP1/question (57).jpg", B: "./QP1/question (58).jpg", C: "./QP1/question (59).jpg", D: "./QP1/question (60).jpg", Ans: "C" },
    { Q: "./QP1/question (61).jpg", A: "./QP1/question (62).jpg", B: "./QP1/question (63).jpg", C: "./QP1/question (64).jpg", D: "./QP1/question (65).jpg", Ans: "B" },
    { Q: "./QP1/question (66).jpg", A: "./QP1/question (67).jpg", B: "./QP1/question (68).jpg", C: "./QP1/question (69).jpg", D: "./QP1/question (70).jpg", Ans: "B" },
    { Q: "./QP1/question (71).jpg", A: "./QP1/question (72).jpg", B: "./QP1/question (73).jpg", C: "./QP1/question (74).jpg", D: "./QP1/question (75).jpg", Ans: "C" },
    { Q: "./QP1/question (76).jpg", A: "./QP1/question (77).jpg", B: "./QP1/question (78).jpg", C: "./QP1/question (79).jpg", D: "./QP1/question (80).jpg", Ans: "C" },
    { Q: "./QP1/question (81).jpg", A: "./QP1/question (82).jpg", B: "./QP1/question (83).jpg", C: "./QP1/question (84).jpg", D: "./QP1/question (85).jpg", Ans: "C" },
    { Q: "./QP1/question (86).jpg", A: "./QP1/question (87).jpg", B: "./QP1/question (88).jpg", C: "./QP1/question (89).jpg", D: "./QP1/question (90).jpg", Ans: "B" },
    { Q: "./QP1/question (91).jpg", A: "./QP1/question (92).jpg", B: "./QP1/question (93).jpg", C: "./QP1/question (94).jpg", D: "./QP1/question (95).jpg", Ans: "C" },
    { Q: "./QP1/question (96).jpg", A: "./QP1/question (97).jpg", B: "./QP1/question (98).jpg", C: "./QP1/question (99).jpg", D: "./QP1/question (100).jpg", Ans: "C" },
    { Q: "./QP1/question (101).jpg", A: "./QP1/question (102).jpg", B: "./QP1/question (103).jpg", C: "./QP1/question (104).jpg", D: "./QP1/question (105).jpg", Ans: "A" },
    { Q: "./QP1/question (106).jpg", A: "./QP1/question (107).jpg", B: "./QP1/question (108).jpg", C: "./QP1/question (109).jpg", D: "./QP1/question (110).jpg", Ans: "C" },
    { Q: "./QP1/question (111).jpg", A: "./QP1/question (112).jpg", B: "./QP1/question (113).jpg", C: "./QP1/question (114).jpg", D: "./QP1/question (115).jpg", Ans: "D" },
    { Q: "./QP1/question (116).jpg", A: "./QP1/question (117).jpg", B: "./QP1/question (118).jpg", C: "./QP1/question (119).jpg", D: "./QP1/question (120).jpg", Ans: "A" },
    { Q: "./QP1/question (121).jpg", A: "./QP1/question (122).jpg", B: "./QP1/question (123).jpg", C: "./QP1/question (124).jpg", D: "./QP1/question (125).jpg", Ans: "C" },
    { Q: "./QP1/question (126).jpg", A: "./QP1/question (127).jpg", B: "./QP1/question (128).jpg", C: "./QP1/question (129).jpg", D: "./QP1/question (130).jpg", Ans: "D" },
    { Q: "./QP1/question (131).jpg", A: "./QP1/question (132).jpg", B: "./QP1/question (133).jpg", C: "./QP1/question (134).jpg", D: "./QP1/question (135).jpg", Ans: "A" },
    { Q: "./QP1/question (136).jpg", A: "./QP1/question (137).jpg", B: "./QP1/question (138).jpg", C: "./QP1/question (139).jpg", D: "./QP1/question (140).jpg", Ans: "D" },
    { Q: "./QP1/question (141).jpg", A: "./QP1/question (142).jpg", B: "./QP1/question (143).jpg", C: "./QP1/question (144).jpg", D: "./QP1/question (145).jpg", Ans: "A" },
    { Q: "./QP1/question (146).jpg", A: "./QP1/question (147).jpg", B: "./QP1/question (148).jpg", C: "./QP1/question (149).jpg", D: "./QP1/question (150).jpg", Ans: "D" },
    { Q: "./QP1/question (151).jpg", A: "./QP1/question (152).jpg", B: "./QP1/question (153).jpg", C: "./QP1/question (154).jpg", D: "./QP1/question (155).jpg", Ans: "A" },
    { Q: "./QP1/question (156).jpg", A: "./QP1/question (157).jpg", B: "./QP1/question (158).jpg", C: "./QP1/question (159).jpg", D: "./QP1/question (160).jpg", Ans: "A" },
    { Q: "./QP1/question (161).jpg", A: "./QP1/question (162).jpg", B: "./QP1/question (163).jpg", C: "./QP1/question (164).jpg", D: "./QP1/question (165).jpg", Ans: "C" },
    { Q: "./QP1/question (166).jpg", A: "./QP1/question (167).jpg", B: "./QP1/question (168).jpg", C: "./QP1/question (169).jpg", D: "./QP1/question (170).jpg", Ans: "D" },
    { Q: "./QP1/question (171).jpg", A: "./QP1/question (172).jpg", B: "./QP1/question (173).jpg", C: "./QP1/question (174).jpg", D: "./QP1/question (175).jpg", Ans: "C" },
    { Q: "./QP1/question (176).jpg", A: "./QP1/question (177).jpg", B: "./QP1/question (178).jpg", C: "./QP1/question (179).jpg", D: "./QP1/question (180).jpg", Ans: "D" },
    { Q: "./QP1/question (181).jpg", A: "./QP1/question (182).jpg", B: "./QP1/question (183).jpg", C: "./QP1/question (184).jpg", D: "./QP1/question (185).jpg", Ans: "D" },
    { Q: "./QP1/question (186).jpg", A: "./QP1/question (187).jpg", B: "./QP1/question (188).jpg", C: "./QP1/question (189).jpg", D: "./QP1/question (190).jpg", Ans: "C" },
    { Q: "./QP1/question (191).jpg", A: "./QP1/question (192).jpg", B: "./QP1/question (193).jpg", C: "./QP1/question (194).jpg", D: "./QP1/question (195).jpg", Ans: "B" },
    { Q: "./QP1/question (196).jpg", A: "./QP1/question (197).jpg", B: "./QP1/question (198).jpg", C: "./QP1/question (199).jpg", D: "./QP1/question (200).jpg", Ans: "C" },
    { Q: "./QP1/question (201).jpg", A: "./QP1/question (202).jpg", B: "./QP1/question (203).jpg", C: "./QP1/question (204).jpg", D: "./QP1/question (205).jpg", Ans: "C" },
    { Q: "./QP1/question (206).jpg", A: "./QP1/question (207).jpg", B: "./QP1/question (208).jpg", C: "./QP1/question (209).jpg", D: "./QP1/question (210).jpg", Ans: "C" },
    { Q: "./QP1/question (211).jpg", A: "./QP1/question (212).jpg", B: "./QP1/question (213).jpg", C: "./QP1/question (214).jpg", D: "./QP1/question (215).jpg", Ans: "A" },
    { Q: "./QP1/question (216).jpg", A: "./QP1/question (217).jpg", B: "./QP1/question (218).jpg", C: "./QP1/question (219).jpg", D: "./QP1/question (220).jpg", Ans: "A" },
    { Q: "./QP1/question (221).jpg", A: "./QP1/question (222).jpg", B: "./QP1/question (223).jpg", C: "./QP1/question (224).jpg", D: "./QP1/question (225).jpg", Ans: "D" },
    { Q: "./QP1/question (226).jpg", A: "./QP1/question (227).jpg", B: "./QP1/question (228).jpg", C: "./QP1/question (229).jpg", D: "./QP1/question (230).jpg", Ans: "A" },
    { Q: "./QP1/question (231).jpg", A: "./QP1/question (232).jpg", B: "./QP1/question (233).jpg", C: "./QP1/question (234).jpg", D: "./QP1/question (235).jpg", Ans: "A" },
    { Q: "./QP1/question (236).jpg", A: "./QP1/question (237).jpg", B: "./QP1/question (238).jpg", C: "./QP1/question (239).jpg", D: "./QP1/question (240).jpg", Ans: "B" },
    { Q: "./QP1/question (241).jpg", A: "./QP1/question (242).jpg", B: "./QP1/question (243).jpg", C: "./QP1/question (244).jpg", D: "./QP1/question (245).jpg", Ans: "B" },
    { Q: "./QP1/question (246).jpg", A: "./QP1/question (247).jpg", B: "./QP1/question (248).jpg", C: "./QP1/question (249).jpg", D: "./QP1/question (250).jpg", Ans: "C" },
    { Q: "./QP1/question (251).jpg", A: "./QP1/question (252).jpg", B: "./QP1/question (253).jpg", C: "./QP1/question (254).jpg", D: "./QP1/question (255).jpg", Ans: "A" },
    { Q: "./QP1/question (256).jpg", A: "./QP1/question (257).jpg", B: "./QP1/question (258).jpg", C: "./QP1/question (259).jpg", D: "./QP1/question (260).jpg", Ans: "D" },
    { Q: "./QP1/question (261).jpg", A: "./QP1/question (262).jpg", B: "./QP1/question (263).jpg", C: "./QP1/question (264).jpg", D: "./QP1/question (265).jpg", Ans: "C" },
    { Q: "./QP1/question (266).jpg", A: "./QP1/question (267).jpg", B: "./QP1/question (268).jpg", C: "./QP1/question (269).jpg", D: "./QP1/question (270).jpg", Ans: "C" },
    { Q: "./QP1/question (271).jpg", A: "./QP1/question (272).jpg", B: "./QP1/question (273).jpg", C: "./QP1/question (274).jpg", D: "./QP1/question (275).jpg", Ans: "A" },
    { Q: "./QP1/question (276).jpg", A: "./QP1/question (277).jpg", B: "./QP1/question (278).jpg", C: "./QP1/question (279).jpg", D: "./QP1/question (280).jpg", Ans: "D" },
    { Q: "./QP1/question (281).jpg", A: "./QP1/question (282).jpg", B: "./QP1/question (283).jpg", C: "./QP1/question (284).jpg", D: "./QP1/question (285).jpg", Ans: "B" },
    { Q: "./QP1/question (286).jpg", A: "./QP1/question (287).jpg", B: "./QP1/question (288).jpg", C: "./QP1/question (289).jpg", D: "./QP1/question (290).jpg", Ans: "B" },
    { Q: "./QP1/question (291).jpg", A: "./QP1/question (292).jpg", B: "./QP1/question (293).jpg", C: "./QP1/question (294).jpg", D: "./QP1/question (295).jpg", Ans: "C" },
    { Q: "./QP1/question (296).jpg", A: "./QP1/question (297).jpg", B: "./QP1/question (298).jpg", C: "./QP1/question (299).jpg", D: "./QP1/question (300).jpg", Ans: "C" },
    { Q: "./QP1/question (301).jpg", A: "./QP1/question (302).jpg", B: "./QP1/question (303).jpg", C: "./QP1/question (304).jpg", D: "./QP1/question (305).jpg", Ans: "D" },
    { Q: "./QP1/question (306).jpg", A: "./QP1/question (307).jpg", B: "./QP1/question (308).jpg", C: "./QP1/question (309).jpg", D: "./QP1/question (310).jpg", Ans: "C" },
    { Q: "./QP1/question (311).jpg", A: "./QP1/question (312).jpg", B: "./QP1/question (313).jpg", C: "./QP1/question (314).jpg", D: "./QP1/question (315).jpg", Ans: "B" },
    { Q: "./QP1/question (316).jpg", A: "./QP1/question (317).jpg", B: "./QP1/question (318).jpg", C: "./QP1/question (319).jpg", D: "./QP1/question (320).jpg", Ans: "C" },
    { Q: "./QP1/question (321).jpg", A: "./QP1/question (322).jpg", B: "./QP1/question (323).jpg", C: "./QP1/question (324).jpg", D: "./QP1/question (325).jpg", Ans: "B" },
    { Q: "./QP1/question (326).jpg", A: "./QP1/question (327).jpg", B: "./QP1/question (328).jpg", C: "./QP1/question (329).jpg", D: "./QP1/question (330).jpg", Ans: "B" },
    { Q: "./QP1/question (331).jpg", A: "./QP1/question (332).jpg", B: "./QP1/question (333).jpg", C: "./QP1/question (334).jpg", D: "./QP1/question (335).jpg", Ans: "C" },
    { Q: "./QP1/question (336).jpg", A: "./QP1/question (337).jpg", B: "./QP1/question (338).jpg", C: "./QP1/question (339).jpg", D: "./QP1/question (340).jpg", Ans: "D" },
    { Q: "./QP1/question (341).jpg", A: "./QP1/question (342).jpg", B: "./QP1/question (343).jpg", C: "./QP1/question (344).jpg", D: "./QP1/question (345).jpg", Ans: "B" },
    { Q: "./QP1/question (346).jpg", A: "./QP1/question (347).jpg", B: "./QP1/question (348).jpg", C: "./QP1/question (349).jpg", D: "./QP1/question (350).jpg", Ans: "A" },
    { Q: "./QP1/question (351).jpg", A: "./QP1/question (352).jpg", B: "./QP1/question (353).jpg", C: "./QP1/question (354).jpg", D: "./QP1/question (355).jpg", Ans: "C" },
    { Q: "./QP1/question (356).jpg", A: "./QP1/question (357).jpg", B: "./QP1/question (358).jpg", C: "./QP1/question (359).jpg", D: "./QP1/question (360).jpg", Ans: "B" },
    { Q: "./QP1/question (361).jpg", A: "./QP1/question (362).jpg", B: "./QP1/question (363).jpg", C: "./QP1/question (364).jpg", D: "./QP1/question (365).jpg", Ans: "B" },
    { Q: "./QP1/question (366).jpg", A: "./QP1/question (367).jpg", B: "./QP1/question (368).jpg", C: "./QP1/question (369).jpg", D: "./QP1/question (370).jpg", Ans: "A" },
    { Q: "./QP1/question (371).jpg", A: "./QP1/question (372).jpg", B: "./QP1/question (373).jpg", C: "./QP1/question (374).jpg", D: "./QP1/question (375).jpg", Ans: "A" },
    { Q: "./QP1/question (376).jpg", A: "./QP1/question (377).jpg", B: "./QP1/question (378).jpg", C: "./QP1/question (379).jpg", D: "./QP1/question (380).jpg", Ans: "B" },
    { Q: "./QP1/question (381).jpg", A: "./QP1/question (382).jpg", B: "./QP1/question (383).jpg", C: "./QP1/question (384).jpg", D: "./QP1/question (385).jpg", Ans: "D" },
    { Q: "./QP1/question (386).jpg", A: "./QP1/question (387).jpg", B: "./QP1/question (388).jpg", C: "./QP1/question (389).jpg", D: "./QP1/question (390).jpg", Ans: "C" },
    { Q: "./QP1/question (391).jpg", A: "./QP1/question (392).jpg", B: "./QP1/question (393).jpg", C: "./QP1/question (394).jpg", D: "./QP1/question (395).jpg", Ans: "A" },
    { Q: "./QP1/question (396).jpg", A: "./QP1/question (397).jpg", B: "./QP1/question (398).jpg", C: "./QP1/question (399).jpg", D: "./QP1/question (400).jpg", Ans: "A" },
    { Q: "./QP1/question (401).jpg", A: "./QP1/question (402).jpg", B: "./QP1/question (403).jpg", C: "./QP1/question (404).jpg", D: "./QP1/question (405).jpg", Ans: "D" },
    { Q: "./QP1/question (406).jpg", A: "./QP1/question (407).jpg", B: "./QP1/question (408).jpg", C: "./QP1/question (409).jpg", D: "./QP1/question (410).jpg", Ans: "D" },
    { Q: "./QP1/question (411).jpg", A: "./QP1/question (412).jpg", B: "./QP1/question (413).jpg", C: "./QP1/question (414).jpg", D: "./QP1/question (415).jpg", Ans: "A" },
    { Q: "./QP1/question (416).jpg", A: "./QP1/question (417).jpg", B: "./QP1/question (418).jpg", C: "./QP1/question (419).jpg", D: "./QP1/question (420).jpg", Ans: "B" },
    { Q: "./QP1/question (421).jpg", A: "./QP1/question (422).jpg", B: "./QP1/question (423).jpg", C: "./QP1/question (424).jpg", D: "./QP1/question (425).jpg", Ans: "D" },
    { Q: "./QP1/question (426).jpg", A: "./QP1/question (427).jpg", B: "./QP1/question (428).jpg", C: "./QP1/question (429).jpg", D: "./QP1/question (430).jpg", Ans: "B" },
    { Q: "./QP1/question (431).jpg", A: "./QP1/question (432).jpg", B: "./QP1/question (433).jpg", C: "./QP1/question (434).jpg", D: "./QP1/question (435).jpg", Ans: "B" },
    { Q: "./QP1/question (436).jpg", A: "./QP1/question (437).jpg", B: "./QP1/question (438).jpg", C: "./QP1/question (439).jpg", D: "./QP1/question (440).jpg", Ans: "A" },
    { Q: "./QP1/question (441).jpg", A: "./QP1/question (442).jpg", B: "./QP1/question (443).jpg", C: "./QP1/question (444).jpg", D: "./QP1/question (445).jpg", Ans: "B" },
    { Q: "./QP1/question (446).jpg", A: "./QP1/question (447).jpg", B: "./QP1/question (448).jpg", C: "./QP1/question (449).jpg", D: "./QP1/question (450).jpg", Ans: "D" },
    { Q: "./QP1/question (451).jpg", A: "./QP1/question (452).jpg", B: "./QP1/question (453).jpg", C: "./QP1/question (454).jpg", D: "./QP1/question (455).jpg", Ans: "A" },
    { Q: "./QP1/question (456).jpg", A: "./QP1/question (457).jpg", B: "./QP1/question (458).jpg", C: "./QP1/question (459).jpg", D: "./QP1/question (460).jpg", Ans: "D" },
    { Q: "./QP1/question (461).jpg", A: "./QP1/question (462).jpg", B: "./QP1/question (463).jpg", C: "./QP1/question (464).jpg", D: "./QP1/question (465).jpg", Ans: "B" },
    { Q: "./QP1/question (466).jpg", A: "./QP1/question (467).jpg", B: "./QP1/question (468).jpg", C: "./QP1/question (469).jpg", D: "./QP1/question (470).jpg", Ans: "B" },
    { Q: "./QP1/question (471).jpg", A: "./QP1/question (472).jpg", B: "./QP1/question (473).jpg", C: "./QP1/question (474).jpg", D: "./QP1/question (475).jpg", Ans: "A" },
    { Q: "./QP1/question (476).jpg", A: "./QP1/question (477).jpg", B: "./QP1/question (478).jpg", C: "./QP1/question (479).jpg", D: "./QP1/question (480).jpg", Ans: "B" },
    { Q: "./QP1/question (481).jpg", A: "./QP1/question (482).jpg", B: "./QP1/question (483).jpg", C: "./QP1/question (484).jpg", D: "./QP1/question (485).jpg", Ans: "A" },
    { Q: "./QP1/question (486).jpg", A: "./QP1/question (487).jpg", B: "./QP1/question (488).jpg", C: "./QP1/question (489).jpg", D: "./QP1/question (490).jpg", Ans: "A" },
    { Q: "./QP1/question (491).jpg", A: "./QP1/question (492).jpg", B: "./QP1/question (493).jpg", C: "./QP1/question (494).jpg", D: "./QP1/question (495).jpg", Ans: "D" },
    { Q: "./QP1/question (496).jpg", A: "./QP1/question (497).jpg", B: "./QP1/question (498).jpg", C: "./QP1/question (499).jpg", D: "./QP1/question (500).jpg", Ans: "A" },
    { Q: "./QP1/question (501).jpg", A: "./QP1/question (502).jpg", B: "./QP1/question (503).jpg", C: "./QP1/question (504).jpg", D: "./QP1/question (505).jpg", Ans: "D" },
    { Q: "./QP1/question (506).jpg", A: "./QP1/question (507).jpg", B: "./QP1/question (508).jpg", C: "./QP1/question (509).jpg", D: "./QP1/question (510).jpg", Ans: "C" },
    { Q: "./QP1/question (511).jpg", A: "./QP1/question (512).jpg", B: "./QP1/question (513).jpg", C: "./QP1/question (514).jpg", D: "./QP1/question (515).jpg", Ans: "D" },
    { Q: "./QP1/question (516).jpg", A: "./QP1/question (517).jpg", B: "./QP1/question (518).jpg", C: "./QP1/question (519).jpg", D: "./QP1/question (520).jpg", Ans: "D" },
    { Q: "./QP1/question (521).jpg", A: "./QP1/question (522).jpg", B: "./QP1/question (523).jpg", C: "./QP1/question (524).jpg", D: "./QP1/question (525).jpg", Ans: "B" },
    { Q: "./QP1/question (526).jpg", A: "./QP1/question (527).jpg", B: "./QP1/question (528).jpg", C: "./QP1/question (529).jpg", D: "./QP1/question (530).jpg", Ans: "A" },
    { Q: "./QP1/question (531).jpg", A: "./QP1/question (532).jpg", B: "./QP1/question (533).jpg", C: "./QP1/question (534).jpg", D: "./QP1/question (535).jpg", Ans: "A" },
    { Q: "./QP1/question (536).jpg", A: "./QP1/question (537).jpg", B: "./QP1/question (538).jpg", C: "./QP1/question (539).jpg", D: "./QP1/question (540).jpg", Ans: "D" },
    { Q: "./QP1/question (541).jpg", A: "./QP1/question (542).jpg", B: "./QP1/question (543).jpg", C: "./QP1/question (544).jpg", D: "./QP1/question (545).jpg", Ans: "C" },
    { Q: "./QP1/question (546).jpg", A: "./QP1/question (547).jpg", B: "./QP1/question (548).jpg", C: "./QP1/question (549).jpg", D: "./QP1/question (550).jpg", Ans: "C" },
    { Q: "./QP1/question (551).jpg", A: "./QP1/question (552).jpg", B: "./QP1/question (553).jpg", C: "./QP1/question (554).jpg", D: "./QP1/question (555).jpg", Ans: "A" },
    { Q: "./QP1/question (556).jpg", A: "./QP1/question (557).jpg", B: "./QP1/question (558).jpg", C: "./QP1/question (559).jpg", D: "./QP1/question (560).jpg", Ans: "C" },
    { Q: "./QP1/question (561).jpg", A: "./QP1/question (562).jpg", B: "./QP1/question (563).jpg", C: "./QP1/question (564).jpg", D: "./QP1/question (565).jpg", Ans: "C" },
    { Q: "./QP1/question (566).jpg", A: "./QP1/question (567).jpg", B: "./QP1/question (568).jpg", C: "./QP1/question (569).jpg", D: "./QP1/question (570).jpg", Ans: "C" },
    { Q: "./QP1/question (571).jpg", A: "./QP1/question (572).jpg", B: "./QP1/question (573).jpg", C: "./QP1/question (574).jpg", D: "./QP1/question (575).jpg", Ans: "A" },
    { Q: "./QP1/question (576).jpg", A: "./QP1/question (577).jpg", B: "./QP1/question (578).jpg", C: "./QP1/question (579).jpg", D: "./QP1/question (580).jpg", Ans: "C" },
    { Q: "./QP1/question (581).jpg", A: "./QP1/question (582).jpg", B: "./QP1/question (583).jpg", C: "./QP1/question (584).jpg", D: "./QP1/question (585).jpg", Ans: "A" },
    { Q: "./QP1/question (586).jpg", A: "./QP1/question (587).jpg", B: "./QP1/question (588).jpg", C: "./QP1/question (589).jpg", D: "./QP1/question (590).jpg", Ans: "C" },
    { Q: "./QP1/question (591).jpg", A: "./QP1/question (592).jpg", B: "./QP1/question (593).jpg", C: "./QP1/question (594).jpg", D: "./QP1/question (595).jpg", Ans: "A" },
    { Q: "./QP1/question (596).jpg", A: "./QP1/question (597).jpg", B: "./QP1/question (598).jpg", C: "./QP1/question (599).jpg", D: "./QP1/question (600).jpg", Ans: "A" },
    { Q: "./QP1/question (601).jpg", A: "./QP1/question (602).jpg", B: "./QP1/question (603).jpg", C: "./QP1/question (604).jpg", D: "./QP1/question (605).jpg", Ans: "B" },
    { Q: "./QP1/question (606).jpg", A: "./QP1/question (607).jpg", B: "./QP1/question (608).jpg", C: "./QP1/question (609).jpg", D: "./QP1/question (610).jpg", Ans: "B" },
    { Q: "./QP1/question (611).jpg", A: "./QP1/question (612).jpg", B: "./QP1/question (613).jpg", C: "./QP1/question (614).jpg", D: "./QP1/question (615).jpg", Ans: "C" },
    { Q: "./QP1/question (616).jpg", A: "./QP1/question (617).jpg", B: "./QP1/question (618).jpg", C: "./QP1/question (619).jpg", D: "./QP1/question (620).jpg", Ans: "D" },
    { Q: "./QP1/question (621).jpg", A: "./QP1/question (622).jpg", B: "./QP1/question (623).jpg", C: "./QP1/question (624).jpg", D: "./QP1/question (625).jpg", Ans: "A" },
    { Q: "./QP1/question (626).jpg", A: "./QP1/question (627).jpg", B: "./QP1/question (628).jpg", C: "./QP1/question (629).jpg", D: "./QP1/question (630).jpg", Ans: "A" },
    { Q: "./QP1/question (631).jpg", A: "./QP1/question (632).jpg", B: "./QP1/question (633).jpg", C: "./QP1/question (634).jpg", D: "./QP1/question (635).jpg", Ans: "D" },
    { Q: "./QP1/question (636).jpg", A: "./QP1/question (637).jpg", B: "./QP1/question (638).jpg", C: "./QP1/question (639).jpg", D: "./QP1/question (640).jpg", Ans: "B" },
    { Q: "./QP1/question (641).jpg", A: "./QP1/question (642).jpg", B: "./QP1/question (643).jpg", C: "./QP1/question (644).jpg", D: "./QP1/question (645).jpg", Ans: "C" },
    { Q: "./QP1/question (646).jpg", A: "./QP1/question (647).jpg", B: "./QP1/question (648).jpg", C: "./QP1/question (649).jpg", D: "./QP1/question (650).jpg", Ans: "C" },
    { Q: "./QP1/question (651).jpg", A: "./QP1/question (652).jpg", B: "./QP1/question (653).jpg", C: "./QP1/question (654).jpg", D: "./QP1/question (655).jpg", Ans: "D" },
    { Q: "./QP1/question (656).jpg", A: "./QP1/question (657).jpg", B: "./QP1/question (658).jpg", C: "./QP1/question (659).jpg", D: "./QP1/question (660).jpg", Ans: "B" },
    { Q: "./QP1/question (661).jpg", A: "./QP1/question (662).jpg", B: "./QP1/question (663).jpg", C: "./QP1/question (664).jpg", D: "./QP1/question (665).jpg", Ans: "B" },
    { Q: "./QP1/question (666).jpg", A: "./QP1/question (667).jpg", B: "./QP1/question (668).jpg", C: "./QP1/question (669).jpg", D: "./QP1/question (670).jpg", Ans: "C" },
    { Q: "./QP1/question (671).jpg", A: "./QP1/question (672).jpg", B: "./QP1/question (673).jpg", C: "./QP1/question (674).jpg", D: "./QP1/question (675).jpg", Ans: "B" },
    { Q: "./QP1/question (676).jpg", A: "./QP1/question (677).jpg", B: "./QP1/question (678).jpg", C: "./QP1/question (679).jpg", D: "./QP1/question (680).jpg", Ans: "A" },
    { Q: "./QP1/question (681).jpg", A: "./QP1/question (682).jpg", B: "./QP1/question (683).jpg", C: "./QP1/question (684).jpg", D: "./QP1/question (685).jpg", Ans: "C" },
    { Q: "./QP1/question (686).jpg", A: "./QP1/question (687).jpg", B: "./QP1/question (688).jpg", C: "./QP1/question (689).jpg", D: "./QP1/question (690).jpg", Ans: "B" },
    { Q: "./QP1/question (691).jpg", A: "./QP1/question (692).jpg", B: "./QP1/question (693).jpg", C: "./QP1/question (694).jpg", D: "./QP1/question (695).jpg", Ans: "D" },
    { Q: "./QP1/question (696).jpg", A: "./QP1/question (697).jpg", B: "./QP1/question (698).jpg", C: "./QP1/question (699).jpg", D: "./QP1/question (700).jpg", Ans: "B" },
    { Q: "./QP1/question (701).jpg", A: "./QP1/question (702).jpg", B: "./QP1/question (703).jpg", C: "./QP1/question (704).jpg", D: "./QP1/question (705).jpg", Ans: "B" },
    { Q: "./QP1/question (706).jpg", A: "./QP1/question (707).jpg", B: "./QP1/question (708).jpg", C: "./QP1/question (709).jpg", D: "./QP1/question (710).jpg", Ans: "C" },
    { Q: "./QP1/question (711).jpg", A: "./QP1/question (712).jpg", B: "./QP1/question (713).jpg", C: "./QP1/question (714).jpg", D: "./QP1/question (715).jpg", Ans: "D" },
    { Q: "./QP1/question (716).jpg", A: "./QP1/question (717).jpg", B: "./QP1/question (718).jpg", C: "./QP1/question (719).jpg", D: "./QP1/question (720).jpg", Ans: "B" },
    { Q: "./QP1/question (721).jpg", A: "./QP1/question (722).jpg", B: "./QP1/question (723).jpg", C: "./QP1/question (724).jpg", D: "./QP1/question (725).jpg", Ans: "A" },
    { Q: "./QP1/question (726).jpg", A: "./QP1/question (727).jpg", B: "./QP1/question (728).jpg", C: "./QP1/question (729).jpg", D: "./QP1/question (730).jpg", Ans: "A" },
    { Q: "./QP1/question (731).jpg", A: "./QP1/question (732).jpg", B: "./QP1/question (733).jpg", C: "./QP1/question (734).jpg", D: "./QP1/question (735).jpg", Ans: "A" },
    { Q: "./QP1/question (736).jpg", A: "./QP1/question (737).jpg", B: "./QP1/question (738).jpg", C: "./QP1/question (739).jpg", D: "./QP1/question (740).jpg", Ans: "C" },
    { Q: "./QP1/question (741).jpg", A: "./QP1/question (742).jpg", B: "./QP1/question (743).jpg", C: "./QP1/question (744).jpg", D: "./QP1/question (745).jpg", Ans: "D" },
    { Q: "./QP1/question (746).jpg", A: "./QP1/question (747).jpg", B: "./QP1/question (748).jpg", C: "./QP1/question (749).jpg", D: "./QP1/question (750).jpg", Ans: "D" },
    { Q: "./QP1/question (751).jpg", A: "./QP1/question (752).jpg", B: "./QP1/question (753).jpg", C: "./QP1/question (754).jpg", D: "./QP1/question (755).jpg", Ans: "D" },
    { Q: "./QP1/question (756).jpg", A: "./QP1/question (757).jpg", B: "./QP1/question (758).jpg", C: "./QP1/question (759).jpg", D: "./QP1/question (760).jpg", Ans: "D" },
    { Q: "./QP1/question (761).jpg", A: "./QP1/question (762).jpg", B: "./QP1/question (763).jpg", C: "./QP1/question (764).jpg", D: "./QP1/question (765).jpg", Ans: "D" },
    { Q: "./QP1/question (766).jpg", A: "./QP1/question (767).jpg", B: "./QP1/question (768).jpg", C: "./QP1/question (769).jpg", D: "./QP1/question (770).jpg", Ans: "D" },
    { Q: "./QP1/question (771).jpg", A: "./QP1/question (772).jpg", B: "./QP1/question (773).jpg", C: "./QP1/question (774).jpg", D: "./QP1/question (775).jpg", Ans: "A" },
    { Q: "./QP1/question (776).jpg", A: "./QP1/question (777).jpg", B: "./QP1/question (778).jpg", C: "./QP1/question (779).jpg", D: "./QP1/question (780).jpg", Ans: "A" },
    { Q: "./QP1/question (781).jpg", A: "./QP1/question (782).jpg", B: "./QP1/question (783).jpg", C: "./QP1/question (784).jpg", D: "./QP1/question (785).jpg", Ans: "D" },
    { Q: "./QP1/question (786).jpg", A: "./QP1/question (787).jpg", B: "./QP1/question (788).jpg", C: "./QP1/question (789).jpg", D: "./QP1/question (790).jpg", Ans: "D" },
    { Q: "./QP1/question (791).jpg", A: "./QP1/question (792).jpg", B: "./QP1/question (793).jpg", C: "./QP1/question (794).jpg", D: "./QP1/question (795).jpg", Ans: "D" },
    { Q: "./QP1/question (796).jpg", A: "./QP1/question (797).jpg", B: "./QP1/question (798).jpg", C: "./QP1/question (799).jpg", D: "./QP1/question (800).jpg", Ans: "D" }
];
var currquestion = 0;
var map = new Map();
var score = 0;

function validate() {
    var marked = document.getElementById("flexSwitchCheckChecked");
  
    const opt = document.getElementsByClassName("form-check-input");
    var flag = true;
    for (var i = 1; i <= 4; i++) {
        if (opt[i].checked) {
            flag = false;
            if (!marked.checked)
                document.getElementById((currquestion + 1).toString()).style.background = "green";
            if (map.has(currquestion)) {
                
                var s = map.get(currquestion);
                if (s == opt[i].value)
                    return;
                else {
                    if (s == qb[currquestion].Ans) {
                        score -= 1;
                        map.set(currquestion, opt[i].value);
                    }
                    if (opt[i].value == qb[currquestion].Ans) {
                        score += 1;
                        map.set(currquestion, opt[i].value);
                    }


                }
            }
            else {
                
                if (l.includes(currquestion)) {
                    l.splice(l.indexOf(currquestion), 1);
                    unattempted -= 1;
                }
                attempted += 1;
                map.set(currquestion, opt[i].value);
                if (opt[i].value == qb[currquestion].Ans) {
                    score++;
                }
            }
        }

    }
    if (flag) {
        if (!l.includes(currquestion)) {
            l.push(currquestion);
            unattempted += 1;
        }
        document.getElementById((currquestion + 1).toString()).style.background = "red";
    }

    return;
}

function clearcheckbox() {
    const opt = document.getElementsByClassName("form-check-input");
    for (var i = 0; i <= 4; i++) {
        if (opt[i].checked)
            opt[i].checked = false;
    }
    document.getElementById("flexSwitchCheckChecked").checked = false;

}

function checkmap() {
    const opt = document.getElementsByClassName("form-check-input");
    if (map.has(currquestion)) {
        var tempans = map.get(currquestion);
        for (var i = 1; i <= 4; i++) {
            if (opt[i].value == tempans) {
                opt[i].checked = true;
                break;
            }
        }
    }
    else
        clearcheckbox();

}

function showans(id) {
    var temp = document.getElementById((currquestion + 1).toString());
    if (temp.style.background != "red" || temp.style.background != "green")
        validate();
    currquestion = Number(id) - 1;
    displayquestion();
    clearcheckbox();
    checkmap();
    updatedetails();

}

function prev() {
    var temp = document.getElementById((currquestion + 1).toString());
    if (temp.style.background != "red" || temp.style.background != "green")
        validate();
    clearcheckbox()
    currquestion -= 1;
    displayquestion(currquestion);
    checkmap();
    updatedetails();

}




function next() {
    var temp = document.getElementById((currquestion + 1).toString());
    if (temp.style.background != "red" || temp.style.background != "green")
        validate();
    currquestion += 1;
    checkmap();
    displayquestion(currquestion);
    updatedetails();



}
function displayquestion(qno) {
    document.getElementById("question").innerHTML = `<p> ${currquestion + 1} </p> <img id="questionimg" src= "${qb[currquestion].Q}" >`;
    document.getElementById("opt1").innerHTML = `<img class="opt" src= "${qb[currquestion].A}" >`;
    document.getElementById("opt2").innerHTML = `<img class="opt" src= "${qb[currquestion].B}" >`;
    document.getElementById("opt3").innerHTML = `<img class="opt" src= "${qb[currquestion].C}" >`;
    document.getElementById("opt4").innerHTML = `<img class="opt" src= "${qb[currquestion].D}" >`;

}

function submit() {

    var min = 179 - Number(document.getElementById("min").innerHTML);
    var sec = 59 - Number(document.getElementById("sec").innerHTML);
    
    var time = "" + min + " : " + sec + "sec";
    
    const jsonString = JSON.stringify(Array.from(map));
    const encodedJson = encodeURIComponent(jsonString);
    location.href = "/pushtestres?attempted=" + attempted + "&unattempted=" + unattempted + "&score=" + score + "&map=" + encodedJson + "&time=" + time;

}



var min = 180;
var sec = 0;
function timer() {
    if (sec == 0) {
        if (min == 0) {
            clearInterval(time);
            submit();
            return;
        }
        document.getElementById("min").innerHTML = `${min - 1}`;
        min -= 1;
        sec = 59;
        document.getElementById("sec").innerHTML = `${sec}`;

    }
    else {
        document.getElementById("sec").innerHTML = `${sec - 1}`;
        sec -= 1;
    }

}
var time = setInterval(timer, 1000);
window.addEventListener('beforeunload', function () {
    localStorage.setItem('myMap', JSON.stringify(Array.from(map.entries())));
    localStorage.setItem("question", currquestion);
    localStorage.setItem("min", min);
    localStorage.setItem("sec", sec);

});


window.addEventListener('load', function () {
    displayquestion(currquestion);

    const mapdata = localStorage.getItem('myMap');
    const questionNumber = Number(localStorage.getItem('question'));
    const minutes = Number(localStorage.getItem('min'));
    const seconds = Number(localStorage.getItem('sec'));
    if (localStorage.getItem("question") !== null) {
        min = minutes;
        sec = seconds;
        const m = JSON.parse(mapdata);
        map = new Map(m);
        displaytime(min, sec);
       
        currquestion = questionNumber;
        localStorage.removeItem("myMap");
        localStorage.removeItem("question");
        localStorage.removeItem("min");
        localStorage.removeItem("sec");
        displayquestion(currquestion);
        checkmap();
    }
    checkmap();
    color();
    updatedetails();
}
);

function displaytime(min, sec) {
    document.getElementById("min").innerHTML = `${min}`;
    document.getElementById("sec").innerHTML = `${sec}`;

}

function color() {
    for (var i = 0; i < 160; i++) {
        if (map.has(i)) {
            document.getElementById((i + 1).toString()).style.background = "green";
            attempted += 1;
            if (map.get(i) == qb[i].Ans)
                score += 1;
        }
        else {
            document.getElementById((i + 1).toString()).style.background = "red";
            l.push(i);
            unattempted += 1;
        }
    }
}