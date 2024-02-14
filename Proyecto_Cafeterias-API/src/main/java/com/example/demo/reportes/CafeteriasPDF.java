package com.example.demo.reportes;

import java.awt.Color;
import java.io.IOException;
import java.util.List;

import com.example.demo.models.CafeteriaModel;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import jakarta.servlet.http.HttpServletResponse;

public class CafeteriasPDF {
	
	private List<CafeteriaModel> listaCafeterias;

	public CafeteriasPDF(List<CafeteriaModel> listaCafeterias) {
		super();
		this.listaCafeterias = listaCafeterias;
	}
	
	private void escribirCabeceradelaTabla(PdfPTable tabla) {
		
		PdfPCell celda = new PdfPCell();
		
		celda.setBackgroundColor(Color.orange);
		celda.setPadding(5);
		
		Font fuente = FontFactory.getFont(FontFactory.HELVETICA);
		
		celda.setPhrase(new Phrase("ID", fuente));
		tabla.addCell(celda);
		
		celda.setPhrase(new Phrase("NOMBRE", fuente));
		tabla.addCell(celda);
		
		celda.setPhrase(new Phrase("DIRECCION", fuente));
		tabla.addCell(celda);
	
		celda.setPhrase(new Phrase("DESCRIPCION", fuente));
		tabla.addCell(celda);
		
		celda.setPhrase(new Phrase("CALIFICACION", fuente));
		tabla.addCell(celda);
	}
	
	private void escribirDatosdelaTabla(PdfPTable tabla) {
		for(CafeteriaModel cafeteria: listaCafeterias ) {
			tabla.addCell(String.valueOf(cafeteria.getId()));
			tabla.addCell(cafeteria.getNombre());
			tabla.addCell(cafeteria.getDireccion());
			tabla.addCell(cafeteria.getDescripcion());
			tabla.addCell(String.valueOf(cafeteria.getCalificacionPromedio()));
		}
	}
	
	public void exportarCafeteriasPDF(HttpServletResponse response) throws DocumentException, IOException {
		
		Document documento = new Document(PageSize.A4);
		PdfWriter.getInstance(documento, response.getOutputStream());
		
		documento.open();
		
		Font fuente = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		fuente.setColor(Color.orange);
		fuente.setSize(18);
		
		Paragraph titulo = new Paragraph("Lista de Cafeterias", fuente);
		titulo.setAlignment(Paragraph.ALIGN_CENTER);
		documento.add(titulo);
		
		PdfPTable tabla = new PdfPTable(5);
		tabla.setWidthPercentage(100);
		tabla.setSpacingBefore(15);
		tabla.setWidths(new float[] {1f,2f,2.8f,8f,3.2f});
		tabla.setWidthPercentage(110);
		
		escribirCabeceradelaTabla(tabla);
		escribirDatosdelaTabla(tabla);
		
		documento.add(tabla);
		documento.close();
		
	}
}
