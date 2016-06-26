import test from 'ava';
import parseUzhStudy from '../';

test('Should parse Bachelor', t => t.is(parseUzhStudy('Bachelor Humanmedizin (RVO14)'), 'bachelor'));

test('Should parse BA', t => t.is(parseUzhStudy('BA UZH in Religionswissenschaft'), 'bachelor'));

test('Should parse Master', t => t.is(parseUzhStudy('Master of Theology UZH'), 'master'));

test('Should parse Doktorat as doctor study', t => t.is(parseUzhStudy('INAKTIV: Doktorat Religionswiss. (PVO10)'), 'doctorate'));

test('Should parse MA as master', t => t.is(parseUzhStudy('MA in Antikes Judentum'), 'master'));

test('Should parse Master as master', t => t.is(parseUzhStudy('Master of Theology UZH'), 'master'));

test('Should parse Zusatzstudium Bachelorstufe as Bachelor', t => t.is(parseUzhStudy('Zusatzstudium Bachelorstufe'), 'bachelor'));

test('Should parse Joint Degree', t => t.is(parseUzhStudy('Joint Degree ETH UZH CIS'), 'joint-degree'));

test('Should parse licenciate', t => t.is(parseUzhStudy('Lizentiat Philosophische Fakultät'), 'licenciate'));

test('Should parse BLaw as bachelor', t => t.is(parseUzhStudy('BLaw UZH (RVO13)'), 'bachelor'));

test('Should parse MLaw as master', t => t.is(parseUzhStudy('MLaw UZH (RVO13)'), 'master'));

test('Should parse Vorbereitung Notariatsprüfung as preparation for', t => t.is(parseUzhStudy('Vorbereitung Notariatsprüfung Kanton ZH'), 'notary-exam-preparation'));

test('Should parse Joint Deg. as joint degree', t => t.is(parseUzhStudy('Joint Deg. ETH UZH Comp. Biol. & Bioinf.'), 'joint-degree'));

test('Should parse Nebenfachmobilität Bachelor as bachelor', t => t.is(parseUzhStudy('Nebenfachmobilität Bachelor'), 'bachelor'));

test('Should parse MSc as master', t => t.is(parseUzhStudy('MSc UZH in Wirtschaftsw. (C, PVO13)'), 'master'));

test('Should parse BSc as bachelor', t => t.is(parseUzhStudy('BSc UZH in Informatik (RO08)'), 'bachelor'));

test('Should parse MAS as master', t => t.is(parseUzhStudy('MAS in Secondary and Higher Education'), 'master'));
